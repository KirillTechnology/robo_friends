import React from "react";

const SearchBox = ({searchChange}) => {
    return (
        <div className='pa2'>
            <input
                className='pa3 ba' 
                type='search' 
                placeholder='search robots'
                size='40'
                onChange={searchChange}
                style = {{
                    background:'rgba(243, 226, 226, 1)',
                    borderRadius:'50%',
                    textAlign:'center',
                    marginBottom:'20px',
                    boxShadow:'0px 8px 4px black' 
                }}
            />
        </div>
    );
}

export default SearchBox;