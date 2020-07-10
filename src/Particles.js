import React from 'react';
import './App.css';
import Particles from 'react-particles-js';
import particlesConfig from './ressources/particlesjs-config';

function ParticlesBackground() {



    return (
      <div id="particles">

        <Particles params={particlesConfig} />

      </div>
    );
  }
  export default ParticlesBackground