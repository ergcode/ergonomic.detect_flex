;
/** TAB === 2 space
	*
	*
	Для минимизации кода используйте https://skalman.github.io/UglifyJS-online/ или установленный https://github.com/mishoo/UglifyJS2
	To minimize code, use https://skalman.github.io/UglifyJS-online/ or installed https://github.com/mishoo/UglifyJS2
______________________________________________________________________*/



(function () {

	// _Detect Display, глобальная переменная содержащая результат проверки свойств display
	// _Detect Display a global variable containing the result of checking the display properties
	window._DD;

	// короткие ссылки на window, document, <head/>, для минимизации кода
	// short links window, document, <head/> to minimize code
	var windowLink = window,
		documentLink = document,
		documentHeadLink = documentLink.getElementsByTagName('head')[0],

		// временный элемент для проверки свойств
		// temporary element for testing properties
		elementForTesting = documentLink.createElement('p'),
		elementForTestingStyle = elementForTesting.style,

		// переменная выполняет три задачи: название ключа содержащееся в объектах; название свойства CSS; позволяет уменьшить код во время минификации
		// variable performs three tasks: the name of the key contained in the objects; the name of the CSS property; allows you to reduce the code during minification
		display = 'display',

		// варианты свойства display, которые будут применены к элементу elementForTesting (строгий порядок перечисления!)
		// options for the display property that will be applied to the element elementForTesting (a strict order of listing!)
		displayVariant = [
			'flex',					// 1

			'-webkit-flex',	// 2
			'-ms-flexbox',	// 3

			'-webkit-box',	// 4
			'-moz-box',			// 5

			'table',				// 6

			'inline'				// 7
		],

		// свойство переноса flex-элемента на новую строку (строгий порядок и строгое соответствие первым трем значениям из переменной displayVariant !)
		// property transfer flex-item to a new row (strict order and strict compliance with the first three values from the variable displayVariant !)
		abilityFlexWrap = [
			'flexWrap',
			'WebkitFlexWrap',
			'msFlexWrap'
		];


	// статус DOM Ready неизвестен и не проверяется. Значит можно без ошибок манипулировать двумя тэгами: HEAD и HTML. Размещаем временный элемент в HEAD
	// status DOM Ready unknown and not verified. So it is possible to manipulate two tags: HEAD and HTML. Placed a temporary element in the HEAD
	documentHeadLink.appendChild(elementForTesting);


	for (var i = 0, len = abilityFlexWrap.length; i < len; i++) {
		// Это условие требует строгий порядок перечисления ключей в переменных displayVariant и abilityFlexWrap. Если значение ключа (abilityFlexWrap) не было найдено в свойствах элемента (elementForTestingStyle) => то присваиваем значение 0 для ключа displayVariant с тем же порядком. Всегда готов помочь, Ваш Капитан Очевидность
		// This condition requires a strict order of the keys in the variables displayVariant and abilityFlexWrap. If the key value (abilityFlexWrap) was not found in the item properties (elementForTestingStyle) => then assign a value of 0 for key displayVariant with the same order. Always willing to help, Your Captain Obvious
		if (!(abilityFlexWrap[i] in elementForTestingStyle)) displayVariant[i] = 0;
	}


	for (var i = 0, len = displayVariant.length; i < len; i++) {
		// для ключа было установлено значение 0 в предыдущем for
		// key was set to 0 in the previous for
		if (!displayVariant[i]) continue;

		// такой вид присвоения свойства к элементу используется для экранирования ошибки. Ошибка может возникать когда старые версии браузеров применяют нестандартное свойство CSS
		// this kind of attribution of properties to an element used for shielding error. Error may occur when older versions of browsers use non-standard CSS property
		elementForTestingStyle.cssText = display + ':' + displayVariant[i];


		var getDisplayStyle = 
			// новые браузеры
			// new browsers
			(windowLink.getComputedStyle)	?	getComputedStyle(elementForTesting, null).getPropertyValue(display) :
			// старые браузеры
			// old browsers
																			elementForTesting.currentStyle[display];

		if (getDisplayStyle == displayVariant[i]) {
			// если свойство примененное к элементу совпало с индексом
			// if the property applied to the element coincided with the index

			// порядковый номер ключа + 1 (экранируем 0) - необходимое значение. По значению можно отследить какое из свойств для display поддерживается браузером
			// the ordinal position of the key + 1 (0 escapes) is the desired value. By value it is possible to track which of the properties for display is supported by the browser
			_DD = i + 1;

			// дальнейшая проверка не требуется
			// further checking is required
			break;
		}
	}


	// временный элемент больше не нужен, удаляем
	// temporary element is no longer needed, removed
	documentHeadLink.removeChild(elementForTesting);


	// 1, flex W3C 2012 без вендорных префиксов, подключение дополнительных файлов не требуется, иначе выполняем условие
	// 1, flex W3C 2012 without vendor prefixes, adding the additional files is not required, otherwise perform the condition
	if (_DD != 1) {
		var load = documentLink.createElement('link'),

			url = 
				// 2,3, flex W3C 2011-2012 с необходимостью использования вендорных префиксов
				// 2,3, flex W3C 2011-2012 with the need to use vendor prefixes
				(_DD < 4)	?	'supportVendor.css' :

				// 4,5, flex W3C 2009. box-модель + inline-эмуляция flex-wrap
				// 4,5, flex, W3C 2009. box-model + inline emulation flex-wrap
				(_DD < 6)	?	'supportBox.css' :

				// 6, table + inline-эмуляция flex-wrap
				// 6, table + inline emulation flex-wrap
				(_DD < 7)	?	'supportTable.css' :

				// 7, inline-эмуляция flex-wrap
				// 7, inline emulation flex-wrap
										'supportInline.css';

		load.type = 'text/css';
		load.href = url;
		load.rel = 'stylesheet';
		documentHeadLink.appendChild(load);
	}


	if (!windowLink.matchMedia && !windowLink.msMatchMedia && !windowLink.CSSMediaRule) {
		// Обратить пристальное внимание на то, что если потребуется полная эмуляция @media с помощью respond.js, то необходимо исключить !windowLink.CSSMediaRule из условия. Таким образом условие будет выполняться в IE9, сейчас оно выполняется IE8-
		// Pay close attention to the fact that if you need full emulation of @media using respond.js it is necessary to exclude !windowLink.CSSMediaRule from the condition. Thus the condition will be executed in IE9, now it runs IE8-
		var load = documentLink.createElement('script');
		load.type = 'text/javascript';
		load.src = 'respond.js'; // https://github.com/scottjehl/Respond
		documentHeadLink.appendChild(load);
	}

})();