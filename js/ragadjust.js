ragadjust = function (s, method) {

  if (document.querySelectorAll) {

    var eles   = document.querySelectorAll(s),
    elescount  = eles.length,
    preps      = /(\s|^|>)((aboard|about|above|across|after|against|along|amid|among|anti|around|before|behind|below|beneath|beside|besides|between|beyond|concerning|considering|despite|down|during|except|excepting|excluding|following|from|inside|into|like|minus|near|onto|opposite|outside|over|past|plus|regarding|round|save|since|than|that|this|through|toward|towards|under|underneath|unlike|until|upon|versus|with|within|without)\s)+/gi,
    smallwords = /(\s|^)(([a-zA-Z-_(]{1,2}('|’)*[a-zA-Z-_,;]{0,1}?\s)+)/gi, // words with 3 or less characters
    dashes     = /([-–—])\s/gi,
    emphasis   = /(<(strong|em|b|i)>)(([^\s]+\s*){2,3})?(<\/(strong|em|b|i)>)/gi;
    orphans    = /(.|&#160;)[^\s|^&#160;]+$/
    ele        = null;

    while (elescount-- > 0) {
      ele = eles[elescount],
      elehtml = ele.innerHTML;

      if (method == 'prepositions' || method == 'all') {
        // replace prepositions (greater than 3 characters)
        elehtml = elehtml.replace(preps, function(contents, p1, p2) {
          return p1 + p2.replace(/\s/gi, '&#160;');
        });

      } if (method == 'small-words' || method == 'all') {
        // replace small words
        elehtml = elehtml.replace(smallwords, function(contents, p1, p2) {
          return p1 + p2.replace(/\s/g, '&#160;');
        });

      } if (method == 'dashes' || method == 'all') {
        // replace small words
        elehtml = elehtml.replace(dashes, function(contents) {
          return contents.replace(/\s/g, '&#160;');
        });

      } if (method == 'emphasis' || method == 'all') {
        // emphasized text
        elehtml = elehtml.replace(emphasis, function(contents, p1, p2, p3, p4, p5) {
          return p1 + p3.replace(/\s/gi, '&#160;') + p5;
        });

      } if (method == 'orphans' || method == 'all') {
        // no single words on there own last line
        elehtml = elehtml.replace(orphans, function(contents, p1, p2) {
          return contents.replace(/(\s|^&#160;)/, '&#160;')
        });

      }

      ele.innerHTML = elehtml;
    }

  }

};
