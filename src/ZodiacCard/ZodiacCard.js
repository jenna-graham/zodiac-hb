import './ZodiacCard.css';
import React from 'react';


export default function ZodiacCard({ name, dates }) {
  return (
    <div className="zodiac">
      <p>{name}</p>
      <p>{dates}</p>
    </div>
  );
}
