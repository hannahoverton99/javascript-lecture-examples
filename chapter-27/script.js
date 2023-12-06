/*** Pet Pics ***/

/*
    Some practice on using fetch - utilizing two different public APIs (linked below)
*/

window.addEventListener('load', function () {
  const result = document.getElementById('result');

  document.addEventListener('click', function (event) {

    // RANDOM DOG PIC courtesy of https://dog.ceo/dog-api/
    // Use the API documentation to look up the correct endpoint for a random photo
    if (event.target.id === 'dog-button') {
      
      // TODO: Fetch data

      // TODO: Put image on page

    }

    // Challenge! Use async/await syntax for this one.
    // RANDOM CAT PIC courtesy of https://thecatapi.com/
    // You will need to request a free key
    // Use the API documentation to look up the correct endpoint for a random photo
    // Note: a header will be required!
    if (event.target.id === 'cat-button') {

      // TODO: Write an async function to fetch data and put image on page

      // TODO: Call your async function to execute the fetch
      
    }
  });
});