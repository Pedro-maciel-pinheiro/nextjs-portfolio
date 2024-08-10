
import { useInView } from "react-intersection-observer";



export const useInViewHook = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0,
  });

  return { ref, inView };
};

export const useInViewHookSlow = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  return { ref, inView };
};