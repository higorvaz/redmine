function alterar_versao(){
  var project_id = $('#projeto').attr('data-project-id');
  var id_versao = $('#versoes')[0].value;

  $.ajax({
    url: "/agile_board_burndown/change_release_version",
      type: 'GET',
      data: {project_id: project_id, version_id: id_versao},
      success: function(r){
          showBurnDown (
            "burndown",
            r[0],
            r[1],
            r[2],
            r[3]);
      },
      error: function(r){ }
    });
}
