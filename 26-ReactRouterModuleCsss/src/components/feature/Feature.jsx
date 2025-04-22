import React from 'react';
import style from './Feature.module.css'

const Feature = ({ icon, name, desc }) => {
  return (
    <div className={style.feature}>
      <p>{icon}</p>
      <h2>{name}</h2>
      <h3>{desc}</h3>
    </div>
  );
}

export default Feature;
