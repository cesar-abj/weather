import ElementsHtml from '../elements-html/ElementsHtml.js';
import WeatherViews from '../views/WeatherViews.js';

export default class MethodsController {constructor() { MethodsController.prototype.__init.call(this);MethodsController.prototype.__init2.call(this);MethodsController.prototype.__init3.call(this);MethodsController.prototype.__init4.call(this); }

   __init() {this.weatherViews = new WeatherViews()}
   __init2() {this.elementsHtml = new ElementsHtml()}

  // declaration shortcuts
   __init3() {this.setInnerHTML = this.weatherViews.setInnerHtmlOfElement.bind(document)}
   __init4() {this.setColorBar = this.weatherViews.setColorBar.bind(document)}

  // generic method
   clearElements(...[elements]) {
    elements.map((item) => item.innerHTML = '');
  };

   createElementUlist(newListElement, headingElement, imgElement, paragraph) {
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
   getWeatherTitle(country) {
    switch (country) {
      case "Brazil":
        return "Brasil";
      default:
        return country;
    };
  };

   getAsideRainChance(rainChance) {
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
  // end aside block

  // hour list block
   createHourListItem(index) {
    let li = document.createElement('li');
    li.classList.add('hour-list-item');
    li.classList.add(`b${index}`);
    return li;
  }

   createHourListItemTitle(titleValue) {
    let h5 = document.createElement('h5');
    h5.classList.add('hour-list-item-title');
    this.setInnerHTML(h5, titleValue)
    return h5;
  }

   createHourListItemImage(atributeValue) {
    let img = document.createElement('img')
    img.classList.add('hour-list-item-icon');
    img.classList.add('set-icon');
    img.setAttribute('src', atributeValue)
    return img;
  }

   createHourListItemParagraph(paragraphValue) {
    let paragraph = document.createElement('p');
    paragraph.classList.add('hour-list-item-paragraph');
    this.setInnerHTML(paragraph, `${paragraphValue}°`)
    return paragraph;
  };
  // end hour list block

  // day list block

   createDayListItem(index) {
    let li = document.createElement('li');
    li.classList.add('day-list-item');
    li.classList.add(`a${index}`);
    return li;
  }

   createDayListItemTitle(titleValue) {
    let h5 = document.createElement('h5');
    h5.classList.add('day-list-item-title');
    this.setInnerHTML(h5, titleValue)
    return h5;
  }

   createDayListItemImage(atributeValue) {
    let img = document.createElement('img')
    img.classList.add('day-list-item-img');
    img.classList.add('set-icon');
    img.setAttribute('src', atributeValue)
    return img;
  }

   createDayListItemParagraph(paragraphValue) {
    let paragraph = document.createElement('p');
    paragraph.classList.add('day-list-item-paragraph');
    this.setInnerHTML(paragraph, `${paragraphValue}°`)
    return paragraph;
  };
  // end day list block

  // local weather component

  getlocalTitle(localTitleParam) {
    return `Clima em ${localTitleParam} hoje`;
  };

  getThermicSensation(sensationParam) {
    return `${sensationParam}°`;
  };

  getSunTimeOn(sunParam) {
    return `${sunParam}`;
  };

  // end local weather component

  // table component
  getMinMax(min, max) {
    return `${min}°/${max}°`;
   };

  getHumidity(humidity) {
    return `${humidity}%`;
   };

  getAirPressure(airPressure) {
    return `${airPressure} mb`
   };

  getUV(uv) {
    return `${uv}`;
   };

  getWindVel(windVel) {
    return `${windVel} Mph`;
   };

  getVisibility(visibility) {
    return `${visibility} Km`;
   };

  getMoonPhase(moonPhase) {
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

  getLatLong(lat, long) {
    return `${lat} / ${long}`;
  };
  // end table component
}