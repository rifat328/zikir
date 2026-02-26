import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div className="counter">
        <label> 33</label>
        <button>+</button>
        <button>-</button>
      </div>
      <div className="zikirs">
        <zikir count={0} name="SubhanAllah" />
        <zikir count={0} name="Alhamdulillah" />
        <zikir count={0} name="La ilaha illallah" />
        <zikir count={0} name="Allahu Akbar" />
      </div>
      <div className="hadith">
        <h2>Hadith</h2>
        <p>
          Umhani Bint abu talib , The sister of Ali and the cousin of the
          Prophet (SA), Came to him and said O Prophet of Allah, Now I am Old
          And Weak, tell me about something I can say or do while sitting down.
          The Phropet told her Say 'SubhanAllah' 100 times: It is equivalent to
          freeing 100 slaves from the offspring of Isma'il. Say 'Alhamdulillah'
          100 times: It is equivalent to 100 horses, saddled and bridled,
          carrying [fighters] in the way of Allah. Say 'Allahu Akbar' 100 times:
          It is equivalent to 100 sacrificial camels, decorated and accepted [by
          Allah]. Say 'La ilaha illallah' 100 times: it fills what is between
          the heavens and the earth, and on that day, no one will have a better
          deed raised for them than yours, except for one who does the same as
          you.'" — (Source: Musnad Ahmad and Silsila al-Sahiha by Al-Albani)
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
