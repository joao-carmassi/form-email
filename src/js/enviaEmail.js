// Dooms
const modal = document.getElementById("modalEnviado");

// Functions
export const email = {
  enviaForm(data) {
    return fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error(`${res.status} - ${res.statusText}`);
        }
        return res;
      })
      .catch((err) => {
        console.error(`Erro ao enviar formulario. ${err}`);
        this.enviaMsgDeErro(err);
        return err;
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
