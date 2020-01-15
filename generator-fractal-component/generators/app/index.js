"use strict";

/**
 * Yeoman generator that creates all starter files for new AEM components.
 *
 * This includes:
 * - Java Model
 * - HTL/Sightly File
 * - JavaScript file
 * - Sass file
 * - Wiring up JavaScript and Sass
 */

const yeoman = require("yeoman-generator");
const chalk = require("chalk");
const yosay = require("yosay");
const path = require("path");
const wiring = require("html-wiring");
const pathExists = require("path-exists");
const find = require("find");

const jsModuleIndexFilePath = "assets/js/index.js";
const sassIndexFilePath = "assets/scss/global.scss";
const componentDir = "components";
const fromAssetsComponentsFolder = "../";

module.exports = yeoman.Base.extend({
  initializing: function() {},

  prompting: function() {
    var done = this.async();
    var generator = this;

    this.log(
      yosay(
        "Welcome to the " +
          chalk.red("fractal-component") +
          " generator! \nI create stub files for new fractal components."
      )
    );

    var prompts = [
      {
        type: "input",
        name: "componentNameDashed",
        message: "What is the name of the component (hero)?",
        validate: function(componentNameDashed) {
          // if (!/^[a-z\-]+$/.exec(componentNameDashed)) {
          //   return 'Invalid name [' + componentNameDashed + '], all lowercase and dashes.';
          // }
          return true;
        }
      },
      {
        type: "list",
        name: "folder",
        message: "which folder ?",
        choices: [
          { name: "units", value: "01-units" },
          { name: "layout", value: "02-layout" },
          { name: "blocks", value: "blocks" },
          { name: "groups", value: "groups" },
          { name: "pages", value: "pages" }
        ]
      }
    ];

    this.prompt(prompts).then(
      function(props) {
        this.props = props;

        this.props.modeSet = new Set(this.props.mode);

        this.log(chalk.cyan("Will use the the following configurations:"));

        this.props.componentNameCamel = this.props.componentNameDashed.replace(
          /-([\w])/g,
          (m, p1) => `${p1.toUpperCase()}`
        );
        this.log(
          "componentNameCamel:\t" + chalk.blue(this.props.componentNameCamel)
        );

        this.props.prettyName = this.props.componentNameDashed.replace(
          /(?:^|-)(\w)/g,
          (m, p1, offset) => `${offset > 0 ? " " : ""}${p1.toUpperCase()}`
        );
        this.log("prettyName:\t\t" + chalk.blue(this.props.prettyName));

        this.props.folderName =
          this.props.folder + "/" + this.props.componentNameDashed;
        this.log("folderName:\t\t" + chalk.blue(this.props.folderName));

        this.props.className = "cmp-" + this.props.componentNameDashed;
        this.log("className:\t\t" + chalk.blue(this.props.className));

        // if (this.props.modeSet.has('sass')) {
        this.props.sassFileName = this.props.componentNameDashed;
        this.log("sassFileName:\t\t" + chalk.blue(this.props.sassFileName));
        // }

        // if (this.props.modeSet.has('js')) {
        this.props.jsModuleName = this.props.componentNameDashed;
        this.props.jsObjectName = capitalizeFirstLetter(
          this.props.componentNameCamel
        );
        this.props.jsFileName = this.props.componentNameDashed;
        this.log("jsModuleName:\t\t" + chalk.blue(this.props.jsModuleName));
        this.log("jsObjectName:\t\t" + chalk.blue(this.props.jsObjectName));
        this.log("jsFileName:\t\t" + chalk.blue(this.props.jsFileName));
        // }

        // if (this.props.modeSet.has('htl')) {
        this.props.twigName = this.props.componentNameDashed;
        this.props.twigTemplateName =
          "render" + capitalizeFirstLetter(this.props.componentNameCamel);
        this.log("twigName:\t\t" + chalk.blue(this.props.twigName));
        this.log(
          "twigTemplateName:\t" + chalk.blue(this.props.twigTemplateName)
        );
        // }

        // Final confirmation prompt
        this.prompt([
          {
            type: "confirm",
            name: "continue",
            default: false,
            message: "Does this look correct?"
          }
        ]).then(
          function(props) {
            if (!props.continue) {
              this.log(
                chalk.yellow("Exiting: Please re-run with correct inputs.")
              );
              process.exit(1);
            }
            done();
          }.bind(this)
        );
      }.bind(this)
    );
  },

  writing: function() {
    /*
     * SASS FILES
     */
    // if (this.props.modeSet.has('sass')) {
    this.fs.copyTpl(
      this.templatePath("component.scss"),
      this.destinationPath(
        path.join(
          componentDir,
          this.props.folderName,
          this.props.sassFileName + ".scss"
        )
      ),
      this.props
    );

    // UPDATE SASS INDEX FILE

    var sassToAdd =
      '@import "../../components/' +
      this.props.folderName +
      "/" +
      this.props.sassFileName +
      '";\n';
    var sassContent = wiring.readFileAsString(sassIndexFilePath);
    if (!sassContent.includes(sassToAdd)) {
      this.log(chalk.yellow("Updating ") + sassIndexFilePath);

      sassContent = sassContent + sassToAdd;
      wiring.writeFileFromString(sassContent, sassIndexFilePath);
    } else {
      this.log(chalk.cyan("Skipping ") + sassIndexFilePath + " update");
    }
    // }

    /*
     * JS FILES
     */
    // if (this.props.modeSet.has('js')) {
    this.fs.copyTpl(
      this.templatePath("component.js"),
      this.destinationPath(
        path.join(
          componentDir,
          this.props.folderName,
          this.props.jsFileName + ".js"
        )
      ),
      this.props
    );

    // this.fs.copyTpl(
    //   this.templatePath('package.json'),
    //   this.destinationPath(path.join(componentDir, this.props.folderName, 'package.json')),
    //   this.props
    // )

    // UPDATE JS INDEX FILE
    var jsToAdd =
      "import '../../components/" +
      this.props.folderName +
      "/" +
      this.props.jsFileName +
      "';\n";
    var jsContent = wiring.readFileAsString(jsModuleIndexFilePath);
    if (!jsContent.includes(jsToAdd)) {
      this.log(chalk.yellow("Updating ") + jsModuleIndexFilePath);

      jsContent = jsContent + jsToAdd;
      wiring.writeFileFromString(jsContent, jsModuleIndexFilePath);
    } else {
      this.log(chalk.cyan("Skipping ") + jsModuleIndexFilePath + " update");
    }
    // }

    /*
     * twig FILE
     */
    // if (this.props.modeSet.has('htl')) {
    this.fs.copyTpl(
      this.templatePath("component.twig"),
      this.destinationPath(
        path.join(
          componentDir,
          this.props.folderName,
          this.props.twigName + ".twig"
        )
      ),
      this.props
    );
    // }

    /*
     * config FILE
     */
    // if (this.props.modeSet.has('htl')) {
    this.fs.copyTpl(
      this.templatePath("component.config.json"),
      this.destinationPath(
        path.join(
          componentDir,
          this.props.folderName,
          this.props.twigName + ".config.json"
        )
      ),
      this.props
    );
    // }
  }
});

/*
 * START HELPER FUNCTIONS
 */

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
