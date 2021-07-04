const hasCharacter = /[a-zA-Z]/g;

export const nameValidation = function nameValidation(name) {
  if (name.length > 30) {
    return 'This field only accepts 30 characters';
  }
  if (name.length < 5) {
    return 'This field requires five characters';
  }
  if (/\d/.test(name)) {
    return ' This field cannot contain numbers';
  }
  if (!name.includes(' ')) {
    return 'This Field Requires A Space';
  }

  return false;
};

export const phoneNumberValidation = (number) => {
    if (number.length !== 10 ) {
    return 'A Phone Number Must be ten digits';
  }
  if (hasCharacter.test(number)) {
    return 'A Phone Number Shouldnt Contain A Letter';
  }
  return false;
};

export const emailValidation = (email) => {
  if (email.length > 30) {
    return 'This field only accepts 30 characters';
  }
  if (email.length < 5) {
    return 'This field requires five characters';
  }
  if (!email.includes('@')) {
    return 'Email Addresses require @ Symbol';
  }

  return false;
};

export const messageValidation = (message) => {
  if (message.length > 500) {
    return 'This field only accepts 500 characters';
  }
  if (message.length < 5) {
    return 'This field requires five characters';
  }


  return false;
};
