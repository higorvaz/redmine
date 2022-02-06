function change_card_color(input, cf_id) {
    var project_id = $('#projeto').attr('data-project-id');
    var issue = input.parentNode;
    var color_rgb = input.value;

    $.ajax({
        url: "/agile_board/change_card_color",
        type: 'POST',
        data: {project_id: project_id, issue_id: issue.id, new_color: color_rgb, cf_id: cf_id},
        success: function (r) {
            issue.style.background = input.value;
        },
        error: function (r) {
            displayErrorMessage(r.responseText);
        }
    });
}
