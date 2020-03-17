<?php

/* Создадим шаблон для адреса ссылок */
$link = $_GET['route'].'?pagenumber=';

/* Выводим пагинатор только в случае если он содержит больше одной страницы */
if(Paginator::getCountpage() > 1) { ?>

	<!-- Выводим переключатель и первую страницу -->
	<a class="container-i down" href="/<?php echo $link.(Paginator::$pagenumber - 1); ?>"><i class="fas fa-angle-left"></i></a>
	<a class="first-link" href="/<?php echo $_GET['route']; ?>">1</a>

	<?php if(isset(Paginator::$arrayDelimiter['delimiter1'])) { ?>

		<!-- Выводим первый разделитель -->
		<div class="delimiter">...</div>

	<?php }

	foreach(Paginator::$arrayLink as $key => $value) {

		if($value == true) { ?>

			<!-- Выводим ссылки -->
			<a href="/<?php echo $link.$value; ?>"><?php echo $value; ?></a>

	<?php }

	}

	if(isset(Paginator::$arrayDelimiter['delimiter2'])) { ?>

		<!-- Выводим второй разделитель -->
		<div class="delimiter">...</div>

	<?php } ?>

	<!-- Выводим последнюю страницу и переключатель -->
	<a class="last-link" href="/<?php echo $link.Paginator::getCountpage(); ?>"><?php echo Paginator::getCountpage(); ?></a>
	<a class="container-i up" href="/<?php echo $link.(Paginator::$pagenumber + 1); ?>"><i class="fas fa-angle-right"></i></a>

<?php

}

?>

<!-- Передаём данные для JS -->

<script>

	let firstLink;
	let lastLink;
	<?php

	if($_GET['pagenumber'] == 1) {
		echo 'firstLink = true';
	}  elseif($_GET['pagenumber'] == Paginator::getCountpage()) {
		echo 'lastLink = true';
	}

	?>

</script>







