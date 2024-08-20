import React from 'react'
import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
import Modelloader from './Modelloader'
import { OrbitControls } from '@react-three/drei'
import { Preload } from '@react-three/drei'
import { PerspectiveCamera } from '@react-three/drei'
const Canv = () => {
  return (
    <Canvas
    shadows
    gl={{ preserveDrawingBuffer: true }}
    fog={{ color: 'lightblue', near: 5, far: 15 }}
  >
    
      <Modelloader/>
      
  </Canvas>
  )
}

export default Canv