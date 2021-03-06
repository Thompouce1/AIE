<?php
$iphone = strpos($_SERVER['HTTP_USER_AGENT'],"iPhone");
$android = strpos($_SERVER['HTTP_USER_AGENT'],"Android");
$palmpre = strpos($_SERVER['HTTP_USER_AGENT'],"webOS");
$berry = strpos($_SERVER['HTTP_USER_AGENT'],"BlackBerry");
$ipod = strpos($_SERVER['HTTP_USER_AGENT'],"iPod");

if ($iphone || $android || $palmpre || $ipod || $berry == true) 
{ 
	header('Location: ./contactM.php');
}
?>

<!DOCTYPE html">
<html lang="fr">
  <head>
    <meta charset="utf-8" />
	<meta name="viewport" content="width=device-width, minimum-scale=1.0" />
    <title>FoodFactory</title>
	<style>
		body
		{
			margin: 10px 0 ;
			padding: 0 ;
			font: 0.8em "Trebuchet MS", helvetica, sans-serif ;
		}

		div#conteneur
		{
			max-width: 900px ;
			margin: 0 auto ;
			text-align: left ;
		}

		img.ban{
		   display: block;
		   margin: auto;
		   max-width: 100%;
		   height: auto;
		}

		img.home{
		   display: block;
		   max-width: 100%;
		   height: 21px;
		   width: 21px;
		}

		p#footer
		{
			margin: 0 ;
			padding-right: 10px ;
			line-height: 30px ;
			text-align: right ;
			color: #000101 ;
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

		.topnav a:hover {
			background-color: #ddd;
			color: black;
		}

		.topnav a#logs{
			float: right;
		}

		.topnav .icon {
			display: none;
		}
	</style>	
  </head>
  
  <body>
  <link rel="stylesheet" href="../styles/contacts.css">
  <div id="conteneur">    
	<img class="ban" src="../styles/images/ban.png"></img>
	
	<div class="topnav" id="myTopnav">
		<a href="../html/index.php"><img class="home" src="../styles/images/home.png"></img></a>
		<a href="../html/liste.php">Listes</a>
		<a href="../html/article.php">Articles</a>
		<a href="../html/contact.php">Contacts</a>
		<a id="logs" href="../html/creercompte.php">S'inscrire</a>
		<a id="logs" href="../html/moncompte.php">Mon compte</a>
	</div> 
	
	<div id="contenu">
		<div class="mainPagePC">
			<p>Une idée, une suggestion ? faites en nous part !</p>
			<div style="width: 50%; float:left;">
				<a href="https://www.facebook.com/" target="_blank">
					<div style="width: 50%; margin:auto; border:1px solid black;">
						<div style="width: 50%; margin:auto; float:top;">
							<img id="little" src="../styles/images/facebook.png"></img>
						</div>
						<div style="float:bottom; text-align:center; text-decoration:none;  border-top:1px solid black;">
							<p>FACEBOOK</p>
						</div>
					</div>
				</a>
				<div style="margin-bottom:25px;"></div>
				<a href="https://www.gmail.com/" target="_blank">
					<div style="width: 50%; margin:auto; border:1px solid black;">
						<div style="width: 50%; margin:auto; float:top;">
							<img id="little" src="../styles/images/mail.png"></img>
						</div>
						<div style="float:bottom; text-align:center; text-decoration:none;  border-top:1px solid black;">
							<p>MAIL</p>
						</div>
					</div>
				</a>
			</div>
			<div style="width: 50%; float:right;">
				<a href="https://www.twitter.com/" target="_blank">
					<div style="width: 50%; margin:auto; border:1px solid black;">
						<div style="width: 50%; margin:auto; float:top;">
							<img id="little" src="../styles/images/twitter.png"></img>
						</div>
						<div style="float:bottom; text-align:center; text-decoration:none;  border-top:1px solid black;">
							<p>TWITTER</p>
						</div>
					</div>
				</a>
				<div style="margin-bottom:25px;"></div>
				<a href="https://www.youtube.com/" target="_blank">
					<div style="width: 50%; margin:auto; border:1px solid black;">
						<div style="width: 50%; margin:auto; float:top;">
							<img id="little" src="../styles/images/youtube.png"></img>
						</div>
						<div style="float:bottom; text-align:center; text-decoration:none;  border-top:1px solid black;">
							<p>YOUTUBE</p>
						</div>
					</div>
				</a>
			</div>
		</div>
	</div>
	
	<p id="footer">Réalisé par Thomas</p>
  </div>
  </body>
</html>


