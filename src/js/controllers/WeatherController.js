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
      
      this.clearElements();
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
      this.setInnerHTML(this.elementsHtml.asideRainChance, this.getAsideRainChance(data.forecast.forecastday[0].day.daily_chance_of_rain));
      // End aside elements

      // Color bar
      this.setColorBar(data.current.temp_c, this.elementsHtml.colorBar)
      // End color bar

      // Daily card component
      data.forecast.forecastday.map((item, index) => {
        this.elementsHtml.dayList.appendChild(
          this.createElementUlist(
            index,
            this.createDayListItemTitle(this.date.getDateWithoutYear(item.date)),
            this.createDayListItemImage(item.day.condition.icon),
            this.createDayListItemParagraph(item.day.avgtemp_c)
          )
        );
      }
      );
      // End daily card component
    });
  }

   clearElements() {
    this.elementsHtml.dayList.innerHTML = '';
  };

   createElementUlist(index, headingElement, imgElement, paragraph) {
    let newList = this.createDayListItem(index);
    newList.appendChild(headingElement);
    newList.appendChild(imgElement);
    newList.appendChild(paragraph);
    return newList;
  };

   getWeatherTitle(country) {
    switch (country) {
      case "Brazil":
        return "Brasil";
      default:
        return country;
    };
  };

   getAsideRainChance(rainChance){
    return `Percentual de chance que chova ${rainChance}%`
  };

   getAsideLocalWeather(name, region) {
    return `Clima hoje em ${name}, ${region}`;
  }

   getTemperature(temperature) {
    return `${temperature}°`;
  };

   getCurrentCondition(condition) {
    return condition;
  };

   getCloudsPercent(clouds) {
    return `Percentual de nuvens no céu é de ${clouds}%`
  }

   createDayListItem(index) {
    let li = document.createElement('li');
    li.classList.add(`day-list-item`);
    li.classList.add(`a${index}`);
    return li;
  }

   createDayListItemTitle(titleValue) {
    let h5 = document.createElement('h5');
    h5.classList.add(`day-list-item-title`);
    this.setInnerHTML(h5, titleValue)
    return h5;
  }

   createDayListItemImage(atributeValue) {
    let img = document.createElement('img')
    img.classList.add(`day-list-item-img`);
    img.classList.add(`set-icon`);
    img.setAttribute('src', atributeValue)
    return img;
  }

   createDayListItemParagraph(paragraphValue) {
    let paragraph = document.createElement('p');
    paragraph.classList.add('day-list-item-paragraph');
    this.setInnerHTML(paragraph, `${paragraphValue}°`)
    return paragraph;
  };
};
