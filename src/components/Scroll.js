import React from "react";

const Scroll = (props) => {
    return (
        <div 
            style={{ 
                overflowY:'scroll', 
                border:'1px solid black', 
                height:'70vh',
                padding:'20px 0',
                boxShadow:'0 0 10px black inset'
            }}>
            {props.children}
        </div>
    );
};

export default Scroll;