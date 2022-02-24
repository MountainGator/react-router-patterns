const DogOverview = ({info}) => {
    return (
        <div className="overview">
            <h3>{info.name}</h3>
            <img src={info.src} alt={info.name} />
        </div>
    )
}

export default DogOverview;