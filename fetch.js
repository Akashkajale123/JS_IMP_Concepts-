// Making a simple GET request using fetch
fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => {
    // Check if the request was successful (status code 200)
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    // Parse the JSON data in the response
    return response.json();
  })
  .then(data => {
    // Handle the parsed data
    console.log(data);
  })
  .catch(error => {
    // Handle errors that occurred during the fetch
    console.error('Fetch error:', error);
  });
