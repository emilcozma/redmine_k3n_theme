$(document).ready(function () {
	var oldAddFilter = addFilter;
	var oldToggleMultiSelect = toggleMultiSelect;
	addFilter = function(field, operator, values){
		// Call the original function, and pass the arguments to it, storing the return
        // value in a new variable
        var result = oldAddFilter.apply(this, arguments);
		// Return the result of the original function, or return something different
        // thanks to further processing that you may have done, to the original
        // caller of the base function.
		if(Boolean($('#filters-table #tr_' + field + ' select.value').attr('multiple'))){
			$('#filters-table #tr_' + field + ' select.value').parent().addClass('multiple').find('span.toggle-multiselect').addClass('multiple');
		}
		if(field == 'project_id'){
			select2ToPorjectFromFilter();
		}
        return result;
	}
	toggleMultiSelect = function(el) {
		// Call the original function, and pass the arguments to it, storing the return
        // value in a new variable
        var result = oldToggleMultiSelect.apply(this, arguments);
		if(el.prop('multiple') === false){
			el.parent().removeClass('multiple').find('span.toggle-multiselect').removeClass('multiple');
		} else {
			el.parent().addClass('multiple').find('span.toggle-multiselect').addClass('multiple');
		}
		if(el.attr('name') == 'v[project_id][]'){
			select2ToPorjectFromFilter();
		}
		return result;
	}
	//
	select2ToProjectOnLoad();
	// For Ajax
    $(document).ajaxComplete(function(event){
		//ajax complete
	});

    /* Set the filterbox default to collapsed
    $('fieldset#filters').addClass('collapsed');
    $('fieldset#filters').find('legend').removeCLass('icon-expended fa-minus-square');
    $('fieldset#filters').find('legend').addCLass('icon-collapsed fa-plus-square');
    $('fieldset#filters').find('div').eq[0].css("display", "none");
    */
    
    
});

function select2ToPorjectFromFilter(){
	var placeHolder = $('#quick-search > #project-jump > .drdn-trigger').text();	
	$('#filters-table #tr_project_id select.value[name="v[project_id][]"]').select2({
		templateSelection: select2SelectionTemplate,
		width:"resolve",
		placeholder: placeHolder,
		allowClear: true
	});
}

function select2ToProjectOnLoad(){
	var placeHolder = $('#quick-search > #project-jump > .drdn-trigger').text();
	$('select[name$="project[parent_id]"], select[name$="[project_id]"]:not([name="op[project_id]"])').each(function(i){
		$(this).select2({
			templateSelection: select2SelectionTemplate,
			width:"resolve",
			placeholder: placeHolder,
			allowClear: true
		});
	});
}

function select2SelectionTemplate(data, container) {
	return data.text;
}