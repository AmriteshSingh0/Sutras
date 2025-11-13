import React, { useState } from 'react'
import { GoogleGenerativeAI } from '@google/generative-ai';
import { Button, Container, Form, Row, Col } from 'react-bootstrap';
import { FaSearch } from 'react-icons/fa';
import { FiSend } from "react-icons/fi";
import { FaRobot } from "react-icons/fa";
import TypingTextarea from '../TypingTextArea';


const genAI = new GoogleGenerativeAI("");
const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

const AI = ({prompt}) => {
  // const [prompt, setPrompt] = useState('');
  const [result, setResult] = useState('');
  const [isClicked, setIsClicked] = useState(false);

  const handleSubmit = async (e) => {
    // e.preventDefault();
    setIsClicked(true);
    setResult('');
    console.log(prompt);
    const text = await model.generateContent(prompt);
    setResult(text.response.text());
    console.log(text.response.text())
    // setIsClicked(false);
  }

  return (
    <>
      <Button onClick={handleSubmit} style={{margin:'0 0 1rem 1.8rem'}}>Ask AI <FaRobot /></Button>
        <Container style={{ textAlign: 'center', width: '75rem'}}>
          <TypingTextarea result={result} />
        </Container >
    </>
  )
}

export default AI
