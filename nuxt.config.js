import router from "./router";

export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: "Nuxt 學習中",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "嘿嘿" }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        href: "https://use.fontawesome.com/releases/v5.11.2/css/all.css"
      }
    ]
  },
  server: {
    port: "9000"
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: ["@/assets/scss/all.scss"],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    {
      src: "@/plugins/datepicker.js",
      mode: "client"
    },
    {
      src: "@/plugins/v-tooltip.js"
    }
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: ["@nuxtjs/axios"],
  axios: { proxy: true },
  // proxy: ["http://localhost:3500/api"],
  proxy: {
    "/api": "http://localhost:3500"
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    extractCSS: true,
    loaders: {
      // imgUrl: { limit: 1000000 }
    }
    // extend(config, { isClient }) {
    //   // Extend only webpack config for client-bundle
    //   console.dir(config.module.rules);
    //   // console.log(isClient);
    // },
    // postcss: {
    //   preset: {
    //     autoprefixer: {
    //       browsers: ["last 4 versions"]
    //     }
    //   }
    // }
  },
  loading: { color: "#00c58e", height: "2px", duration: 5000 },
  pageTransition: {
    name: "layout",
    mode: "out-in"
  },
  serverMiddleware: [
    {
      path: "/api",
      handler: "~/server/api.js"
    }
  ]

  // router: {
  //   extendRoutes(routes, resolve) {
  //     // console.log(routes);
  //     // console.log(router);
  //     return router;
  //   }
  // }
  // router: {
  //   extendRoutes(routes, resolve) {
  //     console.log(routes);
  //     routes.push({
  //       name: "custom",
  //       path: "/",
  //       component: resolve(__dirname, "pages/demo/tpl.vue")
  //     });
  //   }
  // }
};
