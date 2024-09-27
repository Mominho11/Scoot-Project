const readline = require('readline');
const JohnemonMaster = require('./JohnemonMaster'); // Replace 'your_classes_filename' with the actual filename
const Johnemon = require('./Johnemon')
const JohnemonWorld = require ('./JohnemonWorld')
const fs = require('fs');


const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
path = './savegame.json'

//----------------------------------------------------------------------------------------------------------------------------------------

function askForName(nextStep) {
  rl.question('Enter your Master name : ', (pseudo) => {
    const master = new JohnemonMaster(pseudo);
    console.log(`Welcome in the Johnemon World ${master.name}`);  
    nextStep(master); 
    });
}

//----------------------------------------------------------------------------------------------------------------------------------------

function proposeFirstJohnemon(master){
    
  const starters = [];
  for (i = 0; i < 3; i++){
    const johnemonStarter = new Johnemon();
    starters.push(johnemonStarter);
  }
  console.log(`There are your 3 starters : ${starters.map(j => j.name).join(', ')}`);
  chooseStarter(starters, master);
}

//----------------------------------------------------------------------------------------------------------------------------------------

function chooseStarter(starters, master){
      rl.question(`Which starter do you want to begin with : `, (choice) => {
        switch (choice){
        case '1' : 
          const selectedJohnemon1 = starters[+choice - 1];
          console.log(`Good choice, you'll start with ${selectedJohnemon1.name}`);
          master.johnemonCollection.push(selectedJohnemon1);
          saveGame(master);
          break;
        case '2' : 
          const selectedJohnemon2 = starters[+choice - 1];
          console.log(`Good choice, you'll start with ${selectedJohnemon2.name}`);
          master.johnemonCollection.push(selectedJohnemon2);
          saveGame(master);
          break;
        case '3' : 
          const selectedJohnemon3 = starters[+choice - 1];
          console.log(`Good choice, you'll start with ${selectedJohnemon3.name}`);
          master.johnemonCollection.push(selectedJohnemon3);
          saveGame(master);
          break;
        default : console.log("Incorrect entry. Please choose 1 the 3 starters")
        chooseStarter(starters, master);
    }
  });
}

//----------------------------------------------------------------------------------------------------------------------------------------

function saveGame(master, day, logs) {
  const gameData = {
    saved_on: new Date().toISOString(),  // Date au format ISO
    JohnemonMaster: {
      name: master.name,
      johnemonCollection: master.johnemonCollection.map(johnemon => ({
        name: johnemon.name,
        level: johnemon.level,
        experienceMeter: johnemon.experienceMeter,
        attackRange: johnemon.attackRange,
        defenseRange: johnemon.defenseRange,
        healthPool: johnemon.healthPool,
        maxHealth: johnemon.maxHealth,
        catchPhrase: johnemon.catchPhrase
      })),
      healingItems: master.healingItems,
      reviveItems: master.reviveItems,
      JOHNEBALLS: master.JOHNEBALLS
    },
    day: day,
    logs: logs
  };

  const gameDataJson = JSON.stringify(gameData, null, 2); // null, 2 pour une meilleur lisibilité

  fs.writeFile('savegame.json', gameDataJson, (err) => {
    if (err) {
      console.error('Error while saving :', err);
    } else {
      console.log('Game saved correctly !');
    }
  });
}

//----------------------------------------------------------------------------------------------------------------------------------------

function startGame(gameData) {
  rl.question('Voulez-vous charger votre partie ? (yes/no) ', (choice) => {
    if (choice.toLowerCase() === 'yes') {
      fs.readFile(path, 'utf8', (err, data) => {
        if (err) {
          if (err.code === 'ENOENT') {
            console.log('No save found, starting a new game.');
          } else {
            console.error('Error while reading file:', err);
          }
          // Commencez un nouveau jeu si le fichier est introuvable ou en cas d'erreur
          askForName((master) => {
          proposeFirstJohnemon(master);
          });
          return; // Évitez de continuer après une erreur
        }

        try {
          const gameData = JSON.parse(data); // Essaye de parser les données JSON
          console.log('File loaded correctly.');
          console.log(`Welcome Back ${gameData.JohnemonMaster.name}`)
          console.log('Johnemon Collection:', gameData.JohnemonMaster.johnemonCollection); // pour afficher le contenu de la collection
          continueGame(gameData);  
        } 
        catch (erreur) {
          console.error('Error parsing JSON:', erreur); // commencer une nouvelle partie si bug
          askForName((master) => {
          proposeFirstJohnemon(master);
          continueGame(gameData);
          });
        }
      });
    } else {
      // Si l'utilisateur ne veut pas charger une partie, commence une nouvelle
      askForName((master) => {
      proposeFirstJohnemon(master);
      continueGame(gameData);
      });
    }
  });
function continueGame(gameData){
const world = new JohnemonWorld();
const action = new JohnemonMaster();
console.log('Day : ',world.day);
  rl.question('What do you want to do ? Revive, Heal or Release a johnemon ?', (choice) => {
    switch (choice){
      case 'revive':
        gameData.JohnemonMaster.johnemonCollection.forEach((johnemon, index) => {
        console.log(`${index + 1}: ${johnemon.name}`);
        });
        rl.question('Select a johnemon : ', (select) => {
          const index = parseInt(select) - 1;
          if (index >= 0 && index < gameData.JohnemonMaster.johnemonCollection.length) {
            const selectedJohnemon = gameData.JohnemonMaster.johnemonCollection[index];
            console.log(`You have selected: ${selectedJohnemon.name}`);
            action.reviveJohnemon(selectedJohnemon);
            console.log(gameData.JohnemonMaster.johnemonCollection);
            saveGame(gameData.JohnemonMaster)
          } 
          else {
            console.log("Invalid selection. Please choose a valid Johnemon.");
            continueGame(gameData);
          }
        })
        break;
        case 'heal' : 
        gameData.JohnemonMaster.johnemonCollection.forEach((johnemon, index) => {
        console.log(`${index + 1}: ${johnemon.name}`);
        });
        rl.question('Select a johnemon : ', (select) => {
          const index = parseInt(select) - 1;
          if (index >= 0 && index < gameData.JohnemonMaster.johnemonCollection.length) {
            const selectedJohnemon = gameData.JohnemonMaster.johnemonCollection[index];
            console.log(`You have selected: ${selectedJohnemon.name}`);
            action.healJohnemon(selectedJohnemon);
            console.log(gameData.JohnemonMaster.johnemonCollection);
            saveGame(gameData.JohnemonMaster)
            
          } 
          else {
            console.log("Invalid selection. Please choose a valid Johnemon.");
            continueGame();
          }
        })
        break;
        case 'release' : 
        gameData.JohnemonMaster.johnemonCollection.forEach((johnemon, index) => {
        console.log(`${index + 1}: ${johnemon.name}`);
        });
        rl.question('Select a johnemon : ', (select) => {
          const index = parseInt(select) - 1;
          if (index >= 0 && index < gameData.JohnemonMaster.johnemonCollection.length) {
            const selectedJohnemon = gameData.JohnemonMaster.johnemonCollection[index];
            console.log(`You have selected: ${selectedJohnemon.name}`);
            action.releaseJohnemon(selectedJohnemon);
            console.log(gameData.JohnemonMaster.johnemonCollection);
            saveGame(gameData.JohnemonMaster)
            
          } 
          else {
            console.log("Invalid selection. Please choose a valid Johnemon.");
            continueGame();
          }
        });
        break;
    }
  })
}
}





startGame()


