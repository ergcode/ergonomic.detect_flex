;
/** TAB === 2 space
	*
	*
______________________________________________________________________*/


(function () {

	window._DD;

	var documentLink = document,
		documentHeadLink = documentLink.getElementsByTagName('head')[0],
		elementForTesting = documentLink.createElement('p'),
		getComputedStyleLink = window.getComputedStyle,
		elementForTestingStyle = elementForTesting.style,
		display = 'display',
		displayVariant = [
			'flex',					// 1
			'-webkit-flex',	// 2
			'-ms-flexbox',	// 3
			'-webkit-box',	// 4
			'-moz-box',			// 5
			'table',				// 6
			'inline'				// 7
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


	if (_DD != 1) {
		var load = documentLink.createElement('link'),
			url = 
				(_DD < 4)	?	'supportVendor.css' :
				(_DD < 6)	?	'supportBox.css' :
				(_DD < 7)	?	'supportTable.css' :
										'supportInline.css';

		load.type = 'text/css';
		load.href = url;
		load.rel = 'stylesheet';
		documentHeadLink.appendChild(load);
	}


	if (!window.matchMedia && !window.msMatchMedia && !window.CSSMediaRule) {
		var load = documentLink.createElement('script');
		load.type = 'text/javascript';
		load.src = 'respond.js'; // https://github.com/scottjehl/Respond
		documentHeadLink.appendChild(load);
	}

})();