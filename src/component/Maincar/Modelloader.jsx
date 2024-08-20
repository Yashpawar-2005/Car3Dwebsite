import React, { Suspense, useRef } from 'react';
import { Canvas, useThree } from '@react-three/fiber';
import { OrbitControls, useGLTF, Preload, PerspectiveCamera } from '@react-three/drei';
import * as THREE from 'three';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLayoutEffect } from 'react';
import { MeshReflectorMaterial,PresentationControls,Stage } from '@react-three/drei';
import { useState } from 'react';
import { useContext } from 'react';
import { refcontext } from '../context';
import Model from './MainCar';
// import yash from '../../public/aventor/scence.gltf'
gsap.registerPlugin(ScrollTrigger);

const Modelloader = () => {
  const{
    component,
    setCurrentComponent,
    setcomponent,
    setloading,setprevi,currentComponent,previ,loading,result,setresult,setshowresult,
    showresult
  } =useContext(refcontext)
  // const [mymodelpath, setmymodelpath] = useState('/model/scene.gltf')
  const renderComponent = () => {
    switch (currentComponent) {
      case 'MClaren':
        return '/model/scene.gltf';
      case 'buggati':
        return '../../public/aventor/scene.gltf';
      case 'nissan':
        return '../../public/chervo/scene.gltf';
      case 'chervo':
        return '../../public/porsche/scene.gltf';
      default:
        return '/model/scene.gltf';
    }
  };
  const { scene: modelScene }= useGLTF(renderComponent());
  const myref = useRef();
  const cam = useRef();
  // const light=useRef();

  useLayoutEffect(() => {
    let t1 = gsap.timeline({
      scrollTrigger: {
        trigger: '.for-photo',
        start: 'top+=100 top',
        end: 'bottom top',
  
        // markers: true,
        scrub: 1,
      },
    });
    // t1.to(myref.current.rotation, { x: 0, y: 0, z: 0, duration: 2 }, "-=2");
    t1.to(myref.current.scale,{x:1.02,y:1.02,z:1.02})
    t1.to(cam.current.position, { x: -3, y: 1, z: 4 });
    // t1.to(light.current.position,{x:1,y:6,z:-2})
    t1.to(myref.current.scale,{x:1,y:1,z:1})
    


    let t2 = gsap.timeline({
        scrollTrigger: {
          trigger: '.second-page',
          start: 'top+=100 top',
          end: 'bottom top',
    
          
          scrub: 1,
        },
      });
      // t1.to(myref.current.rotation, { x: 0, y: 0, z: 0, duration: 2 }, "-=2");
      t2.to(myref.current.scale,{x:1.3,y:1.3,z:1.3})
      
      t2.to(cam.current.position, { x: +4, y: 5, z: 3 });
      // t2.to(light.current.position,{x:1,y:7,z:-1})
      t2.to(myref.current.scale,{x:1,y:1,z:1})
      t2.to(cam.current, {
        fov: 50,
        onUpdate: () => cam.current.updateProjectionMatrix(), 
      });
      t2.to(myref.current.position, { x: 0, y: 0,z:0 });
      t2.to(cam.current.position, { x: +4, y: 2, z: 3 });
      
  }, []);

  return (
    <group>
      <PerspectiveCamera ref={cam} makeDefault position={[2, 1, 5]} fov={55} />
      <OrbitControls  enableZoom={false} maxPolarAngle={Math.PI/2} />
      <PresentationControls
      makeDefault
        speed={1.5}
        global
        polar={[-0.1, Math.PI / 4]}
        rotation={[Math.PI / 8, Math.PI / 4, 0]}
      />

      <Suspense fallback={null}>
        <mesh>
          <mesh ref={myref}>

          <Model/>
          </mesh>

         
          <Preload all />
        </mesh>
      </Suspense>
    </group>
  );
};

const Canv = () => {
  return (

      <Modelloader />
    
  );
};

export default Canv;
