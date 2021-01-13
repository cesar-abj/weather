export default class DateHelper{

  getDateWithoutYear(dateParam){

    let date = new Date(dateParam);
    let atualDay = new Date().getDate();
    let day = `${date.getDate() < 10 ? '0' : '' }${date.getDate() + 1}`;
    let month = `${(date.getMonth() + 1) < 10 ? '0' : ''}${date.getMonth() + 1}`;

    if(date.getDate() + 1 === atualDay){
      return 'Hoje';
    } else {
      return `${day}/${month}`; 
    };
  };

  getDate(dateParam){
    
    let date = new Date(dateParam);
    let day = `${date.getDate() < 10 ? '0' : ''}${date.getDate()}`;
    let month = `${(date.getMonth() + 1) < 10 ? '0' : ''}${date.getMonth() + 1}`;
    let year = date.getFullYear();

    return `${day}/${month}/${year}`;
  };

  getTime(timeParam){

    const time = new Date(timeParam);
    let hours = time.getHours();
    let minutes = `${time.getMinutes() < 10 ? '0' : ''}${time.getMinutes()}`;

    return `${hours}:${minutes} - Horário local`;
  };
};