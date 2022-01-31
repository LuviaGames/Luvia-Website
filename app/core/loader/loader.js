APP.CORE.LOADER = (function(){

    var NEWS_JSON_URL = "https://raw.githubusercontent.com/LuviaGames/Website/main/app/data/news.json";
    var GAMES_JSON_URL = "https://raw.githubusercontent.com/LuviaGames/Website/main/app/data/games.json";
    var PRIVACY_POLICY_JSON_URL = "https://raw.githubusercontent.com/LuviaGames/Website/main/app/data/privacy.json";

    var load = function(id){
        if(id == "INDEX"){
            _loadIndex();
        }
        if(id == "PRIVACY_POLICY"){
            _loadPrivacyPolicy();
        }
    }

    var _loadIndex = function(){
        fetch(GAMES_JSON_URL).then(response => response.json()).then(
            function(data){
                APP.CORE.UI.renderGames(data.games);
            }
        );
        fetch(NEWS_JSON_URL).then(response => response.json()).then(
            function(data){
                APP.CORE.UI.renderNews(data.news);
            }
        );
    }

    var _loadPrivacyPolicy = function(){
        fetch(PRIVACY_POLICY_JSON_URL).then(response => response.json()).then(
            function(data){
                APP.CORE.UI.renderPrivacy(data.privacy);
            }
        );
    }

    return {
        load: load
    }

})();