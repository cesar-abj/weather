export default class ElementsHtml {constructor() { ElementsHtml.prototype.__init.call(this);ElementsHtml.prototype.__init2.call(this);ElementsHtml.prototype.__init3.call(this);ElementsHtml.prototype.__init4.call(this);ElementsHtml.prototype.__init5.call(this);ElementsHtml.prototype.__init6.call(this);ElementsHtml.prototype.__init7.call(this);ElementsHtml.prototype.__init8.call(this);ElementsHtml.prototype.__init9.call(this);ElementsHtml.prototype.__init10.call(this);ElementsHtml.prototype.__init11.call(this);ElementsHtml.prototype.__init12.call(this);ElementsHtml.prototype.__init13.call(this);ElementsHtml.prototype.__init14.call(this);ElementsHtml.prototype.__init15.call(this);ElementsHtml.prototype.__init16.call(this);ElementsHtml.prototype.__init17.call(this);ElementsHtml.prototype.__init18.call(this);ElementsHtml.prototype.__init19.call(this);ElementsHtml.prototype.__init20.call(this);ElementsHtml.prototype.__init21.call(this);ElementsHtml.prototype.__init22.call(this);ElementsHtml.prototype.__init23.call(this);ElementsHtml.prototype.__init24.call(this);ElementsHtml.prototype.__init25.call(this); }
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

  // Hour card component
   __init13() {this.hourList = this.el('.hour-list') }
  // end hour card component

  // local weather condition
   __init14() {this.localTitle = this.el('.local-title') }
   __init15() {this.localDivTitle = this.el('.local-div-title') }
   __init16() {this.sunriseParagraph = this.el('.sunrise-paragraph') }
   __init17() {this.sunsetParagraph = this.el('.sunset-paragraph') }
  // end local weather condition

  // table component
   __init18() {this.tableMaxMin = this.el('.max-min') }
   __init19() {this.tableHumidity = this.el('.humidity') }
   __init20() {this.tableAirPressure = this.el('.air-pressure') }
   __init21() {this.tableUV = this.el('.UV') }
   __init22() {this.tableWindVel = this.el('.wind-vel') }
   __init23() {this.tableVisibility = this.el('.visibility') }
   __init24() {this.tableMoonPhase = this.el('.moon-phase') }
   __init25() {this.tableLatLong = this.el('.lat-long') }
  // end table component
};
