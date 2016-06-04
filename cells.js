function AddCells(n, p, o){
	var name, position;
	name = document.getElementById(n).value;
	position = document.getElementById(p).value;
	//scores = document.getElementById(s).value;
	document.getElementById(o).innerHTML = name.concat(" is").concat(position).concat(" earned score: ");
}

function AddSrow(n, t){
	var table = document.getElementById(t);
	var row = table.insertRow();
	var cell1 = row.insertCell(0);
	var cell2 = row.insertCell(1);
	cell1.innerHTML = n;
	cell2.innerHTML = "0";
}