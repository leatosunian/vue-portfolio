<template>
  <div :class="[{ dark: darkMode }, 'main-container-top-contact']">
    <div class="notificationContainer" v-bind:class="{ actived: added }">
      <div
        style="
          display: flex;
          justify-content: center;
          height: 70%;
          align-items: center;
          gap: 12px;
        "
      >
        <!-- <img src="@/assets/correct.png" alt="" style="width:35px;"> -->
        <font-awesome-icon
          style="color: rgb(60, 6, 131)"
          icon="fa-solid fa-copy"
        />
        <span v-if="langg === 'es'">Copiado al portapapeles</span>
        <span v-if="langg === 'en'">Copied to clipboard</span>
      </div>
    </div>
    <div class="titleContContact">
      <span
        v-if="langg === 'en'"
        class="font-semibold"
        style="margin-bottom: 16px"
        >Let's get in</span
      >
      <span
        v-if="langg === 'es'"
        class="font-semibold"
        style="margin-bottom: 16px"
        >¡Pongámonos en
      </span>
      <h1 v-if="langg === 'en'" class="font-bold">Contact!</h1>
      <h1 v-if="langg === 'es'" class="font-bold">Contacto!</h1>
      <span class="font-semibold reverse-text" v-if="langg === 'en'"
        >drop a DM on any of my social media:</span
      >
      <span class="font-semibold reverse-text" v-if="langg === 'es'"
        >escribime en mis redes sociales:</span
      >

      <a
        href="https://www.linkedin.com/in/leandrotosunian/"
        target="_blank"
        style="margin-bottom: 18px; cursor: pointer; margin-top: 40px"
      >
        <div class="linkContContact">
          <div
            class="w-10 h-full"
            style="
              display: flex !important;
              justify-content: center !important;
              align-items: center !important;
            "
          >
            <font-awesome-icon
              icon="fa-brands fa-linkedin"
              style="height: 22px; margin: 0 !important"
            />
          </div>
          <span class="linkSpanContact">linkedin.com/in/leandrotosunian</span>
        </div>
      </a>

      <a href="#" style="margin-bottom: 18px; cursor: pointer" @click="copy()">
        <div class="linkContContact">
          <div
            class="w-10 h-full"
            style="
              display: flex !important;
              justify-content: center !important;
              align-items: center !important;
            "
          >
            <font-awesome-icon
              icon="fa-solid fa-envelope"
              style="height: 20px; margin: 0 !important"
            />
          </div>
          <span class="linkSpanContact">leandrotosunian@hotmail.com</span>
        </div>
      </a>

      <a
        href="https://github.com/leatosunian"
        target="_blank"
        style="margin-bottom: 18px; cursor: pointer"
      >
        <div class="linkContContact">
          <div
            class="w-10 h-full"
            style="
              display: flex !important;
              justify-content: center !important;
              align-items: center !important;
            "
          >
            <font-awesome-icon
              icon="fa-brands fa-square-github"
              style="height: 22px; margin: 0 !important"
            />
          </div>
          <span class="linkSpanContact">github.com/leatosunian</span>
        </div>
      </a>

      <a
        href="https://api.whatsapp.com/send?phone=5492235423025"
        target="_blank"
        style="margin-bottom: 18px; cursor: pointer"
      >
        <div class="linkContContact">
          <div
            class="w-10 h-full"
            style="
              display: flex !important;
              justify-content: center !important;
              align-items: center !important;
            "
          >
            <font-awesome-icon
              icon="fa-brands fa-square-whatsapp"
              style="height: 22px; margin: 0 !important"
            />
          </div>
          <span class="linkSpanContact">+54 0223-5423025</span>
        </div>
      </a>

      <a
        href="https://www.instagram.com/tosunian.dev/"
        target="_blank"
        style="margin-bottom: 18px; cursor: pointer"
      >
        <div class="linkContContact">
          <div
            class="w-10 h-full"
            style="
              display: flex !important;
              justify-content: center !important;
              align-items: center !important;
            "
          >
            <font-awesome-icon
              icon="fa-brands fa-instagram-square"
              style="height: 22px; margin: 0 !important"
            />
          </div>
          <span class="linkSpanContact">tosunian.dev</span>
        </div>
      </a>
    </div>
    <div class="router-nav">
      <!-- ← Projects / Servicios -->
      <router-link
        v-if="langg === 'en'"
        to="/projects"
        class="flex align-items-center h-fit router-nav-link"
      >
        <font-awesome-icon
          icon="fa-solid fa-arrow-left"
          style="width: 12px; margin-right: 8px"
        />
        <span>Projects</span>
      </router-link>
      <!-- 
      <router-link
        v-if="langg === 'es'"
        to="/services"
        class="flex align-items-center h-fit router-nav-link"
      >
        <font-awesome-icon
          icon="fa-solid fa-arrow-left"
          style="width: 12px; margin-right: 8px"
        />
        <span>Servicios</span>
      </router-link> -->
      <router-link
        v-if="langg === 'es'"
        to="/projects"
        class="flex align-items-center h-fit router-nav-link"
      >
        <font-awesome-icon
          icon="fa-solid fa-arrow-left"
          style="width: 12px; margin-right: 8px"
        />
        <span>Proyectos</span>
      </router-link>

      <!-- Home / Inicio -->
      <router-link
        to="/"
        class="flex gap-2 align-items-center h-fit router-nav-link"
      >
        <font-awesome-icon
          icon="fa-solid fa-house-chimney"
          style="width: 12px"
        />
        <span v-if="langg === 'en'">Home</span>
        <span v-if="langg === 'es'">Inicio</span>
      </router-link>
    </div>
  </div>
