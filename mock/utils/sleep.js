module.exports = number =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, number);
  });
