import React from "react";

const Scroll = (props) => {
    return (
        <div 
            style={{ 
                overflowY:'scroll', 
                border:'1px solid black', 
                height:'70vh',
                padding:'20px 0',
                boxShadow:'0 0 10px black inset',
                
                background:
                `radial-gradient(black 15%, transparent 16%) 0 0,
                radial-gradient(black 15%, transparent 16%) 8px 8px,
                radial-gradient(rgba(255,255,255,.1) 15%, transparent 20%) 0 1px,
                radial-gradient(rgba(255,255,255,.1) 15%, transparent 20%) 8px 9px`,
                backgroundColor:'rgba(236, 236, 236, 0.24)',
                backgroundSize:'16px 16px'
                
            }}>
            {props.children}
        </div>
    );
};

export default Scroll;