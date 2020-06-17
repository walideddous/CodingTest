// Write function that will allow us to get table of 1 Million Emails
const emailsList = () => {
  var emailTable = [];
  for (let i = 1; i <= 1000000; i++) {
    emailTable.push({ email: `email${i}.gmail.com` });
  }
  return emailTable;
};

module.exports = emailsList();
