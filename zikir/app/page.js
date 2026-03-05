"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Plus, Minus } from "lucide-react";
import Zikir from "@/components/Zikir";
export default function Home() {
  const [count, setCount] = useState(0);
  const [isActive, setIsActive] = useState(false);

  const decrement = () => {
    setCount((prevCount) => {
      if (prevCount === 0) {
        return 0;
      } else {
        return prevCount - 1;
      }
    });
  };
  const increment = () => {
    setCount(count + 1);
  };
  return (
    <main>
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
            key={count}
            className="w-32 h-32 -mx-4 rounded-full z-10 bg-accent font-orbitron font-medium flex justify-center items-center text-6xl transition-all duration-100 animate-[wiggle_0.1s_ease-in-out]"
          >
            {count}
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
        <Zikir count={0} name="SubhanAllah" isActive={isActive} onToggle />
        <Zikir count={0} name="Alhamdulillah" isActive={isActive} onToggle />
        <Zikir
          count={0}
          name="La ilaha illallah"
          isActive={isActive}
          onToggle
        />
        <Zikir count={0} name="Allahu Akbar" isActive={isActive} onToggle />
      </div>
      <div className="hadith mt-12 mx-auto flex flex-col justify-center items-center text-center max-w-[75ch] px-4">
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
