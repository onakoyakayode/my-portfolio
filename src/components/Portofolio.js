import React from 'react';
import Work from './Work';
import WorkData from '../Work-data';

export default function Portfolio() {

    function reveal() {
        var reveals = document.querySelectorAll(".reveal");
      
        for (var i = 0; i < reveals.length; i++) {
          var windowHeight = window.innerHeight;
          var elementTop = reveals[i].getBoundingClientRect().top;
          var elementVisible = 150;
      
          if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
          } else {
            reveals[i].classList.remove("active");
          }
        }
    }
      
    window.addEventListener("scroll", reveal);

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
        <div id='portfolio' className="reveal">
            <h1 className='portfolio-title'>Portfolio</h1>
            <section className="portfolio">
                {work}
            </section>
        </div>
        
    )
}