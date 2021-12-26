APP.CORE.UI = (function(){

    var SUPPORTED_LANGUAGES = ["en", "es"];

    var getUserLanguage = function(){
        if(localStorage.getItem("language")){
            return localStorage.getItem("language");
        }
        else{
            return navigator.language.split("-")[0];
        }
    };    

    var setUserLanguage = function(lang){
        if(!SUPPORTED_LANGUAGES.includes(lang)){
            lang = "en";
        }
        localStorage.setItem("language", lang);
        _translateUI(lang);      
    };

    var _translateUI = function(lang){
        var elements = document.getElementsByClassName("i18n");
        for(var i=0; i<elements.length; i++){
            if(elements[i].dataset["i18n"]){
                elements[i].innerHTML = APP.I18N[elements[i].dataset["i18n"]][lang];
            }
        }
    };

    return {
        getUserLanguage: getUserLanguage,
        setUserLanguage: setUserLanguage
    };

})();