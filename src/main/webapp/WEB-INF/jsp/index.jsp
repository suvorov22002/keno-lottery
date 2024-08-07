<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Lottery number front end</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.2/animate.min.css">
    <link rel="stylesheet" href="../css/normalize.css" />
    <link rel="stylesheet" href="../css/main.css" />
    <script src="../js/sockjs-0.3.4.js"></script>
    <script src="../js/stomp.js"></script>
    <script type="text/javascript">

        let timeStart;
        var stompClient = null;

        function connect() {

            console.log('Connected Through WebSocket');

            var socket = new SockJS('http://localhost:8180/drawnum');
            stompClient = Stomp.over(socket);

            stompClient.connect({}, function(frame) {

                console.log('Connected: ' + frame);

                stompClient.subscribe('/topic/messages', function(messageOutput) {

                    showMessageOutput(JSON.parse(messageOutput.body));
                });

            });
        }
        connect();

        function disconnect() {

            if(stompClient != null) {
                stompClient.disconnect();
            }

            setConnected(false);
            console.log("Disconnected");
        }

        function sendMessage(state) {

            //var from = document.getElementById('from').value;
            //var text = document.getElementById('text').value;
            stompClient.send("/app/drawnum", {}, JSON.stringify({'partner':"", 'room':"text", 'gameState':state}));
        }

        function showMessageOutput(messageOutput) {

            var response = JSON.stringify(messageOutput);
            var p = document.createElement('p');
            timeStart = messageOutput.drawnum;
            console.log("DRAWNUM",timeStart);
        }

    </script>
</head>

<body>

    <!-- Start Page 1-->
    <div id="page1"></div>
    <!-- End Page 1 -->

    <!-- Start Page 2-->
    <div id="page2"></div>
    <!-- End Page 2-->

    <!-- Start Page 3-->
    <div id="page3"></div>
    <!-- End Page 3-->

    <!-- Start Page 4-->
    <div id="page4"></div>
    <!-- End Page 4-->


<script src="../js/vendor/jquery-3.4.1.min.js"></script>
<script src="../js/vendor/move.min.js"></script>
<script src="../js/vendor/zepto.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.2.0/gsap.min.js"></script>
<script src="../js/page1.js"></script>
<script src="../js/page2.js"></script>
<script src="../js/page3.js"></script>
<script src="../js/page4.js"></script>
<script src="../js/scheduler.js"></script>
</body>

</html>