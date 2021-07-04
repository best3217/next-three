import React, { Suspense, useRef, useState,useEffect } from 'react';
import { Canvas, useThree } from '@react-three/fiber';
import { ToastContainer, toast } from 'react-toastify';
import { initialQuote, servicesAvailable } from '../lib/services';

import Content from '../components/Content';
import Header from '../components/header';
import Lights from '../components/Lights';
import Loader from '../components/Loader';

const removeSpaces = (string) => {
  let returnString = '';
  returnString = string.split(' ').join('');
  return returnString.replace(/\//g, '');
};

const Home = () => {
  const domContent = useRef();
  const [activeService, setActiveService] = useState('web-applications');
  const [activeServiceDescription, setActiveServiceDescription] =
    useState(initialQuote);
  const getFirstWord = (string) => {
    let returnString = '';
    returnString = string.replace(/ .*/, '');
    console.log(returnString);
    return returnString.toLowerCase();
  };
  return(
    <>
      <Header toast={toast} ToastContainer={ToastContainer} />
      <Canvas
        concurrent
        colorManagement
        camera={{ position: [0, 0, 120], fov: 70 }}
        description={activeServiceDescription}
      >
        <Lights />
        <Suspense fallback={null}>
          {/* WebApplication */}
          {activeService === 'web-applications' && (
            <Content
              domContent={domContent}
              bgColor="#dee9be"
              modelPath="/forest.gltf"
              meshPosition={[0, -35, 0]}
              groupPositionY={250}
              description={activeServiceDescription}
              activeService={activeService}
              status={0}
            >
              {servicesAvailable.map((service, id) => (
                <div
                  key={id}
                  className="services-catalog"
                  style={{ display: 'inline-block' }}
                >
                  <li
                    onClick={() => {
                      setActiveService(getFirstWord(service.title));
                      setActiveServiceDescription(service.description);
                    }}
                    key={id}
                    className={`services ${removeSpaces(service.title)}`}
                  >
                    {service.title}
                  </li>
                </div>
              ))}
              {}
            </Content>
          )}
          {/* SEO */}
          {activeService === 'search' && (
            <Content
              domContent={domContent}
              bgColor="#0b5190"
              modelPath="/littlePlanet.gltf"
              groupPositionY={250}
              meshPosition={[1000, -35, -1000]}
              description={activeServiceDescription}
              activeService={activeService}
              status={1}
            >
              {servicesAvailable.map((service, id) => (
                <div
                  key={id}
                  className="services-catalog"
                  style={{ display: 'inline-block' }}
                >
                  <li
                    onClick={() => {
                      setActiveService(getFirstWord(service.title));
                      setActiveServiceDescription(service.description);
                    }}
                    key={id}
                    className={`services ${removeSpaces(service.title)}`}
                  >
                    {service.title}
                  </li>
                </div>
              ))}
            </Content>
          )}
          {/* Automation */}
          {activeService === 'automation' && (
            <Content
              domContent={domContent}
              bgColor="#e96bec"
              modelPath="/robot.gltf"
              groupPositionY={250}
              meshPosition={[45, -15, 50]}
              description={activeServiceDescription}
              activeService={activeService}
              status={0}
            >
              {servicesAvailable.map((service, id) => (
                <div
                  key={id}
                  className="services-catalog"
                  style={{ display: 'inline-block' }}
                >
                  <li
                    onClick={() => {
                      setActiveService(getFirstWord(service.title));
                      setActiveServiceDescription(service.description);
                    }}
                    key={id}
                    className={`services ${removeSpaces(service.title)}`}
                  >
                    {service.title}
                  </li>
                </div>
              ))}
            </Content>
          )}
        </Suspense>
      </Canvas>

      <Loader />
    </>
  )
}

export default Home
