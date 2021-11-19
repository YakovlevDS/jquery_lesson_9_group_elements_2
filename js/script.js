jQuery(function($) {
	
	//$('.address').eq(-2).css({'border':'1px solid red'});
	
	//$('li').filter('li.current').css({'border':'1px solid red'});
	
	/*$('li').filter(function(index) {
		
		return $(this).attr('class') == 'current';
		//return index%2 == 0;
		
	}).css({'border':'1px solid red'});*/
	
	//$('p').first().css({'border':'1px solid red'});
	
	//$('div').has('h1').css({'border':'1px solid red'});;
	
	/*if($('div').is('div')) {
		alert('Yes');
	}*/
	
	//$('p').last().css({'border':'1px solid red'});
	////$('div').has('h1').css({'border':'1px solid red'});;
	
	/*$('span').parent().not(function(index) {
		
		return $(this).is('h1');
		
	}).css({'border':'1px solid red'});;*/
	
	//$('div').slice(0,2).css({'border':'1px solid red'});;
	
	
	
	//alert($('img').width());
	
	/*var widths = [];
	
	$('img').each(function(index,elem) {
		
		 widths.push($(elem).width());
		
	});*/
	
	//alert(widths);
	
	/*var result = $('li').map(function(index,elem) {
		
		return $(elem).text();
		
	});
	
	alert(result.get());*/
	
	//$('li').add('.address','.grid_3').css({'border':'1px solid red'});
	
	//andSelf();
	//$('li').add('.address','.grid_3').css({'border':'1px solid red'});
	//$('li').parent().css({'border':'1px solid red'}).andSelf().css({'border':'1px solid green'});
	
	//contents();
	
	/*$('.grid_7').contents().each(function() {
		
		alert($(this).text())
		
	});*/
	
	$('li').parent().css({'border':'1px solid red'}).end().css({'border':'1px solid green'});
	
	
	
	
	
	
	
	
});

