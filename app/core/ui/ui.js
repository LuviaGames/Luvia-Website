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
            var gameCard = document.createElement("DIV");
            gameCard.className = "game-card";
            var gameCover = document.createElement("IMG");
            gameCover.className = "game-cover";
            gameCover.src = games[i].cover;
            var gameName = document.createElement("P");
            gameName.className = "game-name";
            gameName.innerText = games[i].name[lang];
            gameCard.append(gameCover, gameName);
            gameList.append(gameCard);
        }
    }

    var renderNews = function(news){
        var lang = APP.CORE.UI.getUserLanguage();
        var newsList = document.getElementById("news-list");
        for(var i=0; i<news.length; i++){
            var newsCard = document.createElement("DIV");
            newsCard.className = "news-card";
            var newDate = document.createElement("DIV");
            newDate.className = "new-date";
            newDate.innerHTML = news[i].date[lang];
            var newHeader = document.createElement("DIV");
            newHeader.className = "new-header";
            newHeader.innerHTML = news[i].header[lang];
            var newBrief = document.createElement("DIV");
            newBrief.className = "new-brief";
            newBrief.innerHTML = news[i].brief[lang];
            var newDescription = document.createElement("DIV");
            newDescription.className = "new-description";
            newDescription.innerHTML = news[i].description[lang];
            newsCard.append(newDate, newHeader, newBrief, newDescription);
            newsList.append(newsCard);
        }
    }

    var renderPrivacy = function(privacy){
        var lang = APP.CORE.UI.getUserLanguage();
        var privacyPolicy = document.getElementById("privacy-policy");
        for(var i=0; i<privacy.length; i++){
            console.log(privacy[i]);
        }
    }    

    return {
        getUserLanguage: getUserLanguage,
        setUserLanguage: setUserLanguage,
        renderGames: renderGames,
        renderNews: renderNews,
        renderPrivacy: renderPrivacy
    };

})();