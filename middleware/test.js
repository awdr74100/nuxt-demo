export default context => {
  console.log("middleware active", Date.now());
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("middleware promise", Date.now());
      resolve();
    }, 500);
  });
};
