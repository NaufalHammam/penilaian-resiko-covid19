<!DOCTYPE html>
<html>
<head>
	<title>Penanganan Covid 19</title>
</head>
<style type="text/css">
	td.no{
		text-align: center;
	}
	

</style>
<meta charset="utf-8">

	<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
	<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0">
	<!-- VENDOR CSS -->
	<link rel="stylesheet" href="assets/vendor/bootstrap/css/bootstrap.min.css">
	<link rel="stylesheet" href="assets/vendor/font-awesome/css/font-awesome.min.css">
	<link rel="stylesheet" href="assets/vendor/linearicons/style.css">
	<link rel="stylesheet" href="assets/vendor/chartist/css/chartist-custom.css">
	<!-- MAIN CSS -->
	<link rel="stylesheet" href="assets/css/main.css">
	<!-- FOR DEMO PURPOSES ONLY. You should remove this in your project -->
	<link rel="stylesheet" href="assets/css/demo.css">
	<!-- GOOGLE FONTS -->
	<link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,700" rel="stylesheet">
	<!-- ICONS -->
	<link rel="apple-touch-icon" sizes="76x76" href="assets/img/apple-icon.png">
	<link rel="icon" type="image/png" sizes="96x96" href="assets/img/logo_1.png">

	<link href="node_modules/sweetalert2/dist/sweetalert2.css">

<body>
	
<div id="bungkus_nama">
	<div id="wrapper">
		<div class="vertical-align-wrap">
			<div class="vertical-align-middle">
				<div class="auth-box ">
					<div class="left">
						<div  class="content">
							<div class="header">
								<p class="lead">Penanganan Covid 19</p>
							</div>
								<div class="form-group">
									<label for="signin-password" class="control-label sr-only">Nama</label>
									<input type="text" class="form-control" id="nama" placeholder="Masukkan nama anda" maxlength="50">
								</div>
								<div class="form-group clearfix">
								</div>
								<button type="submit" class="btn btn-primary btn-lg btn-block" onclick="mulai()">Mulai penilaian</button>
						</div>
					</div>
					<div class="right">
						<div class="overlay"></div>
						<div class="content text">
							<h1 class="heading">Penanganan COVID 19</h1>
							<p>dengan menilai keseharian</p>
						</div>
					</div>
					<div class="clearfix"></div>
				</div>
			</div>
		</div>
	</div>
</div>


<div  id="bungkus_pernyataan">
	<div class="panel">
		<div class="panel-body">
			<table class="table table-hover" id="pernyataan">
				<tbody  id="isi_pernyataan"></tbody>
			</table>
		</div>
	</div>
</div>


<div id="bungkus_hasil"></div>
</body>

<script src="jquery-3.4.1.min.js"></script>
<script src="kalkulasi.js"></script>
<script src="node_modules/sweetalert2/dist/sweetalert2.all.min.js"></script>
</html>