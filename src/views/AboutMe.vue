<template>
  <div :class="[{ dark: darkMode }, 'main-container-top-about']">
    <div class="aboutCont">
      <!-- <div class="w-fit h-fit picCont">
                <img src="@/assets/mypic.jpg" alt="">
            </div> -->

      <div>
        <h3 class="titles" v-if="langg === 'es'">Sobre mi</h3>
        <h3 class="titles" v-if="langg === 'en'">About me</h3>
        <p v-if="langg === 'es'" class="mb-4 aboutP">
          <!-- <img src="@/assets/mypic.jpg" alt="" class="picContMobile" /> -->
          Soy Leandro Tosunian, desarrollador web Full Stack de Mar del Plata,
          Argentina. Me especializo en crear soluciones digitales completas,
          desde el diseño del frontend hasta el desarrollo del backend,
          combinando rendimiento, funcionalidad y una excelente experiencia de
          usuario.
        </p>
        <p v-if="langg === 'es'" class="mb-4 aboutP">
          Trabajo como freelancer ayudando a negocios y emprendedores a
          digitalizar y escalar sus proyectos mediante sitios web modernos,
          tiendas online y sistemas de gestión personalizados. Actualmente,
          también estudio la Tecnicatura en Programación en la Universidad
          Tecnológica Nacional, donde sigo fortaleciendo mis conocimientos en
          desarrollo de software.
        </p>
        <p v-if="langg === 'en'" class="mb-4">
          <!-- <img src="@/assets/mypic.jpg" alt="" class="picContMobile" /> -->
          I'm Leandro Tosunian, a Full Stack Web Developer based in Mar del
          Plata, Argentina. I specialize in building complete digital solutions
          — from frontend design to backend development — with a strong focus on
          performance, usability, and user experience. As a freelancer, I help
          businesses and entrepreneurs bring their ideas online through modern
          websites, e-commerce platforms, and custom management systems. I'm
          also currently studying a Technical Degree in Programming at the
          National Technological University (UTN) to further deepen my software
          development skills.
        </p>
        <h3 class="titles" v-if="langg === 'es'">Mis estudios</h3>
        <h3 class="titles" v-if="langg === 'en'">Education</h3>

        <div class="eduMainCont">
          <div class="educationCont">
            <div class="courseCont">
              <small style="font-weight:400; margin-bottom"
                >UCIP - Mar del Plata</small
              >
              <small
                v-if="langg === 'es'"
                style="font-size: 10px; margin-bottom: 3px"
                >Abril 2022 - Julio 2022</small
              >
              <small
                v-if="langg === 'en'"
                style="font-size: 10px; margin-bottom: 3px"
                >April 2022 - July 2022</small
              >
              <p v-if="langg === 'es'" class="font-semibold text-center">
                HTML, CSS y JavaScript
              </p>
              <p v-if="langg === 'en'" class="font-semibold text-center">
                Web development in HTML, CSS and JavaScript
              </p>
            </div>
            <a
              class="cursor-pointer certBtnCont"
              href="https://drive.google.com/file/d/10MVpqmaJ5-_z1ne3Ow-sxpSc3nrNCQoY/view?usp=share_link"
              target="_blank"
            >
              <font-awesome-icon
                icon="fa-solid fa-download"
                style="height: 17px; margin: 0 !important"
              />
              <button v-if="langg === 'es'">Descargar Certificado</button>
              <button v-if="langg === 'en'">Download Certificate</button>
            </a>
          </div>

          <div class="educationCont">
            <div class="courseCont">
              <small style="font-weight:400; margin-bottom">Udemy</small>
              <small
                v-if="langg === 'es'"
                style="font-size: 10px; margin-bottom: 3px"
                >Junio 2022 - Actualidad</small
              >
              <small
                v-if="langg === 'en'"
                style="font-size: 10px; margin-bottom: 3px"
                >June 2022 - Today</small
              >
              <p v-if="langg === 'es'" class="font-semibold text-center">
                <a
                  href="https://www.udemy.com/course/javascript-moderno-guia-definitiva-construye-10-proyectos/?kw=javasc&src=sac"
                  target="_blank"
                  >Curso de JavaScript Full Stack MERN/MEVN</a
                >
              </p>
              <p v-if="langg === 'en'" class="font-semibold text-center">
                <a
                  href="https://www.udemy.com/course/javascript-moderno-guia-definitiva-construye-10-proyectos/?kw=javasc&src=sac"
                  target="_blank"
                  >JavaScript Full Stack MERN/MEVN Course</a
                >
              </p>
            </div>
            <a
              class="cursor-pointer certBtnCont"
              href="https://drive.google.com/file/d/1ZtkcU0WsRbd0nC97-q_SQXn1U8NzpafT/view?usp=sharing"
              target="_blank"
            >
              <font-awesome-icon
                icon="fa-solid fa-download"
                style="height: 17px; margin: 0 !important"
              />
              <button v-if="langg === 'es'">Descargar Certificado</button>
              <button v-if="langg === 'en'">Download Certificate</button>
            </a>
          </div>

          <div class="educationCont">
            <div class="courseCont">
              <small style="font-weight:400; margin-bottom"
                >Universidad Tecnológica Nacional</small
              >
              <small
                v-if="langg === 'es'"
                style="font-size: 10px; margin-bottom: 3px"
                >Febrero 2025 - Actualidad</small
              >
              <small
                v-if="langg === 'en'"
                style="font-size: 10px; margin-bottom: 3px"
                >February 2025 - Today</small
              >
              <p v-if="langg === 'es'" class="font-semibold text-center">
                <a
                  href="https://mdp.utn.edu.ar/tecnicatura/tecnico_universitario_en_programacion/"
                  target="_blank"
                  >Tecnicatura Universitaria en Programación</a
                >
              </p>
              <p v-if="langg === 'en'" class="font-semibold text-center">
                <a
                  href="https://mdp.utn.edu.ar/tecnicatura/tecnico_universitario_en_programacion/"
                  target="_blank"
                  >Associate Degree in Programming</a
                >
              </p>
            </div>
          </div>
        </div>

        <h3 class="titles" style="margin-top: 20px" v-if="langg === 'es'">
          Mis conocimientos
        </h3>
        <h3 class="titles" style="margin-top: 20px" v-if="langg === 'en'">
          Knowledge
        </h3>

        <div class="kCont">
          <div class="kBox">
            <div class="kTitle">
              <font-awesome-icon
                class="arrowR"
                icon="fa-solid fa-angle-right"
              />
              <p v-if="langg === 'es'">Lenguajes</p>
              <p v-if="langg === 'en'">Languages</p>
            </div>
            <div>
              <p style="font-size: 13px">
                HTML5 | CSS3 | TypeScript | C
              </p>
            </div>
          </div>
          <div class="kBox">
            <div class="kTitle">
              <font-awesome-icon
                class="arrowR"
                icon="fa-solid fa-angle-right"
              />
              <p v-if="langg === 'es'">
                Frameworks, librerias y bases de datos
              </p>
              <p v-if="langg === 'en'">Frameworks, libraries and databases</p>
            </div>
            <div>
              <p style="font-size: 13px">
                Node.js | Express.js | React.js | Next.js | Vue.js | MongoDB |
                Tailwind | Bootstrap | JWT | Socket.io
              </p>
            </div>
          </div>
          <div class="kBox">
            <div class="kTitle">
              <font-awesome-icon
                class="arrowR"
                icon="fa-solid fa-angle-right"
              />
              <p v-if="langg === 'es'">Herramientas</p>
              <p v-if="langg === 'en'">Tools</p>
            </div>
            <div>
              <p style="font-size: 13px">Postman | MongoDB Compass | GitHub</p>
            </div>
          </div>
        </div>
      </div>
      <!-- <span v-if="langg === 'en'" class="font-semibold" style="margin-bottom:16px;">Welcome all!, I'm</span>
            <span v-if="langg === 'es'" class="font-semibold" style="margin-bottom:16px;">¡Hola!, me llamo</span>
            <h1 class="font-bold ">Leandro Tosunian</h1>
            <span class="font-semibold reverse-text" v-if="langg === 'en'" >a freelancer Full Stack Web Developer</span>
            <span class="font-semibold reverse-text" v-if="langg === 'es'" >soy desarrollador web Full Stack</span> -->
    </div>
    <div class="router-nav">
      <router-link to="/" class="flex align-items-center h-fit router-nav-link">
        <font-awesome-icon
          style="
            width: 12px;
            margin: 0 !important;
            margin-right: 8px !important;
          "
          icon="fa-solid fa-arrow-left"
        />
        <span v-if="langg === 'es'">Inicio</span>
        <span v-if="langg === 'en'">Home</span>
      </router-link>
      <router-link
        to="/projects"
        class="flex gap-2 align-items-center h-fit router-nav-link"
      >
        <span v-if="langg === 'en'">My proyects</span>
        <span v-if="langg === 'es'">Mis proyectos</span>
        <font-awesome-icon
          style="width: 12px; margin: 0 !important"
          icon="fa-solid fa-arrow-right"
        />
      </router-link>
    </div>
  </div>
