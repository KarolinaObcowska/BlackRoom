import React from 'react'
import '../sass/layout/rooms.sass'

const Rooms = () => {
    return (
        <div className='rooms-container' id='rooms'>
            <div className='cards'>
                <h2 className='cards__title'>Our rooms</h2>
                <div className='card card--first'>
                    <div className='card--flip'>
                        <h2>Artistic design</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt metus lectus, vitae condimentum sem ornare condimentum. Etiam quis dolor eros. In vestibulum non metus id condimentum. Suspendisse tincidunt lacus risus, eget pellentesque eros luctus ac. </p>
                    </div>
                </div>
                <div className='card card--second'>
                    <div className='card--flip'>
                        <h2>Traditional Japanese</h2>
                        <p>Vestibulum non tellus non est aliquam tincidunt vel eget enim. Ut id sodales elit. Pellentesque at nisl non leo posuere facilisis quis finibus odio. Nunc iaculis metus eget ante consectetur sodales. Integer ultrices turpis laoreet malesuada vehicula. Curabitur a ligula in lectus tristique vulputate tristique eget nisi.</p>
                    </div>
                </div>
                <div className='card card--third'>
                    <div className='card--flip'>
                        <h2>Designed by Takahashi Hiroaki</h2>
                        <p>Sed suscipit, enim id consequat molestie, neque tellus condimentum felis, ut maximus libero. Nunc iaculis metus eget ante consectetur sodales. Integer ultrices turpis laoreet malesuada vehicula. Curabitur a ligula in lectus tristique vulputate tristique eget nisi. </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Rooms
