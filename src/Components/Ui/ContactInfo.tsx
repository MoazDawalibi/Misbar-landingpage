import MediaButton from './MediaButton';

const ContactInfo = ({ title,info}:ContactInfoProps) => {
    const {t} = useTranslation();
  return (
      <div className='single_contact_info'>
          <div>
              <h2>{t(title)}</h2>
              <p>{info}</p>
          </div>
      </div>
  )
}

export default ContactInfo
