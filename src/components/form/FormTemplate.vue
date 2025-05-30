<template>
  <section class="flex w-full px-12 py-8">
    <form
      @submit.prevent="handleSubmit"
      class="flex-[3] px-12 py-8 overflow-y-auto"
    >
      <div class="ipt-group mb-8">
        <input
          v-model="templateName"
          type="text"
          class="w-full border border-bg-[rgba(0,0,0,0.5)] px-2 py-2 outline-none focus:border-blue-500 focus:shadow focus:shadow-blue-500 rounded-md"
          placeholder="welcome_template, orderconfirmation"
          required
        />
      </div>

      <div class="flex justify-between gap-2 mb-8">
        <select
          v-model="category"
          class="w-[30%] px-2 py-2 bg-transparent border focus:border-blue-500 focus:shadow focus:shadow-blue-500 rounded-md"
        >
          <option value="" disabled>Category</option>
          <option value="marketing">MARKETING</option>
          <option value="transactional">TRANSACTIONAL</option>
          <option value="reminder">REMINDER</option>
        </select>
        <select
          v-model="language"
          class="w-[30%] px-2 py-2 bg-transparent border focus:border-blue-500 focus:shadow focus:shadow-blue-500 rounded-md"
        >
          <option value="" disabled>Language</option>
          <option value="af">Af</option>
          <option value="en">En</option>
          <option value="es">Es</option>
        </select>
        <select
          v-model="status"
          class="w-[30%] px-2 py-2 bg-transparent border focus:border-blue-500 focus:shadow focus:shadow-blue-500 rounded-md"
        >
          <option value="">Status</option>
          <option value="draft">draft</option>
          <option value="pending">pending</option>
          <option value="activate">activate</option>
          <option value="rejected">rejected</option>
        </select>
      </div>
      <div class="mb-8 gap-2 py-4 px-2 shadow shadow-slate-300 rounded-md">
        <h3 class="text-xl font-semibold mb-4">
          Message header
          <span
            class="bg-slate-300 inline py-1 px-2 text-slate-500 font-bold text-[12px] rounded-md"
          >
            optional
          </span>
        </h3>
        <div class="container-radio-btns flex items-center gap-4 mb-8">
          <div>
            <label class="text-slate-600 font-medium" for="default">None</label>
            <input
              v-model="headerType"
              value="none"
              class="m-2"
              type="radio"
              id="default"
              name="headerType"
              checked
            />
          </div>
          <div>
            <label class="text-slate-600 font-medium" for="text">Text</label>
            <input
              v-model="headerType"
              value="text"
              class="m-2"
              type="radio"
              id="text"
              name="headerType"
            />
          </div>
        </div>
        <div v-if="headerType === 'text'">
          <input
            v-model="messageHeader"
            type="text"
            class="w-full border border-bg-[rgba(0,0,0,0.5)] px-2 py-2 outline-none focus:border-blue-500 focus:shadow focus:shadow-blue-500 rounded-md"
            placeholder="Next to Wabox?"
          />
        </div>
      </div>

      <div class="mb-8 gap-2 py-8 px-2 shadow shadow-slate-300 rounded-md">
        <!-- BODY -->
        <div class="ipt-group mb-20">
          <h3 class="text-xl font-semibold mb-4">Message body</h3>
          <textarea
            v-model="messageBody"
            class="resize-none h-[150px] w-full border border-bg-[rgba(0,0,0,0.5)] px-2 py-2 outline-none focus:border-blue-500 focus:shadow focus:shadow-blue-500 rounded-md"
            placeholder="Hi '{{Name}}'!👋. The awesome products😍 from {{Brand_Name}} are waiting to be yours! Get your products here👇"
            required
          ></textarea>
        </div>
        <!-- FOOTER -->
        <div class="ipt-group">
          <h3 class="text-xl font-semibold mb-4">
            Message footer
            <span
              class="bg-slate-300 inline py-1 px-2 text-slate-500 font-bold text-[12px] rounded-md"
            >
              optional
            </span>
          </h3>
          <div>
            <input
              v-model="messageFooter"
              type="text"
              class="mb-4 w-full border border-bg-[rgba(0,0,0,0.5)] px-2 py-2 outline-none focus:border-blue-500 focus:shadow focus:shadow-blue-500 rounded-md"
              placeholder="You can use this space to add a tagline, a way to unsubscribe, etc.,"
            />
          </div>
        </div>
      </div>

      <div class="mb-8 gap-2 py-8 px-2 shadow shadow-slate-300 rounded-md">
        <!-- buttons -->
        <div class="ipt-group">
          <h3 class="text-xl font-semibold mb-4">
            Buttons
            <span
              class="bg-slate-300 inline py-1 px-2 text-slate-500 font-bold text-[12px] rounded-md"
            >
              optional
            </span>
          </h3>
          <div class="mb-8">
            <p class="text-slate-500 mb-4">
              Create buttons that let customers respond to your message or take
              action.
            </p>
            <p class="text-slate-500 font-bold">
              If you add more than three buttons, they will appear in a list.
            </p>
          </div>

          <div class="relative">
            <button
              type="button"
              @click="showButtonMenu = !showButtonMenu"
              class="flex justify-between w-[160px] items-center hover:bg-slate-200 border border-[rgba(0,0,0,0.3)] px-3 py-1 rounded-md ease-in-out duration-300"
            >
              <PlusIcon class="w-5 h-5" />
              <span>Add a button</span>
              <ChevronDownIcon class="w-3 h-3" />
            </button>

            <!-- Menu desplegable -->
            <div
              v-if="showButtonMenu"
              class="absolute z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
            >
              <div class="py-1">
                <button
                  type="button"
                  @click="addButton('url')"
                  class="text-gray-700 block w-full px-4 py-2 text-left text-sm hover:bg-gray-100"
                >
                  Add URL
                </button>
                <button
                  type="button"
                  @click="addButton('phone')"
                  class="text-gray-700 block w-full px-4 py-2 text-left text-sm hover:bg-gray-100"
                >
                  Add Phone Number
                </button>
              </div>
            </div>
          </div>

          <!-- Contenedor para el formulario de URL (aparece cuando buttonType === 'url') FALTA IMPLEMENTARLO PARA PHONE -->
          <div v-if="buttonType === 'url'" class="mt-4 p-4 border rounded-md">
            <div class="mb-4">
              <label class="block text-sm font-medium text-gray-700 mb-1"
                >Button Text</label
              >
              <input
                v-model="newButton.text"
                type="text"
                class="w-full border border-gray-300 px-2 py-2 rounded-md focus:border-blue-500 focus:ring-blue-500"
                placeholder="Click here"
              />
            </div>
            <div class="mb-4">
              <label class="block text-sm font-medium text-gray-700 mb-1"
                >URL</label
              >
              <input
                v-model="newButton.url"
                type="text"
                class="w-full border border-gray-300 px-2 py-2 rounded-md focus:border-blue-500 focus:ring-blue-500"
                placeholder="https://example.com"
              />
            </div>
            <button
              type="button"
              @click="saveButton"
              class="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
            >
              Save Button
            </button>
          </div>

          <!-- Lista de botones  -->
          <div v-if="buttons.length > 0" class="mt-4 space-y-2">
            <div
              v-for="(button, index) in buttons"
              :key="index"
              class="p-2 border rounded-md flex justify-between items-center"
            >
              <span
                >{{ button.text }} ({{
                  button.url || button.phone_number
                }})</span
              >
              <button @click="deleteButton(index)" class="text-red-500">
                <TrashIcon class="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div>
        <button
          class="bg-blue-400 w-full py-2 rounded-md font-semibold text-white text-lg hover:bg-blue-600 ease-in-out duration-300"
          type="submit"
        >
          Guardar
        </button>
      </div>
    </form>

    <article class="flex-[1] preview-msj">
      <div
        class="flex items-center gap-4 w-[320px] bg-green-700 rounded-t-[28px] px-4 py-5"
      >
        <ArrowLeftIcon class="w-5 h-5 text-white" />
        <img
          src="data:image/svg+xml,%3csvg%20width='26'%20height='26'%20viewBox='0%200%2026%2026'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M0%2026L1.79309%2019.5C0.627605%2017.4828%200%2015.2414%200%2012.9103C0%205.8276%205.82761%200%2012.9552%200C20.0827%200%2026%205.8276%2026%2012.9103C26%2019.993%2020.0828%2026%2012.9552%2026C10.7138%2026%208.56207%2025.2828%206.63447%2024.2069L0%2026Z'%20fill='white'/%3e%3cpath%20d='M6.99838%2021.8857L7.40139%2022.1096C9.05816%2023.1395%2010.9836%2023.7664%2012.9986%2023.7664C18.8645%2023.7664%2023.7453%2018.8856%2023.7453%2012.9302C23.7453%206.97471%2018.8645%202.27307%2012.9538%202.27307C7.04317%202.27307%202.25195%207.0195%202.25195%2012.9302C2.25195%2014.9899%202.83407%2017.0049%203.90873%2018.7065L4.17742%2019.1095L3.14755%2022.8709L6.99838%2021.8857Z'%20fill='%2355CD6C'/%3e%3cpath%20d='M9.50703%206.99523L8.65374%206.95093C8.38425%206.95093%208.11481%207.03954%207.93517%207.21671C7.53096%207.57106%206.85731%208.23546%206.67766%209.12138C6.3633%2010.4502%206.85731%2012.0448%208.02501%2013.6394C9.19272%2015.2339%2011.4383%2017.803%2015.3904%2018.9103C16.6479%2019.2647%2017.636%2019.0432%2018.4444%2018.556C19.0732%2018.1573%2019.4774%2017.5372%2019.6121%2016.8728L19.7468%2016.2527C19.7918%2016.0755%2019.7019%2015.854%2019.5223%2015.7654L16.6929%2014.4809C16.5132%2014.3923%2016.2887%2014.4366%2016.1539%2014.6138L15.0311%2016.0312C14.9413%2016.1198%2014.8066%2016.1641%2014.6719%2016.1198C13.9084%2015.854%2011.3484%2014.791%209.95617%2012.1333C9.91124%2012.0005%209.91124%2011.8676%2010.0011%2011.779L11.0789%2010.5831C11.1688%2010.4502%2011.2137%2010.273%2011.1688%2010.1401L9.86637%207.26102C9.82139%207.1281%209.68667%206.99523%209.50703%206.99523Z'%20fill='%23FEFEFE'/%3e%3c/svg%3e"
          class="chakra-image css-c49crb"
        />
        <p class="text-xl font-semibold text-white">Company</p>
        <span>
          <CheckBadgeIcon class="w-4 h-4 text-green-300" />
        </span>
      </div>
      <div class="relative w-[320px]">
        <img
          class="rounded-b-[28px] w-full"
          src="../../assets/img/pattern.png"
          alt="pattern"
        />
        <!-- ChatPopup condicional -->
        <div
          v-if="messageBody"
          class="absolute left-1/2 transform -translate-x-1/2 top-4 w-full px-4"
        >
          <ChatPopup
            :message="messageBody"
            :header="headerType === 'text' ? messageHeader : ''"
            :buttons="buttons"
            :footer="messageFooter"
          />
        </div>

        <div
          class="absolute left-1/2 -translate-x-1/2 bottom-4 w-full px-4 flex justify-between items-center"
        >
          <div
            class="flex justify-between items-center w-56 bg-white rounded-3xl shadow-md px-4 py-4"
          >
            <div class="flex gap-2 items-center">
              <FaceSmileIcon class="text-[#a0aec0] h-6 w-6" />
              <p class="text-[#a0aec0]">Message</p>
            </div>
            <div class="flex gap-2 items-center">
              <PaperClipIcon class="text-[#a0aec0] h-6 w-6" />
              <CameraIcon class="text-[#a0aec0] h-6 w-6" />
            </div>
          </div>
          <div class="bg-green-600 p-3 rounded-full">
            <MicrophoneIcon class="text-white w-6 h-6" />
          </div>
        </div>
      </div>
    </article>
  </section>

  <!-- Modal -->
  <ModalCreateTemplate
    v-if="showModal && createdTemplate"
    :templateData="createdTemplate"
    @close="closeModal"
  />
