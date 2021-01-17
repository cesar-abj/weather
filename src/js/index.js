import Controller from './controllers/WeatherController.js';
import View from './views/WeatherViews.js';
export default class Index {
  
   __init() {this.instanceView = new View()}

   __init2() {this.el = document.querySelector.bind(document)}
   __init3() {this.containerSearch = this.el('.container-search') }
   __init4() {this.searchInputElement = this.el('.nav-search-input') }

   __init5() {this.objectURL = {
    baseURL: 'https://api.weatherapi.com/v1',
    method: '/forecast.json',
    key: 'key=82b2553312b843208ae12719200812',
    locationParam: `q=brasil`,
    language: 'lang=pt',
    days: 'days=3'
  }}

   __init6() {this.url = `${this.objectURL.baseURL}${this.objectURL.method}?${this.objectURL.key}&${this.objectURL.locationParam}&${this.objectURL.language}&${this.objectURL.days}`}

  constructor(){;Index.prototype.__init.call(this);Index.prototype.__init2.call(this);Index.prototype.__init3.call(this);Index.prototype.__init4.call(this);Index.prototype.__init5.call(this);Index.prototype.__init6.call(this);
    this.instanceController = new Controller(this.url);

    this.containerSearch.addEventListener('submit', event => {
      event.preventDefault();
      this.getRequestWeather(this.searchInputElement.value);
      this.instanceView.setColorBar;
      this.searchInputElement.value = '';
    });
  }

     getRequestWeather(value){
    this.objectURL.locationParam = `q=${value}`; // get param from input value
    const newUrl = `${this.objectURL.baseURL}${this.objectURL.method}?${this.objectURL.key}&${this.objectURL.locationParam}&${this.objectURL.language}&${this.objectURL.days}`; // modify the url with the new value of input
    this.instanceController = new Controller(newUrl);  // pass this value for a new intance if controller that do a new requisition
  };
};

const instanceIndex = new Index();