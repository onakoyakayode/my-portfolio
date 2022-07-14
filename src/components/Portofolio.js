import React from 'react';
import Work from './Work';
import WorkData from '../Work-data';

export default function Portfolio() {

    const work = WorkData.work.map(data => {
        return (
            <Work 
                key={data.id}
                img = {data.image}
                title = {data.title}
                work={data.progress}
                openSlot = {data.openSlot}
            />
        )
    })

    

    return (
        <div id='portfolio'>
            <h1 className='portfolio-title'>Portfolio</h1>
            <section className="portfolio">
                {work}
            </section>
        </div>
        
    )
}