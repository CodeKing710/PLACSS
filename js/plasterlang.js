/**
 * PlasterLang for JavaScript (es6 focus)
 * 
 * A few mods have been made to allow Plaster source code to be run via JS
 * What this entails will include a partial syntax change to be JS friendly
 * as well as full access to the es6 library and full DOM manipulation.
 * This includes CSS functions and HTML attribute mutators
 */
 function plasterInstall(){
    plaster = document.querySelectorAll('script[type=plaster]');
    for(var i = 0; i < plaster.length; i++) {
        eval(LEX_PLASTER(plaster[i].innerText));
    }
}
function LEX_PLASTER(src) {
    //Use regex to find and replace all plaster src into js src
    src = src.replace();

    return src;
}

//Add to dependency list (MUST HAVE INCLUDED dependency_factory.js)
addDeps(true,plasterInstall);