</template>

<style>
.eduMainCont {
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: row;
  gap: 15px;
}
.kCont {
  position: relative;
  display: flex;
  width: 100%;
  height: fit-content;
  flex-direction: row;
  gap: 10px;
}
.kTitle p {
  font-weight: 500;
  font-size: 14px;
  line-height: 14px;
}
.kTitle {
  display: flex;
  flex-direction: row;
  justify-content: start;
  gap: 4px;
  align-items: center;
  margin-bottom: 5px;
  margin-top: 2px;
}
.kBox {
  border: 1px solid rgba(255, 255, 255, 0.027);
  border-radius: 15px;
  padding: 11px 15px;
  box-shadow: 8px 8px 15px rgb(94 18 182 / 11%);
}

.certBtnCont {
  display: flex;
  flex-direction: column-reverse;
  gap: 8px;
  padding: 12px 10px;
  justify-content: center;
  align-items: center;
}
.educationCont {
  display: flex;
  width: fit-content;
  height: fit-content;
  border: 1px solid rgba(255, 255, 255, 0.027);
  box-shadow: 8px 8px 15px rgb(94 18 182 / 13%);
  border-radius: 15px;
}
.courseCont {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: fit-content;
  height: fit-content;
  padding: 10px 20px;
  border-right: 1px solid rgb(94 18 182 / 13%);
}

