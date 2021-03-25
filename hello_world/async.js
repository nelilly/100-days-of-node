const doSomethingAsync = () => {
    return new Promise(resolve => {
      setTimeout(() => resolve('I did something'), 3000)
    })
  }
  
  const doSomething = async () => {
    console.log(await doSomethingAsync())
  }
  
  doSomething()
  console.log('Before')
  console.log('After')


  const EventEmitter = require('events')

  const eventEmitter = new EventEmitter()