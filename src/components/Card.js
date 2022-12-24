import React from 'react';

const Card = ( { id, name, email } ) => {
    return (
        <div 
            className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5' 
            style={{
                background: 'rgba(20, 0, 0, 0.7)',
                width:'min(300px)'
            }}
        >
            <img 
                src={`https://robohash.org/${id}?200x200.png`} 
                alt='robopic' 
                style={{boxShadow:'0 0 10px black inset', border:'1px solid black', background:'rgba(0,0,0,0.2)'}} 
            />
            <div style={{color:'white', textShadow:'0 0 18px black'}}>
                <h2>{name.slice(0,22)}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
}

export default Card;