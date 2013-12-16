Rag Adjust
==========

A bit of JavaScript to automatically fix the rag of any body of text. 

## Setup

First, link to the script in your HTML.

```HTML

…

<script src="./js/ragadjust.js" type="text/javascript"></script>

</body>
</html>

```

Then, in your own JavaScript, set the parameters:

```HTML

…

<script src="./js/ragadjust.js" type="text/javascript"></script>
<script type="text/javascript">

	ragadjust('p, li, dd', 'all');

</script>

</body>
</html>

```

## Parameters

There are only two parameters to set:

```JS

	ragadjust(elements, method);

```

* ##Elements## – A CSS selector list of the elements you wish to modify.
* ##Method## – Choose which rag-adjust method you want to employ.
** __emphasis__ – Text of three or less words in bold or italics does not break across lines.
** __small-words__ – Breaks lines before words of three or less characters.
** __prepositions__ – Breaks lines before prepositions.

### Suggestions, questions or concerns? nathan@artequalswork.com
