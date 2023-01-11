import React, { useState } from 'react';
import photo1 from './photo/photo1.png';
import photo2 from './photo/photo2.png';
import photo3 from './photo/photo3.png';
import photo4 from './photo/photo4.png';

const Team = () => {
  const [photo, setPhoto] = useState<any>();

  return (
    <>
      <div id="team">
        <h3 className="title-tablet">our team</h3>
        <div className="team">
          <div className="team__title">
            <h3>our team</h3>
          </div>
          <div className="team__photo">
            {photo === undefined ? <div className="block"></div> : <img src={photo} alt="people" />}
          </div>
          <div className="team__people">
            <div className="team__people-card" onMouseEnter={() => setPhoto(photo1)}>
              <p>full stack developer | 3 years experience</p>
            </div>
            <div className="team__people-card" onMouseEnter={() => setPhoto(photo2)}>
              <p>mobile developer | 3 years experience</p>
            </div>
            <div className="team__people-card" onMouseEnter={() => setPhoto(photo3)}>
              <p>QA Engineer | 3 years experience</p>
            </div>
            <div className="team__people-card" onMouseEnter={() => setPhoto(photo4)}>
              <p>QA Engineer | 3 years experience</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Team;
