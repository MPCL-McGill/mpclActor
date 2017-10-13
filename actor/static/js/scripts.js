$('#collapseEffects').on('shown.bs.collapse', function () {
    $("#effectglyph").removeClass("glyphicon glyphicon-unchecked").addClass("glyphicon glyphicon-collapse-down");
});

$('#collapseEffects').on('hidden.bs.collapse', function () {
    $("#effectglyph").removeClass("glyphicon glyphicon-collapse-down").addClass("glyphicon glyphicon-unchecked");
});

$('#collapseModels').on('shown.bs.collapse', function () {
    $("#modelglyph").removeClass("glyphicon glyphicon-unchecked").addClass("glyphicon glyphicon-collapse-down");
});

$('#collapseModels').on('hidden.bs.collapse', function () {
    $("#modelglyph").removeClass("glyphicon glyphicon-collapse-down").addClass("glyphicon glyphicon-unchecked");
});