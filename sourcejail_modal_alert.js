function sourcejail_alert(modal_type,modal_title,modal_message){
	var modal_image = '';
	switch(modal_type){
		case'popup': modal_image = '<i class="fa fa-exclamation-circle" aria-hidden="true"></i>'; break;
		case'alert': modal_image = '<i class="fa fa-exclamation-triangle" aria-hidden="true"></i>'; break;
		case'prompt': modal_image = '<i class="fa fa-exclamation-circle" aria-hidden="true"></i>'; break;
		default: break;
	}
var buildDom = '<div id="modal_popup" class="popup response-message">' +
    '<div class="popup-floating-pan"></div>' +
	'<div class="popup-dialog">' +
	' <div class="popup-content">' +
	'	<div class="popup-header">' +
	'	  <button type="button" class="mclose" data-dismiss="popup" aria-hidden="true">×</button>' +
	'	  <h4 class="popup-title">' + modal_image + ' ' + modal_title + '</h4>' +
	'	</div>' +
	'	<div class="popup-body" style="color:#000;">' + modal_message + '</div>' +
	((modal_type == 'prompt') ? '<div><input hidden="text" id="promptvalue"/></div>' :'') +
	'<div class="popup-btns">' +
	((modal_type == 'alert') ? '<span class="btn btn-xs btn-success modalbtn" data-modalresponse="1">Ok</span>' :'') +
	((modal_type == 'popup') ? '<span class="btn btn-xs btn-danger modalbtn" data-modalresponse="0">Cancel</span>' +
	'<span class="btn btn-xs btn-success modalbtn" data-modalresponse="1">Yes</span>' :'') +
	'	</div>' +
	'  </div>' +
	'</div>' +
'</div>';
$('#event2u_alert').html(buildDom);
	$('.modalbtn').click(function(){
		var action = $(this).attr('data-modalresponse');
		if(action == 1){
			$('#modal_popup').hide();
			return true;
		}else{
			$('#modal_popup').hide();
			return false;
		}
	});
}
