"use strict";angular.module("aieApp",["ngAnimate","ngCookies","ngResource","ngRoute","ngSanitize","ngTouch"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl",controllerAs:"main"}).when("/contact",{templateUrl:"views/contact.html",controller:"ContactCtrl",controllerAs:"contact"}).when("/signin",{templateUrl:"views/signin.html",controller:"SigninCtrl",controllerAs:"Signin"}).when("/login",{templateUrl:"views/login.html",controller:"LoginCtrl",controllerAs:"login"}).when("/lists",{templateUrl:"views/lists.html",controller:"ListsCtrl",controllerAs:"lists"}).when("/articles",{templateUrl:"views/articles.html",controller:"ArticlesCtrl",controllerAs:"articles"}).otherwise({redirectTo:"/"})}]),angular.module("aieApp").controller("MainCtrl",function(){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}),angular.module("aieApp").controller("ContactCtrl",function(){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}),angular.module("aieApp").controller("ListsCtrl",["$scope","$http",function(a,b){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"],a.currentLists=JSON.parse('[{ "ListeNom":"semaine" , "ListeArticle":[{ "ArticleNom":"coca" , "Quantitee":"1" },{ "ArticleNom":"coca" , "Quantitee":"1" },{ "ArticleNom":"coca" , "Quantitee":"1" },{ "ArticleNom":"coca" , "Quantitee":"1" },{ "ArticleNom":"coca" , "Quantitee":"1" },{ "ArticleNom":"coca" , "Quantitee":"1" },{ "ArticleNom":"coca" , "Quantitee":"1" },{ "ArticleNom":"coca" , "Quantitee":"1" },{ "ArticleNom":"coca" , "Quantitee":"1" },{ "ArticleNom":"coca" , "Quantitee":"1" },{ "ArticleNom":"coca" , "Quantitee":"1" },{ "ArticleNom":"coca" , "Quantitee":"1" },{ "ArticleNom":"coca" , "Quantitee":"1" },{ "ArticleNom":"coca" , "Quantitee":"1" },{ "ArticleNom":"coca" , "Quantitee":"1" },{ "ArticleNom":"coca" , "Quantitee":"1" },{ "ArticleNom":"coca" , "Quantitee":"1" },{ "ArticleNom":"coca" , "Quantitee":"1" },{ "ArticleNom":"coca" , "Quantitee":"1" },{ "ArticleNom":"coca" , "Quantitee":"1" },{ "ArticleNom":"coca" , "Quantitee":"1" },{ "ArticleNom":"coca" , "Quantitee":"1" },{ "ArticleNom":"coca" , "Quantitee":"1" },{ "ArticleNom":"coca" , "Quantitee":"1" },{ "ArticleNom":"sprite" , "Quantitee":"2" },{ "ArticleNom":"Peter" , "Quantitee":"3" } ] },{ "ListeNom":"weekend" , "ListeArticle":[{ "ArticleNom":"chips" , "Quantitee":"4" },{ "ArticleNom":"pesto" , "Quantitee":"5" },{ "ArticleNom":"thon" , "Quantitee":"6" } ] },{ "ListeNom":"soiree" , "ListeArticle":[{ "ArticleNom":"jager" , "Quantitee":"7" },{ "ArticleNom":"rhum" , "Quantitee":"8" },{ "ArticleNom":"vodka" , "Quantitee":"9" } ] } ]'),a.mesart=null,a.replace=function(b){a.mesart=b.ListeArticle}}]),angular.module("aieApp").controller("ArticlesCtrl",["$scope","$http",function(a,b){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"],a.result=null,a.infoArticles="Informations article",a.photoArticle="",a.ingrediants="informations non renseignés",a.searchproduct=function(c){b({method:"GET",url:"https://fr.openfoodfacts.org/api/v0/produit/"+c+".json"}).then(function(b){console.log(b),a.result=b,a.infoArticles=b.data.product.brands+" "+b.data.product.product_name_fr,a.photoArticle=b.data.product.image_url,0!=b.data.product.ingredients.length&&(a.ingrediants="");for(var c=0;c<b.data.product.ingredients.length;c++)a.ingrediants+=b.data.product.ingredients[c].text+", "},function(a){alert("error")})}}]),angular.module("aieApp").controller("SigninCtrl",function(){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}),angular.module("aieApp").controller("LoginCtrl",function(){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}),angular.module("aieApp").run(["$templateCache",function(a){a.put("views/articles.html",'<div id="contenu"> <div> <div id="blocGauche"> Rechercher un article <div id="centrale"> <div> <label for="cbarre">Code barre</label> <input ng-model="champ" type="text" id="cbarre" name="cbarre" placeholder="Code barre.."> <input type="submit" value="OK" ng-click="searchproduct(champ)"> </div> <br> </div> </div> <div id="blocDroite"> <p style="text-decoration:underline">{{infoArticles}}</p> <div id="photoArticle"> <img class="ban" src="{{photoArticle}}" alt=""> </div> <div id="centraled"> <p style="text-decoration:underline">Ingrédients : </p>{{ingrediants}} </div> </div> </div> </div> <link rel="stylesheet" href="styles/articles.css">'),a.put("views/contact.html",'<div> <p id="lead">Une idée, une suggestion ? faites en nous part !</p> <div style="width: 50%; float:left"> <a href="https://www.facebook.com/" target="_blank"> <div style="width: 50%; margin:auto; border:1px solid black"> <div style="width: 50%; margin:auto"> <img id="little" src="images/facebook.087a6a9d.png"> </div> <div style="text-align:center; text-decoration:none;  border-top:1px solid black"> <p>FACEBOOK</p> </div> </div> </a> <div style="margin-bottom:25px"></div> <a href="https://www.gmail.com/" target="_blank"> <div style="width: 50%; margin:auto; border:1px solid black"> <div style="width: 50%; margin:auto"> <img id="little" src="images/mail.0f3cd696.png"> </div> <div style="text-align:center; text-decoration:none;  border-top:1px solid black"> <p>MAIL</p> </div> </div> </a> </div> <div style="width: 50%; float:right"> <a href="https://www.twitter.com/" target="_blank"> <div style="width: 50%; margin:auto; border:1px solid black"> <div style="width: 50%; margin:auto"> <img id="little" src="images/twitter.24e3ee04.png"> </div> <div style="text-align:center; text-decoration:none;  border-top:1px solid black"> <p>TWITTER</p> </div> </div> </a> <div style="margin-bottom:25px"></div> <a href="https://www.youtube.com/" target="_blank"> <div style="width: 50%; margin:auto; border:1px solid black"> <div style="width: 50%; margin:auto"> <img id="little" src="images/youtube.08ea888c.png"> </div> <div style="text-align:center; text-decoration:none;  border-top:1px solid black"> <p>YOUTUBE</p> </div> </div> </a> </div> </div> <link rel="stylesheet" href="styles/contact.css">'),a.put("views/lists.html",'<div> <div id="touteslistes"> <div id="touteslistes2"> <div ng-repeat="lists in currentLists" style="border:1px solid black; cursor: pointer"> <div ng-click="replace(lists)" style="text-align:center; text-decoration:none"> <p>{{lists.ListeNom}}</p> </div> </div> </div> </div> <div id="descriptliste"> <div id="touteslistes2"> <table border="1" style="width:100%"> <thead> <tr> <th><p style="text-align:center">Nom Article</p></th> <th><p style="text-align:center">Quantité</p></th> </tr> </thead> <tbody ng-repeat="articles in mesart"> <tr> <td> {{articles.ArticleNom}} </td> <td style="text-align:center"> {{articles.Quantitee}} </td> </tr> </tbody> </table> </div> </div> </div> <link rel="stylesheet" href="styles/lists.css">'),a.put("views/login.html",'<link rel="stylesheet" href="styles/login.css"> <div id="contenu"> <label for="pseudo">Pseudo</label> <input type="text" id="pseudo" name="pseudo" placeholder="Pseudo.."> <label for="mdp">Mot de passe</label> <input type="password" id="mdp" name="mdp" placeholder="mot de passe.."> <input type="submit" value="Connexion"> </div>'),a.put("views/main.html",'<div> <p id="lead">Bienvenue sur FoodFactory (desktop)</p> <p>Grace a food factory vous pourrez creer votre liste de course grace au scan ou a la recherche d\'article, vous pourrez aussi avoir des informations nutritionelles de vos produits !</p> <div id="all"> <div class="sub"> <iframe align="center" src="https://www.youtube.com/embed/W49LVs-V2-I" frameborder="0"></iframe> </div> </div> <p>API : OpenFoodFacts </p> </div>'),a.put("views/signin.html",'<link rel="stylesheet" href="styles/account.css"> <div id="contenu"> <label for="pseudo">Pseudo</label> <input type="text" id="pseudo" name="pseudo" placeholder="Pseudo.."> <label for="mdp">Mot de passe</label> <input type="password" id="mdp" name="mdp" placeholder="mot de passe.."> <label for="mdpc">Mot de passe Confirmation</label> <input type="password" id="mdpc" name="mdpc" placeholder="mot de passe.."> <label for="country">Pays</label> <select id="country" name="country"> <option value="allemagne">Allemagne</option> <option value="belgique">Belgique</option> <option value="canada">Canada</option> <option value="espagne">Espagne</option> <option value="france">France</option> <option value="italie">Italie</option> <option value="usa">USA</option> </select> <label for="mel">Adresse Mail</label> <input type="text" id="mel" name="mel" placeholder="adresse mail.."> <input type="submit" value="Valider"> </div>')}]);