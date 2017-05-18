import axios from "axios";

let lista = new Promise(resolve => {
  axios
    .get("https://jsonplaceholder.typicode.com/photos")
    .then(function(response) {
      resolve(response.data.map(photo => photo.thumbnailUrl));
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
        resolve({ dados: this.data });
      });
    });
  },

  state() {
    return { dados: this.data };
  }
};

export default dados;
