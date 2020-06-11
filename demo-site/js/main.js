// Blur Effect
(function () {
    $('.modal').on('show.bs.modal', function (e) {
        $('body').addClass('modalBlur');
        $('body').removeClass('animated fadeIn');
    })

    $('.modal').on('hide.bs.modal', function (e) {
        setTimeout(() => {
            $('body').removeClass('modalBlur');
        }, 400)
        $('body').addClass('animated fadeIn');
    })

    $('#about-fullscreen').on('shown.bs.modal', function (e) {
        $('.owl-carousel').addClass('animated fadeIn slow');
    })
})();
if ($('#contact-form').length) {
    $('#contact-form').each(function(){
        $(this).validate({
            errorClass: 'error wobble-error',
            submitHandler: function(form){
                $.ajax({
                    type: "POST",
                    url:"./includes/mail.php",
                    data: $(form).serialize(),
                    success: function() {
                        console.log("Success");
                        document.querySelector(".alert-success").style.display="block";
                    },
                    error: function(){
                        document.querySelector(".alert-danger").style.display="block";
                        console.log("Fail");
                    }
                });
            }
        });
    });
}
  