import React from 'react';

const Card = ( { id, name, email } ) => {
    return (
        <div 
            className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5' 
            style={{
                background: 'rgba(228, 228, 228, 0.31)',
                width:'min(300px)'
            }}
        >
            <img src={`https://robohash.org/${id}?200x200.png`} alt='robopic' />
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
}

export default Card;