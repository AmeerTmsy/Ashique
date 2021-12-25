$(document).ready(function () {
  $.validator.setDefaults({
    highlight: function(element) {
      $(element)
      .closest('.form-control')
      .addClass('has-error')
      .addClass('error');
    },
    unhighlight: function(element) {
      $(element)
      .closest('.form-control')
      .ermoveClass('has-error')
      .removeClass('error');
    }
  });

  $("#messageForm").validate({
      rules:{
        name: {
            required: true,
            minlength:4,
            maxlength:15
        },
        email: {
            required: true,
            email:true
        },
        place:{
          required:true,
          minlength:4,
          maxlength:20
        },
        mobile:{
          required:true,
          number:true,
          minlength:10,
          maxlength:10
        },
        message:{
          required:true,
          minlength: 15
        }
      },
  });
});
