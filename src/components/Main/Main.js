import React from 'react';
import './Main.css';
import background from '../../background.png';
import animals from '../../data.js';
import Animal from '../Animal/Animal.js';

export default function Main() {
  return (
    <main style={{ backgroundImage: `url(${background})` }}>
      {animals.map((animal) => (
        <Animal key={animal.name} image={animal.type} says={animal.says} name={animal.name} />
      ))}
    </main>
  );
}
