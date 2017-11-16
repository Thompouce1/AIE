function APIArticle() {
	var codeB = document.getElementById("cbarreD").value; 
	var client = new XMLHttpRequest();
	client.open("GET",'https://fr.openfoodfacts.org/api/v0/produit/' +codeB+'.json', false);
	client.send(null);
	var articles = JSON.parse(client.response);

	var ingrediants = "";
	for(let i=0; i<articles.product.ingredients.length; i++){
		ingrediants += articles.product.ingredients[i].text +", ";
	}
	
	document.getElementById("blocDroite").innerHTML = '<p>' + articles.product.brands+' '+articles.product.product_name_fr+'</p><div id="photoArticle"><img src="'+articles.product.image_url+'"></img></div><div id="centrale2">'+ingrediants+'</div>';
}

function Retour(){
	document.getElementById("mobile").innerHTML = '<div id="blocGauche">Rechercher un article<br><div id="centrale"><div><label for="cbarre">Code barre</label><input type="text" id="cbarreM" placeholder="Code barre.."><button id="rechercher" onclick="APIArticleM()">Rechercher</button></div><br><br><div class="input-file-container"><input class="input-file" id="my-file" type="file"capture="camera" accept="image/*"><label for="my-file" class="input-file-trigger" tabindex="0">Scanner</label>'+' '+'<button id="rechercher" onclick="APIArticleM()">GO</button></div></div></div><div id="blocDroite"></div>';
}


function APIArticleM() {
	var codeB = document.getElementById("cbarreM").value; 
	var client = new XMLHttpRequest();
	client.open("GET",'https://fr.openfoodfacts.org/api/v0/produit/' +codeB+'.json', false);
	client.send(null);
	var articles = JSON.parse(client.response);

	var ingrediants = "";
	for(let i=0; i<articles.product.ingredients.length; i++){
		ingrediants += articles.product.ingredients[i].text +", ";
	}
	
	document.getElementById("mobile").innerHTML = '<p>' + articles.product.brands+' '+articles.product.product_name_fr+'</p><div id="photoArticle"><img src="'+articles.product.image_url+'"></img></div><div id="centrale2">'+ingrediants+'</div><button id="rechercher" onclick="Retour()">Retour</button>';
}