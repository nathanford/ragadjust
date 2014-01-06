Rag Adjust
==========

A bit of JavaScript to automatically fix the rag of any body of text. Where you allow your lines to break in a block of text can be very important for readability, and quite tricky within a fluid layout. With this script you can set how and where you want your lines to break, creating a much more pleasing text rag.

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

* __Elements__ – A CSS selector list of the elements you wish to modify.
* __Method__ – Choose which rag-adjust method you want to employ.
  - _emphasis_ – Text of three or less words in bold or italics does not break across lines.
  - _small-words_ – Breaks lines before words of three or less characters.
  - _prepositions_ – Breaks lines before prepositions.
  - _dashes_ – Breaks lines before hyphens and dashes.

## Support

Rag Adjust will work in all modern browsers and IE8+.

## Appendix: Prepositions matched

* aboard* about* above* across* after* against* along* amid* among* anti* around* before* behind* below* beneath* beside* besides* between* beyond* concerning* considering* despite* down* during* except* excepting* excluding* following* from* inside* into* like* minus* near* onto* opposite* outside* over* past* plus* regarding* round* save* since* than* that* this* through* toward* towards* under* underneath* unlike* until* upon* versus* with* within* without

#### Suggestions, questions or concerns? nathan@artequalswork.com
