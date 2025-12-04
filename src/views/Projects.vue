import { Types } from 'mongoose'; import { Drawer as DrawerPrimitive } from
'vaul';
<template>
  <div :class="[{ dark: darkMode }, 'main-container-top-projects']">
    <div class="textHeader">
      <h3 class="font-bold" v-if="langg === 'es'">Mis proyectos</h3>
      <h3 class="font-bold" v-if="langg === 'en'">Projects</h3>
    </div>

    <div class="cardsContainer">
      <!-- sacaturno -->
      <div class="card">
        <div class="card-img-cont">
          <img src="@/assets/sacaturnoscreen.png" alt="" />
        </div>
        <div class="detailsCont">
          <span v-if="langg === 'es'">SacaTurno - SaaS Turnos Online</span>
          <span v-if="langg === 'en'"
            >SacaTurno - SaaS Online Appointment Booking</span
          >
          <p v-if="langg === 'es'">
            SacaTurno es una aplicación web para que negocios como peluquerías,
            centros de estética, masajistas, talleres mecánicos y otros, puedan
            gestionar sus turnos de forma online. Es un servicio online que
            ofrece 15 días de prueba gratis. Luego, para seguir usándolo, se
            paga una suscripción mensual a través de Mercado Pago, con
            activación automática. Solo tenés que crear tu cuenta, configurar tu
            negocio y servicios, y ya podés empezar a cargar turnos.
          </p>
          <p v-if="langg === 'en'">
            SacaTurno is a SaaS (software as a service) intended for online
            appointment booking. This service is ideal for businesses such as
            hairdressers, beauty centers, masseuses, epilators, mechanical
            workshops, etc. Whoever registers will have a free 30-day trial
            period. Upon expiration, you must pay a monthly subscription through
            Mercado Pago and its activation is instantaneous. To use it, you
            must create your account, create your business, your services and
            start uploading your appointments. The application was developed
            with TypeScript, both the interface with Next.js and the server with
            Node.js and Express.js. The latter stores and queries data to a
            cloud database from MongoDB Atlas.
          </p>
          <div style="display: flex; align-items: end; gap: 5px" class="mt-2">
            <p
              style="
                font-weight: 500;
                font-size: 14px;
                line-height: 14px;
                margin-right: 3px;
              "
              v-if="langg === 'en'"
            >
              Developed with:
            </p>
            <p
              style="
                font-weight: 500;
                font-size: 14px;
                line-height: 14px;
                margin-right: 3px;
              "
              v-if="langg === 'es'"
            >
              Desarrollado con:
            </p>
            <!-- <img src="@/assets/mevn.png" style="width:70px; height:22px;margin-bottom:3px;" alt=""> -->
            <img
              src="@/assets/typescript.png"
              title="TypeScript"
              style="width: 23px; border-radius: 6px"
              alt=""
            />
            <img
              src="@/assets/next.png"
              title="Next.js"
              style="width: 24px"
              alt=""
            />
            <img
              src="@/assets/nodejs.png"
              title="Node.js"
              style="width: 19px"
              alt=""
            />
            <img
              src="@/assets/express.png"
              title="Express.js"
              style="width: 23px"
              alt=""
            />
            <img
              src="@/assets/mongodblogo.png"
              title="MongoDB"
              style="width: 23px; border-radius: 6px"
              alt=""
            />
          </div>
          <a
            href="https://sacaturno.com.ar/"
            target="_blank"
            style="margin-bottom: 18px; cursor: pointer"
          >
            <div class="mt-4 linkCont">
              <div
                class="w-6 h-full"
                style="
                  display: flex !important;
                  justify-content: center !important;
                  align-items: center !important;
                "
              >
                <font-awesome-icon
                  icon="fa-solid fa-link"
                  style="height: 12px; margin: 0 !important"
                />
              </div>
              <span class="linkSpan">sacaturno.com.ar</span>
            </div>
          </a>
        </div>
      </div>

      <!-- telovendo page -->
      <div class="card">
        <div class="card-img-cont">
          <img src="@/assets/telovendo.png" alt="" />
        </div>
        <div class="detailsCont">
          <span v-if="langg === 'es'">Telovendo - Página Web con Catálogo</span>
          <span v-if="langg === 'en'">Telovendo - Web Page</span>
          <p v-if="langg === 'es'">
            Página web para Telovendo Santa Fé, dedicados a la venta de
            vehículos. El sitio cuenta con un diseño moderno y responsivo, con
            su página principal, un apartado de catálogo de vehículos y un
            formulario de contacto para enviar una solicitud de cotización. Todo
            el stock y el envío de consultas se gestionan desde un panel de
            administración privado, donde además cuenta con un CRM para gestión
            de clientes y un presupuestador digital, que genera un archivo PDF
            con un diseño profesional para descargar y enviar al cliente.
          </p>
          <p v-if="langg === 'en'">
            A modern and responsive web platform dedicated to vehicle sales. The
            site features a main landing page, a comprehensive vehicle catalog,
            and a contact form that allows users to submit quotation requests.
            All inventory data and inquiries are managed through a private
            administration panel, which also includes a CRM system for client
            management and a digital quotation generator capable of producing
            professionally designed PDF documents for download and client
            delivery.
          </p>
          <div style="display: flex; align-items: end; gap: 5px" class="mt-2">
            <p
              style="
                font-weight: 500;
                font-size: 14px;
                line-height: 14px;
                margin-right: 3px;
              "
              v-if="langg === 'en'"
            >
              Developed with:
            </p>
            <p
              style="
                font-weight: 500;
                font-size: 14px;
                line-height: 14px;
                margin-right: 3px;
              "
              v-if="langg === 'es'"
            >
              Desarrollado con:
            </p>
            <!-- <img src="@/assets/mevn.png" style="width:70px; height:22px;margin-bottom:3px;" alt=""> -->
            <img
              src="@/assets/typescript.png"
              title="TypeScript"
              style="width: 23px; border-radius: 6px"
              alt=""
            />
            <img
              src="@/assets/next.png"
              title="Next.js"
              style="width: 24px"
              alt=""
            />
            <img
              src="@/assets/nodejs.png"
              title="Node.js"
              style="width: 19px"
              alt=""
            />
            <img
              src="@/assets/express.png"
              title="Express.js"
              style="width: 23px"
              alt=""
            />
            <img
              src="@/assets/mongodblogo.png"
              title="MongoDB"
              style="width: 23px; border-radius: 6px"
              alt=""
            />
          </div>
          <a
            href="https://telovendosf.com.ar/"
            target="_blank"
            style="margin-bottom: 18px; cursor: pointer"
          >
            <div class="mt-4 linkCont">
              <div
                class="w-6 h-full"
                style="
                  display: flex !important;
                  justify-content: center !important;
                  align-items: center !important;
                "
              >
                <font-awesome-icon
                  icon="fa-solid fa-link"
                  style="height: 12px; margin: 0 !important"
                />
              </div>
              <span class="linkSpan">telovendosf.com.ar</span>
            </div>
          </a>
        </div>
      </div>

      <!-- telovendo panel -->
      <div class="card">
        <div class="card-img-cont">
          <img src="@/assets/telovendopanel.png" alt="" />
        </div>
        <div class="detailsCont">
          <span v-if="langg === 'es'"
            >Telovendo - CRM / Presupuestador Digital
          </span>
          <span v-if="langg === 'en'"
            >Telovendo - CRM / Budget PDF Generator</span
          >
          <p v-if="langg === 'es'">
            Panel de administración privado para gestionar el stock de
            vehículos, crear un lead y responder a las solicitudes de cotización
            recibidas desde la página web, y la gestión de clientes mediante un
            CRM integrado con roles de usuario (administrador asigna leads y
            tareas a empleados). Además, cuenta con un presupuestador digital
            que permite generar cotizaciones en formato PDF con un diseño
            profesional para descargar y enviar al cliente, junto a un historial
            de archivos creados por cada lead. Todas las funcionalidades son
            adecuadas a las necesidades del negocio y a pedido de mi cliente.
          </p>
          <p v-if="langg === 'en'">
            Private Administration Panel for managing vehicle inventory,
            creating leads, and responding to quotation requests received
            through the website. It also includes client management via an
            integrated CRM system with user roles — allowing administrators to
            assign leads and tasks to employees. Additionally, it features a
            digital quotation generator that produces professionally designed
            PDF quotes for download and client delivery, along with a history
            log of all files generated for each lead. All functionalities were
            custom-developed to meet the specific needs of the business and
            tailored to the client’s requirements.
          </p>
          <div style="display: flex; align-items: end; gap: 5px" class="mt-2">
            <p
              style="
                font-weight: 500;
                font-size: 14px;
                line-height: 14px;
                margin-right: 3px;
              "
              v-if="langg === 'en'"
            >
              Developed with:
            </p>
            <p
              style="
                font-weight: 500;
                font-size: 14px;
                line-height: 14px;
                margin-right: 3px;
              "
              v-if="langg === 'es'"
            >
              Desarrollado con:
            </p>
            <!-- <img src="@/assets/mevn.png" style="width:70px; height:22px;margin-bottom:3px;" alt=""> -->
            <img
              src="@/assets/typescript.png"
              title="TypeScript"
              style="width: 23px; border-radius: 6px"
              alt=""
            />
            <img
              src="@/assets/next.png"
              title="Next.js"
              style="width: 24px"
              alt=""
            />
            <img
              src="@/assets/nodejs.png"
              title="Node.js"
              style="width: 19px"
              alt=""
            />
            <img
              src="@/assets/express.png"
              title="Express.js"
              style="width: 23px"
              alt=""
            />
            <img
              src="@/assets/mongodblogo.png"
              title="MongoDB"
              style="width: 23px; border-radius: 6px"
              alt=""
            />
          </div>
          <a
            href="https://telovendosf.com.ar/"
            target="_blank"
            style="margin-bottom: 18px; cursor: pointer"
          >
            <div class="mt-4 linkCont">
              <div
                class="w-6 h-full"
                style="
                  display: flex !important;
                  justify-content: center !important;
                  align-items: center !important;
                "
              >
                <font-awesome-icon
                  icon="fa-solid fa-link"
                  style="height: 12px; margin: 0 !important"
                />
              </div>
              <span class="linkSpan">telovendosf.com.ar</span>
            </div>
          </a>
        </div>
      </div>

      <!-- 420app -->
      <div class="card">
        <div class="card-img-cont">
          <img src="@/assets/420app2.png" alt="" />
        </div>
        <div class="detailsCont">
          <span v-if="langg === 'es'">420app - Inventario </span>
          <span v-if="langg === 'en'">
            420App - Product & Order Management
          </span>
          <p v-if="langg === 'es'">
            420App es una aplicación web desarrollada para optimizar la
            administración de productos y pedidos. Permite agregar productos
            fácilmente, aplicar ajustes de precios por porcentaje, definir
            márgenes de ganancia individuales y gestionar pedidos de manera ágil
            y eficiente. Es una herramienta pensada para negocios que buscan
            simplificar su gestión comercial diaria.
          </p>
          <p v-if="langg === 'en'">
            420App is a web application I developed to streamline product and
            order management for small businesses. It allows users to add new
            products, adjust prices by percentage, set individual profit
            margins, and create or modify customer orders with ease. It's a
            practical tool designed to simplify daily commercial operations.
          </p>
          <div style="display: flex; align-items: end; gap: 5px" class="mt-2">
            <p
              style="
                font-weight: 500;
                font-size: 14px;
                line-height: 14px;
                margin-right: 3px;
              "
              v-if="langg === 'en'"
            >
              Developed with:
            </p>
            <p
              style="
                font-weight: 500;
                font-size: 14px;
                line-height: 14px;
                margin-right: 3px;
              "
              v-if="langg === 'es'"
            >
              Desarrollado con:
            </p>
            <!-- <img src="@/assets/mevn.png" style="width:70px; height:22px;margin-bottom:3px;" alt=""> -->
            <img
              src="@/assets/typescript.png"
              title="TypeScript"
              style="width: 23px; border-radius: 6px"
              alt=""
            />
            <img
              src="@/assets/next.png"
              title="Next.js"
              style="width: 24px"
              alt=""
            />
            <img
              src="@/assets/nodejs.png"
              title="Node.js"
              style="width: 19px"
              alt=""
            />
            <img
              src="@/assets/express.png"
              title="Express.js"
              style="width: 23px"
              alt=""
            />
            <img
              src="@/assets/mongodblogo.png"
              title="MongoDB"
              style="width: 23px; border-radius: 6px"
              alt=""
            />
          </div>
          <!-- <a
            href="https://sacaturno.com.ar/"
            target="_blank"
            style="margin-bottom: 18px; cursor: pointer"
          >
            <div class="mt-4 linkCont">
              <div
                class="w-6 h-full"
                style="
                  display: flex !important;
                  justify-content: center !important;
                  align-items: center !important;
                "
              >
                <font-awesome-icon
                  icon="fa-solid fa-link"
                  style="height: 12px; margin: 0 !important"
                />
              </div>
              <span class="linkSpan">sacaturno.com.ar</span>
            </div>
          </a> -->
        </div>
      </div>

      <!-- somacann -->
      <!-- <div class="card">
        <div class="card-img-cont">
          <img src="@/assets/cannabica.png" alt="" />
        </div>
        <div class="detailsCont">
          <span v-if="langg === 'es'">Somacann - Tienda online</span>
          <span v-if="langg === 'en'">Somacann - Online Store</span>
          <p v-if="langg === 'es'">
            Tienda online desarrollada utilizando mi propia plataforma E-Mart.
            El sitio permite a los usuarios explorar productos, agregarlos al
            carrito de compras y completar el pedido mediante una pasarela de
            pago segura con MercadoPago. Es una solución ideal para
            emprendimientos que buscan vender en línea de forma rápida, simple y
            profesional.
          </p>
          <p v-if="langg === 'en'">
            Online store developed using my custom e-commerce platform E-Mart.
            The website allows users to browse products, add them to a shopping
            cart, and complete their purchase through a secure checkout powered
            by MercadoPago. It's an ideal solution for small businesses looking
            to sell online quickly, easily, and professionally.
          </p>
          <div style="display: flex; align-items: end; gap: 5px" class="mt-2">
            <p
              style="
                font-weight: 500;
                font-size: 14px;
                line-height: 14px;
                margin-right: 3px;
              "
              v-if="langg === 'en'"
            >
              Developed with:
            </p>
            <p
              style="
                font-weight: 500;
                font-size: 14px;
                line-height: 14px;
                margin-right: 3px;
              "
              v-if="langg === 'es'"
            >
              Desarrollado con:
            </p>
            <img
              src="@/assets/mongodblogo.png"
              title="MongoDB"
              style="width: 23px; border-radius: 6px"
              alt=""
            />
            <img
              src="@/assets/express.png"
              title="Express JS"
              style="width: 23px"
              alt=""
            />
            <img
              src="@/assets/vue.png"
              title="Vue"
              style="width: 24px"
              alt=""
            />
            <img
              src="@/assets/nodejs.png"
              title="Node.js"
              style="width: 19px"
              alt=""
            />
          </div>
          <a
            href="https://cannabicagroup.com.ar/"
            target="_blank"
            style="margin-bottom: 18px; cursor: pointer"
          >
            <div class="mt-4 linkCont">
              <div
                class="w-6 h-full"
                style="
                  display: flex !important;
                  justify-content: center !important;
                  align-items: center !important;
                "
              >
                <font-awesome-icon
                  icon="fa-solid fa-link"
                  style="height: 12px; margin: 0 !important"
                />
              </div>
              <span class="linkSpan">cannabicagroup.com.ar</span>
            </div>
          </a>
        </div>
      </div> -->

      <!-- encino landing -->
      <!-- telovendo panel -->
      <div class="card">
        <div class="card-img-cont">
          <img src="@/assets/encino.png" alt="" />
        </div>
        <div class="detailsCont">
          <span v-if="langg === 'es'">Encino Carpintería - Página Web </span>
          <span v-if="langg === 'en'">Encino - Landing Page</span>
          <p v-if="langg === 'es'">
            Landing page desarrollada a medida para Encino Carpintería, diseñada
            para presentar de forma clara la identidad de la carpintería y sus
            servicios. Incluye una sección “Sobre mí”, una galería de trabajos
            realizados, una presentación de las instalaciones del taller y un
            módulo de reseñas de clientes para reforzar la confianza. Además,
            integra un formulario de contacto funcional que permite recibir
            consultas directamente desde la web. El sitio está optimizado para
            ofrecer una experiencia rápida, moderna y completamente adaptada a
            las necesidades del negocio.
          </p>
          <p v-if="langg === 'en'">
            Custom landing page developed for Encino Carpintería, designed to
            clearly present the craftsman’s identity and services. It includes
            an “About Me” section, a gallery showcasing completed projects, an
            overview of the workshop facilities, and a customer reviews module
            to build trust. Additionally, it features a fully functional contact
            form that allows inquiries to be submitted directly through the
            website. The site is optimized to deliver a fast, modern user
            experience, fully tailored to the needs of the business.
          </p>
          <div style="display: flex; align-items: end; gap: 5px" class="mt-2">
            <p
              style="
                font-weight: 500;
                font-size: 14px;
                line-height: 14px;
                margin-right: 3px;
              "
              v-if="langg === 'en'"
            >
              Developed with:
            </p>
            <p
              style="
                font-weight: 500;
                font-size: 14px;
                line-height: 14px;
                margin-right: 3px;
              "
              v-if="langg === 'es'"
            >
              Desarrollado con:
            </p>
            <!-- <img src="@/assets/mevn.png" style="width:70px; height:22px;margin-bottom:3px;" alt=""> -->
            <img
              src="@/assets/typescript.png"
              title="TypeScript"
              style="width: 23px; border-radius: 6px"
              alt=""
            />
            <img
              src="@/assets/next.png"
              title="Next.js"
              style="width: 24px"
              alt=""
            />
            <img
              src="@/assets/nodejs.png"
              title="Node.js"
              style="width: 19px"
              alt=""
            />
            <img
              src="@/assets/express.png"
              title="Express.js"
              style="width: 23px"
              alt=""
            />
            <img
              src="@/assets/mongodblogo.png"
              title="MongoDB"
              style="width: 23px; border-radius: 6px"
              alt=""
            />
          </div>
          <a
            href="https://telovendosf.com.ar/"
            target="_blank"
            style="margin-bottom: 18px; cursor: pointer"
          >
            <div class="mt-4 linkCont">
              <div
                class="w-6 h-full"
                style="
                  display: flex !important;
                  justify-content: center !important;
                  align-items: center !important;
                "
              >
                <font-awesome-icon
                  icon="fa-solid fa-link"
                  style="height: 12px; margin: 0 !important"
                />
              </div>
              <span class="linkSpan">telovendosf.com.ar</span>
            </div>
          </a>
        </div>
      </div>

      <!-- typechat -->
      <div class="card">
        <div class="card-img-cont">
          <img src="@/assets/tc1.png" alt="" />
        </div>
        <div class="detailsCont">
          <span v-if="langg === 'es'">TypeChat - Chat en tiempo real</span>
          <span v-if="langg === 'en'">TypeChat - Real-time chatting app</span>
          <p v-if="langg === 'es'">
            Este proyecto es una <b>aplicación de chat en tiempo real</b>,
            inspirada en <b>WhatsApp de escritorio</b>. Permite
            <b>crear una cuenta</b>, <b>configurar el perfil</b> e
            <b>iniciar o borrar chats</b> usando el
            <b>número de teléfono</b> del contacto. Está desarrollada con
            <b>TypeScript</b>, <b>Node.js</b>, <b>Express.js</b> y
            <b>React.js</b>. Utiliza <b>MongoDB</b> como base de datos,
            <b>Socket.IO</b> para la <b>comunicación en tiempo real</b>,
            <b>Framer Motion</b> y <b>TailwindCSS</b> para
            <b>animaciones y estilos</b>, y <b>Multer</b> para
            <b>subir imágenes de perfil</b> al servidor.
          </p>
          <p v-if="langg === 'en'">
            This proyect consists in a real-time chat application, inspired in
            WhatsApp's desktop app for Windows. You can create an account,
            change your information and profile picture in the profile settings,
            start a new chat by other's phone number or delete it. The app was
            developed with TypeScript both at the server and visual interface
            level, using Node.js and Express.js in the backend and React.js in
            the frontend. As database, I used MongoDB and Mongoose and worked
            with libraries such as Socket.IO for real-time communication, Multer
            for server file uploading, in this case for uploading profile
            images, Framer Motion and TailwindCSS to create animations and
            styling interface's React components.
          </p>
          <div style="display: flex; align-items: end; gap: 5px" class="mt-2">
            <p
              style="
                font-weight: 500;
                font-size: 14px;
                line-height: 14px;
                margin-right: 3px;
              "
              v-if="langg === 'en'"
            >
              Developed with:
            </p>
            <p
              style="
                font-weight: 500;
                font-size: 14px;
                line-height: 14px;
                margin-right: 3px;
              "
              v-if="langg === 'es'"
            >
              Desarrollado con:
            </p>
            <!-- <img src="@/assets/mevn.png" style="width:70px; height:22px;margin-bottom:3px;" alt=""> -->
            <img
              src="@/assets/typescript.png"
              title="TypeScript"
              style="width: 23px; border-radius: 6px"
              alt=""
            />
            <img
              src="@/assets/atom.png"
              title="React.js"
              style="width: 24px"
              alt=""
            />
            <img
              src="@/assets/nodejs.png"
              title="Node.js"
              style="width: 19px"
              alt=""
            />
            <img
              src="@/assets/express.png"
              title="Express.js"
              style="width: 23px"
              alt=""
            />
            <img
              src="@/assets/mongodblogo.png"
              title="MongoDB"
              style="width: 23px; border-radius: 6px"
              alt=""
            />
          </div>
          <a
            href="https://typechat-one.vercel.app/"
            target="_blank"
            style="margin-bottom: 18px; cursor: pointer"
          >
            <div class="mt-4 linkCont">
              <div
                class="w-6 h-full"
                style="
                  display: flex !important;
                  justify-content: center !important;
                  align-items: center !important;
                "
              >
                <font-awesome-icon
                  icon="fa-solid fa-link"
                  style="height: 12px; margin: 0 !important"
                />
              </div>
              <span class="linkSpan">typechat-one.vercel.app</span>
            </div>
          </a>
        </div>
      </div>

      <!-- unc -->
      <!-- <div class="card">
        <div class="card-img-cont">
          <img src="@/assets/21.png" alt="" />
        </div>
        <div class="detailsCont">
          <span v-if="langg === 'es'">UNC - Tienda online</span>
          <span v-if="langg === 'en'">UNC - Online store</span>
          <p>
            Este trabajo consiste en una tienda online con mi plataforma eMart,
            la cual fue desarrollada para la marca de stickers Unique Nifty
            Crafts. El servicio cuenta con una tienda online donde sus clientes
            realizan sus pedidos y con un panel de administración para el
            vendedor, donde allí gestiona sus productos, su stock, sus pedidos
            de la tienda, entre otras funcionalidades.
          </p>

          <div style="display: flex; flex-direction: column; margin-top: 10px">
            <div style="display: flex; align-items: end; gap: 5px" class="mt-2">
              <p
                style="
                  font-weight: 500;
                  font-size: 14px;
                  line-height: 14px;
                  margin-right: 3px;
                "
                v-if="langg === 'en'"
              >
                Developed with:
              </p>
              <p
                style="
                  font-weight: 500;
                  font-size: 14px;
                  line-height: 14px;
                  margin-right: 3px;
                "
                v-if="langg === 'es'"
              >
                Desarrollado con:
              </p>
              <img
                src="@/assets/mongodblogo.png"
                title="MongoDB"
                style="width: 23px; border-radius: 6px"
                alt=""
              />
              <img
                src="@/assets/express.png"
                title="Express JS"
                style="width: 23px"
                alt=""
              />
              <img
                src="@/assets/vue.png"
                title="Vue"
                style="width: 24px"
                alt=""
              />
              <img
                src="@/assets/nodejs.png"
                title="Node.js"
                style="width: 19px"
                alt=""
              />
            </div>
            <a
              href="https://www.uncshop.com.ar/"
              target="_blank"
              style="margin-bottom: 18px; cursor: pointer"
            >
              <div class="mt-4 linkCont">
                <div
                  class="w-6 h-full"
                  style="
                    display: flex !important;
                    justify-content: center !important;
                    align-items: center !important;
                  "
                >
                  <font-awesome-icon
                    icon="fa-solid fa-link"
                    style="height: 12px; margin: 0 !important"
                  />
                </div>
                <span class="linkSpan">uncshop.com.ar</span>
              </div>
            </a>
          </div>
        </div>
      </div> -->

      <!-- emart tienda -->
      <div class="card">
        <div class="card-img-cont">
          <img src="@/assets/emartscreen1.png" alt="" />
        </div>
        <div class="detailsCont">
          <span v-if="langg === 'en'">eMart - Online store platform</span>
          <span v-if="langg === 'es'"
            >eMart - Plataforma de Tiendas Online</span
          >

          <p v-if="langg === 'es'">
            Esta es la <b>tienda online del proyecto eMart</b>, la cual tiene:
            un <b>listado de los productos</b> y
            <b>filtros para clasificarlos</b>: por <b>categoría</b> y/o
            <b>subcategoría</b>, por las <b>variantes del producto</b> (ej.
            color, talle, etc.), por<b> precio</b> y un
            <b>carrito de compras</b> donde se agregan los productos a comprar.
            El <b>pago se realiza de manera segura mediante Mercado Pago</b>. El
            cliente tiene en su <b>perfil</b> el
            <b>historial de sus compras</b> y los <b>datos de cada una</b>,
            donde se le enviará el <b>código de seguimiento</b> del correo y
            podrá <b>consultar el estado del envío</b>. Cada cliente
            <b>se crea su propio perfil</b> y solamente se podrá comprar si sos
            un <b>cliente registrado</b>.
          </p>

          <p v-if="langg === 'en'">
            This is an online store demo from my E-Commerce project eMart, which
            consists in: a product list with filters for sorting by category
            and/or subcategory, product variants (i.e. color, size, type, etc.),
            and a shopping cart where you can add products for your order. For
            payments, I used Checkout API from MercadoPago for a quick and safe
            transaction. Each client has to create a profile with his own data
            to buy on this store where, in his menu, he can check the status of
            his orders and get the shipping tracking code.
          </p>

          <div style="display: flex; align-items: end; gap: 5px" class="mt-2">
            <p
              style="
                font-weight: 500;
                font-size: 14px;
                line-height: 14px;
                margin-right: 3px;
              "
              v-if="langg === 'en'"
            >
              Developed with:
            </p>
            <p
              style="
                font-weight: 500;
                font-size: 14px;
                line-height: 14px;
                margin-right: 3px;
              "
              v-if="langg === 'es'"
            >
              Desarrollado con:
            </p>
            <!-- <img src="@/assets/mevn.png" style="width:70px; height:22px;margin-bottom:3px;" alt=""> -->
            <img
              src="@/assets/mongodblogo.png"
              title="MongoDB"
              style="width: 23px; border-radius: 6px"
              alt=""
            />
            <img
              src="@/assets/express.png"
              title="Express JS"
              style="width: 23px"
              alt=""
            />
            <img
              src="@/assets/vue.png"
              title="Vue"
              style="width: 24px"
              alt=""
            />
            <img
              src="@/assets/nodejs.png"
              title="Node.js"
              style="width: 19px"
              alt=""
            />
          </div>
          <a
            href="https://www.e-mart.com.ar/"
            target="_blank"
            style="margin-bottom: 18px; cursor: pointer"
          >
            <div class="mt-4 linkCont">
              <div
                class="w-6 h-full"
                style="
                  display: flex !important;
                  justify-content: center !important;
                  align-items: center !important;
                "
              >
                <font-awesome-icon
                  icon="fa-solid fa-link"
                  style="height: 12px; margin: 0 !important"
                />
              </div>
              <span class="linkSpan">e-mart.com.ar</span>
            </div>
          </a>
        </div>
      </div>

      <!-- emart panel -->
      <div class="card">
        <div class="card-img-cont">
          <img src="@/assets/emartscreen2.png" alt="" />
        </div>
        <div class="detailsCont">
          <span v-if="langg === 'es'">eMart - Panel de vendedor</span>
          <span v-if="langg === 'en'">eMart - Admin's Panel</span>
          <p v-if="langg === 'es'">
            Este es el panel de administración de la tienda, donde podés
            <b>gestionar tus productos</b> (agregar, editar, desactivar o
            eliminar), cargar sus <b>fotos</b>, configurar los
            <b>costos de envío</b> y el <b>monto mínimo para envío gratis</b>.
            También podés <b>personalizar las categorías y subcategorías</b>,
            <b>visualizar los pedidos</b> con todos los datos del cliente, del
            envío y de la compra, y al despachar los productos,
            <b>enviar automáticamente el código de seguimiento</b>. Además, el
            <b>historial de pedidos</b> se puede
            <b>filtrar por fecha o número de orden</b> para una mejor
            organización.
          </p>

          <p v-if="langg === 'en'">
            For the eMart E-Commerce project, this is the seller's admin panel.
            Here you can find the following features: you can create, update,
            enable, disable or delete products, set shipping costs, minimum
            amount for free shipping, set the store's categories and
            subcategories for organizing products, get a list of the orders made
            by your clients and their personal data, shipping address and
            products from each sale. When the orders are dispatched, you send
            each sale's tracking code to your customers.
          </p>

          <div style="display: flex; align-items: end; gap: 5px" class="mt-2">
            <p
              style="
                font-weight: 500;
                font-size: 13px;
                line-height: 14px;
                margin-right: 3px;
              "
              v-if="langg === 'en'"
            >
              Developed with:
            </p>
            <p
              style="
                font-weight: 500;
                font-size: 13px;
                line-height: 14px;
                margin-right: 3px;
              "
              v-if="langg === 'es'"
            >
              Desarrollado con:
            </p>
            <!-- <img src="@/assets/mevn.png" style="width:70px; height:22px;margin-bottom:3px;" alt=""> -->
            <img
              src="@/assets/mongodblogo.png"
              title="MongoDB"
              style="width: 23px; border-radius: 6px"
              alt=""
            />
            <img
              src="@/assets/express.png"
              title="Express JS"
              style="width: 23px"
              alt=""
            />
            <img
              src="@/assets/vue.png"
              title="Vue"
              style="width: 23px"
              alt=""
            />
            <img
              src="@/assets/nodejs.png"
              title="Node.js"
              style="width: 20px"
              alt=""
            />
          </div>
          <a
            href="https://www.panel.e-mart.com.ar/"
            target="_blank"
            style="margin-bottom: 18px; cursor: pointer"
          >
            <div class="mt-4 linkCont">
              <div
                class="w-6 h-full"
                style="
                  display: flex !important;
                  justify-content: center !important;
                  align-items: center !important;
                "
              >
                <font-awesome-icon
                  icon="fa-solid fa-link"
                  style="height: 12px; margin: 0 !important"
                />
              </div>
              <span class="linkSpan">panel.e-mart.com.ar</span>
            </div>
          </a>
        </div>
      </div>

      <!-- cultura sativa -->
      <div class="card">
        <div class="card-img-cont">
          <img src="@/assets/culturascreen.png" alt="" />
        </div>
        <div class="detailsCont">
          <span v-if="langg === 'es'"
            >Cultura Sativa - Landing page / Catálogo</span
          >
          <span v-if="langg === 'en'"
            >Cultura Sativa - Landing page / Catalog</span
          >
          <p v-if="langg === 'es'">
            Esta página web, la cual fue mi primer proyecto, es un catálogo de
            productos creada para una tienda de cultivo. A pedido del cliente,
            se realizó el catálogo dividido en cuatro categorías y una sección
            de contacto donde se encuentran accesos directos a las redes
            sociales, ubicación y mas información sobre la tienda fisica. El
            diseño de la página es responsivo, se adapta tanto a celular, como a
            tablets y PC.
          </p>
          <p v-if="langg === 'en'">
            This was my first project. This is a static small business website
            with a catalog of their products. Following cilent's requests, it
            was divided in four categories and a contact section with the
            business' social media, shop's address and more information. Its
            responsive design makes the website fit in PCs, tablets and mobiles.
          </p>
          <div style="display: flex; align-items: end; gap: 5px" class="mt-2">
            <p
              style="
                font-weight: 500;
                font-size: 14px;
                line-height: 14px;
                margin-right: 3px;
              "
              v-if="langg === 'en'"
            >
              Developed with:
            </p>
            <p
              style="
                font-weight: 500;
                font-size: 14px;
                line-height: 14px;
                margin-right: 3px;
              "
              v-if="langg === 'es'"
            >
              Desarrollado con:
            </p>
            <!-- <img src="@/assets/mevn.png" style="width:70px; height:22px;margin-bottom:3px;" alt=""> -->
            <img
              src="@/assets/html.png"
              title="HTML5"
              style="width: 20px; border-radius: 6px"
              alt=""
            />
            <img
              src="@/assets/css.png"
              title="CSS3"
              style="width: 20px"
              alt=""
            />
            <img
              src="@/assets/js.png"
              title="JavaScript"
              style="width: 20px"
              alt=""
            />
          </div>
          <a
            href="https://frabjous-croquembouche-566011.netlify.app/"
            target="_blank"
            style="margin-bottom: 18px; cursor: pointer"
          >
            <div class="mt-4 linkCont">
              <div
                class="w-6 h-full"
                style="
                  display: flex !important;
                  justify-content: center !important;
                  align-items: center !important;
                "
              >
                <font-awesome-icon
                  icon="fa-solid fa-link"
                  style="height: 12px; margin: 0 !important"
                />
              </div>
              <span class="linkSpan">culturasativa.com.ar</span>
            </div>
          </a>
        </div>
      </div>
    </div>

    <div class="router-nav">
      <router-link
        v-if="langg === 'en'"
        to="/aboutme"
        class="flex align-items-center h-fit router-nav-link"
      >
        <font-awesome-icon
          style="
            width: 12px;
            margin: 0 !important;
            margin-right: 8px !important;
          "
          icon="fa-solid fa-arrow-left"
        />
        <span>About me</span>
      </router-link>

      <router-link
        v-if="langg === 'es'"
        to="/aboutme"
        class="flex align-items-center h-fit router-nav-link"
      >
        <font-awesome-icon
          style="
            width: 12px;
            margin: 0 !important;
            margin-right: 8px !important;
          "
          icon="fa-solid fa-arrow-left"
        />
        <span>Sobre mi</span>
      </router-link>

      <router-link
        v-if="langg === 'en'"
        to="/contact"
        class="flex gap-2 align-items-center h-fit router-nav-link"
      >
        <span>Contact</span>
        <font-awesome-icon
          style="width: 12px; margin: 0 !important"
          icon="fa-solid fa-arrow-right"
        />
      </router-link>

      <router-link
        v-if="langg === 'es'"
        to="/contact"
        class="flex gap-2 align-items-center h-fit router-nav-link"
      >
        <span>Contacto</span>
        <font-awesome-icon
          style="width: 12px; margin: 0 !important"
          icon="fa-solid fa-arrow-right"
        />
      </router-link>

      <!-- <router-link
        v-if="langg === 'es'"
        to="/services"
        class="flex gap-2 align-items-center h-fit router-nav-link"
      >
        <span>Servicios</span>
        <font-awesome-icon
          style="width: 12px; margin: 0 !important"
          icon="fa-solid fa-arrow-right"
        />
      </router-link> -->
    </div>
  </div>
