// I started by importing the function emailsList
const emailsList = require('./emailsList');

/*this function will simulate the sending of emails by browsing the list
of emails then with the predefined function setIntervale which will allow
us to control the repetitive execution time of a function which is 500 milliseconds
and to display on the console a message of confirmation of the sending of the emails.*/

const sendEmail = async (listEmail) => {
  let counter = 0;
  setInterval(() => {
    console.log(`the email was sent to ${listEmail[counter].email}`);
    counter++;
  }, 500);
};

console.log(sendEmail(emailsList));
