import Controller from './controllers/WeatherController.js';
import View from './views/WeatherViews.js';
export default class Index {
  private instanceController: Controller;
  private instanceView = new View();

  readonly el = document.querySelector.bind(document);
  private containerSearch = this.el('.container-search') as HTMLDivElement;
  private searchInputElement = this.el('.nav-search-input') as HTMLInputElement;

  readonly objectURL = {
    baseURL: 'https://api.weatherapi.com/v1',
    method: '/forecast.json',
    key: 'key=82b2553312b843208ae12719200812',
    locationParam: `q=brasil`,
    language: 'lang=pt',
    days: 'days=3'
  };

  protected url = `${this.objectURL.baseURL}${this.objectURL.method}?${this.objectURL.key}&${this.objectURL.locationParam}&${this.objectURL.language}&${this.objectURL.days}`;

  constructor(){
    this.instanceController = new Controller(this.url);

    this.containerSearch.addEventListener('submit', event => {
      event.preventDefault();
      this.getRequestWeather(this.searchInputElement.value);
      this.instanceView.setColorBar;
      this.searchInputElement.value = '';
    });
  };

    private getRequestWeather(value: string){
    this.objectURL.locationParam = `q=${value}`; // get param from input value
    const newUrl = `${this.objectURL.baseURL}${this.objectURL.method}?${this.objectURL.key}&${this.objectURL.locationParam}&${this.objectURL.language}&${this.objectURL.days}`; // modify the url with the new value of input
    this.instanceController = new Controller(newUrl);  // pass this value for a new intance if controller that do a new requisition
  };
};

const instanceIndex = new Index();