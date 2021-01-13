export default class WeatherViews{
  setInnerHtmlOfElement(element, weatherContent){
    element.innerHTML = weatherContent;
  };
  
  getGreeting(param){
    const greetHour = new Date(param).getHours();
    const hourMin = Math.min(0);

    if (greetHour >= hourMin && greetHour <= 5){
      return "Boa madrugada!"
    } else if (greetHour >= 6 && greetHour <= 12){
      return "Bom dia!"
    }else if (greetHour >= 13 && greetHour <= 18){
      return "Boa tarde!"
    } else {
      return "Boa noite!"
    };
  };

  setColorBar(temperature, element){

    if(Number(temperature) < 20){
      element.classList.remove("hot-division-color");
      element.classList.add("cold-division-color");
    } else {
      element.classList.remove("cold-division-color");
      element.classList.add("hot-division-color");
    };
  };
};