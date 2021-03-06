(function() {

    // Change global sonny page var
    SONNY.PAGEPATH = "../../templates/";

    var instance = new SONNY.Instance(function() {

        var renderer = new SONNY.Renderer(instance);

            /* 
             * Everything is synchronous here
             * Render pages and directly execute a function after it
             */
            renderer.render("public/login.html");

            /*
             * Select something from public/login.html
             * Change the background color of the header
             */
            document.querySelector("#header").style.background = "royalblue";

    });

})();