import axios from "axios";

let lista = new Promise(resolve => {
  axios
    .get("http://api.nobelprize.org/v1/country.json")
    .then(function(response) {
      resolve(response.data.countries.concat([]));
    })
    .catch(function(error) {
      console.log(error);
    });
});

const dados = {
  data: [],

  clear() {
    this.data = [];
    return { dados: this.data };
  },

  load() {
    return new Promise(resolve => {
      lista.then(dado => {
        this.data = dado;
        resolve({dados: this.data})
      });
    });
  },

  state() {
    return { dados: this.data };
  }
};
export default dados;