</template>

<style>
.linkContContact {
  height: 42px;
  border-radius: 50px;
  width: fit-content;
  padding: 0 5px;
  padding-right: 15px;
  display: flex;
  gap: 5px;
  align-items: center;
  border: 1px solid rgba(255, 255, 255, 0.01);
  backdrop-filter: blur(4px);
  box-shadow: 8px 8px 15px rgba(94, 18, 182, 0.13);
  transition: all 0.2 ease-in-out;
  -webkit-transition: all ease-in-out 0.2s;
  -moz-transition: all ease-in-out 0.2s;
  -ms-transition: all ease-in-out 0.2s;
  -o-transition: all ease-in-out 0.2s;
}

.linkContContact:hover {
  box-shadow: 0px 0px 0px rgba(94, 18, 182, 0.25);
  border-color: rgba(94, 18, 182, 0.6);
  transition: all 0.2 ease-in-out;
  -webkit-transition: all ease-in-out 0.2s;
  -moz-transition: all ease-in-out 0.2s;
  -ms-transition: all ease-in-out 0.2s;
  -o-transition: all ease-in-out 0.2s;
}

.main-container-top-contact {
  height: 80vh;
  padding: 0 10%;
  padding-top: 70px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.main-container {
  height: 100vh;
  padding: 0 10%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.titleContContact {
  display: flex;
  flex-direction: column;
  align-items: start;
  width: fit-content;
  height: fit-content;
}
.titleContContact span {
  font-size: 27px;
}

.reverse-text {
  align-self: end !important;
  margin-top: 20px;
}

.linkSpanContact {
  font-size: 18px !important;
  font-weight: 500;
}

@media (max-width: 1600px) {
  .titleContContact span {
    font-size: 23px;
  }
  .titleContContact h1 {
    font-size: 26px;
  }

  .linkSpanContact {
    font-size: 13px !important;
    font-weight: 500;
  }

  .linkContContact {
    height: 36px;
    border-radius: 50px;
    width: fit-content;
    padding: 0 5px;
    padding-right: 15px;
    display: flex;
    gap: 5px;
    align-items: center;
    backdrop-filter: blur(4px);
    border: 1px solid transparent;
    transition: all 0.2 ease-in-out;
    -webkit-transition: all ease-in-out 0.2s;
    -moz-transition: all ease-in-out 0.2s;
    -ms-transition: all ease-in-out 0.2s;
    -o-transition: all ease-in-out 0.2s;
  }

  .main-container-top-contact {
    height: 80vh;
    padding: 0 10%;
    padding-top: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
}

@media (max-width: 768px) {
  .linkSpanContact {
    font-size: 18px !important;
    font-weight: 500;
  }
  .main-container {
    height: 100vh;
    padding: 0 10%;
    padding-top: 10%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
  }
  .main-container-top-contact {
    height: fit-content;
    padding: 0 10%;
    padding-top: 70px !important;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .titleContContact span {
    font-size: 22px;
  }
  .titleContContact {
    padding: 10px 6%;
  }
  .reverse-text {
    align-self: flex-start !important;
    margin-top: 20px;
  }
  .linkContContact {
    height: 42px;
    border-radius: 50px;
    width: fit-content;
    padding: 0 5px;
    padding-right: 15px;
    display: flex;
    gap: 5px;
    align-items: center;
    backdrop-filter: blur(4px);
    border: 1px solid transparent;
    transition: all 0.2 ease-in-out;
    -webkit-transition: all ease-in-out 0.2s;
    -moz-transition: all ease-in-out 0.2s;
    -ms-transition: all ease-in-out 0.2s;
    -o-transition: all ease-in-out 0.2s;
  }
}
</style>

<script>
export default {
  name: "Contact",
  components: {},
  props: {
    darkMode: null,
    langg: "en",
  },
  data() {
    return {
      lang: "en",
      email: "leandrotosunian@hotmail.com",
      added: false,
    };
  },
  beforeMount() {
    this.lang = localStorage.getItem("port_lang");
  },
  methods: {
    copy() {
      try {
        navigator.clipboard.writeText(this.email);
        this.added = true;
        setTimeout(() => {
          this.added = false;
        }, 3000);
      } catch (error) {}
    },
  },
};
</script>
