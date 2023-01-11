import React, { useEffect, useRef } from 'react';
import Card from './Card';
import Team from './Team';

const Services = () => {
  const elRef = useRef(null);
  useEffect(() => {
    const el: any = elRef.current;
    if (el) {
      const onWheel = (e: any) => {
        if (e.deltaY == 0) return;
        e.preventDefault();
        el.scrollTo({
          left: el.scrollLeft + e.deltaY,
          // behavior: "smooth"
        });
      };
      el.addEventListener('wheel', onWheel);
      return () => el.removeEventListener('wheel', onWheel);
    }
  }, []);

  return (
    <section className="services">
      <div className="conteiner">
        <h1 className="services__title">services</h1>
        <div ref={elRef} className="services__cards" id="scroll">
          <Card title="Backend development" />
          <Card title="Frontend development" />
          <Card title="web development" />
          <Card title="web development" />
          <Card title="web development" />
          <Card title="web development" />
          {/* <Card title='web development'/>
                <Card title='web development'/>
                <Card title='web development'/>
                <Card title='web development'/>
                <Card title='web development'/> */}
        </div>
        <Team />
        <h1 className="services__title">email us</h1>
      </div>
    </section>
  );
};

export default Services;
