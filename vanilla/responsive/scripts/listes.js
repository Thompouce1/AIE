var currentList = JSON.parse('[' +
		'{ "ListeNom":"semaine" , "ListeArticle":[' +
		'{ "ArticleNom":"coca" , "Quantitee":"1" },' +
		'{ "ArticleNom":"orangina" , "Quantitee":"1" },' +
		'{ "ArticleNom":"coca1" , "Quantitee":"1" },' +
		'{ "ArticleNom":"coca3" , "Quantitee":"1" },' +
		'{ "ArticleNom":"coca2" , "Quantitee":"1" },' +
		'{ "ArticleNom":"coca2" , "Quantitee":"1" },' +
		'{ "ArticleNom":"coca2" , "Quantitee":"1" },' +
		'{ "ArticleNom":"coca2" , "Quantitee":"1" },' +
		'{ "ArticleNom":"coca2" , "Quantitee":"1" },' +
		'{ "ArticleNom":"coca2" , "Quantitee":"1" },' +
		'{ "ArticleNom":"coca2" , "Quantitee":"1" },' +
		'{ "ArticleNom":"coca2" , "Quantitee":"1" },' +
		'{ "ArticleNom":"coca2" , "Quantitee":"1" },' +
		'{ "ArticleNom":"coca2" , "Quantitee":"1" },' +
		'{ "ArticleNom":"coca2" , "Quantitee":"1" },' +
		'{ "ArticleNom":"coca2" , "Quantitee":"1" },' +
		'{ "ArticleNom":"coca2" , "Quantitee":"1" },' +
		'{ "ArticleNom":"coca2" , "Quantitee":"1" },' +
		'{ "ArticleNom":"coca4" , "Quantitee":"1" },' +
		'{ "ArticleNom":"coca5" , "Quantitee":"1" },' +
		'{ "ArticleNom":"coca6" , "Quantitee":"1" },' +
		'{ "ArticleNom":"coca7" , "Quantitee":"1" },' +
		'{ "ArticleNom":"coca8" , "Quantitee":"1" },' +
		'{ "ArticleNom":"coca9" , "Quantitee":"1" },' +
		'{ "ArticleNom":"coca10" , "Quantitee":"1" },' +
		'{ "ArticleNom":"coca11" , "Quantitee":"1" },' +
		'{ "ArticleNom":"coca&2" , "Quantitee":"1" },' +
		'{ "ArticleNom":"coca13" , "Quantitee":"1" },' +
		'{ "ArticleNom":"coca114" , "Quantitee":"1" },' +
		'{ "ArticleNom":"coca15" , "Quantitee":"1" },' +
		'{ "ArticleNom":"coca&6" , "Quantitee":"1" },' +
		'{ "ArticleNom":"sprite" , "Quantitee":"2" },' +
		'{ "ArticleNom":"Peter" , "Quantitee":"3" } ] },' +
		'{ "ListeNom":"weekend" , "ListeArticle":[' +
		'{ "ArticleNom":"chips" , "Quantitee":"4" },' +
		'{ "ArticleNom":"pesto" , "Quantitee":"5" },' +
		'{ "ArticleNom":"thon" , "Quantitee":"6" } ] },' +
		'{ "ListeNom":"soiree" , "ListeArticle":[' +
		'{ "ArticleNom":"jager" , "Quantitee":"7" },' +
		'{ "ArticleNom":"rhum" , "Quantitee":"8" },' +
		'{ "ArticleNom":"vodka" , "Quantitee":"9" } ] } ]'); 


var liste= [];
for(let i = 0; i < currentList.length ; i++){
	liste.push(currentList[i].ListeNom);
}


var printList1 = "";
for(let i = 0; i < currentList.length ; i++){
	var elem = document.createElement("div");
	printList1 += '<div onclick="clicList(\''+i+'\')" style="border:1px solid black; cursor: pointer;"><div style="text-align:center;text-decoration:none; "><p>' +currentList[i].ListeNom + '</p></div></div>';	
}
document.getElementById("test1").innerHTML = printList1;


function clicList(id) {
	
	var printArt1 = "";
	for(let j = 0; j < currentList[id].ListeArticle.length ; j++){
		var elem = document.createElement("div");
		printArt1 += '<tr><td>' +currentList[id].ListeArticle[j].ArticleNom + '</td><td style="text-align:center;">' + currentList[id].ListeArticle[j].Quantitee +'</td></tr>';
	}
	document.getElementById("test2").innerHTML = printArt1;
	
}

var printList2 = "";
for(let i = 0; i < currentList.length ; i++){
	var elem = document.createElement("div");
	printList2 += '<div onclick="clicList2(\''+i+'\')" style="border:1px solid black; cursor: pointer;"><div style="text-align:center;text-decoration:none; "><p>' +currentList[i].ListeNom + '</p></div></div>';	
}
document.getElementById("test3").innerHTML = printList2;

function clicList2(id) {
	
	toggle_div(this, 'id_du_div');
	toggle_div(this, 'id_du_div2');
	var printArt2 = "";
	for(let j = 0; j < currentList[id].ListeArticle.length ; j++){
		var elem = document.createElement("div");
		printArt2 += '<tr><td>' +currentList[id].ListeArticle[j].ArticleNom + '</td><td style="text-align:center;">' + currentList[id].ListeArticle[j].Quantitee +'</td></tr>';
	}
	document.getElementById("test4").innerHTML = printArt2;
}

function toggle_div(bouton, id) {
	var div = document.getElementById(id);
	if(div.style.display=="none") {
		div.style.display = "block";
		bouton.innerHTML = "-";
	} else {
		div.style.display = "none";
		bouton.innerHTML = "+";
	}
}

function zeubi(){
	toggle_div(this, 'id_du_div');
	toggle_div(this, 'id_du_div2');
}

