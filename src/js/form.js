const formulario = document.getElementById("formDados");
const containerModal = document.getElementById("my_modal_1");
const modal = document.getElementById("modalEnviado");

export const form = {
  salvaDados(e) {
    const nome = e.target.elements["inputNome"].value;
    const email = e.target.elements["inputEmail"].value;
    const numero = e.target.elements["inputNumero"].value;
    const cidade = e.target.elements["inputCidade"].value;
    const user = {
      nome: nome,
      email: email,
      numero: numero,
      cidade: cidade,
    };
    return user;
  },

  limpaDadosForm() {
    formulario.reset();
  },

  exibeIconiCarregando() {
    my_modal_1.showModal();
  },

  exibeMsgEnviado(res) {
    if (res.success === "true") {
      modal.innerHTML = `
      <h3 class="text-lg font-bold">Enviado!</h3>
      <p class="py-4">Formulario enviado com sucesso</p>
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
};
