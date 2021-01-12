import Api from '../api/Api.js';
import ElementsHtml from '../elements-html/ElementsHtml.js';
import WeatherViews from '../views/WeatherViews.js';
import DateHelper from '../helpers/DateHelper.js';

export default class WeatherController {

  // class instances
  private api = new Api();
  private weatherViews = new WeatherViews();
  private elementsHtml = new ElementsHtml();
  readonly date = new DateHelper();

  // declaration shortcuts
  readonly setInnerHTML = this.weatherViews.setInnerHtmlOfElement.bind(document);
  readonly setColorBar = this.weatherViews.setColorBar.bind(document);

  constructor(url: string) {
    
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
  };  
  
  getWeatherTitle(country: string){
    switch(country){
      case "Brazil":
        return "Brasil";
      default:
        return country;
    }
  };

  getAsideLocalWeather(name: string, region: string):string{
    return `Clima hoje em ${name}, ${region}`
  }

  getTemperature(temperature: string):string{
    return `${temperature}°`
  };

  getCurrentCondition(condition: string):string{
    return condition;
  };

  getCloudsPercent(clouds: string):string{
    return `Percentual de nuvens no céu é de ${clouds}%`
  }
};
