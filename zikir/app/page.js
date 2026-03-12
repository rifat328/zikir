"use client";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import { Plus, Minus } from "lucide-react";
import Zikir from "@/components/Zikir";
import { translations } from "@/translations.js";
import Confetti from "react-confetti";
import { useWindowSize } from "react-use";
import { triggerHaptic } from "@/hapticFeedback";
export default function Home() {
  const [lang, setLang] = useState("en");
  const t = translations[lang];
  const [count, setCount] = useState({
    SubhanAllah: 0,
    Alhamdulillah: 0,
    "La ilaha illallah": 0,
    "Allahu Akbar": 0,
  });
  const [activeZikirs, setActiveZikirs] = useState([]);

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
  const increment = () => {
    triggerHaptic();
    if (totalCount + (1 % 100) === 0) {
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
  const [hasCelebrated, setHasCelebrated] = useState(false);
  useEffect(() => {
    if (totalCount >= 400 && !hasCelebrated) {
      if (window.navigator.vibrate) {
        //complex vibration pattern: vibrate 100ms, pause 50ms, vibrate 100ms
        window.navigator.vibrate([100, 50, 100]);
      }
      setShowConfetti(true);
      setHasCelebrated(true); // gate lock so 400 upward doesnt vibrate continiously
      //stop the confetti after 10 sec
      const timer = setTimeout(() => {
        setShowConfetti(false);
      }, 10000);
      return () => clearTimeout(timer);
    }
    if (totalCount === 0) {
      setHasCelebrated(false);
    }
  }, [totalCount, hasCelebrated]);

  // This turns the number 5 into "৫" if lang is "bn"
  const formatNumber = (num) => {
    return new Intl.NumberFormat(t.locale).format(num);
  };
  //reset all count from header component
  const resetCounts = () => {
    const confirmReset = window.confirm("Reset all counts?");
    if (confirmReset) {
      setCount({
        SubhanAllah: 0,
        Alhamdulillah: 0,
        "La ilaha illallah": 0,
        "Allahu Akbar": 0,
      });
    }
  };
  return (
    <main dir={t.dir} className={t.font}>
      <Header lang={lang} setLang={setLang} resetCounts={resetCounts} />

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
            {formatNumber(totalCount)}
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
          id="SubhanAllah"
          count={formatNumber(count["SubhanAllah"])}
          name={t.subhanAllah}
          isActive={activeZikirs.includes("SubhanAllah")}
          onToggle={handleToggle}
          syncLable={t.syncing}
        />
        <Zikir
          id="Alhamdulillah"
          count={formatNumber(count["Alhamdulillah"])}
          name={t.alhamdulillah}
          isActive={activeZikirs.includes("Alhamdulillah")}
          onToggle={handleToggle}
          syncLable={t.syncing}
        />
        <Zikir
          id="La ilaha illallah"
          count={formatNumber(count["La ilaha illallah"])}
          name={t.lailaha}
          isActive={activeZikirs.includes("La ilaha illallah")}
          onToggle={handleToggle}
          syncLable={t.syncing}
        />
        <Zikir
          id="Allahu Akbar"
          count={formatNumber(count["Allahu Akbar"])}
          name={t.allahuAkbar}
          isActive={activeZikirs.includes("Allahu Akbar")}
          onToggle={handleToggle}
          syncLable={t.syncing}
        />
      </div>
      <div className="hadith mt-12 mx-auto flex flex-col justify-center items-center text-center max-w-[75ch] lg:max-w-[45%] px-4">
        <h2 className="font-bold text-2xl mb-4">{t.hadithTitle}</h2>
        <p className="text-sm md:text-base lg:text-lg xl:text-xl leading-relaxed text-muted-foreground">
          {t.hadithIntro}
          <br />
          <span className="font-bold block mt-2">{t.hadithBody}</span>
          <i className="block mt-4 opacity-70">{t.hadithSource}</i>
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

{
  /* <div className="hadith mt-12 mx-auto flex flex-col justify-center items-center text-center max-w-[75ch] lg:max-w-[45%] px-4">
  <h2 className="font-bold text-2xl mb-4">{t.hadithTitle}</h2>
  <p className="text-sm md:text-base lg:text-lg xl:text-xl leading-relaxed text-muted-foreground">
    Umm hani Bint abu talib , The sister of Ali and the cousin of the Prophet
    (SA), Came to him and said O Prophet of Allah, Now I am Old And Weak, tell
    me about something I can say or do while sitting down.
    <span className="font-bold">
      The Phropet told her, Say 'SubhanAllah' 100 times: It is equivalent to
      freeing 100 slaves from the offspring of Isma'il. Say 'Alhamdulillah' 100
      times: It is equivalent to 100 horses, saddled and bridled, carrying
      [fighters] in the way of Allah. Say 'Allahu Akbar' 100 times: It is
      equivalent to 100 sacrificial camels, decorated and accepted [by Allah].
      Say 'La ilaha illallah' 100 times: it fills what is between the heavens
      and the earth, and on that day, no one will have a better deed raised for
      them than yours, except for one who does the same as you.'"
    </span>
    <i>— (Source: Musnad Ahmad and Silsila al-Sahiha by Al-Albani)</i>
  </p>
</div>; */
}
