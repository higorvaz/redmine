function change_card_type_kanban_show(input, cf_id) {

    var project_id = $('#projeto').attr('data-project-id');
    var issue = input;
    var new_value = input.value;

    // alert('issue.id '+issue.value +' cf_id ' + cf_id);
    // console.log(issue);
    $.ajax({
        url: "/agile_board/change_card_type_kanban_show",
        type: 'POST',
        data: {project_id: project_id, issue_id: input.id, new_value: new_value, cf_id: cf_id},
        success: function (r) {
            // issue.style.background = input.value;
        },
        error: function (r) {
            displayErrorMessage(r.responseText);
        }
    });
}

// console.log('card_kanban_show.js');
