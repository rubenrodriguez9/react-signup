import React from 'react'

 const Span = ({
     onClick,
     value, 
     className, 
     id, 
     disabledClass,
     disable,
    }) => {

        let spanDisabledDeleteButton = disable ? disabledClass : "";
        let spanOnClick

        if(!onClick) {
            spanOnClick = () => {}
        } else {
            spanOnClick = onClick
        }
    return (
        
        <span 
        onClick={() => spanOnClick(id)} 
        className={`${className} ${spanDisabledDeleteButton}`} 
        >
            {value}
        </span>
    )
}

export default Span;