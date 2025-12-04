<template>
  <div :class="[{ dark: darkMode }, 'main-container-top']">
    <div class="titleContHome">
      <span
        v-if="langg === 'en'"
        class="font-semibold"
        style="margin-bottom: 16px"
        >Welcome all! I'm</span
      >
      <span
        v-if="langg === 'es'"
        class="font-semibold"
        style="margin-bottom: 16px"
        >¡Hola! Soy</span
      >
      <h1 class="font-bold">Leandro Tosunian</h1>
      <span class="font-semibold reverse-text" v-if="langg === 'en'"
        >a Full Stack Web Developer</span
      >
      <span class="font-semibold reverse-text" v-if="langg === 'es'"
        >Desarrollador Web Full Stack</span
      >
      <div
        v-if="!darkMode"
        class=""
        style="
          height: 150px;
          width: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 50px;
        "
      >
        <div class="buttons">
          <a
            v-if="langg === 'es'"
            href="https://www.linkedin.com/in/leandrotosunian/"
            target="_blank"
            style="cursor: pointer"
          >
            <div class="btnCont">
              <div
                class="w-10 h-full"
                style="
                  display: flex !important;
                  justify-content: center !important;
                  align-items: center !important;
                "
              >
                <font-awesome-icon
                  icon="fa-solid fa-download"
                  style="height: 20px; margin: 0 !important"
                />
              </div>
              <p class="btnSpan">Mi CV</p>
            </div>
          </a>
          <a
            v-if="langg === 'en'"
            href="https://www.linkedin.com/in/leandrotosunian/"
            target="_blank"
            style="cursor: pointer"
          >
            <div class="btnCont">
              <div
                class="w-10 h-full"
                style="
                  display: flex !important;
                  justify-content: center !important;
                  align-items: center !important;
                "
              >
                <font-awesome-icon
                  icon="fa-solid fa-download"
                  style="height: 20px; margin: 0 !important"
                />
              </div>
              <p class="btnSpan">My CV</p>
            </div>
          </a>
          <!-- <p>Mi CV</p> -->
        </div>
        <div class="buttons">
          <!-- <p>Contactame</p> -->
          <router-link
            to="/contact"
            v-if="langg === 'es'"
            style="cursor: pointer"
          >
            <div class="btnCont">
              <div
                class="w-10 h-full"
                style="
                  display: flex !important;
                  justify-content: center !important;
                  align-items: center !important;
                "
              >
                <font-awesome-icon
                  icon="fa-solid fa-message"
                  style="height: 18px; margin: 0 !important"
                />
              </div>
              <p class="btnSpan">Contactame</p>
            </div>
          </router-link>
          <router-link
            to="/contact"
            v-if="langg === 'en'"
            style="cursor: pointer"
          >
            <div class="btnCont">
              <div
                class="w-10 h-full"
                style="
                  display: flex !important;
                  justify-content: center !important;
                  align-items: center !important;
                "
              >
                <font-awesome-icon
                  icon="fa-solid fa-message"
                  style="height: 18px; margin: 0 !important"
                />
              </div>
              <p class="btnSpan">Contact me</p>
            </div>
          </router-link>
        </div>
      </div>
    </div>
    <div class="router-nav" style="justify-content: end !important">
      <router-link
        to="/aboutme"
        class="flex gap-2 align-items-center h-fit router-nav-link"
      >
        <span v-if="langg === 'es'" class="">Sobre mi</span>
        <span v-if="langg === 'en'" class="">About me</span>
        <font-awesome-icon
          style="width: 12px; margin: 0 !important"
          icon="fa-solid fa-arrow-right"
        />
      </router-link>
    </div>
  </div>
</template>

<style>
.btnCont {
  height: fit-content;
  border-radius: 50px;
  width: fit-content;
  padding: 17px 23px;
  padding-right: 35px;
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
.btnCont:hover {
  box-shadow: 0px 0px 0px rgba(94, 18, 182, 0.25);
  transform: scale(1.02);
  border-color: rgba(94, 18, 182, 0.6);
  transition: all 0.2 ease-in-out;
  -webkit-transition: all ease-in-out 0.2s;
  -moz-transition: all ease-in-out 0.2s;
  -ms-transition: all ease-in-out 0.2s;
  -o-transition: all ease-in-out 0.2s;
}
.btnSpan {
  font-weight: 500;

  letter-spacing: -0.015em;
  text-transform: uppercase;
  cursor: pointer;
  font-weight: 500;
}

.buttons {
  display: flex;
  justify-content: center;
  align-items: center;
  width: fit-content;
  height: fit-content;
}
.buttons span {
  font-size: 17px !important;
}
.main-container-top {
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
.titleContHome {
  display: flex;
  flex-direction: column;
  align-items: start;
  width: fit-content;
  height: fit-content;
}
.titleContHome span {
  font-size: 27px;
}

.reverse-text {
  align-self: end !important;
  margin-top: 20px;
}

.titleContHome {
  display: flex;
  flex-direction: column;
  align-items: start;
  width: fit-content;
  height: fit-content;
}
.titleContHome span {
  font-size: 27px;
}

@media (max-width: 1600px) {
  .titleContHome span {
    font-size: 24px;
  }

  .buttons {
    font-size: 13px !important;
  }

    .main-container-top {
    padding-top: 60px !important;
  }
}

@media (max-width: 768px) {
  .titleContHome span {
    font-size: 22px;
  }
  .titleContHome {
    padding: 25px 0% !important;
  }

  .btnSpan {
    font-size: 14px !important;
    font-weight: 500;
  }
  .btnCont {
    height: 54px;
    border-radius: 50px;
    width: fit-content;
    padding: 0 7px;
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

  .main-container {
    height: 100vh;
    padding: 0 10%;
    padding-top: 10%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
  }
  .main-container-top {
    height: fit-content;
    padding: 0 10%;
    padding-top: 70px !important;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .titleContHome span {
    font-size: 22px;
  }
  .titleContHome {
    padding: 40px 6%;
  }
  .reverse-text {
    align-self: flex-start !important;
    margin-top: 20px;
  }
}
</style>

<script>
export default {
  name: "Home",
  components: {},
  props: {
    darkMode: null,
    langg: "es",
  },
  data() {
    return {
      lang: "es",
      modo: null,
    };
  },
  beforeMount() {
    localStorage.setItem("port_lang", this.lang);
    this.lang = localStorage.getItem("port_lang");
  },
};
</script>
