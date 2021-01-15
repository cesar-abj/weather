import ElementsHtml from '../elements-html/ElementsHtml.js';
import WeatherViews from '../views/WeatherViews.js';

export default class MethodsController {

  protected weatherViews = new WeatherViews();
  protected elementsHtml = new ElementsHtml();

  // declaration shortcuts
  readonly setInnerHTML = this.weatherViews.setInnerHtmlOfElement.bind(document);
  readonly setColorBar = this.weatherViews.setColorBar.bind(document);

  // generic method
  protected clearElements(...[elements]): void {
    elements.map((item: Element) => item.innerHTML = '');
  };

  protected createElementUlist(newListElement: HTMLLIElement, headingElement: HTMLHeadingElement, imgElement: HTMLImageElement, paragraph: HTMLParagraphElement): HTMLLIElement {
    newListElement.appendChild(headingElement);
    newListElement.appendChild(imgElement);
    newListElement.appendChild(paragraph);
    return newListElement;
  };

  getSliceOfArray(data) {  // bad method cause dont have inference of type on param and return
    let atualHour = new Date().getHours();
    let initHour = atualHour + 1;
    let finalHour = atualHour + 4;
    let dataArray = data.slice(initHour, finalHour);
    return dataArray;
  }

  // end generic method

  // aside block
  protected getWeatherTitle(country: string): string {
    switch (country) {
      case "Brazil":
        return "Brasil";
      default:
        return country;
    };
  };

  protected getAsideRainChance(rainChance: string): string {
    return `Percentual de chance que chova ${rainChance}%`
  };

  protected getAsideLocalWeather(name: string, region: string): string {
    return `Clima hoje em ${name}, ${region}`;
  }

  protected getTemperature(temperature: string): string {
    return `${temperature}°`;
  };

  protected getCurrentCondition(condition: string): string {
    return condition;
  };

  protected getCloudsPercent(clouds: string): string {
    return `Percentual de nuvens no céu é de ${clouds}%`
  }
  // end aside block

  // hour list block
  protected createHourListItem(index: number): HTMLLIElement {
    let li = document.createElement('li');
    li.classList.add('hour-list-item');
    li.classList.add(`b${index}`);
    return li;
  }

  protected createHourListItemTitle(titleValue: string): HTMLHeadingElement {
    let h5 = document.createElement('h5');
    h5.classList.add('hour-list-item-title');
    this.setInnerHTML(h5, titleValue)
    return h5;
  }

  protected createHourListItemImage(atributeValue: string): HTMLImageElement {
    let img = document.createElement('img')
    img.classList.add('hour-list-item-icon');
    img.classList.add('set-icon');
    img.setAttribute('src', atributeValue)
    return img;
  }

  protected createHourListItemParagraph(paragraphValue: string): HTMLParagraphElement {
    let paragraph = document.createElement('p');
    paragraph.classList.add('hour-list-item-paragraph');
    this.setInnerHTML(paragraph, `${paragraphValue}°`)
    return paragraph;
  };
  // end hour list block

  // day list block

  protected createDayListItem(index: number): HTMLLIElement {
    let li = document.createElement('li');
    li.classList.add('day-list-item');
    li.classList.add(`a${index}`);
    return li;
  }

  protected createDayListItemTitle(titleValue: string): HTMLHeadingElement {
    let h5 = document.createElement('h5');
    h5.classList.add('day-list-item-title');
    this.setInnerHTML(h5, titleValue)
    return h5;
  }

  protected createDayListItemImage(atributeValue: string): HTMLImageElement {
    let img = document.createElement('img')
    img.classList.add('day-list-item-img');
    img.classList.add('set-icon');
    img.setAttribute('src', atributeValue)
    return img;
  }

  protected createDayListItemParagraph(paragraphValue: string): HTMLParagraphElement {
    let paragraph = document.createElement('p');
    paragraph.classList.add('day-list-item-paragraph');
    this.setInnerHTML(paragraph, `${paragraphValue}°`)
    return paragraph;
  };
  // end day list block

  // local weather component

  getlocalTitle(localTitleParam: string): string {
    return `Clima em ${localTitleParam} hoje`;
  };

  getThermicSensation(sensationParam: string): string {
    return `${sensationParam}°`;
  };

  getSunTimeOn(sunParam: string): string {
    return `${sunParam}`;
  };

  // end local weather component

  // table component
  getMinMax(min: string, max: string): string {
    return `${min}°/${max}°`;
   };

  getHumidity(humidity: string): string {
    return `${humidity}%`;
   };

  getAirPressure(airPressure: string): string {
    return `${airPressure} mb`
   };

  getUV(uv: string): string {
    return `${uv}`;
   };

  getWindVel(windVel: string): string {
    return `${windVel} Mph`;
   };

  getVisibility(visibility: string): string {
    return `${visibility} Km`;
   };

  getMoonPhase(moonPhase: string): string {
    switch(moonPhase){
      case 'New Moon':
        return 'Lua Nova';
      case 'Waxing Crescent':
        return 'Quarto crescente'
      case 'First Quarter':
        return 'Primeiro quarto';
      case 'Waxing Gibbous':
        return 'Lua minguante';
      case 'Full Moon':
        return 'Lua Cheia';
      case 'Waning Gibbous':
        return 'Minguante Gibosa';
      case 'Last Quarter':
        return 'Ultimo quarto';
      case 'Waning Crescent':
        return 'Crescente Minguante';
      default:
        return 'Lua';
    }
   };

  getLatLong(lat: string, long: string): string {
    return `${lat} / ${long}`;
  };
  // end table component
}