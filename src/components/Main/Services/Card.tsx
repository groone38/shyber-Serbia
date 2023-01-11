import React, { useCallback, useEffect, useRef, useState } from 'react';
import rectangle from '../../../images/Rectangle.png';
import ReactIcon from './icon/ReactIcon';
import GoIcon from './icon/GoIcon';
import PhpIcon from './icon/PhpIcon';
import KotlinIcon from './icon/KotlinIcon';
import vector from './pic/Vector.png';
import Frame from './pic/Frame.png';

interface CardProps {
  title: string;
}

const Card = ({ title }: CardProps) => {
  const [imgPos, setImgPos] = useState({ x: -500 });
  const ref = useRef(null);
  // const handlerMoveMouse = useCallback((e: any) => {
  //   console.log(e);
  //   const rect = ref.current.getBoundingClientRect();
  //   console.log(rect);

  //   setImgPos({ x: e.x - 1014 });

  //   // if(rect.x >= 495 && rect.x <= 1000) {
  //   // }
  // }, []);

  // useEffect(() => {
  //   const _ref: any = ref.current;
  //   _ref.addEventListener('mousemove', handlerMoveMouse);
  //   return () => {
  //     _ref.removeEventListener('mousemove', handlerMoveMouse);
  //   };
  // }, [handlerMoveMouse]);

  return (
    <div className="card">
      <div className="card__title">
        <p>{title}</p>
        <div>
          <ReactIcon />
          <GoIcon />
          <PhpIcon />
          <KotlinIcon />
        </div>
      </div>
      <div className="card__text">
        <p>
          We create scalable solutions for high loads for different types of services and
          industries. We implement ERP systems designed for high loads. Ready to implement
          Middleware of different scale: from one service and more.
        </p>
      </div>
      <div className="card__img">
        <img src={rectangle} alt="rectangle" />
        {/* <img src={Frame} alt="Frame" style={{ left: imgPos.x }} />
        <img src={vector} alt="vector" ref={ref} /> */}
      </div>
    </div>
  );
};

export default Card;
