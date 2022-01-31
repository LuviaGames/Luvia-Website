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

    var renderGames = function(games){
        var lang = APP.CORE.UI.getUserLanguage();
        var gameList = document.getElementById("games-list");
        gameList.innerHTML = "";
        for(var i=0; i<games.length; i++){
            var gameCard = _createElement({
                tag: "DIV",
                className: "game-card"
            });
            var gameCover = _createElement({
                tag: "IMG",
                className: "game-cover",
                src: games[i].cover
            });
            var gameName = _createElement({
                tag: "P",
                className: "game-name",
                textContent: games[i].name[lang]
            });
            gameCard.append(gameCover, gameName);
            gameList.append(gameCard);
        }
    };

    var renderNews = function(news){
        var lang = APP.CORE.UI.getUserLanguage();
        var newsList = document.getElementById("news-list");
        for(var i=0; i<news.length; i++){
            var newsCard = _createElement({
                tag: "DIV",
                className: "news-card"
            });
            var newDate = _createElement({
                tag: "DIV",
                className: "new-date",
                innerHTML: news[i].date[lang]
            });
            var newHeader = _createElement({
                tag: "DIV",
                className: "new-header",
                innerHTML: news[i].header[lang]
            });
            var newBrief = _createElement({
                tag: "DIV",
                className: "new-brief",
                innerHTML: news[i].brief[lang]
            });
            var newDescription = _createElement({
                tag: "DIV",
                className: "new-description",
                innerHTML: news[i].description[lang]
            });
            newsCard.append(newDate, newHeader, newBrief, newDescription);
            newsList.append(newsCard);
        }
    };

    var renderPrivacy = function(privacy){
        var lang = APP.CORE.UI.getUserLanguage();
        var privacyPolicy = document.getElementById("privacy-policy");
        for(var i=0; i<privacy.length; i++){
            var privacyBlock = _createElement({
                tag: "DIV",
                className: "privacy-" + privacy.type
            });
            if(Array.isArray(privacy.text[lang])){
                for(var j=0; j<privacy.text[lang].length; j++){
                    var text = privacy.text[lang][j];
                    var privacyText = _createElement({
                        tag: "P",
                        className: "",
                        innerHTML: text
                    });
                    privacyBlock.append(privacyText);
                }
            }
            else {
                var privacyText = _createElement({
                    tag: "P",
                    className: "",
                    innerHTML: privacy.text[lang]
                });
                privacyBlock.append(privacyText);
            }
            privacyPolicy.append(privacyBlock);
        }
    };

    /**
     * CREATE FRAGMENT
     * @returns {DOM Element}
     */
     var _createFragment = function(){
        return new DocumentFragment();
    };    

    /**
     * CREATE ELEMENT -  Creates a DOM Element with attributes
     * @param {json} attributes
     * @returns {DOM Element} element
     */
    var _createElement = function(attributes){
        var element = document.createElement(attributes.tag);
        for(attr in attributes){
            if(attr.includes("data")){
                element.setAttribute(attr.replace("data", "data-").toLowerCase(), attributes[attr]);
            }
            element[attr] = attributes[attr];
        }
        return element;
    };

    return {
        getUserLanguage: getUserLanguage,
        setUserLanguage: setUserLanguage,
        renderGames: renderGames,
        renderNews: renderNews,
        renderPrivacy: renderPrivacy
    };

})();