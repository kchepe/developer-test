const my_function_3 = async (data, result) => {
  const newPromise = new Promise((resolve) => {
    setTimeout(() => {
      console.log("Runnin function 3");
      resolve(result);
    }, 5000);
  });
  return newPromise;
};

export default my_function_3;
