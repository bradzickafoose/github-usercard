// Step Four: Build out a basic DogCard component, we should only concern ourselves with displaying the image at this point.
function DogCard(imgUrl) {
    const 
      newCard = document.createElement("div"),
      newImage = document.createElement("img"),
      breed = document.createElement("h3");
  
    breed.textContent = "Breed: Mastiff";
    newImage.src = imgUrl;
    newImage.classList.add("dog-image");
    newCard.classList.add("dog-card");
    newCard.appendChild(newImage);
    newCard.appendChild(breed);
  
    // add this functionality later
    newCard.addEventListener("click", () => {
      newCard.classList.toggle("selected");
    });
  
    return newCard;
  }
  
  const entryPoint = document.querySelector(".entry");
  
  // Step Three: talk about HTTP, requesting data from a server, and axios
  // Write the code to request data from this address (or whatever breed you want :) )
  // console.log the response and inspect it in the console, note that the response data is going to be different for every server.
  // move onto step 4 with the response data in mind.
  
  // With get(), we send a GET request.
  axios
    .get("https://dog.ceo/api/breed/mastiff/images/random/12")
    .then(response => {
      console.log(response);
      response.data.message.forEach(item => {
        const newDog = DogCard(item);
        entryPoint.appendChild(newDog);
      });
    })
    .catch(error => {
      console.log("The data was not returned", error);
    });
  
  /* Once an HTTP request is made, Axios returns a promise that is either fulfilled or rejected, depending on the response from the backend service. To handle the result, you can use the then() method */
  
  /* If the promise is fulfilled, the first argument of then() will be called; if the promise is rejected, the second argument will be called. */
  