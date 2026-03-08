"use client";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Plus, Minus } from "lucide-react";
import Zikir from "@/components/Zikir";
import Confetti from "react-confetti";
import { useWindowSize } from "react-use";
export default function Home() {
  const [count, setCount] = useState({
    SubhanAllah: 0,
    Alhamdulillah: 0,
    "La ilaha illallah": 0,
    "Allahu Akbar": 0,
  });
  const [activeZikirs, setActiveZikirs] = useState([]);
  const decrement = () => {
    setCount((prevCount) => {
      const next = { ...prevCount };
      activeZikirs.forEach((name) => {
        next[name] = Math.max(0, next[name] - 1);
      });
      return next;
    });
  };
  const increment = () => {
    setCount((prevCount) => {
      const next = { ...prevCount };
      activeZikirs.forEach((name) => {
        next[name] = next[name] + 1;
      });
      return next;
    });
  };
  const handleToggle = (name) => {
    const isAlreadyActive = activeZikirs.includes(name);
    if (isAlreadyActive) {
      const newList = activeZikirs.filter((zikir) => zikir !== name);
      setActiveZikirs(newList);
    } else {
      setActiveZikirs([...activeZikirs, name]);
    }
  };
  const totalCount = Object.values(count).reduce((acc, num) => acc + num, 0);
  const { windowWidth, windowHeight } = useWindowSize();
  const [showConfetti, setShowConfetti] = useState(false);
  useEffect(() => {
    if (totalCount >= 400) {
      setShowConfetti(true);
      //stop the confetti after 10 sec
      const timer = setTimeout(() => {
        setShowConfetti(false);
      }, 10000);
      return () => clearTimeout(timer);
    }
  }, [totalCount]);
  return (
    <main>
      {showConfetti && <Confetti width={windowWidth} height={windowHeight} />}
      <div className="counter-wraper flex justify-center items-center">
        <div className="counter mt-4 w-90 h-90 flex justify-center items-center">
          <Button
            onClick={() => decrement()}
            variant="destructive"
            className="rounded-full cursor-pointer w-16 h-16 focus:ring hover:ring ring-red-500 ring-offset-4"
          >
            <Minus size={32} strokeWidth={2.5} className="size-7" />
          </Button>

          <h2
            key={totalCount}
            className="w-38 h-38 p-1 -mx-4 rounded-full z-10 bg-accent font-orbitron font-medium flex justify-center items-center text-6xl animate-pop"
          >
            {totalCount}
          </h2>

          <Button
            onClick={() => increment()}
            className="rounded-full cursor-pointer bg-primary w-16 h-16 focus:ring hover:ring ring-black ring-offset-4"
          >
            <Plus strokeWidth={2.5} fill="white" className="size-7" />
          </Button>
        </div>
      </div>

      <div className="zikirs flex justify-around">
        <Zikir
          count={count["SubhanAllah"]}
          name="SubhanAllah"
          isActive={activeZikirs.includes("SubhanAllah")}
          onToggle={handleToggle}
        />
        <Zikir
          count={count["Alhamdulillah"]}
          name="Alhamdulillah"
          isActive={activeZikirs.includes("Alhamdulillah")}
          onToggle={handleToggle}
        />
        <Zikir
          count={count["La ilaha illallah"]}
          name="La ilaha illallah"
          isActive={activeZikirs.includes("La ilaha illallah")}
          onToggle={handleToggle}
        />
        <Zikir
          count={count["Allahu Akbar"]}
          name="Allahu Akbar"
          isActive={activeZikirs.includes("Allahu Akbar")}
          onToggle={handleToggle}
        />
      </div>
      <div className="hadith mt-12 mx-auto flex flex-col justify-center items-center text-center max-w-[75ch] lg:max-w-[45%] px-4">
        <h2 className="font-bold text-2xl mb-4">The Hadith</h2>
        <p className="text-sm md:text-base lg:text-lg xl:text-xl leading-relaxed text-muted-foreground">
          Umm hani Bint abu talib , The sister of Ali and the cousin of the
          Prophet (SA), Came to him and said O Prophet of Allah, Now I am Old
          And Weak, tell me about something I can say or do while sitting down.
          <span className="font-bold">
            The Phropet told her, Say 'SubhanAllah' 100 times: It is equivalent
            to freeing 100 slaves from the offspring of Isma'il. Say
            'Alhamdulillah' 100 times: It is equivalent to 100 horses, saddled
            and bridled, carrying [fighters] in the way of Allah. Say 'Allahu
            Akbar' 100 times: It is equivalent to 100 sacrificial camels,
            decorated and accepted [by Allah]. Say 'La ilaha illallah' 100
            times: it fills what is between the heavens and the earth, and on
            that day, no one will have a better deed raised for them than yours,
            except for one who does the same as you.'"
          </span>
          <i>— (Source: Musnad Ahmad and Silsila al-Sahiha by Al-Albani)</i>
        </p>
      </div>
    </main>
  );
}

// https://www.youtube.com/shorts/NT4gKBV-MXo
// umhani Bint abu talib ,
// the sister of Ali and the cousin of the Prophet (SA),
// Came to him and said O Prophet of Allah, Now I am Old And Weak,
// now tell me about something I can say or do while sitting down.
// The Phropet told her Say Say 'SubhanAllah' 100 times: It is equivalent to freeing 100 slaves from the offspring of Isma'il.
// Say 'Alhamdulillah' 100 times: It is equivalent to 100 horses, saddled and bridled, carrying [fighters] in the way of Allah.

// Say 'Allahu Akbar' 100 times: It is equivalent to 100 sacrificial camels, decorated and accepted [by Allah].

// Say 'La ilaha illallah' 100 times: (The narrator said: I think he said) it fills what is between the heavens and the earth, and on that day, no one will have a better deed raised for them than yours, except for one who does the same as you.'"

// — (Source: Musnad Ahmad and Silsila al-Sahiha by Al-Albani)
