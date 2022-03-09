import React from 'react';
import './team.scss';
import {Link} from "@mui/material";

import Alban from '../../assets/images/Alban.webp';
import Elodie from '../../assets/images/Elodie.webp';
import Maxime from '../../assets/images/Maxime.webp';
import Karine from '../../assets/images/Karine.webp';
import Yann from '../../assets/images/Yann.webp';

import {TiSocialFacebookCircular, TiSocialLinkedinCircular, TiSocialTwitterCircular} from "react-icons/ti";

const Team = () => {
    return (
      <div className='team'>
          <h2 className='team__title'>L'equipe Moto'Rando</h2>

          <div className='team__card'>

            <div className='team__card-id'>
              <img width='200px' height='200px' src={Karine} alt={Karine}/>
              <div className='card__content'>
                <h3>Karine</h3>
                <h5>Product Owner</h5>
                <p>Developpeur Back</p>
                <div className='id-social'>
                  <Link to="#"><TiSocialFacebookCircular/></Link>
                  <Link to="#"><TiSocialLinkedinCircular/></Link>
                  <Link to="#"><TiSocialTwitterCircular/></Link>
                </div>
              </div>
            </div>

            <div className='team__card-id'>
              <img width='200px' height='200px' src={Alban} alt={Alban} />
              <div className='card__content'>
                <h3>Alban</h3>
                <h5>Lead Dev Front</h5>
                <p>Developpeur Front</p>
                <div className='id-social'>
                  <Link to="#"><TiSocialFacebookCircular/></Link>
                  <Link to="#"><TiSocialLinkedinCircular/></Link>
                  <Link to="#"><TiSocialTwitterCircular/></Link>
                </div>
              </div>
            </div>

            <div className='team__card-id'>
              <img width='200px' height='200px' src={Maxime} alt={Maxime} />
              <div className='card__content'>
                <h3>Maxime</h3>
                <h5>Lead Dev Back</h5>
                <p>Developpeur Back</p>
                <div className='id-social'>
                  <Link to="#"><TiSocialFacebookCircular/></Link>
                  <Link to="#"><TiSocialLinkedinCircular/></Link>
                  <Link to="#"><TiSocialTwitterCircular/></Link>
                </div>
              </div>
            </div>

            <div className='team__card-id'>
              <img width='200px' height='200px' src={Elodie} alt={Elodie} />
              <div className='card__content'>
                <h3>Elodie</h3>
                <h5>Scrum Master</h5>
                <p>Developpeur Front</p>
                <div className='id-social'>
                  <Link to="#"><TiSocialFacebookCircular/></Link>
                  <Link to="#"><TiSocialLinkedinCircular/></Link>
                  <Link to="#"><TiSocialTwitterCircular/></Link>
                </div>
              </div>
            </div>

            <div className='team__card-id'>
              <img width='200px' height='200px' src={Yann} alt={Yann} />
              <div className='card__content'>
                <h3>Yann</h3>
                <h5>Référent Git/Github</h5>
                <p>Developpeur Back</p>
                <div className='id-social'>
                  <Link to="#"><TiSocialFacebookCircular/></Link>
                  <Link to="#"><TiSocialLinkedinCircular/></Link>
                  <Link to="#"><TiSocialTwitterCircular/></Link>
                </div>
              </div>
            </div>

          </div>
      </div>
    )
}

export default React.memo(Team);
