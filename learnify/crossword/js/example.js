	//Global varaibles for easy management
var currentInput;
var crosswordArray;

//Shows the constructed crossword
function showCrossword(){
	var htmlCrossword = document.getElementById("crossword");
	crosswordArray = generateCrossword();
	for (var i=0; i<crosswordArray.length; i++) {
		//-1 as parameter to add it at the end
		var row = htmlCrossword.insertRow(-1);
		var rowWord = crosswordArray[i];
		for (var j=0 ; j<rowWord.length; j++){
			var cell = row.insertCell(-1);
			if(rowWord[j] != 0){
                var cellId = String('id' + '_' + i + '_' + j);
                //Here we let the cells allow input text
                cell.innerHTML = '<input type="text" class="inputBox" maxlength="1" style="text-transform: uppercase" ' 
                                    + 'id="' + cellId + '" onfocus="saveInput(' + "'" + cellId + "'"+ ')">';
			}
			else
				cell.style.backgroundColor = "transparent";
		}
	}
	startNumbers();
}

//Here we stores the id of the selected cell
function saveInput(cellId){
	currentInput = cellId;
}

//Here we stablish where does the words start
function startNumbers(){
	document.getElementById("id_0_4").placeholder = "1";
	document.getElementById("id_4_6").placeholder = "2";
	document.getElementById("id_4_2").placeholder = "3";
	document.getElementById("id_4_9").placeholder = "4";
	document.getElementById("id_7_2").placeholder = "5";
	document.getElementById("id_10_3").placeholder = "6";
}

//Here we generate the crossword as a grid
function generateCrossword(){
var items = [
            	[0, 0, 0,   0,  'g',  0,   0,   0,   0,   0],
                [0, 0, 0,   0,  'r',  0,   0,   0,   0,   0],
				[0, 0, 0,   0,  'e',  0,   0,   0,   0,   0],
				[0, 0, 0,   0,  'e',  0,   0,   0,   0,   0],
                [0, 0,'v', 'a', 'n', 'i', 's', 'h', 'e', 'd'],
				[0, 0, 0,   0,   0,   0,  'i',  0,   0,  'i'],
				[0, 0, 0,   0,   0,   0,  'b',  0,   0,  'n'],
				[0, 0,'v', 'o', 'w', 'e', 'l',  0,   0,  'n'],
				[0, 0, 0,   0,   0,   0,  'i',  0,   0,  'e'],
				[0, 0, 0,   0,   0,   0,  'n',  0,   0,  'r'],
				[0, 0, 0,  'p', 'l', 'u', 'g', 0, 0, 0],
				[ 0,   0,   0,   0,   0,   0, 's', 0, 0, 0]
			];
	return items;
}

//Here we reset all the crossword
function clearCrossword(){
	//Reset to empty
	currentInput = '';
	var htmlCrossword = document.getElementById("crossword");
	htmlCrossword.innerHTML = '';
    showCrossword();
}

//Here we check if the words written are correct
function check(){
	for (var i=0; i<crosswordArray.length; i++) {
		var rowWord = crosswordArray[i];
		for(var j=0; j<rowWord.length; j++){
			if(rowWord[j] != 0){
				var cell = document.getElementById('id' + '_' + i + '_' + j);
				if(cell.value.toLowerCase() != crosswordArray[i][j])
					cell.style.backgroundColor = 'red';
				else
					cell.style.backgroundColor = 'limegreen';
			}
		}
	}
}