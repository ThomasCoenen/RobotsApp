import React from 'react';

const Scroll = (props) => {
    return (
        //just add inline styles to this now for our Scrollable Comp
        //Use Double Curly brackets for inline styles.
        //1st curly braces=JS Expression. 2nd Curly Braces=Returns Object
        <div style={{ overflowY: 'scroll', border: '3px solid black', height: '800px'}}>  
            {props.children}   
        </div>
    )
}

export default Scroll;
