import Texto from "./texto";
import Json from "./json";
import Imagem from "./imagem";

const rotas = [
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