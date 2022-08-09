function Movie(props) {
    const {
        Title: title,
        Year: year,
        imdbID: id,
        Type: type,
        Poster: poster,
    } = props;

    return (
        <div className='movie card' id={id}>
            <div className='card-image waves-effect waves-block waves-light'>
                {
                    (poster === 'N/A' ? (
                        <img className='activator' src={`https://dummyimage.com/468x350&text=${title}`} alt={title} />
                    ) : (
                        <img className='activator' src={poster} alt={title} />
                    ))
                }
            </div>
            <div className='card-content'>
                <span className='card-title activator grey-text text-darken-4'>
                    {title}
                </span>
                <p>
                    {year} <span>{type}</span>
                </p>
            </div>
        </div>
    );
}

export { Movie };
