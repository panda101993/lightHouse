import React from 'react'

function LandingTopicName(props) { 
    const { HeaderName , subHeaderName} =props 
    return (
        <div>
                 <div class="container-fluid">
            <div class="left-contant my-4">
               <h3> {HeaderName} </h3> 
  
            </div>    
            </div>  
        </div>
    )
}

export default LandingTopicName
