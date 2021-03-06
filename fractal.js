"use strict";

/*
 * Require the path module
 */
const path = require("path");

/*
 * Require the Fractal module
 */
const fractal = (module.exports = require("@frctl/fractal").create());
const twigAdapter = require("@frctl/twig")({
  //   handlePrefix: "#",
  namespaces: {
    components: "./",
    units: "./01-units",
    layout: "./02-layout",
    blocks: "./blocks",
    groups: "./groups",
    pages: "./pages"
  }
});

var isProd = process.env.NODE_ENV === "production";

var auth = require("http-auth");

fractal.components.engine(twigAdapter);
fractal.components.set("ext", ".twig");
fractal.components.set(
  "default.preview",
  "@preview" /* isProd ? '@previewprod' :'@preview' */
);

/*
 * Give your project a title.
 */
fractal.set("project.title", "alldata components");

/*
 * Tell Fractal where to look for components.
 */
fractal.components.set("path", path.join(__dirname, "components"));

/*
 * Tell Fractal where to look for documentation pages.
 */
fractal.docs.set("path", path.join(__dirname, "docs"));

/*
 * Tell the Fractal web preview plugin where to look for static assets.
 */
fractal.web.set("static.path", path.join(__dirname, "public"));

fractal.web.set("builder.dest", __dirname + "/build");

if (isProd) {
  fractal.web.set("auth", {
    user: "born",
    pass: "alldata"
  });
}
