Simple and guaranteed method for determination support  of FLEX and BOX in any browser 
===================
    
>**The method of determination is quite simple:**
> - The script creates a temporary item and places it in a `document`. 
> - The element queried the presence of the keys `['flexWrap', 'WebkitFlexWrap', 'msFlexWrap']` in `element.style`. If that key is missing it means that the item can not support a similar property `display: ['flex', '-webkit-flex', '-ms-flexbox']`. While checking the same properties for `display` will be ignored. 
> To existing element is assigned the array of properties `display`.
> - After you apply - is the query of the current `display` property and compare it with the property that we are trying to assign.
> - If the properties match, the script writes the required global variable `_DD` and terminates.
    
    
    
ABSTRACT
-------------
- In contrast to [Modernizr] - this code gives complete freedom. In addition, unlike Modernizr - this code accurately defines the support in outdated mobile browsers. In desktop browsers the problem is not big, as the number of browsers Chrome 20 and FF 22 to 27 is very small. 
- This code simply defines support. What to do next with the received data in a variable `_DD` you decide for yourself. For example you can upload a CSS file to support the old browser. Or you can add a selector in the class of the element how it's done in Modernizr. 
- 416 bytes to [detect_flex-2012_min.js], cross browser, independence from external JS libraries. 
- I'll be glad if you could help me with a quality English translation and tips on how to reduce this code. 
- To minimize the code, use [UglifyJS3 online] or set [UglifyJS2] 
    
    
    
MANUAL
-------------
Place the script in the desired place in the document. I recommend to place the script after connecting to the main file of CSS styles. 
To check the result of the script call the global variable: 
```
_DD
  =>
    [undefined] variable has not been declared, the script was not executed
    [1] flex (W3C 2012) supported
    [2] flex (W3C 2012) is supported with the condition of adding vendor prefixes for -webkit-
    [3] flex (W3C 2012) is supported with the condition of adding vendor prefixes for -ms-
    [4] box (W3C 2009), is maintained with the condition of adding vendor prefixes for -webkit-
    [5] box (W3C 2009), is maintained with the condition of adding vendor prefixes for -moz-
    [6] supported display: table
    [7] supported by display: inline
```
    
### [detect_flex.js]
- checks all possible properties display
- writes the result in global variable _DD (Detect Display)
- downloads files from the demo folder, depending on the result of the test. This is done for demonstration purposes
    
### [detect_flex-2009.js]
- check and support flex box
- writes the result in global variable _DD (Detect Display)
    
### [detect_flex-2012.js]
- check support for flex only
- writes the result in global variable _DD (Detect Display)
    
### [detect_flex-all.js]
- checks all possible properties display
- writes the result in global variable _DD (Detect Display)
    
    
    
----------
    
    
    
Простой и гарантированный метод определения поддержки FLEX и BOX в любых браузерах 
===================
    
>**Метод определения достаточно прост:**
> - Скрипт создает временный элемент и размещает его в `document`. 
> - У элемента опрашивается наличие ключей `['flexWrap', 'WebkitFlexWrap', 'msFlexWrap']` в `element.style`. И если данный ключ отсутствует - это означает, что элемент не сможет поддерживать аналогичное свойство `display: ['flex', '-webkit-flex', '-ms-flexbox']`. При этом проверка аналогичного свойства для `display` будет пропущена. 
> - К реально существующему элементу применяется массив свойств `display`. 
> - После применения - происходит запрос текущего свойства `display` и сравнение его со свойством которое пытались присвоить. 
> - Если свойства совпали - скрипт записывает искомое в глобальную переменную `_DD` и прекращает свою работу. 
    
    
    
АННОТАЦИЯ
-------------
- В отличие от [Modernizr] - данный код дает полную свободу. Кроме этого, в отличие от Modernizr - данный код точно определяет поддержку в устаревающих мобильных браузерах. В десктопных браузерах проблема не на столько большая, так как рынок браузеров Chrome 20 и FF 22-27 очень маленький. 
- Данный код, просто определяет поддержку. Что делать дальше с полученными данными в переменной `_DD` вы решаете сами. Например вы можете загрузить CSS-файл для обеспечения поддержки старого браузера. Или вы можете добавить селектор в class элемента как это делается в Modernizr. 
- 416 байт для [detect_flex-2012_min.js], кросс браузерность, независимость от сторонних библиотек JS. 
- Я буду рад, если вы поможете мне с качественным переводом на английский и советами как уменьшить данный код. 
- Для минимизации кода используйте [UglifyJS3 online] или установленный [UglifyJS2]
    
    
    
ИНСТРУКЦИЯ
-------------
Расположите скрипт в нужное вам место документа. Рекомендую располагать скрипт после подключения главного файла стилей CSS. 
Для проверки результата выполнения скрипта вызовите глобальную переменную: 
```
_DD
  =>
    [undefined] переменная не была объявлена, скрипт не был выполнен
    [1] flex (W3C 2012) поддерживается
    [2] flex (W3C 2012) поддерживается с условием добавления вендорных префиксов для -webkit-
    [3] flex (W3C 2012) поддерживается с условием добавления вендорных префиксов для -ms-
    [4] box (W3C 2009) поддерживается с условием добавления вендорных префиксов для -webkit-
    [5] box (W3C 2009) поддерживается с условием добавления вендорных префиксов для -moz-
    [6] поддерживается display: table
    [7] поддерживается display: inline
```
    
### [detect_flex.js]
- проверяет все возможные свойства display
- записывает результат в глобальную переменную _DD (Detect Display)
- загружает файлы из папки demo, в зависимости от результата проверки. Это сделано в демонстрационных целях
    
### [detect_flex-2009.js]
- проверяет поддержку flex и box
- записывает результат в глобальную переменную _DD (Detect Display)
    
### [detect_flex-2012.js]
- проверяет поддержку только flex
- записывает результат в глобальную переменную _DD (Detect Display)
    
### [detect_flex-all.js]
- проверяет все возможные свойства display
- записывает результат в глобальную переменную _DD (Detect Display)



[Modernizr]: <https://modernizr.com>

[UglifyJS2]: <https://github.com/mishoo/UglifyJS2>
[UglifyJS3 online]: <https://skalman.github.io/UglifyJS-online/>

[detect_flex-2009.js]: <https://github.com/ergcode/ergonomic.detect_flex/blob/master/detect_flex-2009.js>
[detect_flex-2012.js]: <https://github.com/ergcode/ergonomic.detect_flex/blob/master/detect_flex-2012.js>
[detect_flex-2012_min.js]: <https://github.com/ergcode/ergonomic.detect_flex/blob/master/detect_flex-2012_min.js>
[detect_flex-all.js]: <https://github.com/ergcode/ergonomic.detect_flex/blob/master/detect_flex-all.js>
[detect_flex.js]: <https://github.com/ergcode/ergonomic.detect_flex/blob/master/detect_flex.js>
