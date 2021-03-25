const done = true

const myPromise = (params) => {
    new Promise((resolve, reject) => {
            const itWorked = "Buggah works!"
            const fail = "Sorry cuz."
        done ? resolve(itWorked) : reject(fail)
        })
}

myPromise(params)
  .then(data => console.log(data))
  .catch(err => console.log(err))