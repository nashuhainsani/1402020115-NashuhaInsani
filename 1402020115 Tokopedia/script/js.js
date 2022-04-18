function on() {
  var menunBar = document.getElementById("menuBar");

  var overlay = document.getElementById("overlay");

  menunBar.classList.toggle("menuBarStyle");
  overlay.classList.toggle("overlayStyle");
}

$(document).ready(function(){
  valSelectNominal = $('#nominalSelect').val();
  valSelectPaket = $('#paketSelect').val();
  $("#pulsa").click(function(){
    $("#nominalSelect").show();
    $("#paketSelect").hide();
  });

  $("#paketData"). click(function(){
    $('#paketSelect').prop("hidden", false);
    $("#paketSelect").show();
    $("#nominalSelect").hide();
    $("#beliPaketButton").prop("hidden", false);
    $("#beliPaketButton").show();
    $("#beliPulsaButton").hide();
  });

  $('#nominalSelect').val("0");
  $('#nominalSelect').change(function () {
    if (valSelectNominal == 0) {
      $('#beliPulsaButton').prop("disabled", true);
    }
    else {
      $('#beliPulsaButton').prop("disabled", false);
      $('#beliPulsaButton').css("background-color", "#ed7a21");
      $('#beliPulsaButton').css("color", "#fff");
    }
  })
  
  $('#paketSelect').val("0");
  $('#paketSelect').change(function () {
    if (valSelectNominal == 0) {
      $('#beliPaketButton').prop("disabled", true);
    }
    else {
      $('#beliPaketButton').prop("disabled", false);
      $('#beliPaketButton').css("background-color", "#ed7a21");
      $('#beliPaketButton').css("color", "#fff");
    }
  })

  $(document).ready(function () {
    $('#noTelp').change(function () {
      if (noTelp = null) {
         $('#nominalSelect').prop("disabled", true);
         $('#paketSelect').prop("disabled", true);
      }
      else {
        $('#nominalSelect').prop("disabled", false);
        $('#paketSelect').prop("disabled", false);
      }
    })
  });

  $("#beliPulsaButton").click(function(){
    /*if ($('#nominalSelect').prop("hidden", false) && valSelectNominal != 0){*/
      var nominalPulsa = document.getElementById("nominalSelect").value;
      var nominalPulsaFix = Number (nominalPulsa);
      var feePulsa;
      var nomorTelp = $("#noTelp").val();
      var confirmPulsa = confirm("pembelian Pulsa sebesar " + nominalPulsaFix + ".000 ke nomor " + nomorTelp);

      if(confirmPulsa){
          if(nominalPulsaFix < 10) {
              feePulsa = nominalPulsaFix + 3;
          } else if (nominalPulsaFix >= 10) {
              feePulsa = nominalPulsaFix + 2;
          }
          alert( "Total harga pulsa Rp."+ feePulsa + ".000,- ke nomor " + nomorTelp + " sedang di proses. Terima Kasih :)");
      }
  });
  
  $("#beliPaketButton").click(function(){
    /*if ($('#paketSelect').prop("hidden", false) && valSelectPaket != 0){*/
      var paketSelectedTxt = $('#paketSelect option:selected').text();
      var paketSelected = document.getElementById("paketSelect").value;
      var convertPaket = Number (paketSelected);
      var nomorTelp = $("#noTelp").val();
      var confirmPaket = confirm("Pembelian paket data " + paketSelectedTxt + " ke nomor " +  nomorTelp);

      if (confirmPaket) {
        if (convertPaket == 1) {
          alert( "Total harga paket data Rp. 30.500,- ke nomor " + nomorTelp + " sedang di proses. Terima Kasih :)")
        } else if (convertPaket == 2) {
          alert( "Total harga paket data Rp. 43.000,- ke nomor " + nomorTelp + " sedang di proses. Terima Kasih :)")
        } else if (convertPaket == 3) {
          alert( "Total harga paket data Rp. 20.000,- ke nomor " + nomorTelp + " sedang di proses. Terima Kasih :)")
        } else if (convertPaket == 4) {
          alert( "Total harga paket data Rp. 70.000,- ke nomor " + nomorTelp + " sedang di proses. Terima Kasih :)")
        }
      }
    });
});

const selectToBuy = $(".item-menu");
let index = 0;
$("document").ready(function () {
  for (let i = 0; i < selectToBuy.length; i++) {
    selectToBuy.eq(i).click(function () {
      if (index != i) {
        selectToBuy.eq(i).addClass("item-bot");
        selectToBuy.eq(index).removeClass("item-bot");
        index = i;
      } else {
        selectToBuy.eq(i).addClass("item-bot");
      }
    });
  }
});