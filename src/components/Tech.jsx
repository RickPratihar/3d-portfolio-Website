import React from "react";
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { textVariant} from '../utils/motion'
import {styles} from '../styles'
import {motion} from 'framer-motion'

const Tech = () => {
  return (
    <>
     <motion.div variants={textVariant()}>
        <h2 className={styles.sectionHeadText}>Technologies</h2>
        <p className={styles.sectionSubText}>I have worked with so far</p>
      </motion.div>
    
    <div className='flex flex-row flex-wrap justify-center gap-10'>
      {technologies.map((technology) => (
        <div className='w-28 h-28' key={technology.name}>
          <BallCanvas icon={technology.icon} />
        </div>
      ))}
    </div>
    </>
  );
};

export default SectionWrapper(Tech, "");