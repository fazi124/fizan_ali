import React from 'react';
import './portfolio.scss'
import { useRef } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
const items = [
    {
        id: 1,
        title: "React Commerce",
        img: "https://images.pexels.com/photos/18454473/pexels-photo-18454473/free-photo-of-old-town-market-place-in-warsaw-poland.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
        desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus, veritatis libero! Sapiente ab, sed excepturi pariatur laudantium delectus aperiam nesciunt."
    },
    {
        id: 2,
        title: "Next.js Blog",
        img: "https://images.pexels.com/photos/25561070/pexels-photo-25561070/free-photo-of-white-flowers-in-the-sun-with-the-sun-shining.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
        desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus, veritatis libero! Sapiente ab, sed excepturi pariatur laudantium delectus aperiam nesciunt."
    },
    {
        id: 3,
        title: "Vanilla Commerce",
        img: "https://images.pexels.com/photos/25489348/pexels-photo-25489348/free-photo-of-a-patio-with-a-table-and-chairs-and-plants.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
        desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus, veritatis libero! Sapiente ab, sed excepturi pariatur laudantium delectus aperiam nesciunt."
    },
    {
        id: 4,
        title: "Music App",
        img: "https://images.pexels.com/photos/23643845/pexels-photo-23643845/free-photo-of-wat-arun-temple.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
        desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus, veritatis libero! Sapiente ab, sed excepturi pariatur laudantium delectus aperiam nesciunt."
    }
];

const Single = ({ item }) => {
    const ref = useRef();

    const { scrollYProgress } = useScroll({
        target: ref,
        // offset: ["start start", "end start"]
      });

    const y= useTransform(scrollYProgress,[0,1],[-300,300]);
    return (
    <section >
         <div className='container'>
                <div className='wrapper'>
                   <div className='imgecontainer' ref={ref}>
                   <img src={item.img} alt=''/>
                   </div>
            <motion.div className='textcontaier' style={{y}}>
              <h2 >{item.title}</h2>
              <p>{item.desc}</p>
              <button>see Demo</button>
            </motion.div>
            </div>
         </div>
     </section>
    );
};

function Portfolio() {
    const ref = useRef();

    const { scrollYProgress } = useScroll({
      target: ref,
      offset: ["end end", "start start"]
    });
  
    const scaleX = useSpring(scrollYProgress, {
      stiffness: 100,
      damping: 30,
    });
    return (
        <div className='portfolio' ref={ref}>
            <div className='progress'>
                <h1>Featured Works</h1>
                <motion.div style={{ scaleX }} className="progressBar">
                 </motion.div>
            </div>
            {items.map(item => (
                <Single item={item} key={item.id} />
            ))}
        </div>
    );
}

export default Portfolio;
