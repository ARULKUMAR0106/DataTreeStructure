let number = 0;
let selectedNode;
$(document).ready(function () {
    $("#btn-sbmt").on("click", function () {
    });
});

function appendTemplate() {
    let value = $("#txts-createname").val();
    let template = '<div id="txt-'+number+'" onclick="CreateTree(event)" value="' + value + '"><span> ' + value +'</span></div>'
    if (selectedNode != "" && selectedNode != undefined) {
        template = '<div  id="txt-' + number + '" value="' + value + '"><span>' + value + '</span></div>'
        $("#" + selectedNode).append(template);
        $("#txt-" + number).css("margin-left", "30px");
        $("#txt-" + number).css("background-color", "white");
    }
    else {
        $("#div-treeview").append(template);
    }
    number = number + 1;


}
$("[id*=txt-]").on("click", function () {
    let id = e.target.id;
    let isselected = e.target.attributes.selected;
    if (isselected != undefined) {
        $("span").css("background-color", "white");
        $("[id*=txt-]").removeAttr("selected");
        selectedNode = "";
        return;
    }
    $("span").css("background-color", "white");
    $(e.target.childNodes[0]).css("background-color", "green");
    $("[id*=txt-]").removeAttr("selected");
    $("#" + id).attr("selected", "active");
    selectedNode = id;
});
function CreateTree(e) {
    let id = e.target.id;
    let isselected = e.target.attributes.selected;
    if (isselected != undefined) {
        $("span").css("background-color", "white");
        $("[id*=txt-]").removeAttr("selected");
        selectedNode = "";
        return;
    }
    $("span").css("background-color", "white");
    $(e.target.childNodes[0]).css("background-color", "green");
    $("[id*=txt-]").removeAttr("selected");
    $("#" + id).attr("selected", "active");
    selectedNode = id;
}
