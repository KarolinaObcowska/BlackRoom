import React from 'react'
import '../sass/layout/aboutus.sass'
import Image1 from '../images/image1.jpeg'
import Image2 from '../images/image2.jpeg'
import Image3 from '../images/image3.jpeg'
import Image4 from '../images/image4.jpeg'

const AboutUs = () => {
    return (
        <section className='container-about' id='who'>
                <div className='images-container'>
                    <img src={Image1} alt='Tabienko art'className='image image--first'/>
                    <img src={Image3} alt='Tabienko art'className='image image--second'/>
                    <img src={Image4} alt='Tabienko art'className='image image--first'/>
                    <img src={Image2} alt='Tabienko art'className='image image--second'/>
                </div>
                <div className='description-container'>
                    <h2 className='description-container__title'>Who we are?</h2>
                    <p className='description-container__description'>Lorem ipsum dolor sit amet, consectetur adipiscing <span className='red-letter'>elit</span>. Sed suscipit, enim id consequat molestie, neque tellus condimentum felis, ut maximus libero <span className='red-letter'>metus</span> ut quam.  </p>
                    <p className='description-container__description'>Sed rutrum hendrerit <span className='red-letter'>lorem</span> mollis feugiat. Pellentesque egestas pharetra arcu cursus ultricies. <span className='red-letter'>Suspendisse</span> vestibulum, mauris nec mollis elementum, neque enim tincidunt enim, eget condimentum tellus <span className='red-letter'>lorem</span> sed orci. </p>
                </div>
        </section>
    )
}

export default AboutUs
