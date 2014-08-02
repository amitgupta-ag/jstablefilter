function clearFilters(){
	//to clear all filters
	$("#searchselections").val([]).change();
}

function tablesort(){
$("#searchselections").change(function(){
var data = []; 
$('#searchselections :selected').each(function(i, selected){ 
  data[i] = $(selected).text(); 
 	});

    //create a jquery object of the rows
    var jo = $("#fbody").find("tr");
    if (this.value == "") {
        jo.show();
        return;
    }
    //hide all the rows
    jo.hide();

    //Recusively filter the jquery object to get results.
    jo.filter(function (i, v) {
        var $t = $(this);
        for (var d = 0; d < data.length; ++d) {
            if ($t.is(":contains('" + data[d] + "')")) {
                return true;
            }
        }
        return false;
    })
    //show the rows that match.
    .show();
}).focus(function () {
    this.value = "";
    $(this).css({
        "color": "black", "width":"100"
    });
    $(this).unbind('focus');
}).css({
    "color": "#C0C0C0"
});
}