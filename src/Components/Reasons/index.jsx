import React from 'react';
import './reasons.css';
import Cr7 from '../../assets/fotoCr7.jpg';
import Jas from '../../assets/fotoJas.jpg';
import Gray from '../../assets/fotoGray.jpg';
import Adm from '../../assets/fotoAdm.jpg';
import nb from '../../assets/nb.png';
import adidas from '../../assets/adidas.png';
import nike from '../../assets/nike.png';
import tick from '../../assets/tick.png';


export default function Reasons(){
  return(
    <div className="Reasons" id="reasons">
        <div className="left-r">
            <img src={Cr7} alt="" />
            <img src={Jas} alt="" />
            <img src={Gray} alt="" />
            <img src={Adm} alt="" />
        </div>
        <div className="right-r">
            <span>some reasons</span>
            <div>
                <sapn className='stroke-text'>Why </sapn>
                <sapn> Choose us?</sapn>
            </div>
            <div className='details-r'>
                <div><img src={tick} alt="" />
                    <span>OVER 140+ EXPORT COACHS</span>
                </div>
                <div><img src={tick} alt="" />
                    <span>TRAIN SMARTER AND FASTER THAN BEFORE</span>
                </div>
                <div><img src={tick} alt="" />
                    <span>1 FREE PROGRAM FOR NEW MEMBER</span>
                </div>
                <div><img src={tick} alt="" />
                    <span>RELIABLE PARTNERS</span>
                </div>
            </div>
            <span
                style={{
                    color: 'var(--gray)',
                    fotnWeight: 'normal',
                }}>
                    OUR PARTNERS
            </span>
            <div className="partners">
                <img src={nb} alt="" />
                <img src={adidas} alt="" />
                <img src={nike} alt="" />
            </div>
        </div>
    </div>
  );
}

