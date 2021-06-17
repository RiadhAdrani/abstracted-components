const generateRandomKey = () => {
     const x = `${Math.random() * 10000}${+Date.now()}${+Math.random() * 10000}`;
     // console.log(x);
     return x;
};

export default generateRandomKey;
