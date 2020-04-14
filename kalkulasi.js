	$("#bungkus_pernyataan").hide();
	$("#bungkus_hasil").hide();

	var jenis_isi = ['POTENSI TERTULAR DI LUAR RUMAH :', 'POTENSI TERTULAR DI DALAM RUMAH :', 'DAYA TAHAN TUBUH (IMUNITAS) :'];
	var isi_data_1 = ['Saya pergi keluar rumah', 'Saya menggunakan transportasi umum: online, angkot, bus, taksi, kereta api', 'Saya tidak memakai masker pada saat berkumpul dengan orang lain', 'Saya berjabat tangan dengan orang lain', 'Saya tidak membersihkan tangan dengan hand sanitizer / tissue basah sebelum pegang kemudi mobil / motor', 'Saya menyentuh benda / uang yang juga disentuh orang lain', 'Saya tidak menjaga jarak 1,5 meter dengan orang lain ketika : belanja, bekerja, belajar, ibadah', 'Saya makan diluar rumah (warung / restaurant)', 'Saya tidak minum hangat & cuci tangan dengan sabun setelah tiba di tujuan', 'Saya berada di wilayah kelurahan tempat pasien tertular' ];
	var isi_data_2 = ['Saya tidak pasang hand sanitizer di depan pintu masuk, untuk bersihkan tangan sebelum pegang gagang (handle) pintu masuk rumah', 'Saya tidak mencuci tangan dengan sabun setelah tiba dirumah', 'Saya tidak menyediakan : tissue basah / antiseptic, masker, sabun antiseptic bagi keluarga di rumah', 'Saya tidak segera merendam baju & celana bekas pakai di luar rumah kedalam air panas / sabun', 'Saya tidak segera mandi keramas setelah saya tiba di rumah', 'Saya tidak mensosialisasikan check list penilaian resiko pribadi ini kepada keluarga di rumah'];
	var isi_data_3 = ['Saya dalam sehari tidak kena cahaya matahari minimal 15 menit', 'Saya tidak jalan kaki / berolah raga minimal 30 menit setiap hari', 'Saya jarang minum vitamin C & E, dan kurang tidur', 'Usia saya diatas 60 tahun', 'Saya mempunyai penyakit : jantung / diabetes / gangguan pernafasan kronik'];
	

	function mulai() {

		var inputan = $("#nama");
		var isi_inputan = inputan[0];
		nama_inputan = isi_inputan['value'];
		if(nama_inputan == '' || nama_inputan.length < 8){
			Swal.fire('Perhatian', 'Nama harus diisi dan tidak kurang dari 8', 'error');
		}else{
			//console.log(nama_inputan);
			
			$("#bungkus_nama").fadeOut("slow");
			$("#bungkus_pernyataan").fadeIn("slow");
			pernyataan();
		}
			
	}


	function pernyataan() {
		var data_pernyataan = $("#isi_pernyataan");
		data_pernyataan.html("");

		//data
		
		//console.log(isi_data_1.length - 1);
		var nomor = 1;

		//awal loop
		data_pernyataan.append("</br>");
		data_pernyataan.append("<div class='panel-heading'><h3 class='panel-title'><b>Penilaian keseharian</b></h3></div>");
		var pernyataan_jenis1 = $("<tr>");
		pernyataan_jenis1.html("<td  width='50px'><b>A</b></td><td colspan='3'><b>"+jenis_isi[0]+"</b></td>");
		data_pernyataan.append(pernyataan_jenis1);
		for (var i = 0; i < isi_data_1.length; i++) {
			//console.log(isi_data_1[i]);
			
			var pernyataan_baru = $("<tr>");
			pernyataan_baru.html("<td >"+nomor+"</td><td>"+isi_data_1[i]+"</td><td><input type='radio' name='test"+nomor+"' id='test"+nomor+"' value='yes'>Yes</td><td><input type='radio' name='test"+nomor+"' value='no'>No</td>")
			var data_pernyataan = $("#isi_pernyataan");

			data_pernyataan.append(pernyataan_baru);
			nomor++;
		};

		data_pernyataan.append("</br>");
		var pernyataan_jenis2 = $("<tr>");
		pernyataan_jenis2.html("<td  width='50px'><b>B</b></td><td colspan='3'><b>"+jenis_isi[1]+"</b></td>");
		data_pernyataan.append(pernyataan_jenis2);
		for (var i = 0; i < isi_data_2.length; i++) {
			//console.log(isi_data_1[i]);
			
			var pernyataan_baru = $("<tr>");
			pernyataan_baru.html("<td >"+nomor+"</td><td>"+isi_data_2[i]+"</td><td><input type='radio' name='test"+nomor+"' value='yes'>Yes</td><td><input type='radio' name='test"+nomor+"' value='no'>No</td>")
			var data_pernyataan = $("#isi_pernyataan");

			data_pernyataan.append(pernyataan_baru);
			nomor++;
		};

		data_pernyataan.append("</br>");
		var pernyataan_jenis3 = $("<tr>");
		pernyataan_jenis3.html("<td  width='50px'><b>C</b></td><td colspan='3'><b>"+jenis_isi[2]+"</b></td>");
		data_pernyataan.append(pernyataan_jenis3);
		for (var i = 0; i < isi_data_3.length; i++) {
			//console.log(isi_data_1[i]);
			
			var pernyataan_baru = $("<tr>");
			pernyataan_baru.html("<td >"+nomor+"</td><td>"+isi_data_2[i]+"</td><td><input type='radio' name='test"+nomor+"' value='yes'>Yes</td><td><input type='radio' name='test"+nomor+"' value='no'>No</td>")
			var data_pernyataan = $("#isi_pernyataan");

			data_pernyataan.append(pernyataan_baru);
			nomor++;
		};

		data_pernyataan.append("</br>");
		var kirim_data = $("<tr>");
		kirim_data.html("<td colspan='4'><button type='submit' class='btn btn-primary btn-lg btn-block' onclick='kirim()'>Kirim data</button></td>");
		data_pernyataan.append(kirim_data);
		//akhir loop
	}



	function kirim() {
		var yes = 0;
		var no = 0;
		var status_resiko = "";

		var jumlah_isi_data = isi_data_1.length + isi_data_2.length + isi_data_3.length;
		//console.log(jumlah_isi_data);
		for (var i = 1; i <= jumlah_isi_data; i++) {

			var bungkus_nama_pernyataan = document.getElementsByName("test"+i);
			var nama_pernyataan0 = bungkus_nama_pernyataan[0];
			var nama_pernyataan1 = bungkus_nama_pernyataan[1];
			var check_hasil0 = nama_pernyataan0['checked'];  
			var check_hasil1 = nama_pernyataan1['checked'];
			if(check_hasil0 == true){
				yes += 1;
			}else if (check_hasil1 == true) {
				no += 1;
			}
			
		}
		//console.log(yes);
		//console.log(no);
		var total = yes + no;

		if(total !== jumlah_isi_data){
			Swal.fire('Perhatian', 'Data harus lengkap', 'error');
		}else{
			Swal.fire({
			  title: 'Berhasil!',
			  text: 'Data anda berhasil dibuat',
			  imageUrl: 'assets/img/gambar-covid-19.png',
			  imageWidth: 500,
			  imageHeight: 200,
			  imageAlt: 'Custom image',
			})
			 
			if(yes <= 7){
				var status_resiko = 'rendah';
				
			}else if (yes <= 14) {
				var status_resiko = 'sedang';
				
			}else {
				var status_resiko = 'tinggi';
				
			}
			var isi_bungkus_hasil = $("#bungkus_hasil");
			isi_bungkus_hasil.html("");
			isi_bungkus_hasil.append("<div id='wrapper'><div class='vertical-align-wrap'><div class='vertical-align-middle'><div class='auth-box '><div class='left'><div class='content'><div class='header'><p class='lead'>Hasil penilaian Covid 19</p></div><div class='panel'><div class='panel-body'><table class='table table-condensed'><tbody id='isi_hasil'></tbody></table></div></div><div class='form-group clearfix'></div><button type='submit' class='btn btn-primary btn-lg btn-block' onclick='kembali()'>Kembali ke penilaian</button></div></div><div class='right'><div class='overlay'></div><div class='content text'><h1 class='heading'>Hasil penanganan COVID 19</h1><p>ada 3 tingkatan : rendah, sedang, dan tinggi</p></div></div><div class='clearfix'></div></div></div></div></div>	")
		    var isi_hasil = $("#isi_hasil");

		    var isi_hasil_lanjutan1 = $("<tr>");
		    isi_hasil_lanjutan1.html("<td >"+nama_inputan+"</td>");
		    isi_hasil.append(isi_hasil_lanjutan1);
		    
		    var isi_hasil_lanjutan2 = $("<tr>")
		    isi_hasil_lanjutan2.html("<td >Resiko anda <b>"+status_resiko+"</b></td>");
		    isi_hasil.append(isi_hasil_lanjutan2);

		    var isi_hasil_lanjutan3 = $("<tr>")
		    isi_hasil_lanjutan3.html("<td></td>");
		    isi_hasil.append(isi_hasil_lanjutan3);
		    
		    
		    
		   
		    $.ajax({
		    	type : "POST",
                data : "nama="+nama_inputan+"&yes="+yes+"&no="+no+"&resiko="+status_resiko,
                url : 'input.php',
                success: function(result){

                }
		    });


			$("#bungkus_pernyataan").fadeOut("slow");
			$("#bungkus_hasil").fadeIn("slow");
		}

	}


	function kembali() {

		document.getElementById('nama').value = "";

		$("#bungkus_hasil").fadeOut("slow");
		$("#bungkus_nama").fadeIn("slow");
	}
	