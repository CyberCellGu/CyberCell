import React, { useEffect, useRef, useState } from 'react';

const CodeRain = ({Color}) => {
  const canvasRef = useRef(null);
  const [fps, setFps] = useState(20);
  // const [color, setColor] = useState("purple");
  const [charset, setCharset] = useState('0123#!$^&456789ABCDEFRLY');
  const [size, setSize] = useState(16);

  let color=Color;
  
  const pRef = useRef([]);
  const intervalRef = useRef(null);
 
  useEffect(() => { 
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let w, h;
  
    const resize = () => {
      w = canvas.width = window.innerWidth-20;
      h = canvas.height = window.innerHeight;
      pRef.current = Array(Math.ceil(w / size)).fill(0);
    };

    const random = (items) => items[Math.floor(Math.random() * items.length)];

    const draw = () => { 
      ctx.fillStyle = 'rgba(0,0,0,.05)';
      ctx.fillRect(0, 0, w, h);

      ctx.fillStyle = color;

      ctx.font = size + 'px sans-serif';
      for (let i = 0; i < pRef.current.length; i++) {
        let v = pRef.current[i];
        ctx.fillText(random(charset), i * size, v);
        pRef.current[i] = v >= h || v >= 10000 * Math.random() ? 0 : v + size;
      }
    };

    const handleResize = () => {
      resize();
    };

    window.addEventListener('resize', handleResize);
    resize();

    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    intervalRef.current = setInterval(draw, 1000 / fps);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [color, charset, size, fps]);

  const handleFpsChange = (value) => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    setFps(value); 
    intervalRef.current = setInterval(() => draw(), 1000 / value);
  };

  return (<>
      <canvas ref={canvasRef}></canvas>
     </>
  );
};

export default CodeRain;
