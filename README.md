# Paginator

### Основные моменты при работе с пагинатором
БД:
- количество строк возвращаем с помощью параметра `SQL_CALC_FOUND_ROWS` и функции `FOUND_ROWS()`

PHP:
- представлен статичным классом, который принимает 3 значения (`$limit, $pagenumber, $countpage`), осуществляет необходимые проверки и выдаёт 2 массива(`$arrayLink = [], $arrayDelimiter = []`) с числами для ссылок и разделителями

HTML, CSS:
- разметка страницы со вставками php-кода

JavaScript:
- для подстветки текущей страницы и переключения страниц


###Принцип работы пагинатора:

1. _Передаём значения для БД количество выводимых товаров_ `$limit` 
_и номер страницы_ `$pagenumber` _по умолчанию равный единице_

		Paginator::$limit = 8;
	
		Paginator::setPagenumber($_GET['pagenumber'] = $_GET['pagenumber'] ?? 1);

2. _Выполняем запрос для вывода товаров_

		$res = q(" 
			SELECT SQL_CALC_FOUND_ROWS * FROM goods
		 	LIMIT ".Paginator::$limit." OFFSET ".Paginator::getOffset()." 
		 	");

	_где q – это оболочка для PHP-функций по работе с MySQL_
	
3. _Результат запроса передаём в класс для определения количества выводимых  страниц, а также вывода номеров для ссылок и разделителя_

		Paginator::setCountpage(q("SELECT FOUND_ROWS()"));

4. Вывод ссылок осуществляем перебором массива `$arrayLink` (см. paginator.html), с помощью js управляем подсветкой текущей страницы и ссылками для переключения страниц
5. Получаем следующий рабочий вид пагинатора:

![Интерфейс пагинатора]( view-paginator.png "Интерфейс пагинатора")
