import React from 'react';
import me from '../assets/me.jpg'

function About() {
    return (
<div className="hero min-h-screen">
<figure><img  src={me} alt="krystopher quintero"/></figure>
<div className="hero-overlay bg-opacity-60"></div>
<div className="hero-content text-center text-neutral-content">
  <div className="max-w-md">
    <h1 className="mb-5 text-5xl font-bold">Krystopher Quintero</h1>
    <p className="mb-5">I am an Iron worker currently in school at UC Berkeley Extension to become a full stack web developer. Welcome to my Portfolio.</p>
  </div>
</div>
</div>
 )
}

export default About;