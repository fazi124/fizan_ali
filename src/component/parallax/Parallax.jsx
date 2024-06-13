import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import './parallax.scss';

function Parallax({ type }) {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const yText = useTransform(scrollYProgress, [0, 1], ['0%', '500%']);
  const yBg = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <div
      className='parallax'
      ref={ref}
      style={{
        background:
          type === 'Services'
            ? 'linear-gradient(100deg, #111132, #0c0c1d)'
            : 'linear-gradient(180deg, #111132, #505064)',
      }}
    >
      <motion.h1 style={{ y: yText }}>
        {type === 'Services' ? 'What We Do' : 'What We Did'}
      </motion.h1>
      <h2 className='h2'></h2>
      <div className='mountains'></div>
      <motion.div style={{ y: yBg }} className='planets'></motion.div>
      <motion.div style={{ x: yBg }} className='stars'></motion.div>
    </div>
  );
}

export default Parallax;
