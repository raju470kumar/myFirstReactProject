import React from 'react'

export default function FunComponent(f){
    const alt=()=>{
        alert("This is  Function Components");
    } 
    return(
        <div> 
            <button class="btn-info" onClick={alt}>{f.text}</button>
        </div>
    )
    


}