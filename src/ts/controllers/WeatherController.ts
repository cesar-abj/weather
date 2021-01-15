import Api from '../api/Api.js';
import DateHelper from '../helpers/DateHelper.js';
import MethodsController from '../controllers/MethodsController.js';

export default class WeatherController extends MethodsController {

  // class instances
  private api = new Api();
  readonly date = new DateHelper();

  constructor(url: string) {
    super();

    this.api.fetchApi(url).then(data => {

      this.clearElements([
        this.elementsHtml.dayList,
        this.elementsHtml.hourList,
        this.elementsHtml.tableMaxMin,          
        this.elementsHtml.tableHumidity,          
        this.elementsHtml.tableAirPressure,          
        this.elementsHtml.tableUV,          
        this.elementsHtml.tableWindVel,          
        this.elementsHtml.tableVisibility,          
        this.elementsHtml.tableMoonPhase,            
        this.elementsHtml.tableLatLong,            
      ]);
      // set elements views
      // Aside elements
      this.setInnerHTML(this.elementsHtml.asideTitle, this.getWeatherTitle(data.location.country));
      this.setInnerHTML(this.elementsHtml.asideDate, this.date.getLocalDate(data.location.localtime));
      this.setInnerHTML(this.elementsHtml.asideHour, this.date.getLocalTime(data.location.localtime));
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
      data.forecast.forecastday.map((item: { date: Date; day: { condition: { icon: string; }; avgtemp_c: string; }; }, index: number) => {
        this.elementsHtml.dayList.appendChild(
          this.createElementUlist(
            this.createDayListItem(index),
            this.createDayListItemTitle(this.date.getDateWithoutYear(item.date)),
            this.createDayListItemImage(item.day.condition.icon),
            this.createDayListItemParagraph(item.day.avgtemp_c)
          )
        );
      });
      // End daily card component

      // Hour card component
      this.getSliceOfArray(data.forecast.forecastday[0].hour).map((item: { time: Date; condition: { icon: string; }; temp_c: string; }, index: number) => {
        this.elementsHtml.hourList.appendChild(
          this.createElementUlist(
            this.createHourListItem(index),
            this.createHourListItemTitle(this.date.getHour(item.time)),
            this.createHourListItemImage(item.condition.icon),
            this.createHourListItemParagraph(item.temp_c)
          )
        );
      })
      // end hour card component

      // local weather card component
      this.setInnerHTML(this.elementsHtml.localTitle, this.getlocalTitle(data.location.name));
      this.setInnerHTML(this.elementsHtml.localDivTitle, this.getThermicSensation(data.current.feelslike_c));
      this.setInnerHTML(this.elementsHtml.sunriseParagraph, this.getSunTimeOn(data.forecast.forecastday[0].astro.sunrise));
      this.setInnerHTML(this.elementsHtml.sunsetParagraph, this.getSunTimeOn(data.forecast.forecastday[0].astro.sunset));
      // end local weather card component

      // table component
      this.setInnerHTML(this.elementsHtml.tableMaxMin, this.getMinMax(data.forecast.forecastday[0].day.maxtemp_c, data.forecast.forecastday[0].day.mintemp_c));
      this.setInnerHTML(this.elementsHtml.tableHumidity, this.getHumidity(data.current.humidity));
      this.setInnerHTML(this.elementsHtml.tableAirPressure, this.getAirPressure(data.current.pressure_mb));
      this.setInnerHTML(this.elementsHtml.tableUV, this.getUV(data.current.uv));
      this.setInnerHTML(this.elementsHtml.tableWindVel, this.getWindVel(data.current.wind_mph));
      this.setInnerHTML(this.elementsHtml.tableVisibility, this.getVisibility(data.current.vis_km));
      this.setInnerHTML(this.elementsHtml.tableMoonPhase, this.getMoonPhase(data.forecast.forecastday[0].astro.moon_phase));
      this.setInnerHTML(this.elementsHtml.tableLatLong, this.getLatLong(data.location.lat, data.location.lon));
      // end table component
    })
    .catch(() => {
      setTimeout(() => {
        this.elementsHtml.asideTitle.innerHTML = 'Não encontrado :/, tente novamente.'
      }, 1000)
    });
  };

};
