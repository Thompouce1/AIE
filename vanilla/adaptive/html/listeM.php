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
	<link rel="stylesheet" href="../styles/listesM.css">
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
	
	<div>
		<div class="touteslistes" id="id_du_div2">
			<div class="touteslistes2" id="test3" >
				
			</div>
		</div>
		<div class="descriptliste" id="id_du_div" style="display:none;">
			<input type="submit" value="Retour" onclick="zeubi()">
			<div class="touteslistes2">
				<table border="1" style="width:100%;">
					<thead>
					  <tr>
						<th><p style="text-align:center;">Nom Article</p></th>
						<th><p style="text-align:center;">Quantité</p></th>
					  </tr>
					</thead>
					<tbody id="test4">
					  
					</tbody>
				</table>
			</div>
		</div>
	</div>
	<br>
	<p id="footer"></p>
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
  <script type="text/javascript" src="../scripts/listesM.js" ></script>
  </body>
</html>


