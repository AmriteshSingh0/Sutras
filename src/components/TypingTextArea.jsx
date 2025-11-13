import React, { useState, useEffect } from 'react';

const TypingTextarea = ({ result }) => {
  const [displayText, setDisplayText] = useState("");
  const typingSpeed = 10; // Speed of typing in milliseconds

  useEffect(() => {
    setDisplayText(''); // Clear previous text before starting new animation
    let index = 0;
    let timeoutId;

    const typeText = () => {
      if (index < result.length) {
        setDisplayText((prevText) => prevText + result.charAt(index));
        index++;
        timeoutId = setTimeout(typeText, typingSpeed);
      }
    };

    typeText();

    // Clear the timeout on component unmount or when result changes
    return () => clearTimeout(timeoutId);
  }, [result, typingSpeed]);

  return (
    <textarea
      value={displayText}
      style={{ width: '95%', height: '10rem', whiteSpace: 'pre-wrap', padding:'1rem', borderRadius:'0.6rem', backgroundColor:'rgba(255,255,255,0.1)', border:'solid 1px #C0C0C0'}}
      readOnly
    />
  );
};

export default TypingTextarea;
