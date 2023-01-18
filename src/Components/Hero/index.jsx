import React from 'react';
import './hero.css';
import Header from '../Header';
import FotoRoc from '../../assets/fotoRoc.png';
import Hero_image_back from '../../assets/hero_image_back.png';
import Heart from '../../assets/heart.png';
import Calories from '../../assets/calories.png';
import NumberCounter from 'number-counter'; // npm install number-counter
import { motion } from 'framer-motion'; // npm install framer-motion
import { toast } from 'react-toastify';


export default function Hero(){

    const transition = {type: 'string', duration : 3}
    const mobile = window.innerWidth<=768 ? true: false;

    
function teste(){
    toast.warn('Oops! is still building...');
}


  return(
    <div className="hero" id='home'>
        
        <div className="blur hero-blur"></div>

        <div className="left-h">
            <Header />
    {/* The best ad */}
            <div className="the-best-ad">
                <motion.div
                  initial={{left: mobile? '165px': '238px'}}
                  whileInView={{left: '8px'}}
                  transition={{...transition, type: 'tween'}}
                >
                   
                </motion.div>
                <span>the best fitness club in the town</span>
            </div>
    {/* Hero Heading */}
        <div className='hero-text'>
            <div>
                <span className='stroke-text'>Shape </span>
                <span> Your</span>
            </div>
            <div>
                <span>Ideal body</span>
            </div>
            <div>
                <span>
                    In here we will help you to shape and build your
                     ideal body and live up your life to fullest
                </span>
            </div>
        </div>
    {/* Figures */}
        <div className="figures">
            <div>
                <span><NumberCounter end={140} start={100} delay='4' preFix='+' /></span>
                <span>export coaches</span>
            </div>
            <div>
            <span><NumberCounter end={978} start={800} delay='4' preFix='+' /></span>
                <span>members joined</span>
            </div>
            <div>
            <span><NumberCounter end={50} start={0} delay='4' preFix='+' /></span>
                <span>fitness programs</span>
            </div>
        </div>
    {/* Hero buttons  */}
    <div className="hero-buttons">
        <button className="btn" onClick={() => teste()}>Get Started</button>
        <button className="btn">Learn More</button>
    </div>
        </div>
        <div className="right-h">
           <button className="btn">Join Now</button>

           <motion.div 
            initial={{ right: '-1rem'}}
            whileInView={{ right: '4rem'}}
            transition={transition}
            className="heart-rate">
            <img src={Heart} alt="" />
            <span>Heart Rate</span>
            <span>116 bpm</span>
           </motion.div>
    {/* Hero images */}
    <img src={FotoRoc} alt="" className='foto-roc'/>
    <motion.img
          initial={{ right: '11rem'}}
          whileInView={{ right: '20rem'}}
          transition={transition}
        src={Hero_image_back} alt="" className='hero-image-back' />
    <motion.div 
        initial={{ right: '37rem'}}
        whileInView={{ right: '28rem'}}
        transition={transition}
        className="calories">
        <img src={Calories} alt="" />
        <div>
            <span>Calories Burned</span>
            <span>220 kcal</span>
        </div>
    </motion.div>
        </div>
    </div>
  )
};

