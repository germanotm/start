
$(document).ready(function() {
    $('#submit_btn').click(function(){ 
        //get input field values
        var user_name       = $('#name').val(); 
        var user_email      = $('#email').val();
        var user_subject    = $('#subject').val();
        var user_message    = $('#message').val();
        
        var notice     = $("#notice");
        var $req_fields    = "Please fill in all the fields.";

        //simple validation at client's end
        var proceed = true;
        
        if ( notice.is(":visible") ) notice.hide();

        if ( "" == user_name || "" == user_email || "" == user_subject || "" == user_message ){

               notice.removeClass().html($req_fields).addClass("alert alert-warning alert-dismissable").fadeIn(400);
               proceed = false;

          }
        
        if(user_name==""){ 
            $('#name').css('border-color','red'); 
            proceed = false;
        }
        if(user_email==""){ 
            $('#email').css('border-color','red'); 
            proceed = false;
        }
        if(user_subject=="") {    
            $('#subject').css('border-color','red'); 
            proceed = false;
        }
        if(user_message=="") {  
            $('#message').css('border-color','red'); 
            proceed = false;
        }

        //everything looks good! proceed...
        if(proceed) 
        { 
          $.ajax({
            dataType: 'jsonp',
            url: "http://getsimpleform.com/messages/ajax?form_api_token=6374d625c51d68dd6e785459d9c1e02c",
            data: {
              name: user_name,
              from: user_email,
              subject: user_subject,
              message: user_message
            }
          }).fail(function(data) {
            notice.removeClass().html("Erro ao enviar mensagem!").addClass("alert alert-danger alert-dismissable").fadeIn(400);
            console.error(data);
          }).done(function(data) {
            //reset values in all input fields
            $('#contact_form input').val(''); 
            $('#contact_form textarea').val(''); 
            notice.removeClass().html("Mensagem enviada com sucesso!").addClass("alert alert-success alert-dismissable").fadeIn(400);
          });
            /*
            //data to be sent to server
            post_data = {'userName':user_name, 'userEmail':user_email, 'userSubject':user_subject, 'userMessage':user_message};
            
            //Ajax post data to server
            $.post('contact.php', post_data, function(response){  
                
                //load json data from server and output message     
                if(response.type == 'error')
                {
                    output = response.text;
		notice.removeClass().html(output).addClass("alert alert-warning alert-dismissable").fadeIn(400);
                }else{
                
                    output = response.text;
                    
                    //reset values in all input fields
                    $('#contact_form input').val(''); 
                    $('#contact_form textarea').val(''); 
		notice.removeClass().html(output).addClass("alert alert-success alert-dismissable").fadeIn(400);
                }
                
            }, 'json');
           */ 
        }
    });
    
    //reset previously set border colors and hide all message on .keyup()
    $("#contact_form input, #contact_form textarea").keyup(function() { 
        $("#contact_form input, #contact_form textarea").css('border-color',''); 
    });

    function sendMail(){
      
}
    
});
