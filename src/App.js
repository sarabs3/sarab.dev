import React, { useState, useEffect } from 'react';
import { SocialIcon } from 'react-social-icons';
import Loader from '@bit/devtalks.devtalks.loader';
import logo from './logo.svg';
import './App.css';

function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);
  if (loading) return (
    <div
      style={{
        display: 'flex',
        width: '100vw',
        height: '100vh',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
        <Loader color="green" type="Puff" />
    </div>
  );
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <main>
        <h4>Welcome <span aria-label="wave" role="img">👋</span></h4>
        <p>I'm a 27 year old software developer living in the Chandigarh area.</p>
        <p>I like building impactful software. I've built websites, mobile apps, animations, graphic, games.</p>
        <p>Or if you'd like to chat, feel free to reach me on my socials below!</p>
      </main>
      <footer>
        <SocialIcon url="https://twitter.com/sarabs3" />
        <SocialIcon url="https://www.linkedin.com/in/sarabs3/" />
        <SocialIcon url="https://www.instagram.com/sarabs3/" />
        <SocialIcon url="https://www.facebook.com/sarabs3" />
      </footer>
    </div>
  );
}

// If you'd like to find out more about me or see some of the projects I've worked on, check out the links above!
export default App;
