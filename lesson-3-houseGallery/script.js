// console.log(navigator.userAgent, navigator.platform)
console.dir('fontSize', document.body.style.fontSize.toString());

function getDefaultFontSize(pa){
    pa= pa || document.body;
    const who= document.createElement('div');

    who.style.cssText='display:inline-block; padding:0; line-height:1; position:absolute; visibility:hidden; font-size:1em';

    who.appendChild(document.createTextNode('M'));
    pa.appendChild(who);
    var fs= [who.offsetWidth, who.offsetHeight];
    pa.removeChild(who);
    return fs;
}

console.log(getDefaultFontSize());

