'use client'
import { triggerHaptic}  from "@/hapticFeedback";
import { useState } from "react";
  

export function useZikir(activeZikirs : string[]){
const [count, setCount] = useState({
    SubhanAllah: 0,
    Alhamdulillah: 0,
    "La ilaha illallah": 0,
    "Allahu Akbar": 0,
  });
  const totalCount = Object.values(count).reduce((acc, num) => acc + num, 0);
 const increment = () => {
    triggerHaptic();
    if ((totalCount + 1) % 100 === 0) {
      window.navigator.vibrate([30, 30, 30]);
    }
    setCount((prevCount) => {
      const next = { ...prevCount };
      activeZikirs.forEach((name) => {
        next[name] = next[name] + 1;
      });
      return next;
    });
  };
  
  const decrement = () => {
    triggerHaptic();
    setCount((prevCount) => {
      const next = { ...prevCount };
      activeZikirs.forEach((name) => {
        next[name] = Math.max(0, next[name] - 1);
      });
      return next;
    });
  };

  return {count, totalCount, increment, decrement}
}

  