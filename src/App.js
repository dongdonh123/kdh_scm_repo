import logo from './logo.svg';
import './App.css';
import React from 'react';
import backgroundImage from './image/background.jpg'; // 이미지 파일의 경로

function App() {
  // 배경화면 이미지 경로
  return (
    <div
      className="App"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: '100vw',
        height: '100vh',
      }}
    ></div>
  );
}

export default App;
