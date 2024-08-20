import React, { Suspense, useLayoutEffect } from 'react';
import { Canvas, useLoader } from '@react-three/fiber';
// import Content from './content';
import * as THREE from 'three';
import { OrbitControls, PerspectiveCamera, Sphere, SpotLight } from '@react-three/drei';
import gsap from 'gsap';
import { useState } from 'react';
import im from '../../public/da.png'
import { useEffect } from 'react';
import { useContext } from 'react';
import { refcontext } from './context';

const TexturedSphere = ({ path }) => {
  const texture = useLoader(THREE.TextureLoader, path);
  const [scal, setScale] = useState([1, 1, 1]);

  useEffect(() => {
    const updateScale = () => {
      if (window.innerWidth <= 768) { 
        setScale([0.2, 0.2, 0.2]);
      } else {
        setScale([1, 1, 1]);
      }
    };

 
    updateScale();


    window.addEventListener('resize', updateScale);

    
    return () => {
      window.removeEventListener('resize', updateScale);
    };
  }, []);

  useLayoutEffect(() => {
    let t1 = gsap.timeline({
      scrollTrigger: {
        trigger: '.second-page',
        start: 'top-=200 top', 
        end: 'top-=20 top', 
        scrub: 1, 
      }
    });
    t1.fromTo(".my > *", { 
        y: -100,
        opacity: 0,
        // scale:0,
      }, {
        y: 0,
        opacity: 1,
        // scale:1,
        stagger: 0.3 
      });

  }, []);

  return (
    <Sphere args={[0.5, 32, 32]} position={[0,0,0]} scale={scal}>
    
      <meshStandardMaterial map={texture} />
    </Sphere>
  );
};

const Mycanva = () => {

  const [scal, setScale] = useState([1, 1, 1]);

  useEffect(() => {
    const updateScale = () => {
      if (window.innerWidth <= 768) { 
        setScale([0.2, 0.2, 0.2]);
      } else {
        setScale([1, 1, 1]);
      }
    };

 
    updateScale();


    window.addEventListener('resize', updateScale);

    
    return () => {
      window.removeEventListener('resize', updateScale);
    };
  }, []);
  const{
    component,
    setCurrentComponent,
    setcomponent,
    setloading,setprevi,currentComponent,previ,loading,result,setresult,setshowresult,
    showresult
  } =useContext(refcontext)


    const Content=[
        {
            "key":1,
            "path":im,
            "title":"first_gun",
            "ammon":"20",
            "name":"MClaren",
            "discription":"hi how are you",
           
        },{
            "key":2,
            "path":im,
            "title":"first_gun",
            "ammon":"20",
            "name":"buggati",
            "discription":"hi how are you",
      
    
    
    
        },{
            "key":3,
            "path":im,
            "title":"first_gun",
            "ammon":"20",
            "name":"nissan",
            "discription":"hi how are you",
           
        },{
            "key":4,
            "path":im,
            "title":"first_gun",
            "ammon":"20",
            "name":"chervo",
            "discription":"hi how are you",
          
        }
    ]
  // const handleclick =()=>{
  //    console.log(value);
  // }
//   const [comp, setcomp] = useState({})
  return (
    <div className='flex  flex-col overflow-y-scroll w-full h-screen'>

      {Content.map((value) => (
        <Canvas  key={value.key} onClick={()=>{
         setCurrentComponent(value.name)
        //  setcomp(value.comp)
        }}>
          <group scale={scal}>

          <PerspectiveCamera 
            makeDefault 
            position={[0, 0, 6]} 
            fov={20} 
            />
          <ambientLight intensity={10} />
          <OrbitControls
            enablePan={false}
            enableZoom={false} />
          <SpotLight
            intensity={20}
            penumbra={0.4}
            position={[0, 4, 0]}/>

          <Suspense fallback={null}>
           
            <TexturedSphere path={value.path} />
          </Suspense>
            </group>
        </Canvas>
      ))}

    </div>
  );
};

export default Mycanva;
