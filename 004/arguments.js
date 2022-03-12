// This is the right place for an argument.
const args = process.argv.slice(2);

// list all arguments
args.forEach((val, index) => {
  console.log(`${index}: ${val}`)
})

// create an arguments object
const argsObject = {};
args.forEach((arg) => {
  if(arg.indexOf('=') > 0){
    const splits = arg.split('=');
    argsObject[splits[0]] = splits[1];
  }
})

console.log(argsObject);
