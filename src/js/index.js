// Imports -----
import { form } from "./form.js";
import { tema } from "./tema.js";
import { animacao } from "./animacaoScroll.js";

// Dooms -----
const formulario = document.getElementById("formDados");
const btnLimpaForm = document.getElementById("limpaForm");
const getStarted = document.getElementById("getStarted");

// Funcoes -----
document.addEventListener("DOMContentLoaded", () => {
  tema.aplicaTema();
  animacao.aplicaAnimacao();
});

formulario.addEventListener("submit", async (e) => {
  e.preventDefault();
  const data = form.salvaDados(e);
  form.exibeIconiCarregando();
  const res = await form.enviaForm(data);
  form.exibeMsgEnviado(res);
});

btnLimpaForm.addEventListener("click", () => {
  form.limpaDadosForm();
});

getStarted.addEventListener("click", () => {
  formulario.scrollIntoView({ block: "center", behavior: "smooth" });
});
