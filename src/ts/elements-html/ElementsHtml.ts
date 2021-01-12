export default class ElementsHtml{
  readonly el = document.querySelector.bind(document)

  // aside elements
  readonly asideTitle = this.el('.aside-title') as HTMLTitleElement;
  readonly asideDate = this.el('.aside-date') as HTMLDataElement;
  readonly asideHour = this.el('.aside-hour') as HTMLSpanElement;
  readonly asideGreeting = this.el('.aside-greeting') as HTMLSpanElement;
  readonly asideLocalWeather = this.el('.aside-local-weather') as HTMLParagraphElement;
  readonly asideTemperature = this.el('.aside-temperature') as HTMLSpanElement;
  readonly asideWeatherDescription = this.el('.aside-weather-description') as HTMLParagraphElement;
  readonly asideClouds = this.el('.aside-clouds') as HTMLParagraphElement;
  // end aside elements

  // Color bar
  readonly colorBar = this.el('.division-bar') as HTMLDivElement;
  // End color bar
};
