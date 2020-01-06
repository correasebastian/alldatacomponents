# generator-fractal-component

This is a Yeoman generator that creates starter source files for new 
components.

Files created by this generator are tightly coupled with the development
practices and patterns of the individual project. The template files may
be changed based on the project needs.

Because the template files may change based on the needs of the project,
this generator is installed and run in an atypical fashion
(as the rest of this document outlines).

## Installation / Running

It is highly recommended that you manage your node/npm installations with
the [Node Version Manager](https://github.com/creationix/nvm).

Refer to *ui.apps/pom.xml* for the version of Node this project requires.

Once you have node and npm installed, perform the one time task of installing
[Yeoman](http://yeoman.io) and project specific generator.

    npm install -g yo
    cd [project-root]/generator-fractal-component
    npm link

Then you can run the generator to create a new starter component:

    cd [project-root]
    yo fractal-component

The process will look something like this:

```
~/Documents/workspace/[project-root] yo bhhs-component

    _-----_     ╭──────────────────────────╮
   |       |    │      Welcome to the      │
   |--(o)--|    │    fractal-component     │
  `---------´   │        generator!        │
   ( _´U`_ )    │  I create stub files for │
   /___A___\   /│    new fractal components│
    |  ~  |     ╰──────────────────────────╯
  __'.___.'__
´   `  |° ´ Y `

? What is the name of the component (with-dashes-all-lowercase)? hello-world
Will use the the following configurations:
componentNameCamel:	helloWorld
prettyName:		Hello World
folderName:		hello-world
className:		component-hello-world
sassFileName:		hello-world
jsModuleName:		hello-world
jsObjectName:		HelloWorld
jsFileName:		hello-world
twigName:		hello-world
twigTemplateName:	renderHelloWorld
? Does this look correct? Yes

```
