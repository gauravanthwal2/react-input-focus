import React, { useState, useEffect, useRef } from "react";
import "./App.css";

export default function App() {
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");
  const [input3, setInput3] = useState("");
  const [input4, setInput4] = useState("");

  const ref1 = useRef("");
  const ref2 = useRef("");
  const ref3 = useRef("");
  const ref4 = useRef("");
  const btnRef = useRef("");

  

  useEffect(() => {
    ref2.current.focus();
  }, [input1]);

  useEffect(() => {
    ref3.current.focus();
  }, [input2]);

  useEffect(() => {
    ref4.current.focus();
  }, [input3]);
  
  useEffect(() => {
    btnRef.current.focus();
  }, [input4]);
  

  useEffect(()=>{
    ref1.current.focus();
  },[])
  return (
    <div className='App'>
      <h3>Auto Focus on Next input</h3>
      <p>OTP Varification functionality</p>
      <input
        type="text"
        ref={ref1}
        maxLength={1}
        value={input1}
        onChange={(e) => setInput1(e.target.value)}
      />
      <input
        type="text"
        value={input2}
        ref={ref2}
        maxLength={1}
        onChange={(e) => setInput2(e.target.value)}
      />
      <input
        type="text"
        maxLength={1}
        value={input3}
        ref={ref3}
        onChange={(e) => setInput3(e.target.value)}
      />
      <input
        type="text"
        maxLength={1}
        value={input4}
        ref={ref4}
        onChange={(e) => setInput4(e.target.value)}
      />
      <br /><br />

      <button ref={btnRef}>Submit</button>
    </div>
  );
}
