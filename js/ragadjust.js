ragadjust = function (s, method) {
	
	if (document.querySelectorAll) {
	
		var eles = document.querySelectorAll(s),
				elescount = eles.length;
		
		while (elescount-- > 0) {
			
			var preps = /(\s|^|>)((aboard|about|above|across|after|against|along|amid|among|anti|around|before|behind|below|beneath|beside|besides|between|beyond|concerning|considering|despite|down|during|except|excepting|excluding|following|from|inside|into|like|minus|near|onto|opposite|outside|over|past|plus|regarding|round|save|since|than|that|this|through|toward|towards|under|underneath|unlike|until|upon|versus|with|within|without|-|–|—)?\s)+/gi,
			
					smallwords = /(\s|^)(([a-zA-Z-_(]{1,2}('|’)*[a-zA-Z-_,;]?\s)+)/gi, // words with 3 or less characters
					
					emphasis = /(<(strong|em|b|i)>)(([^\s]+\s*){2,3})?(<\/(strong|em|b|i)>)/gi,
			
					ele = eles[elescount],
					
					elehtml = ele.innerHTML;
			
			if (method == 'small-words' || method == 'all') 
				
				// replace small words
				elehtml = elehtml.replace(smallwords, function(contents, p1, p2) {
		        return p1 + p2.replace(/\s/g, '&nbsp;');
		    }); 
			
			if (method == 'prepositions' || method == 'all') 
			
				// replace prepositions (greater than 3 characters)
				elehtml = elehtml.replace(preps, function(contents, p1, p2) {
				        return p1 + p2.replace(/\s/gi, '&nbsp;');
				    });
			
			if (method == 'emphasis' || method == 'all') 
			
				// emphasized text
				elehtml = elehtml.replace(emphasis, function(contents, p1, p2, p3, p4, p5) {
				        return p1 + p3.replace(/\s/gi, '&nbsp;') + p5;
				    });
			
			ele.innerHTML = elehtml;
			
		}
	
	}
	
};