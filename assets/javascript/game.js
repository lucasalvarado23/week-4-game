(function(){
var targetnumber = 0;
var gem1 = 0;
var gem2 = 0;
var gem3 = 0;
var gem4 = 0;
var currentscore = 0;
var wins = 0;
var losses = 0;
var banner = "";

$("#gem1").click(function(){
    alert(gem1);
    currentscore = gem1 + currentscore
    currentScore()
    win()
});

$("#gem2").click(function(){
    alert(gem2);
    currentscore = gem2 + currentscore 
    currentScore()
    win()
});

$("#gem3").click(function(){
    alert(gem3);
    currentscore = gem3 + currentscore
    currentScore()
    win()
});

$("#gem4").click(function(){
    alert(gem4);
    currentscore = gem4 + currentscore
    currentScore()
    win()
});

function showTargetScore(){
	targetnumber = Math.floor((Math.random() * 250) + 50);
	$('#targetnumber').html(targetnumber.toString());
}
function setGemz(){
	gem1 = Math.floor((Math.random() * 100) + 1);
	$('#gem1').val(gem1.toString());

	gem2 = Math.floor((Math.random() * 100) + 1);
	$('#gem2').val(gem2.toString());

	gem3 = Math.floor((Math.random() * 100) + 1);
	console.log (gem3)
	$('#gem3').val(gem3.toString());

	gem4 = Math.floor((Math.random() * 100) + 1);
	$('#gem4').val(gem4.toString());
}
function win(){
	if (currentscore >= targetnumber){ 
		if (currentscore == targetnumber){
			// user won //
			wins ++
		}
		else if (currentscore > targetnumber){
			// user lost//
			losses ++
		}
		// won or lost//
		setGemz()
		currentscore = 0 
		 showTargetScore()
		  setWinsLosses()
	}
   	// always //
   currentScore()
}
function setWinsLosses(){
	console.log(wins)
	console.log(losses)
	$('#wins').html("wins: "+wins.toString())
	$('#losses').html("losses: "+losses.toString())
	console.log("setWinsLosses")
}
function currentScore(){
	$('#currentscore').html(currentscore)
	console.log("currentscore")
}

function GameStart(){
	showTargetScore();
	setGemz();
	setWinsLosses();
	currentScore();
}


GameStart()

})();