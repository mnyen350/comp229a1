/*
  FileName: generate.js
  Author: Minh Nguyen
  ID:301317346
  Date:9-30-2023
*/
const fs = require('fs');
const ejs = require('ejs');
const path = require('path');

const outputDirectory = './docs';

const views = [
    ['aboutme.ejs', { title: 'About Me' }],  
    ['contactme.ejs', { title: 'Contact Me' }],
    ['error.ejs', { message: 'Error', error: { stack: '', status: 0 } }],    
    ['index.ejs', { title: 'Home' }],    
    ['services.ejs', { title: 'Services' }],

    // projects
    ['projects.ejs', { title: 'Projects', project: '' }, 'projects'], 
    ['projects.ejs', { title: 'Projects', project: 'conquer' }, 'conquer'], 
    ['projects.ejs', { title: 'Projects', project: 'bomberman' }, 'bomberman'], 
    ['projects.ejs', { title: 'Projects', project: 'dungeoncrawler' }, 'dungeoncrawler']
]

for (const [fileName, args, htmlFileName] of views) {
    const template = fs.readFileSync(`./views/${fileName}`, 'utf8');

    // create render fn by compiling ejs template
    const render = ejs.compile(template,
        {
            cache: false,
            filename: path.join(__dirname, 'views', fileName)
        });

    // render the page with ejs
    let html = render(args);

    // update src/href paths to remove "/" prefix
    html = html.replace(/(src|href)="([a-z/.\-]+)"/gi, function (match, s1, s2) {

        let url = s2.indexOf('/') == 0 ? s2.substring(1) : s2;
        if (s1 == 'href') {
            
            // update to href to *.html if no file path is found
            const endOfPath = url.substring(url.lastIndexOf('/'));
            if (url == "") // empty href needs to point to index.html
                url = "index.html";
            else if (endOfPath.indexOf('.') == -1)
                url = url + ".html";
        }

        return `${s1}="${url}"`;
    });

    let saveFileName = htmlFileName ?? fileName.substring(0, fileName.indexOf('.'));
    fs.writeFileSync(`${outputDirectory}/${saveFileName}.html`, html);
}

// dependencies
fs.cpSync('./node_modules/bootstrap', `${outputDirectory}/bootstrap`, { recursive: true });
fs.cpSync('./node_modules/font-awesome', `${outputDirectory}/font-awesome`, { recursive: true });
fs.cpSync('./node_modules/jquery', `${outputDirectory}/jquery`, { recursive: true });
fs.cpSync('./public', `${outputDirectory}`, { recursive: true });