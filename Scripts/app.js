"use strict";

//IIFE - Immediately Invoked Function Expression
// mean? -> anonymous self-executing function
(function(){
    console.log("%Declaring varaiables", "color: red;")
    //Part a variables
    let products;

    //Part b variables
    let contactUsLI;
    let contactUsLIParent;
    let HRLI;

    //Part c variables
    let bottonNav;
    let h4copyright;
    let pageBody;
    let jqueryscriptparent;

    function Start()
    {
        // Part a
        products = document.getElementById("products");
        //products.innerHTML = "<a class='nav-link' href='#'><i class='fas fa-map'></i> Projects </a>";
        //products.firstElementChild.innerHTML = "<i class='fas fa-map'></i> Projects ";
        products.firstElementChild.lastChild.textContent = " Projects";

        //Part b
        contactUsLI = document.getElementById('contact');
        contactUsLIParent = contactUsLI.parentNode;
        HRLI = contactUsLI.cloneNode(true);
        HRLI.id = "hr";
        HRLI.firstElementChild.innerHTML = "<i class='fas fa-users'></i> Human resources";

        contactUsLIParent.insertBefore(HRLI, contactUsLI);

        //Part c
        bottonNav = document.createElement('nav');
        bottonNav.className = "navbar fixed-bottom navbar-light bg-light";
        
        h4copyright = document.createElement('h4');
        h4copyright.textContent = "&copy; CopyRight 2020.";

        bottonNav.appendChild(h4copyright);

        pageBody = document.getElementsByTagName('body')[0];
        //pageBody.appendChild(bottonNav);

        jqueryscriptparent = pageBody.children[4].parentNode;
        jqueryscriptparent.insertBefore(bottonNav, pageBody.children[4]);

        Main();
    }

    function Main()
    {

    }

    window.addEventListener("load", Start);
})();