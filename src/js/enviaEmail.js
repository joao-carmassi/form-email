// Dooms
const modal = document.getElementById("modalEnviado");

// Vars
const serviceId = "service_pgemm5o";
const templateId = "template_h4mv287";

// Functions
export const email = {
  enviaForm(user) {
    emailjs.init("pGFpLQJZ0x81EnJDS");
    return emailjs
      .send(serviceId, templateId, user)
      .then((res) => {
        if (!res.ok) {
          throw new Error(`${res.status} - ${res.statusText}`);
        }
        console.log(res);
        return res.json();
      })
      .then((data) => {
        console.log(data);
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
