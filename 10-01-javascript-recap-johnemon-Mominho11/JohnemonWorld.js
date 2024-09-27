const JohnemonArena = require('./JohnemonArena')
const Johnemon = require('./Johnemon')



class JohnemonWorld {
  constructor() {
   this.day = new Date();
   this.logs = [];
  }

  oneDayPasses(){
    this.day += 1; 
  }
  
  randomizeEvent(){
    const events = [
      'Nothing happened today, the day passed.',
      'A wild Johnemon just appeared, would you fight him?'
    ];
  
    const randomIndex = Math.floor(Math.random() * events.length);
    return (events[randomIndex]);
  }

  addLog(newLog){
    
  }
}


module.exports = JohnemonWorld