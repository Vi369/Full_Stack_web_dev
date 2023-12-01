async function combineApiData(){
    let todoData, postData;
    await Promise.all([
        fetch("https://jsonplaceholder.typicode.com/todos/1")
        .then(response=> response.json())
        .then(data=> todoData = data),

        fetch("https://jsonplaceholder.typicode.com/posts/1")
        .then(response => response.json())
        .then(data=> postData = data)]);

    return {
        todo: todoData,
        post: postData
    }
}

combineApiData().then(result=> console.log(result));