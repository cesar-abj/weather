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
      data.forecast.forecastday.map((item, index: number) => {
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
  };

  private clearElements() {
    this.elementsHtml.dayList.innerHTML = '';
  };

  private createElementUlist(index: number, headingElement: HTMLHeadingElement, imgElement: HTMLImageElement, paragraph: HTMLParagraphElement): HTMLLIElement {
    let newList = this.createDayListItem(index);
    newList.appendChild(headingElement);
    newList.appendChild(imgElement);
    newList.appendChild(paragraph);
    return newList;
  };

  private getWeatherTitle(country: string) {
    switch (country) {
      case "Brazil":
        return "Brasil";
      default:
        return country;
    };
  };

  private getAsideRainChance(rainChance: string): string{
    return `Percentual de chance que chova ${rainChance}%`
  };

  private getAsideLocalWeather(name: string, region: string): string {
    return `Clima hoje em ${name}, ${region}`;
  }

  private getTemperature(temperature: string): string {
    return `${temperature}°`;
  };

  private getCurrentCondition(condition: string): string {
    return condition;
  };

  private getCloudsPercent(clouds: string): string {
    return `Percentual de nuvens no céu é de ${clouds}%`
  }

  private createDayListItem(index: number): HTMLLIElement {
    let li = document.createElement('li');
    li.classList.add(`day-list-item`);
    li.classList.add(`a${index}`);
    return li;
  }

  private createDayListItemTitle(titleValue: string): HTMLHeadingElement {
    let h5 = document.createElement('h5');
    h5.classList.add(`day-list-item-title`);
    this.setInnerHTML(h5, titleValue)
    return h5;
  }

  private createDayListItemImage(atributeValue: string): HTMLImageElement {
    let img = document.createElement('img')
    img.classList.add(`day-list-item-img`);
    img.classList.add(`set-icon`);
    img.setAttribute('src', atributeValue)
    return img;
  }

  private createDayListItemParagraph(paragraphValue: string): HTMLParagraphElement {
    let paragraph = document.createElement('p');
    paragraph.classList.add('day-list-item-paragraph');
    this.setInnerHTML(paragraph, `${paragraphValue}°`)
    return paragraph;
  };
};
