import React, { useState } from 'react';
import Sidebar from './Sidebar';
import style from './App.css';

export default function App() {
  const [selected, updateSelected] = useState('home');

  const sidebarContent = {
    Home: 'this is my home',
    About: 'King\'s Landing got lit up by Drogon',
    Blog: 'Winter Is Coming',
    Contact: 'Courier Pigeon'
  };

  return (
    <section className={style.App}>
      <Sidebar>
        <a onClick={() => updateSelected('Home')} href="#">Home</a>
        <a onClick={() => updateSelected('About')} href="#">About</a>
        <a onClick={() => updateSelected('Blog')} href="#">Blog</a>
        <a onClick={() => updateSelected('Contact')} href="#">Contact</a>
      </Sidebar>
      <p>{sidebarContent[selected]}</p>
    </section>
  );
}
