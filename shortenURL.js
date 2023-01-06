const elements =
  "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  
function shortenURL() {
  let result = "";

  for (let i = 0; i < 5; i++) {
    let letter = elements[Math.floor(Math.random() * elements.length)];
    result += letter;
  }

  return result;
}


module.exports = shortenURL