const my_function_1 = async (data, result) => {
  const newPromise = new Promise((resolve) => {
    setTimeout(() => {
      console.log("Running function 1");
      resolve(result);
    }, 5000);
  });
  return newPromise;
};

export default my_function_1;
