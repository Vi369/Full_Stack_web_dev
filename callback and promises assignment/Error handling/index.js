async function fetchData(){
    try {
        const resp = await fetch("https://jsonplaceholder.typicode.com/posts/123456789");
        if (!resp.ok){
            throw new Error("fetching responce is not ok");
        }
        const data = await resp.json();
        console.log(data)
        return data;
    } catch (error) {
        console.log("fetchin Error: ",error)
    }
}

// call the function
fetchData()