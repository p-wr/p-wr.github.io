const fs = require('fs'),
      child_process = require('child_process');


function sh(cmd) {
    console.log('%', cmd);
    var rc = child_process.spawnSync(cmd, {stdio: 'inherit', shell: true});
    if (rc.status !== 0)
        throw rc;
}


function renameIcons() {
    sh('find . -name icon -o -name pdf -exec mv {} {}.svg \\;');
}

function renameCss() {
    sh('find . -name all-rtl -exec mv {} {}.css \\;');
}

function updateHtml(filename) {
    var txt = fs.readFileSync(filename, 'utf-8');
    fs.writeFileSync(filename, 
        txt.replace(/\/icon"/g, '/icon.svg"')
           .replace(/\/pdf"/g, '/pdf.svg"')
           .replace(/\/all-rtl"/g, '/all-rtl.css"'));
}

renameIcons();
renameCss();
updateHtml('ssar/info/course/236347.html');

