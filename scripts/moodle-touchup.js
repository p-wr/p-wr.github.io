const fs = require('fs'),
      child_process = require('child_process'),
      cheerio = require('cheerio');


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

function tidyHtml(infilename, outfilename) {
    var txt = fs.readFileSync(infilename, 'utf-8'),
        $ = cheerio.load(txt);

    for (let a of $('link')) {
        var href = $(a).attr('href');
        if (href && href.endsWith('/all-rtl'))
            $(a).attr('href', href + '.css');
        else if (href.includes('?'))
            $(a).remove();
    }

    for (let a of $('img')) {
        var src = $(a).attr('src');
        if (src && src.match(/\/icon|pdf$/))
            $(a).attr('src', src + '.svg');
    }    

    $('nav, script').remove();
    $('section[data-region="blocks-column"]').remove();

    fs.writeFileSync(outfilename, $.html());
}

renameIcons();
renameCss();
tidyHtml('ssar/info/course/view.php?id=5865',
         'ssar/info/course/236347.html');

