import React from "react";
import './SearchBox.css';

const SearchBox = ({searchChange}) => {
    return (
        <div className='pa2'>
            <input
                className='pa3 ba' 
                type='search' 
                placeholder='search robots'
                // size='20'
                onChange={searchChange}
                style = {{
                    background:'rgba(243, 226, 226, 1)',
                    borderRadius:'50%',
                    textAlign:'center',
                    marginBottom:'20px',
                    boxShadow:'0px 4px 10px black',
                    fontWeight:'bold',
                    boxSizing:'border-box',
                    width:'200px',
                    transition:'all 1s'
                }}
            />
        </div>
    );
}

export default SearchBox;