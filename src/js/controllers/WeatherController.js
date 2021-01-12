import Api from '../api/Api.js';
import ElementsHtml from '../elements-html/ElementsHtml.js';
import WeatherViews from '../views/WeatherViews.js';
import DateHelper from '../helpers/DateHelper.js';

export default class WeatherController {

  // class instances
   __init() {this.api = new Api()}
   __init2() {this.weatherViews = new WeatherViews()}
   __init3() {this.elementsHtml = new ElementsHtml()}
   __init4() {this.date = new DateHelper()}

  // declaration shortcuts
   __init5() {this.setInnerHTML = this.weatherViews.setInnerHtmlOfElement.bind(document)}
   __init6() {this.setColorBar = this.weatherViews.setColorBar.bind(document)}

  constructor(url) {;WeatherController.prototype.__init.call(this);WeatherController.prototype.__init2.call(this);WeatherController.prototype.__init3.call(this);WeatherController.prototype.__init4.call(this);WeatherController.prototype.__init5.call(this);WeatherController.prototype.__init6.call(this);
    
    this.api.fetchApi(url).then(data => {

      // set elements views
      // Aside elements
      this.setInnerHTML(this.elementsHtml.asideTitle, this.getWeatherTitle(data.location.country));
      this.setInnerHTML(this.elementsHtml.asideDate, this.date.getDate(data.location.localtime));
      this.setInnerHTML(this.elementsHtml.asideHour, this.date.getTime(data.location.localtime));
      this.setInnerHTML(this.elementsHtml.asideGreeting, this.weatherViews.getGreeting(data.location.localtime));
      this.setInnerHTML(this.elementsHtml.asideLocalWeather, this.getAsideLocalWeather(data.location.name, data.location.region))
      this.setInnerHTML(this.elementsHtml.asideTemperature, this.getTemperature(data.current.temp_c));
      this.setInnerHTML(this.elementsHtml.asideWeatherDescription, this.getCurrentCondition(data.current.condition.text));
      this.setInnerHTML(this.elementsHtml.asideClouds, this.getCloudsPercent(data.current.cloud));
      // End aside elements

      // Color bar
      this.setColorBar(data.current.temp_c, this.elementsHtml.colorBar)
      // End color bar
    });
  }  
  
  getWeatherTitle(country){
    switch(country){
      case "Brazil":
        return "Brasil";
      default:
        return country;
    }
  };

  getAsideLocalWeather(name, region){
    return `Clima hoje em ${name}, ${region}`
  }

  getTemperature(temperature){
    return `${temperature}°`
  };

  getCurrentCondition(condition){
    return condition;
  };

  getCloudsPercent(clouds){
    return `Percentual de nuvens no céu é de ${clouds}%`
  }
};
