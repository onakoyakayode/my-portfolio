import React from 'react';
import Twitter from "../icons/twitter.svg"
import linkedin from "../icons/linkedins.svg"


export default function About(props) {

    const [getResponse, setGetResponse] = React.useState(false)

    function getFeedback() {
        setGetResponse(prevResponse => !prevResponse)
    }

    console.log()

     return (
        <div className='section about' id="about">
            <h2 className='about-title'>What my clients has to say about me</h2>
            <div className='about-client'>
                <img src={props.Image} onClick={getFeedback} className="client 1" alt="client" />
                <div className='client-response'>
                    <div className='client-details'>
                        <div className="client-info">
                            {getResponse && <img src={props.Image} className="client-picture" alt="client" />}
                            <div className="client-name-position">
                                <h4 className='client-name'>{props.Name}</h4>
                                <p className='client-position'>{props.Role}</p>
                            </div>
                        </div>
                        <div className='client-social'>
                            <img src={Twitter} className="twitter" alt="twitter" />
                            <img src={linkedin} className="linkedin" alt="linkedins" />
                        </div>
                    </div>
                    <p className='client-description'>
                        {props.Response}
                    </p>
                </div>
                <img src={props.Image} className="client 2" alt="client" />
            </div>
        </div>
    )
}