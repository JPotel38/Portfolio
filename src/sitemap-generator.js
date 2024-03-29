require("babel-register")({
    presets: ["es2015", "react"]
});

const router = require("./sitemap-route").default;
const Sitemap = require("react-router-sitemap").default;

function generateSitemap() {
    return (
        new Sitemap(router)
            .build("https://jpotel38.github.io/Portfolio")
            .save("./public/sitemap.xml")
    );
}

generateSitemap();
