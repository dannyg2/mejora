export default {
    // Global page headers (https://go.nuxtjs.dev/config-head)
    head: {
        title: 'mejora',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: '' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
        ]
    },

    // Global CSS (https://go.nuxtjs.dev/config-css)
    css: [],

    // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
    plugins: [],
    // Axios module configuration: https://go.nuxtjs.dev/config-axios
    axios: {
        baseURL: 'http://localhost/PROYECTOSP/pruebaeco/mejora_api/public/api/',
        //proxy: true,

    },


    // Auto import components (https://go.nuxtjs.dev/config-components)
    components: true,

    // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
    buildModules: [
        // https://go.nuxtjs.dev/tailwindcss
        '@nuxtjs/tailwindcss',
    ],

    // Modules (https://go.nuxtjs.dev/config-modules)
    modules: [
        '@nuxtjs/axios'
    ],

    // Build Configuration (https://go.nuxtjs.dev/config-build)
    build: {},
    auth: {

        strategies: {
            local: {
                endpoints: {
                    login: { url: '/api/auth_resources/loginecommerce', method: 'post' },
                    logout: false,
                    user: false
                },
                tokenType: false,
                refreshToken: {
                    property: 'refresh_token',
                    data: 'refresh_token',
                    maxAge: 60 * 60 * 24 * 30
                },
            },


        },
        redirect: {
            callback: '/callback',
            login: false,
            home: false
        },


    },

}