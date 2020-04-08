const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What is your name? ', (answer) => {
  let name = answer;
   rl.question('What is your favorite activity? ', (answer) => {
     let activity = answer;
     rl.question('What is your favorite song? ', (answer) => {
      let song = answer;
      rl.question('What is your favorite meal? ', (answer) => {
        let meal = answer;
        rl.question('What is your favorite food? ', (answer) => {
          let food = answer;
          rl.question('What is your favorite sport? ', (answer) => {
            let sport = answer;
            rl.question('What is your favorite superpower? ', (answer) => {
              let superpower = answer;
                console.log(`${name} spends their time ${activity} while listening to ${song}. They enjoy eating ${food} for ${meal} and watch ${sport}. Their superpower is ${superpower}`);
                rl.close();
            })
          })
        })
      })
     })
   });
});