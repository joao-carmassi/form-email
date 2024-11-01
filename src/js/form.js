const formulario = document.getElementById("formDados");
const containerModal = document.getElementById("my_modal_1");
const modal = document.getElementById("modalEnviado");
const access_key = "e25d109e-87c5-431e-9bd5-89f4b0792f09";

export const form = {
  salvaDados(e) {
    const nome = e.target.elements["inputNome"].value;
    const email = e.target.elements["inputEmail"].value;
    const numero = e.target.elements["inputNumero"].value;
    const cidade = e.target.elements["inputCidade"].value;
    const data = {
      access_key: access_key,
      name: nome,
      email: email,
      message: `Numero: ${numero}
Cidade: ${cidade}`,
    };
    return data;
  },

  limpaDadosForm() {
    formulario.reset();
  },

  exibeIconiCarregando() {
    my_modal_1.showModal();
  },

  exibeMsgEnviado(res) {
    if (res.ok) {
      modal.innerHTML = `
      <h3 class="text-lg font-bold">Enviado!</h3>
      <p class="py-4">Formulario enviado com sucesso.</p>
      <div class="modal-action">
        <form method="dialog">
          <button id="fecharModal" class="btn bg-green-400 text-white hover:bg-green-500">
            Fechar
          </button>
        </form>
      </div>
      `;
      this.resetaModalForm(modal);
    }
  },

  resetaModalForm(modal) {
    const btnFecharModal = document.getElementById("fecharModal");
    btnFecharModal.addEventListener("click", () => {
      this.limpaDadosForm();

      containerModal.close();

      modal.innerHTML = `
      <div class="w-full grid place-items-center">
          <span class="loading loading-dots loading-lg"></span>
      </div>
      `;
    });
  },

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
        this.exibeMsgEnviado(res);
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
