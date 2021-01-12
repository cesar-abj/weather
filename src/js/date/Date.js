export default class {constructor() { null.prototype.__init.call(this); }
   __init() {this.date = new Date()}
  
  get getDate(){
    let day = this.date.getDate();
    let mounth = (this.date.getMonth() + 1);
    let year = this.date.getFullYear();
    return `${day}/${mounth}/${year}`;
  };

  get getTime(){
    let hours = this.date.getHours();
    let minutes = this.date.getMinutes();
    return `${hours}:${minutes}`
  }
}