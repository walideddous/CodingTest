// I started by importing the function emailsList
const emailsList = require('./emailsList');

/*this function will simulate the sending of emails by browsing the list
of emails then with the predefined function setIntervale which will allow
us to control the repetitive execution time of a function which is 500 milliseconds
and to display on the console a message of confirmation of the sending of the emails.*/

/* explains how the sendEmail function works:
=> declared a counter has 0 
=> in the predefined function setInterval we apply a If condition 
if the counter is shorter than the length of the emailsList
 we display the message on the console otherwise we stop the function setIntervale 
 with the predefined function clearIntervale
=> 500 is 500 milliseconds is the callback function execution time in setIntervale. */

const sendEmail = (listEmail) => {
  let counter = 0;
  const send = setInterval(() => {
    counter < listEmail.length
      ? console.log(`the email was sent to ${listEmail[counter].email}`)
      : clearInterval(send);
    counter++;
  }, 500);
};

console.log(sendEmail(emailsList));
