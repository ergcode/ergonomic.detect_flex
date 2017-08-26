;
/** TAB === 2 space
	*
	*
______________________________________________________________________*/


(function () {

	window._DD;

	var documentLink = document,
		getComputedStyleLink = window.getComputedStyle,
		documentHeadLink = documentLink.getElementsByTagName('head')[0],
		elementForTesting = documentLink.createElement('p'),
		elementForTestingStyle = elementForTesting.style,
		display = 'display',
		displayVariant = [
			'flex',					// 1
			'-webkit-flex',	// 2
			'-ms-flexbox',	// 3
			'-webkit-box',	// 4
			'-moz-box'			// 5
		],
		abilityFlexWrap = [
			'flexWrap',
			'WebkitFlexWrap',
			'msFlexWrap'
		];


	documentHeadLink.appendChild(elementForTesting);


	for (var i = 0, len = displayVariant.length; i < len; i++) {
		if (abilityFlexWrap[i] && !(abilityFlexWrap[i] in elementForTestingStyle)) continue;

		elementForTestingStyle.cssText = display + ':' + displayVariant[i];
		var getDisplayStyle = 
			(getComputedStyleLink)	?	getComputedStyleLink(elementForTesting, null).getPropertyValue(display) :
																elementForTesting.currentStyle[display];

		if (getDisplayStyle == displayVariant[i]) {
			_DD = i + 1;
			break;
		}
	}


	documentHeadLink.removeChild(elementForTesting);

})();