import React from 'react';
import { DesignResume } from './Design-resume';
import data from './dataSpecialize';



export default function Specialize() {
    const dataSpecialization = data.map(specialize => {
        return <DesignResume
                key = {specialize.id}
                title = {specialize.title}
                text = {specialize.text}
                />
    })
    return (
        <div className="specialize-container">
            {dataSpecialization}
        </div>
    )
}