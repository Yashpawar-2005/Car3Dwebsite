import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

// import yash from '../../../public/Garage/gar.glb'
export default function Model(props) {
  const { nodes, materials } = useGLTF('../../../public/Garage/gar.glb')
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={2.094}>
        <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Garage_Main_0.geometry}
              material={materials.Main}
            >
                
                </mesh>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Garage_Floor_0.geometry}
              material={materials.Floor}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Garage_Big_Lights_0.geometry}
              material={materials.Big_Lights}
            >
                
                </mesh>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Garage_Out_RIng_0.geometry}
              material={materials.Out_RIng}
            >
               
                </mesh>

            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Garage_Ring_Light_0.geometry}
              material={materials.Ring_Light}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Garage_Middle_Ring_0.geometry}
              material={materials.Middle_Ring}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Garage_In_Ring_0.geometry}
              material={materials.In_Ring}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Garage_In_Ring_Ring_0.geometry}
              material={materials.In_Ring_Ring}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Garage_Strahler_Main_0.geometry}
              material={materials.Strahler_Main}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Garage_Strahler_Transparent_Plastic__0.geometry}
              material={materials.Strahler_Transparent_Plastic}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Garage_Strahler_Light_0.geometry}
              material={materials.Strahler_Light}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Garage_Strahler_Glass_0.geometry}
              material={materials.Strahler_Glass}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Garage_Blue_Light_0.geometry}
              material={materials.Blue_Light}
            />
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('../../../public/Garage/gar.glb')







// import React, { useRef } from 'react'
// import { useGLTF } from '@react-three/drei'

// export  default function Model(props) {
//   const { nodes, materials } = useGLTF('/car_garage.glb')
//   return (
//     <group {...props} dispose={null}>
//       <group rotation={[-Math.PI / 2, 0, 0]}>
//         <mesh
//           castShadow
//           receiveShadow
//           geometry={nodes.Cube_0.geometry}
//           material={materials.Material}
//         />
//         <mesh
//           castShadow
//           receiveShadow
//           geometry={nodes.Cube_1.geometry}
//           material={materials.white_light}
//         />
//         <mesh
//           castShadow
//           receiveShadow
//           geometry={nodes.Cube_2.geometry}
//           material={materials.blue_light}
//         />
//         <mesh
//           castShadow
//           receiveShadow
//           geometry={nodes.Cube_3.geometry}
//           material={materials.floor_light}
//         />
//       </group>
//     </group>
//   )
// }

// useGLTF.preload('/car_garage.glb')