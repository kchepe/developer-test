const my_function_2 = async (data, result) => {
  const newPromise = new Promise((resolve) => {
    setTimeout(() => {
      console.log("Running Function 2");
      resolve(result);
    }, 5000);
  });
  return newPromise;
};

export default my_function_2;
