import React from 'react'
import '../sass/layout/exhibitions.sass'
import Tabienko from '../images/tabienko.jpeg'
const Exhibitions = () => {
    return (
        <section className='exhibitions-container' id='exhibitions'>
            <div className='grid-col exhibition__card'>
                <div className='exhibition__header'>
                    <h3 className='exhibition__subtitle'>30 JAN 2020 - 18 MAY 2020</h3>
                    <h2 className='exhibition__title'>TABIENKO</h2>
                    <h3 className='exhibition__subtitle'>BY TOSHINORI MORI</h3>
                </div>
                <hr className='exhibition__line'/>
                <div className='exhibition__body'>
                    <h2 className='exhibition__subheadline'>Our exhibition</h2>
                    <p className='exhibition__description'>
                        Tabienko is a series of illustrations which, literally means 'cat goes on trip'. 
                        The series features a black cat who travels with his friends through various places, like city streets or country lanes.
                    </p>
                    <p className='exhibition__description'>
                        Toshinori is also fascinated by the seasons, 
                        which are constantly changing Japanese landscape - you can notice this on each ilustration
                    </p>
                </div>
                <div className='exhibition__footer'>
                    <div className='exhibition__actions'>
                        <table className='exhibition__table table'>
                            <tr className='table__row'>
                                <td  className='table__cell cell__title'>Toshinori Mori</td>
                                <td  className='table__cell cell__title'>1970, Kagawa</td>
                            </tr>
                            <tr className='table__row'>
                                <td colSpan='2' className='table__cell'>Freelance Designer</td>
                            </tr>
                            <tr>
                                <td colSpan='2'>Actual Exhibition</td>   
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
            <div className='grid-col exhibition__gallery'>
                <img className='exhibition__photo' alt='Two cats are sittin in fron of shop, it is snowing'src={Tabienko}/>
                <div className='photo__description'>
                    TABIENKO <br /> "Snow sake brewery"
                </div>
                <div className='photo__slider photo__slider--left'>&lt;</div>
                <div className='photo__slider photo__slider--right'>&gt;</div>
            </div>
        </section>
    )
}

export default Exhibitions
