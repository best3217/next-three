import { faFacebookSquare } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import dynamic from 'next/dynamic';
import emailjs from 'emailjs-com';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import Modal from 'react-modal';
import {
  emailValidation,
  messageValidation,
  nameValidation,
  phoneNumberValidation,
} from './FormValidation';

// const emailjs = dynamic(() => import('emailjs-com'))
const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    width: '30%',
    transform: 'translate(-50%, -50%)',
    zIndex: '99999999999999999999999999',
    background: '#000000b5',
  },
};

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement('#root');

function ContactModal({ modalOpen, setModalState, toast, ToastContainer }) {
  const { register, handleSubmit, reset } = useForm();
  const [nameError, setNameError] = useState(' ');
  const [phoneError, setphoneError] = useState(' ');
  const [emailError, setEmailError] = useState(' ');
  const [messageError, setMessageError] = useState(' ');
  // const [noErrors, setNoErrors] = useState(false);
  const toastifySuccess = () => {
    toast(' ✅ We`ll Be in Contact With You Soon', {
      position: 'top-right',
      autoClose: 5000,
      closeButton: false,

      closeOnClick: true,
      pauseOnHover: true,
      draggable: false,
      className: 'submit-feedback success',
      toastId: 'notifyToast',
    });
  };

  const onSubmit = async (data) => {
    const nameErr = nameValidation(data.name);
    const phoneErr = phoneNumberValidation(data.phoneNumber);
    const emailErr = emailValidation(data.email);
    const messageErr = messageValidation(data.message);
    setNameError(nameErr);
    setphoneError(phoneErr);
    setEmailError(emailErr);
    setMessageError(messageErr);
    let noErrors = !nameErr && !phoneErr && !emailErr && !messageErr;

    if (noErrors) {
      try {
        const templateParams = {
          name: data.name,
          email: data.email,
          number: data.phoneNumber,
          message: data.message,
        };
        console.log(emailjs)
        await emailjs.send(
          process.env.REACT_APP_SERVICE_ID,
          process.env.REACT_APP_TEMPLATE_ID,
          templateParams,
          process.env.REACT_APP_USER_ID
        );
        reset();
        toastifySuccess();
      } catch (e) {
        console.log(e);
      }
    }
  };

  useEffect(() => {}, [nameError]);
  return (
    <div>
      <Modal
        isOpen={modalOpen}
        onRequestClose={setModalState}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <button
          id="close-button"
          className="close-button"
          onClick={() => setModalState()}
        >
          X
        </button>
        <button
          id="facebook-button"
          className="facebook-button"
          onClick={() => {
            window.open('https://www.facebook.com/YourCyberOni/', '_blank');
          }}
        >
          {' '}
          <FontAwesomeIcon size="lg" color="#1877f2" icon={faFacebookSquare} />
        </button>

        <div className="ContactForm">
          <div className="container">
            <div className="row">
              <div className="col-12 text-center">
                <div className="contactForm">
                  <form onSubmit={handleSubmit(onSubmit)} autoComplete="on">
                    <label>First And Last Name</label>
                    <input autoFocus {...register('name')} />
                    {nameError.length > 5 && (
                      <p className="error">{nameError}</p>
                    )}
                    <label>Phone Number</label>
                    <input type="number" {...register('phoneNumber')} />
                    {phoneError.length > 5 && (
                      <p className="error">{phoneError}</p>
                    )}
                    <label>Email Address</label>
                    <input type="email" {...register('email')} />
                    {emailError.length > 5 && (
                      <p className="error">{emailError}</p>
                    )}
                    <label>Message</label>

                    <textarea
                      rows="2.5"
                      cols="60"
                      name="description"
                      {...register('message')}
                    />

                    {messageError.length > 5 && (
                      <p className="error">{messageError}</p>
                    )}

                    <br></br>
                    <input type="submit" />
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal>
      <ToastContainer />
    </div>
  );
}

export default ContactModal;
