import React from 'react'
import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
import Modelloader from './GModelloader'
import { OrbitControls } from '@react-three/drei'
import { Preload } from '@react-three/drei'
import { PerspectiveCamera } from '@react-three/drei'
const GCanv = () => {
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

export default GCanv