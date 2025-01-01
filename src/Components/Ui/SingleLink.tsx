
const SingleLink = ({name, href}:FooterLinksProps) => {
  return (
    <div className='SingleLink'>
        <Link to={href} className="link">
          <div><RiArrowRightDoubleLine/></div>
          <h5>{name}</h5>
        </Link>
    </div>
  )
}

export default SingleLink