import React from 'react';

export const PokemonCard = ({ id, name, sprites = [] }) => {

    return (<>
        <div className="card mb-3">
            <div className="row g-0">
                <div className="col-md-4">
                    {
                        sprites.map((sprite, i) => {
                            return <img key={i} src={sprite}
                                        className="img-fluid rounded-start mb-2"
                                        alt={`Pokemon sprite ${name}`}/>
                        })
                    }
                </div>


                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{id} {name}</h5>
                    </div>
                </div>
            </div>
        </div>

    </>);
};
