import React from 'react'
import '../sass/layout/hero.sass'
import '../sass/components/buttons.sass'
import Image from '../images/hero-background.svg'
const Hero = () => {
    return (
        <div className='hero' id='hero'>
            <div className='hero__container'>
                <div className='hero__headline'>
                    <h1  className='hero__title'>MODERN ART <br />WITH <br />TRADITIONAL <br />TASTE</h1>
                    <img className='hero__photo'src={Image} alt='woman is painting' />
                </div>
                <div className='hero__buttons'>
                    <button className='btn btn--secondary hero__btn'>BOOK A ROOM</button>
                    <button className='btn btn--primary hero__btn'>SEE OUR EXHIBITIONS</button>
                </div>
            </div>
        </div>
    )
}

export default Hero
