// Imports
import { form } from "./form.js";
import { email } from "./enviaEmail.js";

// Dooms
const formulario = document.getElementById("formDados");
const btnLimpaForm = document.getElementById("limpaForm");

// Funcoes
formulario.addEventListener("submit", async (e) => {
  e.preventDefault();
  const user = form.salvaDados(e);
  form.exibeIconiCarregando();
  const res = await email.enviaForm(user);
  form.exibeMsgEnviado(res);
});

btnLimpaForm.addEventListener("click", () => {
  form.limpaDados();
});
