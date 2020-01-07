'use strict';

/*
* Require the path module
*/
const path = require('path');

/*
 * Require the Fractal module
 */
const fractal = module.exports = require('@frctl/fractal').create();
const twigAdapter = require('@frctl/twig')();

var isProd = process.env.NODE_ENV === 'production'

var auth = require('http-auth');

if(true /* isProd */){
    

}

fractal.components.engine(twigAdapter);
fractal.components.set('ext', '.twig');
fractal.components.set('default.preview','@preview' /* isProd ? '@previewprod' :'@preview' */);

/*
 * Give your project a title.
 */
fractal.set('project.title', 'First Test');

/*
 * Tell Fractal where to look for components.
 */
fractal.components.set('path', path.join(__dirname, 'components'));

/*
 * Tell Fractal where to look for documentation pages.
 */
fractal.docs.set('path', path.join(__dirname, 'docs'));

/*
 * Tell the Fractal web preview plugin where to look for static assets.
 */
fractal.web.set('static.path', path.join(__dirname, 'public'));


fractal.web.set('builder.dest', __dirname + '/build');



    const server = fractal.web.server({});

    // server.use('/',function (err, req, res, next) {
    //     console.error(err.stack)
    //   })
    // server.use('/',function (req, res, next) {
    //     console.log('middleware')
    //     next()
    //   })
    
      var auth = require('http-auth');
      var basic = auth.basic({
      },(username, password, callback) => { 
          console.log(username, password, callback)
        // Custom authentication
        // Use callback(error) if you want to throw async error.
        callback(username === "Tina" && password === "Bullock");
    });

    var midd = auth.connect(basic)
    // server._server.use.apply(server._server,midd);
    server._server.use(midd);
    // // server.use(auth.connect(basic))

    // const basicAuth = require('express-basic-auth')
    // server.use(basicAuth({
    //     users: { 'admin': 'supersecret' }
    // }))



    server.on('ready', () => {
        // const header = 'Fractal web UI server is running!';
        // // const footer = this.fractal.cli.isInteractive() ? 'Use the \'stop\' command to stop the server.' : 'Use ^C to stop the server.';
        // const serverUrl = server.urls.server;
        // const format = str => this.console.theme.format(str, 'success', true);
        // let body = '';

        // if (!server.isSynced) {
        //     body += `Local URL: ${format(serverUrl)}`;
        // } else {
        //     const syncUrls = server.urls.sync;
        //     body += `Local URL:      ${format(syncUrls.local)}`;
        //     body += `\nNetwork URL:    ${format(syncUrls.external)}`;
        //     body += `\nBrowserSync UI: ${format(syncUrls.ui)}`;
        // }

        // return this.console.box(header, body, '').persist();
        console.log('runnning')
    });

    server.on('error', (err, req) => {
        if (err.status === '404') {
            this.console.warn(`404: ${err.message}`);
        } else {
            this.console.error(err.message, err);
        }
        done();
    });

    server.on('destroy', () => done());
    server.on('stopped', () => done());

    server.start(false).catch(e => {
        this.console.error(e);
        done();
    });