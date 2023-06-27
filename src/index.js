import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles.css';

function App() {
  return (
    <>
      <div className='card'>
        <Avatar />
        <dvi className = 'data'>
          <Intro/>
          <SkillList />
        </dvi>
      </div>
    </>
  );
  }

function SkillList () {
  return (
    <div className="Skill-list">
      <Skill Skill = "sleep" emoji = "✌️" color = "brown" />
      <Skill Skill = "play" emoji = "🦾" color = "yellow" />
      <Skill Skill = "..." emoji = "💀" color = "white" /> 
      <Skill Skill = "work" emoji = "☠️" color = "silver" />
    </div>
  );
}

function Skill(props) {
  return (
    <div className='Skill' style={{ backgroundColor : props.color }}>
      <span>{props.Skill}</span>
      <span>{props.emoji}</span>
    </div>
  );
}

function Intro() {
  return (
    <div>
      <h1>นายวีระยุทธ ลักษ์ศิลป์</h1>
      <p>
        นักศึกษาสาขาเทคโนโลยีสารสนเทศและการสื่อสาร คณะวิทยาศาสตร์ 
        มหาวิทยาลัยอุบลราชธานี
      </p>
    </div>
  );
}

function Avatar() {
  return <img className='avatar' src="avatar.jpg" alt='My Avatar' />;
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


