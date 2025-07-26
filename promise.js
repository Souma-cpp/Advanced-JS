function fetchdata() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let flag = true;
      if (flag) {
        resolve("data fetcehed successfully");
      } else {
        reject("data could not be fetched");
      }
    }, 5000);
  });
}

fetchdata()
  .then((data) => {
    console.log(data);
    return true;
  })
  .then((v) => {
    console.log(`the boolean value is : ${v}`)
  })
  .catch((error) => {
    console.log(error);
  });
