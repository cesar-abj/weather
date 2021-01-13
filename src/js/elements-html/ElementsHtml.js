export default class ElementsHtml {constructor() { ElementsHtml.prototype.__init.call(this);ElementsHtml.prototype.__init2.call(this);ElementsHtml.prototype.__init3.call(this);ElementsHtml.prototype.__init4.call(this);ElementsHtml.prototype.__init5.call(this);ElementsHtml.prototype.__init6.call(this);ElementsHtml.prototype.__init7.call(this);ElementsHtml.prototype.__init8.call(this);ElementsHtml.prototype.__init9.call(this);ElementsHtml.prototype.__init10.call(this);ElementsHtml.prototype.__init11.call(this);ElementsHtml.prototype.__init12.call(this); }
   __init() {this.el = document.querySelector.bind(document)}

  // aside elements
   __init2() {this.asideTitle = this.el('.aside-title') }
   __init3() {this.asideDate = this.el('.aside-date') }
   __init4() {this.asideHour = this.el('.aside-hour') }
   __init5() {this.asideGreeting = this.el('.aside-greeting') }
   __init6() {this.asideLocalWeather = this.el('.aside-local-weather') }
   __init7() {this.asideTemperature = this.el('.aside-temperature') }
   __init8() {this.asideWeatherDescription = this.el('.aside-weather-description') }
   __init9() {this.asideClouds = this.el('.aside-clouds') }
   __init10() {this.asideRainChance = this.el('.aside-rain-chance') }
  // end aside elements

  // Color bar
   __init11() {this.colorBar = this.el('.division-bar') }
  // End color bar

  // Daily card component
   __init12() {this.dayList = this.el('.day-list') }
  // End daily card component
};
