import Controller from './controllers/WeatherController.js';
import View from './views/WeatherViews.js';
export default class Index {
  private instanceController: Controller;
  private instanceView = new View();
  
  readonly el = document.querySelector.bind(document);
  private containerSearch = this.el('.container-search') as HTMLDivElement;
  private searchInputElement = this.el('.nav-search-input') as HTMLInputElement;

  objectURL = {
    baseURL: 'http://api.weatherapi.com/v1',
    method: '/current.json',
    key: 'key=82b2553312b843208ae12719200812',
    locationParam: `q=brasil`,
    language: 'lang=pt'
  };

  protected url = `${this.objectURL.baseURL}${this.objectURL.method}?${this.objectURL.key}&${this.objectURL.locationParam}&${this.objectURL.language}`;

  constructor(){
    this.instanceController = new Controller(this.url);

    this.containerSearch.addEventListener('submit', event => {
      event.preventDefault();
      this.getRequestWeather(this.searchInputElement.value);
      this.instanceView.setColorBar
      this.searchInputElement.value = '';
    })
  };

  getRequestWeather(value: string){

    this.objectURL.locationParam = `q=${value}`;
    const newUrl = `${this.objectURL.baseURL}${this.objectURL.method}?${this.objectURL.key}&${this.objectURL.locationParam}&${this.objectURL.language}`
    this.instanceController = new Controller(newUrl)
    
  }
}

const instanceIndex = new Index();