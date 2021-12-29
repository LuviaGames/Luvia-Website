APP.CORE.LOADER = (function(){

    var GAMES_JSON_URL = "https://raw.githubusercontent.com/LuviaGames/Website/main/app/data/games.json";
    var NEWS_JSON = "https://raw.githubusercontent.com/LuviaGames/Website/main/app/data/news.json";

    var load = function(id){
        if(id == "INDEX"){
            _loadIndex();
        }
        else if(id == "PRIVACY_POLICY"){
            _loadPrivacyPolicy();
        }
    }

    var _loadIndex = function(){
        fetch(GAMES_JSON_URL).then(response => response.json()).then(
            function(games){
                _renderGames(Object.values(games));
            }
        );
        fetch(NEWS_JSON).then(response => response.json()).then(
            function(news){
                _renderNews(Object.values(news));
            }
        );
    }

    var _loadPrivacyPolicy = function(){

    }

    var _renderGames = function(games){
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
            gameName.innerText = games[i].name[APP.CORE.UI.getUserLanguage()];

            gameCard.append(gameCover, gameName);
            gameList.append(gameCard);
        }
    }

    var _renderNews = function(news){
        console.log(news);
    }

    return {
        load: load
    }

})();