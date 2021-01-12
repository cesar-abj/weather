export default class Api {
  async fetchApi(url:string){
    return await fetch(url)
      .then(response => response.json())
      .then(json => json);
  };
};