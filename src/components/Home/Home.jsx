import React from 'react'
import './home.css'
import video from '../../Assets/video.mp4'


const Home = () => {
  return (
    <section className='home'>
      <div className='overlay'></div>
      <video src={video} muted autoPlay loop typeof='video/mp4'></video>

      <div className="homeContent container" >
        <div className="textDiv">

          <span className="smallText">
            Deffusion Model
          </span>

          <h1 className="homeTitle">
            Discover image generating system
          </h1>
          
        </div>
      </div>
    </section>
  )
}

export default Home
