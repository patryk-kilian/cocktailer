import axios from "axios";

export default class Search {
  constructor(query) {
    this.query = query;
  }

  async getResults() {
    try {
      if (this.query === "random") {
        // GET 6 RANDOM DRINKS

        let res = [];
        for (let i = 0; i < 6; i++) {
          let ress = await axios(
            `https://www.thecocktaildb.com/api/json/v1/1/random.php`
          );
          res.push(ress.data.drinks[0]);
        }
        this.result = res;
      } else {
        //SEARCH DRINKS BY QUERY

        const res = await axios(
          `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${
            this.query
          }`
        );
        this.result = res.data.drinks;
      }
    } catch (error) {
      console.log(error);
    }
  }
}
