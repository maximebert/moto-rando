import React from 'react';
import './team.scss';
import {Link} from "@mui/material";
import profilPicture from '../../assets/images/avatar.png';
import {TiSocialFacebookCircular, TiSocialLinkedinCircular, TiSocialTwitterCircular} from "react-icons/ti";

const Team = () => {
    return (
      <div className='team'>
          <h2 className='team__title'>L'equipe Moto'Rando</h2>

          <div className='team__card'>

            <div className='team__card-id'>
              <img width='200px' height='200px' src={profilPicture} />
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
              <img width='200px' height='200px' src={profilPicture} />
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
              <img width='200px' height='200px' src={profilPicture} />
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
              <img width='200px' height='200px' src={profilPicture} />
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
              <img width='200px' height='200px' src={profilPicture} />
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
