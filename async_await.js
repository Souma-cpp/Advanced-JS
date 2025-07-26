function fetchdata() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        username: "Chai aur code",
        url: "https://chaicode.com",
      });
    }, 3000);
  });
}

async function getuserdata() {
  console.log("fetching the user data ...");
  try {
    const userdata = await fetchdata();
    console.log(userdata);
    console.log("welcome to the website user");
  } catch (error) {
    console.log("error happened while fetching the data");
    console.log("the error is : ", error);
  }
}

getuserdata();
