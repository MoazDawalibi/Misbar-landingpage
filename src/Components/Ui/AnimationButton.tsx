const AnimationButton = ({text,icon,link,withAnimation= true}:AnimationButtonProps) => {
  
  return (
    <div className='button'>
        <Link to={link}><p>{text}</p></Link>
        {
          withAnimation ?  <span>{icon}</span>  : <span style={{display:"none"}}>{icon}</span> 
        }
    </div>
  )
}

export default AnimationButton