</template>

<style>
.cardsContainer::-webkit-scrollbar {
  margin-left: 4px;
  width: 11px;
  color: red;
  transition: 0.3s all ease-in-out;
}

.cardsContainer::-webkit-scrollbar-track {
  background: rgba(73, 73, 73, 0.168);
  transition: 0.3s all ease-in-out;
  border-radius: 100vw;
  -webkit-border-radius: 100vw;
  -moz-border-radius: 100vw;
  -ms-border-radius: 100vw;
  -o-border-radius: 100vw;
}

.cardsContainer::-webkit-scrollbar-thumb {
  background: linear-gradient(to bottom, #6e13b985, #7b43977e);
  height: 50px;
  border-radius: 100vw;
  transition: 0.3s all ease-in-out;
  border: 4px solid linear-gradient(to bottom, #6e13b9, #7b4397);
  -webkit-transition: 0.3s all ease-in-out;
  -moz-transition: 0.3s all ease-in-out;
  -ms-transition: 0.3s all ease-in-out;
  -o-transition: 0.3s all ease-in-out;
  -webkit-border-radius: 100vw;
  -moz-border-radius: 100vw;
  -ms-border-radius: 100vw;
  -o-border-radius: 100vw;
}

.cardsContainer::-webkit-scrollbar-thumb:hover {
  background: linear-gradient(to bottom, #6e13b9, #7b4397);
  transition: 0.3s all ease-in-out;
}

.linkCont {
  height: 34px !important;
  border-radius: 50px;
  width: fit-content;
  padding: 0 5px;
  padding-right: 15px;
  display: flex;
  gap: 5px;
  align-items: center;
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(5px);
  box-shadow: 8px 8px 15px rgba(94, 18, 182, 0.13);
  transition: all 0.2 ease-in-out;
  -webkit-transition: all ease-in-out 0.2s;
  -moz-transition: all ease-in-out 0.2s;
  -ms-transition: all ease-in-out 0.2s;
  -o-transition: all ease-in-out 0.2s;
}
.linkCont:hover {
  box-shadow: 0px 0px 0px rgba(94, 18, 182, 0.25);
  border-color: rgba(94, 18, 182, 0.6);
  transition: all 0.2 ease-in-out;
  -webkit-transition: all ease-in-out 0.2s;
  -moz-transition: all ease-in-out 0.2s;
  -ms-transition: all ease-in-out 0.2s;
  -o-transition: all ease-in-out 0.2s;
}
.linkCont .linkSpan {
  font-size: 14px !important;
  font-weight: 500;
  line-height: 14px;
}

.main-container-top-projects {
  height: 80vh;
  padding: 0 10%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.cardsContainer {
  margin-top: 30px;
  width: 95% !important;
  height: 70vh;
  padding: 0px;
  gap: 45px;
  overflow-y: scroll;
  overflow-x: hidden;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}
.card {
  display: flex;
  flex-direction: row;
  width: 48%;
  height: fit-content;
  padding-bottom: 0 !important;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  backdrop-filter: blur(5px);
  background: transparent;
  z-index: 4000;
}
.textHeader {
  height: fit-content;
  width: 100vw;
  position: absolute;
  display: flex;
  justify-content: center;
  line-height: 51px !important;
  font-weight: 600;
  top: 0;
}
.textHeader h3 {
  font-size: 1.3em !important;
}

.card-img-cont {
  width: 100%;
  display: flex;
  flex-direction: row;
  border-bottom-left-radius: 12px !important;
  border-top-left-radius: 12px;
  border-bottom-right-radius: 12px !important ;
  border-top-right-radius: 0px !important ;
}
.card-img-cont img {
  border-top-left-radius: 12px !important;
  border-bottom-left-radius: 12px !important;
  border-bottom-right-radius: 0px !important ;
  border-top-right-radius: 0px !important ;
}

.detailsCont {
  width: 100%;
  height: fit-content;
  padding: 10px 20px;
  margin-top: 5px;
}
.detailsCont span {
  font-weight: 500;
  font-size: 24px;
}
.detailsCont p {
  margin-top: 10px;
  font-size: 14px;
}

@media (max-width: 1600px) {
  .card {
    flex-direction: column;
  }

  .card-img-cont {
    width: 100%;
    display: flex;

    flex-direction: row;
    border-top-left-radius: 12px !important ;
    border-top-right-radius: 12px !important ;
    border-bottom-right-radius: 0px !important;
    border-bottom-left-radius: 0px !important;
  }
  .card-img-cont img {
    border-top-right-radius: 12px !important ;
    object-fit: cover;
    border-top-left-radius: 12px !important ;
    border-bottom-right-radius: 0px !important;
    border-bottom-left-radius: 0px !important;
  }

  .textHeader {
    height: fit-content;
    width: 100vw;
    position: absolute;
    display: flex;
    justify-content: center;
    top: 0;
  }
  .textHeader h3 {
    font-size: 1.2em !important;
    line-height: 25px !important;
  }
  .detailsCont {
    width: 73% !important;
  }
  .detailsCont span {
    font-weight: 500;
    font-size: 21px !important;
    line-height: 30px;
  }
  .detailsCont p {
    margin-top: 10px !important;
    font-size: 12px !important;
  }

  .cardsContainer {
    margin-top: 25px !important;
    width: 100%;
    height: 70vh !important;
    min-height: 70vh !important;
    gap: 30px;
    overflow-y: scroll;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    border: none;
  }
  .card {
    flex-direction: row;
    position: inherit;
    width: 100%;
    height: fit-content;
    padding: 0px;
    padding-bottom: 10px;
    min-height: 40vh !important;
    border: 1px solid rgba(197, 197, 197, 0.1);
  }
  .cardsContainer {
    padding: 0 9px;
  }
}

@media (max-width: 768px) {
  .cardsContainer::-webkit-scrollbar {
    width: 4px;
    color: red;
    transition: 0.3s all ease-in-out;
  }
  .textHeader h3 {
    font-size: 1.3em !important;
  }

  .main-container-top-projects {
    height: fit-content;
    padding: 40px 5%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .cardsContainer {
    margin-top: 20px;
    width: 100%;
    height: 58vh;
    min-height: 60vh;
    gap: 30px;
    overflow-y: scroll;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    border: none;
  }
  .card {
    flex-direction: column;
    position: inherit;
    width: 100%;
    height: fit-content;
    padding: 0px;
    padding-bottom: 10px;
    min-height: 50vh;
    border: 1px solid rgba(197, 197, 197, 0.1);
  }
  .cardsContainer {
    padding: 0 4px;
  }

  .detailsCont span {
    font-weight: 500;
    font-size: 18px;
  }
  .detailsCont p {
    margin-top: 10px;
    font-size: 12px;
  }

  .linkCont {
    height: 38px;
    border-radius: 50px;
    margin: 5px 0;
    position: relative;
    z-index: 9999;
  }
  .linkCont .linkSpan {
    font-size: 13px !important;
    font-weight: 500;
    line-height: 13px;
  }
}
</style>

<script>
export default {
  name: "AboutMe",
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
  },
};
</script>
