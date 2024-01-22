import emailjs from '@emailjs/browser';

const sendEmail = (templateParams) => {
  console.log('Sending email with params:', templateParams);

  emailjs.send('service_y3kahrd', 'template_6ih4vq8', templateParams, '3FFU4WATpppp1yugc').then(
    (response) => {
      console.log('SUCCESS!', response.status, response.text);
    },
    (error) => {
      console.log('FAILED...', error);
      callback(error, null);
    }
  );
};

export default sendEmail;
