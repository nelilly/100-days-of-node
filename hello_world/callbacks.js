const myFunction = () => {
    console.log("Hi")
    setTimeout(myFunction, 1000)
}

setTimeout(myFunction, 1000)