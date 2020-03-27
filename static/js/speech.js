$(document).ready(function() {
    $("#stop").css("display", "none");
});
var recognition;
//var stop = document.getElementById('stop');
//var start = document.getElementById('start');

//    stop.style.visibility = 'hidden';

var recognition = new webkitSpeechRecognition();

function startDictation() {

    recognition.continuous = true;
    recognition.interimResults = true;

    recognition.lang = "en-US";

    recognition.onresult = function(e) {
        for (var i = e.resultIndex; i < e.results.length; ++i) {
            if (e.results[i].isFinal) {
                document.getElementById('messageText').value = e.results[i][0].transcript;

                // recognition.stop();




                document.getElementById('chatbot-form-btn').click();
                // recognition.start();
            }
        }
    };
    recognition.start();

    //     la.innerText="Listening";

    $(document).ready(function() {
        $("#stop").css("display", "block");
        $("#start").css("display", "none");
    });
//    start.style.visibility = 'hidden';
//    stop.style.visibility = 'visible';


    recognition.onerror = function(e) {
        recognition.stop();

    }

}


function stopDictation() {
    //         la.innerText="Stopped Voice";
    $(document).ready(function() {
        $("#stop").css("display", "none");
        $("#start").css("display", "block");
    });
//    start.style.visibility = 'visible';
//    stop.style.visibility = 'hidden';
    recognition.stop();

}