import React from 'react'
let GLTFLoader = require('three/examples/jsm/loaders/GLTFLoader').GLTFLoader
import { useLoader  } from '@react-three/fiber';

function Model({ url,activeService }) {
  
  const gltf = useLoader(GLTFLoader, url)
  return <primitive alt={activeService}  object={gltf.scene} dispose={null} />;
}

export default Model

