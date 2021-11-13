import React from 'react'
import introImg from './images/illustration-working.svg'

function Intro() {
    return(
        <section className='intro-section'>
            <img className='imgintro' src={introImg} alt=""/>
            <div className='intro-text'>
                <h1>More than just shorter links</h1>
                <p>Build your brand’s recognition and get detailed insights on how your links are performing.</p>
                <button className='btn-intro'>Get Started</button>
            </div>
        </section>
    )
}

export default Intro