// timing
const sleep = (milliseconds) => {
    return new Promise((resolve) => setTimeout(resolve, milliseconds));
  };
  
  const timer = (ms) => new Promise((res) => setTimeout(res, ms));