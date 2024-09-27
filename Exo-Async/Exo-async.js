const readline = require ('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// function displayWord(word) {
//   let i = 0; 
//   const interval = setInterval(() => {
//     if (i < word.length) { 
//       console.log(word[i]);
//       i++; // Incrémenter le compteur
//     } else {
//       clearInterval(interval); // Arrêter l'intervalle une fois terminé
//     }
//   }, 1000); // 1000 correspond à des milisecondes, donc 1 seconde. 
// }
// console.log(displayWord('Bonjour'));


  function bingo(){
    return Math.floor(Math.random() * 10) + 1;
  }

  function lose(){
    console.log('délai expiré');
    rl.close();
  }

  function game(){
    answer = bingo();
    chrono = setTimeout(lose, 10000);

    function guess(){
      rl.question('Devinez le nombre: ', (number) => {
      if (+number > answer){
        console.log('Trop grand');
        guess();
      }
      else if (+number < answer){
        console.log('Trop petit');
        guess();
      }
      else if (+number == answer){
        console.log('BINGO');
        clearTimeout(chrono);
        rl.close();
      }
    });
}
guess();
}
game();

