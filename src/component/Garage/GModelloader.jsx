import React, { Suspense, useRef } from 'react';
import { Canvas, useThree } from '@react-three/fiber';
import { OrbitControls, useGLTF, Preload, PerspectiveCamera, Html } from '@react-three/drei';
import * as THREE from 'three';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLayoutEffect } from 'react';
import { MeshReflectorMaterial,PresentationControls,Stage } from '@react-three/drei';
import { useState } from 'react';
import Model from './Garage';
import Modelloader from '../Maincar/Modelloader'
import { Environment } from '@react-three/drei';

// import yash from '../../public/aventor/scence.gltf'
gsap.registerPlugin(ScrollTrigger);

const GModelloader = () => {
const [li, setli] = useState(false)
  const myref = useRef();
  const cam = useRef();
  const enablelight=()=>{
      setli((prev)=>{return !prev})
  }


  return (
    <group>
      {/* <PerspectiveCamera ref={cam} makeDefault position={[-0, 1, 4]} fov={90} /> */}
      <OrbitControls enableZoom={false} enablePan={false} rotateSpeed={2} />
     

      <Suspense fallback={null}>
        <mesh>
      
          <mesh>
          
          </mesh>
          <mesh ref={myref}>
      
<spotLight
intensity={1000}
color="#023851"
penumbra={0.6}
angle={Math.PI /4}
position={[0,4,0]}/>


{/* this is part wehere the lights for scope */}
{li?<mesh><directionalLight
intensity={10}
color="#00ffff"
castShadow

position={[0,0.2,-1]}
/>
<directionalLight

intensity={10}
color="#ff00ff"
castShadow

position={[0,0.2,1]}
/></mesh>:<mesh></mesh>}




          <mesh scale={[1,1,1]} position={[0,-1,0]}>
          <Environment preset="night" background />
          {/* apartment */}

        <Modelloader/>
          </mesh>
          <mesh scale={[2,2,2]}>
<Html position={[0,2,0]}>
  <button className='bg-red-800'  onClick={enablelight}></button>
</Html>
          <Model/>
          </mesh>
          </mesh>

         
          <Preload all />
        </mesh>
      </Suspense>
    </group>
  );
};

const Canv = () => {
  return (

      <GModelloader />
    
  );
};

export default Canv;
