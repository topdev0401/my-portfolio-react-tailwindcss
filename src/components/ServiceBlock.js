import React from 'react'

function ServiceBlock(props) {
    return (
        <div className="relative">
        <div className="bg-card"></div>
        <div className="relative z-12 bg-white p-12 rounded-md shadow-md">
        <ion-icon name={props.icon} class="text-5xl text-cyan-500"> </ion-icon>  
        <h3 className="font-bold text-2xl mt-3 font-mono"> {props.title}</h3>
        <p className="mt-4 font-sans">{props.description} </p>
        </div>
        </div>
    )
}

export default ServiceBlock
