export default class ElementsHtml {
  readonly el = document.querySelector.bind(document);

  // aside elements
  readonly asideTitle = this.el('.aside-title') as HTMLHeadingElement;
  readonly asideDate = this.el('.aside-date') as HTMLDataElement;
  readonly asideHour = this.el('.aside-hour') as HTMLSpanElement;
  readonly asideGreeting = this.el('.aside-greeting') as HTMLSpanElement;
  readonly asideLocalWeather = this.el('.aside-local-weather') as HTMLParagraphElement;
  readonly asideTemperature = this.el('.aside-temperature') as HTMLSpanElement;
  readonly asideWeatherDescription = this.el('.aside-weather-description') as HTMLParagraphElement;
  readonly asideClouds = this.el('.aside-clouds') as HTMLParagraphElement;
  readonly asideRainChance = this.el('.aside-rain-chance') as HTMLParagraphElement;
  // end aside elements

  // Color bar
  readonly colorBar = this.el('.division-bar') as HTMLDivElement;
  // End color bar

  // Daily card component
  readonly dayList = this.el('.day-list') as HTMLUListElement;
  // End daily card component

  // Hour card component
  readonly hourList = this.el('.hour-list') as HTMLUListElement;
  // end hour card component

  // local weather condition
  readonly localTitle = this.el('.local-title') as HTMLHeadingElement;
  readonly localDivTitle = this.el('.local-div-title') as HTMLHeadingElement;
  readonly sunriseParagraph = this.el('.sunrise-paragraph') as HTMLParagraphElement;
  readonly sunsetParagraph = this.el('.sunset-paragraph') as HTMLParagraphElement;
  // end local weather condition

  // table component
  readonly tableMaxMin = this.el('.max-min') as HTMLTableDataCellElement;
  readonly tableHumidity = this.el('.humidity') as HTMLTableDataCellElement;
  readonly tableAirPressure = this.el('.air-pressure') as HTMLTableDataCellElement;
  readonly tableUV = this.el('.UV') as HTMLTableDataCellElement;
  readonly tableWindVel = this.el('.wind-vel') as HTMLTableDataCellElement;
  readonly tableVisibility = this.el('.visibility') as HTMLTableDataCellElement;
  readonly tableMoonPhase = this.el('.moon-phase') as HTMLTableDataCellElement;
  readonly tableLatLong = this.el('.lat-long') as HTMLTableDataCellElement;
  // end table component
};
