import React from 'react';
// import App from '../containers/App'
import Card from './Card'

const CardList = ({ robots }) => {
    //just add within the Return brackets since its JS
    return (
        <div>
           {
            robots.map((user, i) => {
            return (
                <Card  //use BRACKET if returning on multiple lines
                    key={i} 
                    id={robots[i].id} 
                    name={robots[i].name} 
                    email={robots[i].email}
                />
                );  
            })
           }
        </div> 
    )
}

export default CardList;