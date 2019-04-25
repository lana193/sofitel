<?php
	$page_title = "Прованс | Sofitel";
	include ("header.html");
?>

<?php
$card_data=array("price"=>"35","Size"=>"37","name"=>"Provance");
?>

<?php
	echo $card_data["price"];
?>
		
		<!--PRODUCT CARD-->
		<section>
			<div class="container" id="product_card">
				<div class="product_card">
					<div class="card">
						<h2>Диван Прованс</h2>
						<div class="slider">
							<div class="slider_arrow prev_arrow">
							<button id="show_previous"> < </button>
						</div>
						<div class="current_img">
							<img src="" id="slide_image" alt="Provence" class="card_image">
						</div>
						<div class="slider_arrow next_arrow">
							<button id="show_next"> > </button>
						</div>
						</div>
						<div classs = "product_images">
						<table class = "image_table">
							<tr>
								<td><img src="images/provence1.jpg" alt="Provence" class="table_image"></td>
								<td><img src="images/provence_side_view.png" alt="Provence" class="table_image"></td>
								<td><img src="images/provence_full_size.png" alt="Provence" class="table_image"></td>
								<td><img src="images/provence1.jpg" alt="Provence" class="table_image"></td>
							</tr>
						</table>
						</div>
						<div class = "card_table">
							<table = class = "product_table">
								<div class = "table_header">
									<h3>Опис товару</h3>
								</div>
								<tr>
									<th rowspan="3">Розміри:</th>
									<td><span class = "table_subheader">Довжина </span> – 35</td>
								</tr>
								<tr>
									<td><span class="table_subheader">Ширина</span> – 35</td>
								</tr>
									<tr>
									<td><span class="table_subheader">Розмір спального місця</span> – 35</td>
								</tr>

								<tr>
									<th rowspan="3">Характеристики:</th>
									<td><span class="table_subheader">Механізм трансформації</span> – євро-книжка</td>
								</tr>
								<tr>
									<td><span class="table_subheader">Каркас</span> – натуральне дерево(сосна), ДСП, ДВП</span></td>
								</tr>
								<tr>
									<td><span class="table_subheader">Наповнення</span> – пружинний блок, букові ламелі, пінополіуретан, термовойлок, синтепон, холофайбер</td>
								</tr>
								<tr>
									<th>Комплектація:</th>
									<td>ніша для білизни, подушки, тканина на вибір</td>
								</tr>
							</table>
						</div>
					</div> <!-- <div class="card"> -->
				</div> <!-- <div class="product_card"> -->
			</div>
		</section>
		<!--/PRODUCT CARD-->

<?php
	include ("footer.html");
?>
