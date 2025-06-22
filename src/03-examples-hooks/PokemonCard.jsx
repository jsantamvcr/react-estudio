
export const PokemonCard = ({ id, name, sprites = [] }) => {
    return (
        <section style={{ height: '100%' }}>
            <h2 className="text-capitalize">
                <span className="badge bg-primary me-2">{id}</span>
                <span className={`badge bg-danger`}>  {name}</span>
            </h2>

            {/*images*/}
            <div className="d-flex justify-content-center align-items-center" style={{ height: '100%' }}>
                {
                    sprites.map((sprite, index) => (
                        <img
                            key={index}
                            src={sprite}
                            alt={`${name} sprite ${index + 1}`}
                            className="img-fluid rounded m-2"
                            style={{ maxWidth: '300px', maxHeight: '300px' }}
                        />
                    ))
                }
            </div>
        </section>
    );
};
