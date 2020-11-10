function validation(){

  var name = document.getElementById('name')
  var email = document.getElementById('email')
  var phone_no = document.getElementById('phone_no')
  var errorElement = document.getElementById('error')
  var form = document.getElementById('post-form')

  var letters = /^[A-Za-z]+$/;
  if (name.value === '' || name.value == null || name.value.match(letters))==false {
    document.getElementById('name').innerHTML = "*Please enter a valid Name (no special characters allowed)";
    return false;
  }
  var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (email.value.match(pattern) == false {
    document.getElementById('email').innerHTML = "*Please enter a valid Email id";
    return false;
  }

  if (phone_no.value.isInteger() == false || phoneno.value < 10) {
    document.getElementById('phone_no').innerHTML = "*Please enter a valid 10 digit phone number";
    return false;
  }

    $(document).on('submit', '#post-form',function(e){
        $.ajax({
            type:'POST',
            url:'{% url "create" %}',
            data:{
                name:$('#name').val(),
                email:$('#email').val(),
                phone_no:$('#phone_no').val(),
                description:$('#description').val(),
                csrfmiddlewaretoken:$('input[name=csrfmiddlewaretoken]').val(),
                action: 'post'
            },
            success:function(json){
            document.getElementById("post-form").reset();

            },
            error : function(xhr,errmsg,err) {
            console.log(xhr.status + ": " + xhr.responseText); // provide a bit more info about the error to the console

        });
    });


  }
