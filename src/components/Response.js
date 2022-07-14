import React from "react"
import About from "./About"
import feedback from "./feedback"




export default function Response() {
    

    const clientResponse = feedback.map(response =>{
        return <About 
            id = {response.id}
            Image = {response.clientImage}
            Name = {response.clientName}
            Role = {response.clientRole}
            Response = {response.clientResponse}
        />
    })

    return (
        <div>
            {clientResponse}
        </div>
    )
}