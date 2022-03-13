const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question('What is your name? ', name => {
  console.log(`Hi ${name}!`);
  readline.question('What is your quest? ', quest => {
    console.log(`${quest}`);
    readline.question('What is the answer to life, the Universe, and everything? ', answer => {
      if(answer === '42'){
        console.log(`"${answer}," said Deep Thought, with infinite majesty and calm.`);
      } else {
        console.log(`${answer}? I think the problem, to be quite honest with you, is that you've never actually known what the question is.`);
      }
      readline.close();
    });
  });
});
