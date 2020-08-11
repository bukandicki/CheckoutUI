$(document).ready(function(){

	var formFields = $('.form-group');

	formFields.each(function() {
    	var field = $(this);
    	var input = field.find('input');
    	var label = field.find('label');

    function checkInput() {
		var valueLength = input.val().length;

		if (valueLength != 0) {
			label.addClass('label-small');
	    } else {
	      	label.removeClass('label-small');
	    }
    }

	input.on("change", function() {
		checkInput();
	});

  });

	$('.order-item').on('click', '.hapus-order', function (e) {
		e.preventDefault();
		swal({
		  title: "Apakah Anda Yakin?",
		  icon: "warning",
		  dangerMode: true,
		  buttons: ["Batal", "Hapus"],
		})
		.then((hapus) => {
  			if (hapus) {
  				swal("Produk kamu berhasil di hapus dari keranjang", {
			      icon: "success",
			    });
  			} else {
  			}
		});
	});

	$('.btn-voucher').click(function () {
		if ($("#voucher").val() == "ONGKIRMURAH") {
			swal({
			  title: "Berhasil",
			  text: "Yeay.. vouchernya udah di tambahin",
			  icon: "success",
			  button: "OK",
			});
		}
		else if ($("#voucher").val() == "") {
			swal({
			  text: "Kamu belum input vouchernya",
			  icon: "warning",
			  button: "OK",
			});
		}
		else {
			swal({
			  title: "Voucher Gaada",
			  icon: "error",
			  button: "OK",
			});
		}
	});

});