</template>

<script lang="ts" setup>
import {
  ArrowLeftIcon,
  CameraIcon,
  ChevronDownIcon,
  FaceSmileIcon,
  MicrophoneIcon,
  PaperClipIcon,
  TrashIcon,
} from "@heroicons/vue/16/solid";
import { CheckBadgeIcon } from "@heroicons/vue/16/solid";
import ChatPopup from "../common/ChatPopup.vue";
import { PlusIcon } from "@heroicons/vue/24/solid";
import { ref } from "vue";
import type { Template, TemplateButton } from "../../types/types";
import ModalCreateTemplate from "../modal/ModalCreateTemplate.vue";
import CardItem from "../card/CardItem.vue"; // Import opcional si necesitas la referencia

const templateName = ref("");
const category = ref("");
const language = ref("");
const status = ref("");
const headerType = ref("none");
const messageHeader = ref("");
const messageBody = ref("");
const messageFooter = ref("");
const showButtonMenu = ref(false);
const buttonType = ref("");
const newButton = ref<Partial<TemplateButton>>({});
const buttons = ref<TemplateButton[]>([]);
const showModal = ref(false);
const createdTemplate = ref<Template | null>(null);

// Métodos
const handleSubmit = () => {
  const payload = {
    name: templateName.value, // ¡Usa .value!
    category: category.value,
    language: language.value,
    status: status.value,
    components: {
      // Estructura compatible con TemplateComponents
      header: {
        type: headerType.value,
        content: messageHeader.value,
      },
      body: {
        content: messageBody.value,
      },
      footer: messageFooter.value,
      buttons: [...buttons.value], // Copia los botones
    },
    created_at: new Date().toISOString(), // Simula fecha de creación
    updated_at: new Date().toISOString(), // Simula fecha de actualización
  };
  console.log("Template created: ", payload);
  createdTemplate.value = payload;
  showModal.value = true;

  formReset();
};

