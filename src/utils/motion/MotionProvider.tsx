import { LazyMotion, domAnimation } from "motion/react";


interface MotionProviderProps {
  children: React.ReactNode;
}


export const MotionProvider = ({ children }: MotionProviderProps) => {
  return (
    <LazyMotion features={domAnimation} strict>
      {children}
    </LazyMotion>
  );
};
