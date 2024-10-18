// Dooms -----
const checkboxTema = document.getElementById("checkboxTema");
const html = document.querySelector("html");

// Functions -----
export const tema = {
  trocaTema() {
    const temaAtual = html.getAttribute("data-theme");
    if (temaAtual === "light") {
      html.setAttribute("data-theme", "dark");
      checkboxTema.checked = false;
      localStorage.setItem("tema", "dark");
    } else {
      html.setAttribute("data-theme", "light");
      checkboxTema.checked = true;
      localStorage.setItem("tema", "light");
    }
  },

  aplicaTema() {
    let temaSalvo = localStorage.getItem("tema");
    if (!temaSalvo) temaSalvo = "light";
    html.setAttribute("data-theme", temaSalvo);
    checkboxTema.checked = temaSalvo === "light" ? true : false;
    checkboxTema.addEventListener("click", tema.trocaTema);
  },
};
