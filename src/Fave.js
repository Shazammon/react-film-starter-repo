import { useState } from 'react'

function Fave(props) { 
//     const [isFave, setIsFave] = useState(false)

    // /src/Fave.js

    const handleClick = e => {
        e.stopPropagation()
        console.log('Handling Fave click!')
    
        // Add this line. You'll call the function passed through props
        props.onFaveToggle()
    
        // Delete the `setIsFaves` line. You no longer track state here
        // setIsFave(!isFave)
    }


    // handleClick = e => {
    //     e.stopPropagation()
    //     console.log('handling fave click')
    //     this.setState(prevState => {
    //         return {
    //             // isFave: prevState.isFave ? false : true
    //             isFave: !prevState.isFave
    //         }
    //     })
    // }

        const action = props.isFave ? 'remove_from_queue' : 'add_to_queue'
        return (
            <div className={`film-row-fave ${action}`}
                  onClick={handleClick}  
                    >
              <p className="material-icons">add_to_queue</p>
            </div>
        )

}
export default Fave;