<!DOCTYPE html">
<html lang="fr">
  <head>
    <meta charset="utf-8" />
	<meta name="viewport" content="width=device-width, minimum-scale=1.0" />
    <title>FoodFactory</title>
	<style>
		img.home{
		   display: block;
		   max-width: 100%;
		   height: 21px;
		   width: 21px;
		}

		.topnav {
			background-color: #333;
			overflow: hidden;
		}

		.topnav a {
			float: left;
			display: inline-block;
			color: #f2f2f2;
			text-align: center;
			padding: 14px 16px;
			text-decoration: none;
			font-size: 17px;
		}
		
		.topnav a:not(:first-child) {
			display: none;
		}
		
		.topnav a.icon {
			float: right;
			display: block;
		}
		
		.topnav.responsive a.icon {
			position: absolute;
			right: 0;
			top: 0;
		}
		
		.topnav.responsive a {
			float: none;
			display: block;
			text-align: left;
		} 
		
		#footer
		{
			margin: 0 ;
			padding-right: 10px ;
			line-height: 30px ;
			text-align: right ;
			color: #000101 ;
		}
	</style>	
  </head>
  
  <body>
  <link rel="stylesheet" href="../styles/articlesM.css">
  <div id="conteneur">    	
	<div class="topnav" id="myTopnav">
		<a href="../html/indexM.php"><img class="home" src="../styles/images/home.png"></img></a>
		<a href="../html/listeM.php">Listes</a>
		<a href="../html/articleM.php">Articles</a>
		<a href="../html/contactM.php">Contacts</a>
		<a id="logs" href="../html/creercompteM.php">S'inscrire</a>
		<a id="logs" href="../html/moncompteM.php">Mon compte</a>
		<a href="javascript:void(0);" class="icon" onclick="myFunction()">&#9776;</a>
	</div> 
	
	<div id="contenu">
		<div class="mainPageM" id="mobile">
			<div id="blocGauche">
				Rechercher un article
				<br>
				<div id="centrale">
					<div>
						<label for="cbarre">Code barre</label>
						<input type="text" id="cbarreM" placeholder="Code barre..">
						<button id="rechercher" onclick="APIArticleM()">Rechercher</button>
					</div>
					<br>
					<br>
					<div class="input-file-container">
						<input class="input-file" id="my-file" type="file" capture="camera" accept="image/*">
						<label for="my-file" class="input-file-trigger" tabindex="0">Scanner</label>
						<button id="rechercher" onclick="APIArticleM()">GO</button>
					</div>
				</div>
			</div>
			<div id="blocDroite">
			</div>
		</div>
	</div>
  </div>
  <script>
	function myFunction() {
		var x = document.getElementById("myTopnav");
		if (x.className === "topnav") {
			x.className += " responsive";
		} else {
			x.className = "topnav";
		}
	}
  </script>
  <script type="text/javascript" src="../scripts/articles.js" ></script>
  </body>
</html>


