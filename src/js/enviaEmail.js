// Dooms
const modal = document.getElementById("modalEnviado");

// Vars
const URL_API = "https://formsubmit.co/ajax/joaovitorcarmassi@gmail.com";

// Functions
export const email = {
  enviaForm(user) {
    return fetch(URL_API, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        Nome: `${user.nome}`,
        Email: `${user.email}`,
        Whatsapp: `${user.numero}`,
        Cidade: `${user.cidade}`,
      }),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error(`${res.status} - ${res.statusText}`);
        }
        return res.json();
      })
      .then((data) => {
        return data;
      })
      .catch((error) => {
        this.enviaMsgDeErro(error);
        console.error(`Erro ao enviar o formulario. ${error}`);
      });
  },
  enviaMsgDeErro(error) {
    modal.innerHTML = `
        <h3 class="text-lg font-bold">Error!</h3>
        <p class="py-4">Error ao enviar dados do formulario</p>
        <p class="">${error}</p>
        <div class="modal-action">
          <form method="dialog">
            <button
              id="fecharModal"
              class="btn bg-red-500 text-white hover:bg-red-600"
            >
              Fechar
            </button>
          </form>
        </div>
    `;
  },
};
