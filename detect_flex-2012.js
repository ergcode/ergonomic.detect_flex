;
/** TAB === 2 space
	*
	*
______________________________________________________________________*/


(function () {

	window._DD;

	var windowLink = window,
		documentLink = document,
		documentHeadLink = documentLink.getElementsByTagName('head')[0],
		elementForTesting = documentLink.createElement('p'),
		elementForTestingStyle = elementForTesting.style,
		display = 'display',
		displayVariant = [
			'flex',					// 1
			'-webkit-flex',	// 2
			'-ms-flexbox'		// 3
		],
		abilityFlexWrap = [
			'flexWrap',
			'WebkitFlexWrap',
			'msFlexWrap'
		];

	documentHeadLink.appendChild(elementForTesting);


	for (var i = 0, len = abilityFlexWrap.length; i < len; i++) {
		if (!(abilityFlexWrap[i] in elementForTestingStyle)) displayVariant[i] = 0;
	}


	for (var i = 0, len = displayVariant.length; i < len; i++) {
		if (!displayVariant[i]) continue;

		elementForTestingStyle.cssText = display + ':' + displayVariant[i];
		var getDisplayStyle = 
			(windowLink.getComputedStyle)	?	getComputedStyle(elementForTesting, null).getPropertyValue(display) :
																			elementForTesting.currentStyle[display];

		if (getDisplayStyle == displayVariant[i]) {
			_DD = i + 1;
			break;
		}
	}


	documentHeadLink.removeChild(elementForTesting);

})();