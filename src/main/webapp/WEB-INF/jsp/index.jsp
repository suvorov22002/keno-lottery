<%@ page language="java" contentType="text/html; charset=UTF-8"
         pageEncoding="ISO-8859-1"%>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Lottery number front end</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.2/animate.min.css">
    <link rel="stylesheet" href="${contextPath}/css/anime.css">
    <link rel="stylesheet" href="${contextPath}/css/normalize.css" />
    <link rel="stylesheet" href="${contextPath}/css/main.css" />
    <script src="${contextPath}/js/sockjs-0.3.4.js"></script>
    <script src="${contextPath}/js/stomp.js"></script>
    <script src="${contextPath}/js/utilities.js"></script>
    <script type="text/javascript">

        let timekeno;
        const coderace = "${partner}";
        const room = "${room}";
        const game = "${game}";
        const UrlService = "${UrlService}";
        console.log("UrlService: " + UrlService);

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


    <script src="${contextPath}/js/vendor/jquery-3.4.1.min.js"></script>
    <script type="text/javascript">

        let arrayNumroSortant = [];
        let outputNumber = [];
        let trouve_draw = false;
        let tirage = 0;
        let blackout_draw;
        let numero_tirage = 0;
        let _numero_tirage = 0;
        let draw_5 = [];
        let draw_4 = [];
        let draw_3 = [];
        let draw_2 = [];
        let draw_1 = [];
        let bonus_3 = [];
        let bonus_2 = [];
        let bonus_1 = [];
        let arrayDernierTirage = [];
        let arrayDernierMultiplicateur = [];
        let arrayNumeroLesPlusTirees = [];
        let arrayNumeroLesMoinsTirees = [];
        let arrayLastBonus = [];
        let multiplicateur;
        let arraySommeTotale5derniersTirage = [];
        let arrayLastMultiplicateur = [];
        let arrayFistColorOfDraw = [18, 34, 56, 78, 3];
        let arrayJackpot2 = []
        let gamestate;
        let str_combi;
        let isJoin = false;
        let urlServeur;

        function restoreDatas(){

            var url = UrlService + `/events/game/${game}/partner/${partner}/room/${room}`;
            url = UrlService + `/events/game/previous`;

            $.ajax({
                url: url,
                method: 'GET',
                async: false,
                data:{
                    'game':game,
                    'room':room,
                    'partner':coderace
                },
                success: function (data) {
                    console.log("RESULT",data); // Handle the data from the response

                    var _data = data.slice(0, 5);
                    retrieveMultiplicateur(data);
                    retrieveSumOdd(data);

                    var donne;

                    $.each(_data, function(index, value){

                        donne = {
                            identifiant: value.numeroTirage,
                            heure: new Date(value.heureTirage).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
                            arrayNumero: value.tirage.split("-"),
                            multiplicateur: value.multiplicateur +'x'
                        }

                        arrayDernierTirage.push(donne);
                    });
                },
                error: function (jqXHR, textStatus, errorThrown) {
                    console.error('There was a problem with the request:', textStatus, errorThrown);
                }
            });

        }
        restoreDatas();


    </script>
    <script src="${contextPath}/js/vendor/move.min.js"></script>
    <script src="${contextPath}/js/vendor/zepto.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.2.0/gsap.min.js"></script>
    <script src="${contextPath}/js/page1.js"></script>
    <script src="${contextPath}/js/page2.js"></script>
    <script src="${contextPath}/js/page3.js"></script>
    <script src="${contextPath}/js/page4.js"></script>
    <script src="${contextPath}/js/scheduler.js"></script>
</body>

</html>