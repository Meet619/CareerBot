$(function() {
            $('#chatbot-form-btn').click(function(e) {
                e.preventDefault();
                $('#chatbot-form').submit();
            });

            $('#chatbot-form').submit(function(e) {
                e.preventDefault();
                var bot_name= ""
                var message = $('#messageText').val();
                if(message!=""){
                $("#data").append('<tr><td></td><td><div class="content bot"> ' + message + '</td><td valign="top"><img src="./static/assets/user.png" width="50px" height="50px" style="border-radius: 50px;"></td></tr>');
                $.ajax({
                    type: "POST",
                    url: "/ask",
                    data: $(this).serialize(),
                    success: function(response) {

                        $('#messageText').val('');

                        var answer = response.answer;
                           speak(answer );

//                        var chatPanel = document.getElementById("chatPanel");

                        $("#data").append('<tr><td valign="top"><img src="./static/assets/robo1.png" width="50px" height="50px" style="border-radius: 50px;"></td><td><div class="content user"> ' + bot_name.concat(answer) + ' </div></td><td></td></tr>');

                        DivElmnt = document.getElementsByClassName('render')[0];
//                        console.log(DivElmnt);
                        DivElmnt.scrollTop=DivElmnt.scrollHeight;
                    },
                    error: function(error) {
                         console.log(JSON.stringify(error));
                    }
                });

}

// say a message
function speak(text, callback) {
    var u = new SpeechSynthesisUtterance();
    u.text = text;
    u.lang = 'en-US';

    u.onend = function () {
        if (callback) {
            callback();
        }
    };

    u.onerror = function (e) {
        if (callback) {
            callback(e);
        }
    };

    speechSynthesis.speak(u);
}



            });
        });
