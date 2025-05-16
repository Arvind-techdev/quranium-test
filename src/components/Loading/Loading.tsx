import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';

export function Loading() {
  return (
    <div className=' m-auto h-screen flex items-center justify-center'>
      <motion.div>
        <Spline
          scene="https://prod.spline.design/FzAxx0pPwv4vDLaA/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </motion.div>
    </div>
  );
} 