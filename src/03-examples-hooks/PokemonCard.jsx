import { useLayoutEffect, useRef } from 'react';

export const PokemonCard = ({ id, name, sprites = [] }) => {

    const h2Ref = useRef(null);

    useLayoutEffect(() => {
        const { height,width } = h2Ref.current.getBoundingClientRect();
        console.log('useLayoutEffect', { height, width });
    }, [name]);

    return (
        <section style={{ height: '200', display: 'flex', flexDirection: 'row' }}>
            <h2
                ref={h2Ref}
                className="text-capitalize">
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