const formReset = () => {
  templateName.value = "";
  category.value = "";
  language.value = "";
  status.value = "";
  headerType.value = "none";
  messageHeader.value = "";
  messageBody.value = "";
  messageFooter.value = "";
  showButtonMenu.value = false;
  buttonType.value = "";
  buttons.value = [];
};

const closeModal = () => {
  showModal.value = false;
  formReset();
};

const addButton = (type: string) => {
  buttonType.value = type;
  newButton.value = { text: "", url: "", phone_number: "" };
};

const saveButton = () => {
  if (buttonType.value === "url") {
    buttons.value.push({
      id: Date.now(),
      type: "STATIC_URL",
      text: newButton.value.text || "",
      url: newButton.value.url || "",
      index: buttons.value.length,
    });
  } else if (buttonType.value === "phone") {
    buttons.value.push({
      id: Date.now(),
      type: "PHONE_NUMBER",
      text: newButton.value.text || "",
      url: "",
      phone_number: newButton.value.phone_number || "",
      phone_number_prefix: "+54",
      index: buttons.value.length,
    });
  }
  newButton.value = {};
};

const deleteButton = (index: number) => {
  buttons.value.splice(index, 1);
};
</script>

<style scoped>
.preview-msj {
  background-color: #000;
  max-height: 71dvh;
  padding: 15px 10px;
  border-radius: 30px;
}

.card-item {
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

/* Animación de entrada */
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.3s;
}
.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}
</style>
