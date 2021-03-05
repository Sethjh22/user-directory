import React from 'react'
const Buttons = (props) =>{
        return(
            <section>
                <button className="mainButtons" onClick={props.decrease}>Previous</button>
                <button className="secondaryButtons">Edit</button>
                <button className="secondaryButtons">Delete</button>
                <button className="secondaryButtons">New</button>
                <button className="mainButtons" onClick={props.increase}>Next</button>
            </section>
        )
    
}
export default Buttons