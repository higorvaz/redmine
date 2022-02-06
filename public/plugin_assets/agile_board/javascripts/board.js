var project_id = document
  .getElementById("projeto")
  .getAttribute("data-project-id");

$(".section")
  .sortable({
    connectWith: ".section",
    items: ".atividade",

    start: function (event, ui) {},
    over: function (event, ui) {},
    
    update: function (event, ui) {
      var issue_id = ui.item[0].id;
      if (ui.sender) {
        sectionTarget = $(this)[0].dataset.sectionId;
        stageChange(sectionTarget, project_id, issue_id);
      }
    },
    receive: function (event, ui) {
      // var cf_id = $("div[data-cf-position_id]").attr("data-cf-position_id");
      // var orderArray = $(this).sortable("toArray");
      // sectionTarget = $(this)[0].dataset;
      // console.log("ui.sender ", ui.sender);
      // console.log("receive sectionTarget ", sectionTarget);
      // console.log("receive orderArray ", orderArray);
      // // orderChange(orderArray, project_id, cf_id);
    },
    stop: function (event, ui) {
      var cf_id = $("div[data-cf-position_id]").attr("data-cf-position_id");
      var orderArray = $(this).sortable("toArray");
      sectionTarget = $(this)[0].dataset;
      console.log("ui.sender ", ui.sender);
      console.log("stop sectionTarget ", sectionTarget);
      console.log("stop orderArray ", orderArray);
      orderChange(orderArray, project_id, cf_id);
    },

  })
  .disableSelection();

function stageChange(section_id, project_id, issue_id) {
  $.ajax({
    url: "/agile_board/move_issue_update_status",
    type: "POST",
    data: {
      project_id: project_id,
      issue_id: issue_id,
      new_status: section_id,
    },
    success: function (r) {
      console.log("stageChange success ", r);
    },
    error: function (r) {
      displayErrorMessage(
        "Você não tem permissão para mover o cartão para a atividade!"
      );
    },
  });
}
function orderChange(o, p, c) {
  $.ajax({
    url: "/agile_board/move_issue_update_position",
    type: "POST",
    data: {
      issue_ids: o,
      project_id: p,
      cf_id: c,
    },
    success: function (r) {
      console.log("orderChange success ", r);
    },
    error: function (r) {
      displayErrorMessage(
        "Você não tem permissão para mudar a prioridade do cartão!"
      );
    },
  });
}
