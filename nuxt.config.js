const isDev = process.env.NODE_ENV !== "production"

export default {
    ssr: false,
    target: "static",
    components: [{ path: "~/components", extensions: ["vue"] }],
    // ...(!isDev && {
    //     modern: "client",
    // }),
    head: {
        title: "Deobytes - Единая платформа для Ecommerce и Retail",
        htmlAttrs: {
            lang: "ru",
        },
        meta: [
            { charset: "utf-8" },
            { name: "viewport", content: "width=device-width, initial-scale=1" },
            { hid: "description", name: "description", content: "" },
            { name: "format-detection", content: "telephone=no" },
            { name: "msapplication-TileColor", content: "#000000" },
            { name: "theme-color", content: "#ffffff" },

            { name: "og:title", content: "Deobytes - Единая платформа для Ecommerce и Retail" },
            { name: "og:description", content: "Все сервисы для ecommerce: CRM, WMS, DMS, POS, Analytics" },
            { name: "og:image", content: "https://deobytes.ru/logo-share.jpg" },
            {
                name: "og:site_name",
                content: "Deobytes Platform",
            },
            { name: "description", content: "Все сервисы для ecommerce: CRM, WMS, DMS, POS, Analytics" },
        ],
        link: [
            { rel: "icon", type: "image/x-icon", href: "./favicon.ico" },
            { rel: "icon", type: "image/png", sizes: "16x16", href: "./favicon-16x16.png" },
            { rel: "icon", type: "image/png", sizes: "32x32", href: "./favicon-32x32.png" },
            {
                rel: "icon",
                type: "image/png",
                sizes: "192x192",
                href: "/android-chrome-192x192.png",
            },
            { rel: "apple-touch-icon", sizes: "180x180", href: "./apple-touch-icon.png" },
            { rel: "manifest", href: "./site.webmanifest" },
            { rel: "mask-icon", color: "#000000", href: "./safari-pinned-tab.svg" },
        ],
    },
    robots: {
        sitemap: "https://deobytes.ru/sitemap.xml",
    },
    sitemap: {
        hostname: "https://deobytes.ru",
        gzip: true,
        routes: ["/"],
    },
    css: ["ress/dist/ress.min.css", "~/assets/css/variables.scss", "~/assets/css/main.scss"],
    plugins: ["@/plugins/element-ui", { src: "@/plugins/swiper", mode: "client" }],
    buildModules: ["@nuxtjs/eslint-module"],
    modules: ["@nuxtjs/axios", "nuxt-svg-loader", "@nuxtjs/robots", "@nuxtjs/sitemap"],
    axios: {},
    router: {
        prefetchLinks: false,
        // base: "/deobytes/",
    },
    build: {
        publicPath: "/deobytes/",
        transpile: [/^element-ui/],
        extractCSS: true,
        terser: {
            extractComments: false,
        },
        optimization: {
            minimize: !isDev,
            usedExports: true,
            splitChunks: {
                minSize: 100000,
                maxSize: 250000,
                cacheGroups: {
                    styles: {
                        name: "styles",
                        test: /\.(css)$/,
                        chunks: "all",
                        enforce: true,
                    },
                },
            },
        },
        ...(!isDev && {
            html: {
                minify: {
                    collapseBooleanAttributes: true,
                    decodeEntities: true,
                    minifyCSS: true,
                    minifyJS: true,
                    processConditionalComments: true,
                    removeEmptyAttributes: true,
                    removeRedundantAttributes: true,
                    trimCustomFragments: true,
                    useShortDoctype: true,
                },
            },
        }),
    },
}