h3 {
  font-size: 27px !important;
  font-weight: 600 !important;
  margin-bottom: 10px !important;
}
.main-container-top-about {
  height: 80vh;
  padding: 0 10%;
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
.aboutCont {
  display: flex;
  box-shadow: 8px 8px 15px rgba(40, 40, 40, 0.2);
  flex-direction: row;
  padding: 3%;
  gap: 50px;
  align-items: center;
  max-width: 75vw;
  width: fit-content;
  height: fit-content;
  border: 1px solid rgba(129, 129, 129, 0);
  border-radius: 10px;
  backdrop-filter: blur(6px);
  z-index: 10000;
}
.aboutCont span {
  font-size: 27px;
}

.aboutCont p {
  font-size: 15px;
}

.titles {
  font-size: 28px !important;
  margin-bottom: 15px !important;
}

.aboutP {
  font-size: 19px !important;
}

.picCont img {
  position: relative;
  width: 500px;
  z-index: 10000;
  border-radius: 10px;
  min-width: 200px;
}

.reverse-text {
  align-self: end !important;
  margin-top: 20px;
}
.picContMobile {
  display: none;
}

.arrowR {
  height: 13px;
  color: rgb(79, 15, 153);
  margin-right: 3px;
}

@media (max-width: 1600px) {
  .titles {
    font-size: 20px !important;
    margin-bottom: 7px !important;
  }
  .aboutP {
    font-size: 13px !important;
  }

  .aboutCont {
    padding: 2%;
  }
}

@media (max-width: 768px) {
  .eduMainCont {
    flex-direction: column;
  }
  .kTitle p {
    font-size: 14px;
    line-height: 14px;
  }
  .arrowR {
    margin: 0;
    margin-right: 3px;
  }
  .kCont {
    position: relative;
    display: flex;
    width: 100%;
    height: fit-content;
    flex-direction: column;
  }
  .certBtnCont {
    display: flex;
    flex-direction: row;
    gap: 13px;
    padding: 12px 16px;
    justify-content: center;
    align-items: center;
  }
  .educationCont {
    flex-direction: column;
    width: 100%;
    align-items: center;
  }
  .courseCont {
    border: none;
    border-bottom: 1px solid rgba(255, 255, 255, 0.027);
  }
  .titles {
    font-size: 24px !important;
  }
  .aboutCont p {
    font-size: 14px;
  }
  .picContMobile {
    display: block;
    width: 100px;
    float: right;
    margin-left: 12px;
    margin-bottom: 4px;
    border-radius: 10px;
  }
  .aboutCont {
    display: flex;
    flex-direction: column;
    overflow-y: scroll;
    padding: 10px 6%;
    gap: 50px;
    align-items: center;
    max-width: 100vw;
    max-height: 70vh;
    box-shadow: 0px 0px 0px rgb(40 40 40 / 20%) !important;
    width: fit-content;
    height: fit-content;
    border: 1px solid rgba(129, 129, 129, 0);
    border-radius: 10px;
    backdrop-filter: blur(6px);
    z-index: 10000;
  }
  .main-container {
    height: 100vh;
    padding: 0 5%;
    padding-top: 10%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
  }
  .main-container-top-about {
    height: fit-content;
    padding: 10px 0%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .aboutCont span {
    font-size: 20px;
  }
  .reverse-text {
    align-self: flex-start !important;
    margin-top: 20px;
  }
  .picCont {
    display: none;
  }
  .picCont img {
    position: relative;
    width: 100px;
    z-index: 10000;
    border-radius: 10px;
    min-width: 100px;
  }
}
</style>

<script>
export default {
  name: "AboutMe",
  components: {},
  props: {
    darkMode: null,
    langg: "en",
  },
  data() {
    return {
      lang: "en",
    };
  },
  beforeMount() {
    this.lang = localStorage.getItem("port_lang");
    console.log(this.lang);
  },
  mounted() {
    console.log(this.name);
  },
  methods: {},
};
</script>
