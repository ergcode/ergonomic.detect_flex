;
/** TAB === 2 space
	*
	*
______________________________________________________________________*/



(function () {

	window._DD;

	var windowLink = window,
		documentLink = document,

		getComputedStyleLink = windowLink.getComputedStyle,
		addEventListenerLink = 'addEventListener',
		appendChildLink = 'appendChild',
		createElementLink = 'createElement',

		elementForTesting = documentLink[createElementLink]('p'),
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



	(windowLink[addEventListenerLink]) ?
		documentLink[addEventListenerLink]('DOMContentLoaded', domReady, false) : 
		documentLink.attachEvent('onreadystatechange', function () {
			if (documentLink.readyState === 'complete') domReady();
		});



	function domReady() {


		var documentBodyLink = documentLink.body;

		documentBodyLink[appendChildLink](elementForTesting);


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


		documentBodyLink.removeChild(elementForTesting);


		if (_DD != 1) {
			var load = documentLink[createElementLink]('link'),
				url = 
					(_DD < 4)	?	'supportVendor.css' :
					(_DD < 6)	?	'supportBox.css' :
					(_DD < 7)	?	'supportTable.css' :
											'supportInline.css';

			load.type = 'text/css';
			load.href = url;
			load.rel = 'stylesheet';
			documentBodyLink[appendChildLink](load);
		}


		if (!windowLink.matchMedia && !windowLink.msMatchMedia && !windowLink.CSSMediaRule) {
			var load = documentLink[createElementLink]('script');
			load.type = 'text/javascript';
			load.src = 'respond.js'; // https://github.com/scottjehl/Respond
			documentBodyLink[appendChildLink](load);
		}

	}


})();