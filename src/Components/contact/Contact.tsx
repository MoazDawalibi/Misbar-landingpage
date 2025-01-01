import { THeaderPage} from '../../type/app'
import HeaderLink from '../Ui/HeaderLink'
import Spinner from '../Utils/Loading/Spinner'
import ContactOneSection from './ContactOneSection'

const Contact = ({isHaveHeader = false, data, isLoading}:THeaderPage) => {

  const contactData = data?.Contact;

  return (
    <div className='contact'>
      <picture>
        <source className="contact_image" srcSet="/App/WhiteBgRes.png" media="(max-width: 600px)" />
        <img className="contact_image" src="/App/WhiteBg.png" alt="MDN" />
      </picture>
      <div className="contact_container">
        {isHaveHeader ? <HeaderLink text='Contact' /> : ""}
        {
          isLoading ? <Spinner /> :
          contactData?.map((item: any) => {
            const subTitleWords = item?.sub_title.split(' ');
            const text = subTitleWords[0];
            const subText = subTitleWords.slice(1).join(' ');

            return (
              <ContactOneSection
                key={item?.id} // Assuming there's a unique id for each item
                title={item?.title}
                text={text}
                subText={subText}
                isHaveButton={item?.is_have_button}
                rowRevers={item?.direction}
                bottomText={item?.description}
                image={item?.image}
              />
            );
          })
        }
      </div>
    </div>
  )
}

export default Contact;
