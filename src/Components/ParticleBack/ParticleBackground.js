import React from "react";
import Particles from "react-tsparticles";
import ParticlesConfig from "./config/particle-config";


export default function ParticleBackground(){
    return (
        <Particles  params={ParticlesConfig}></Particles>
    );
}