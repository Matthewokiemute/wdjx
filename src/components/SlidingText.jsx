import { useEffect, useState } from 'react';

const words = [`Odugus'.`, "Seniormen.", "Bros'.", "Chairmen."];

const SlidingText = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentWordIndex((prevIndex) => {
        if (prevIndex === words.length - 1) {
          // If we reach the end of the array, loop back to the beginning.
          return 0;
        } else {
          return prevIndex + 1;
        }
      });
    }, 2000); // Change the interval as needed

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
      <>
        {words.map((word, index) => (
          <span
            key={index}
            className={`transition-transform text-[#57C126] ${
              index === currentWordIndex ? '-translate-y-0' : '-translate-y-40 hidden'
            } duration-700 ease-in inline-block`}
          >
            {word}
          </span>
        ))}
      </>
  );
};

export default SlidingText;
