

fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json, charset=UTF-8'
    }
})
.then( response => response.json())
.then(data => console.log(data))
.catch(error => console.log(error))