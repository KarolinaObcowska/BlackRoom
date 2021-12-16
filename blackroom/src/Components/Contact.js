import React from 'react'
import '../sass/layout/contact.sass'
import LocationPin from '../images/location_pin.svg'
const Contact = () => {
    return (
        <section className='container' id='contact'>
            <div className='grid-col address-card'>
                <img className='address-card__photo' src={LocationPin} alt=' location pin' />
                <div className='address-card-wrapper'>
                    <h2 className='addres-card__title'>MADRID</h2>
                    <p className='addres-description'>Oxford St, 35, 190023 MADRID, Spain</p>
                    <h2 className='addres-card__title'>CONTACT US</h2>
                    <p className='addres-card__description'>+97 888 999 222</p>
                    <h2 className='addres-card__title'>Find Us Faster <br /> With Google Maps</h2>
                    <button className='btn btn--secondary addres-card__btn'>GO TO GOOGLE MAPS</button>
                </div>
            </div>
            <div className='grid-col contact-form'>
                <form className='form'>
                    <h2 className='form__title'>GET IN TOUCH</h2>
                    <p className='form__description'>Write your message here and uout team will contact <br /> you very soon</p>
                    <label className='form__label'>
                        <input className='form__input' placeholder='Your Name'/>
                    </label>
                    <label className='form__label'>
                        <input className='form__input' placeholder='Your Surname'/>
                    </label>
                    <label className='form__label'>
                        <input className='form__input' placeholder='Your E-mail'/>
                    </label>
                    <label className='form__label'>
                        <textarea className='form__textarea'placeholder='Write here your message'></textarea>
                    </label>
                    <button className='btn btn--secondary form__btn'>SEND</button>
                </form>
            </div>
        </section>
    )
}

export default Contact
