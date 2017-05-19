import Texto from "./texto";
import Json from "./json";
import Imagem from "./imagem";
import Main from "./main";

const rotas = [
  {
    to: "/",
    label: "Home",
    component: Main,
    name: ""
  },
  {
    to: "/texto",
    label: "TEXTO",
    component: Texto,
    name: "texto"
  },
  {
    to: "/json",
    label: "JSON",
    component: Json,
    name: "json"
  },
  {
    to: "/imagem",
    label: "IMAGEM",
    component: Imagem,
    name: "imagem"
  }
];
export default rotas;
