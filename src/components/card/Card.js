import { useState } from 'react'
import React from 'react'

import "./Card.css"


const Card = (props) => {
  const  {name, img, options} = props.categories;
    const [isActive, setIsActive] = useState("false")
    
    const handleClick = () => {
        setIsActive(!isActive)
    };
    return (
            <div className="container-2" onClick={handleClick}>        

                            {isActive ?
                            (<div >
                                <img className='image' src={img} alt="" />
                                <h4>{name}</h4>
                            
                            </div>) :
                            (<div>
                                <ul >
                                {options.map((item, index) => {
                                return <li key={index}>{item}</li>;
                                })}
                            </ul>
                            </div>)}
                    

                
            </div>

      )
}

export default Card