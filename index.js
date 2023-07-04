$(function () {
     let cod;

     $(".res").click(function () {
          let world = $(".davlat").val()
          let harf_1 = $(".harf1").val()
          let raqam1 = $(".raqam").val()
          let harf_3 = $(".harf2").val()

          if (world == "sam") {
               cod = "30"
          }
          else if (world == "tosh") {
               cod = "01"
          }
          else if (world == "jizz") {
               cod = "25"
          }
          else if (world == "bux") {
               cod = "80"
          }
          else if (world == "xor") {
               cod = "90"
          }
          else if (world == "and") {
               cod = "60"
          }
          else if (world == "sur") {
               cod = "75"
          }
          else if (world == "qash") {
               cod = "70"
          }
          else if (world == "nov") {
               cod = "85"
          }
          else if (world == "qor") {
               cod = "95"
          }

          $(".tablo .a").html(cod)
          $(".tablo .b").html(harf_1)
          $(".tablo .c").html(raqam1)
          $(".tablo .d").html(harf_3)

          // *******
          // User qismi boshlandi
          let users = $(".user").val()

          if (users == "y") {
               $(".c").html("")
               $(".b").html(raqam1)
               $(".d").html(harf_1 + harf_3)
          }
          $(".tablo2").css(
               "display", "flex",
          )
          // let harf_1 = $(".harf1").val()
          // let raqam1 = $(".raqam").val()
          // let harf_3 = $(".harf2").val()
         


          event.preventDefault()
     })
})