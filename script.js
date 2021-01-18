// make a request to items.json file
function calculate() {
    // fetch is built into browser
        // getting data from server is a Get request
        // pulling data from server is a Post request
        // Updating data to a server is a Pull request
        // Deleting data is a delete request

    // This runs asynchronosly in the background
        // .then() is so we can return a promise
    fetch('items.json')
        .then(res => res.json())
        .then(data => console.log(data)); 
}

calculate();