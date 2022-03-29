var i = 1;
$(document).on("click", "#add-enchant", function () {
	$('#enchants-div').append(`<div style="float: left" id=enchant-div${i}></div>`);
	$(`#enchant-div${i}`).append(`<table id="enchant-table${i}" name="enchant-table"></table>`);
	$(`#enchant-table${i}`).append(`<tr><th>enchant${i}</th></tr>`);
	$(`#enchant-div${i}`).append(`<button type="button" id="enchant${i}" name="enchant-data">Add Enchant${i} Data</button>`);
	i++;
});

$(document).on("click", "button[name='enchant-data']", function () {
	var i = parseId(this.id);
	var element = document.querySelector(`#enchant-table${i}`);
	$(element).append('<tr><td><input type="text"></td></tr>')
});

function parseId(id)
{
    matches = id.match(/\d+/g);
    return matches[0];
}

$(document).on("click", "#compute", function () {
	var output = '';
	var element = document.getElementsByName('enchant-table');
	$(element).each(function() {
		var possibilities = [];
    	$(this).find('td').each(function() {
    		possibilities.push(this.children[0].value);
    	});
    	output += possibilities[rng(possibilities)] + ' ';
	});
	alert(output);
});

function rng(possibilities) {
	var output = Math.floor((Math.random() * possibilities.length));
	return output;
}