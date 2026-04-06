'use client'
import { triggerHaptic}  from "@/hapticFeedback";
import { useState, useEffect } from "react";
interface ZikirType {
  SubhanAllah: number
    Alhamdulillah: number
    "La ilaha illallah": number
    "Allahu Akbar": number
}
const Initial_Zikir_Count : ZikirType ={
    SubhanAllah: 0,
    Alhamdulillah: 0,
    "La ilaha illallah": 0,
    "Allahu Akbar": 0,
}

export function useZikir(activeZikirs : (keyof ZikirType)[] ){
const [count, setCount] = useState(Initial_Zikir_Count);
  const totalCount = Object.values(count).reduce((acc, num) => acc + num, 0);
  // Add a "isLoaded" check to prevent flickering
    const [isLoaded, setIsLoaded] = useState(false);
    // load from local storage (runs only on mount)
    useEffect(() => {
      const saved = localStorage.getItem("zikir-counts");
      if (saved) {
        setCount(JSON.parse(saved));
      }
      setIsLoaded(true);
    }, []);
  
    //save to localStorage whenever count changes:
    useEffect(() => {
      if (isLoaded) {
        // Only save after we've finished loading
        localStorage.setItem("zikir-counts", JSON.stringify(count));
      }
    }, [count, isLoaded]);

    //reset all count from header component
  
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

  const resetCountAll = ()=>{
    const confirmReset = window.confirm("Reset all counts?");
    if (confirmReset) {
      setCount(Initial_Zikir_Count);
    }
  }

  return {count, totalCount, increment, decrement, resetCountAll}
}

  