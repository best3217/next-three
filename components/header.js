import React,{useState} from "react";
import { ToastContainer } from "react-toastify";
import ContactModal from "./Modal";
import Image from 'next/image'
import logo from '../public/transparentLogo.png'
 
export default function Header({toast, ToastContainer}) {
   const [modalOpen, setModalOpen] = useState(false);

   const setModalState = () => {
     setModalOpen(!modalOpen);
   };
  return (
    <header>
      <div className="header-inner">
        <Image src={logo} alt="Picture of the author" width={150} height={150} />
        <nav>
          <ul>
            <ContactModal
              ToastContainer={ToastContainer}
              toast={toast}
              modalOpen={modalOpen}
              setModalState={setModalState}
            />
            <li className="btn">
              <button
                id="contact-us"
                onClick={() => {
                  setModalState();
                }}
              >
                Contact Us
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
