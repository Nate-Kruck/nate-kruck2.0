
function Item(props)
{
    
    return (
        <>
        <div className='carousel-wrapper'>
        <div className="carousel-project-grid">
            <h2>{props.item.name}</h2>
            <img className="projectImage" src={props.item.image} alt='project'></img>
        
        <div className='button-div'>
            <a href={props.item.url} target="blank">
            <button className="website-button">
                Website
            </button>
            </a>
        </div>
        {/* <div className="project-description">
        <p>{props.item.description}</p>
        </div> */}
        </div>
        </div>
        </>
    )
}

export default Item;