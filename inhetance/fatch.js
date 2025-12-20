// Fetch data from an API
async function fetchData(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Fetch error:', error);
  }
}

// Usage example
fetchData('https://api.example.com/data')
  .then(data => console.log(data))
  .catch(error => console.error(error));