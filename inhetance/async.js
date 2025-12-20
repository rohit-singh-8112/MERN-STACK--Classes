function fetchUers(){
fetch('https://jsonplaceholder.typicode.com/users/1')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error))
  .finally(() => console.log('Fetch attempt finished.'));
}

fetchUers();

async function fetchUsersAsync() {
  console.log('Fetching users asynchronously...');
  try {
    
    let response = await fetch('https://jsonplaceholder.typicode.com/users');
    let data = await response.json();
    console.log(data);
  }catch(error){
    console.log(error);
  }
}

fetchUsersAsync() ;
