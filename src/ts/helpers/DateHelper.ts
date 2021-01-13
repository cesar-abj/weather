export default class DateHelper{

  getDate(dateParam: Date){
    
    let date = new Date(dateParam);
    let day = `${date.getDate() < 10 ? '0' : ''}${date.getDate()}`;
    let mounth = `${(date.getMonth() + 1) < 10 ? '0' : ''}${date.getMonth() + 1}`;
    let year = date.getFullYear();

    return `${day}/${mounth}/${year}`;
  };

  getTime(timeParam: Date){

    const time = new Date(timeParam);
    let hours = time.getHours();
    let minutes = `${time.getMinutes() < 10 ? '0' : ''}${time.getMinutes()}`;

    return `${hours}:${minutes} - Horário local`;
  }
}