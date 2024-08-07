let page4 = $('#page4');

let page4content =
    "<div id='page4bloc1'>" +
    // shuffle
    "<div id='page4bloc1-shuffle' >" +
    "<img alt='shuffle' src='./assets/shuffle.gif'/>" +
    "</div>" +

    // jackpot
    "<div id='page4bloc1-jackpot' >" +
    "<span class='label-bloc1'>jackpot</span>" +
    "<div class='jackpot-container-page-4'>" +
        "<div class='countJackpot'>" +
            "<span class='numberJackpot-page-4'>" +
                "<span id='jackpot-0'>0</span>" +
                "<span id='jackpot-1'>1</span>" +
                "<span id='jackpot-2'>2</span>" +
                "<span id='jackpot-3'>3</span>" +
                "<span id='jackpot-4'>4</span>" +
                "<span id='jackpot-5'>5</span>" +
                "<span id='jackpot-6'>6</span>" +
                "<span id='jackpot-7'>7</span>" +
                "<span id='jackpot-8'>8</span>" +
                "<span id='jackpot-9'>9</span>" +
            "</span>" +
            "<span class='divider-jackpot'><span>,</span></span>" +
            "<span class='numberJackpot-page-4'>" +
                "<span>0</span>" +
                "<span>1</span>" +
                "<span>2</span>" +
                "<span>3</span>" +
                "<span>4</span>" +
                "<span>5</span>" +
                "<span>6</span>" +
                "<span>7</span>" +
                "<span>8</span>" +
                "<span>9</span>" +
            "</span>" +
            "<span class='numberJackpot-page-4'>" +
                "<span>0</span>" +
                "<span>1</span>" +
                "<span>2</span>" +
                "<span>3</span>" +
                "<span>4</span>" +
                "<span>5</span>" +
                "<span>6</span>" +
                "<span>7</span>" +
                "<span>8</span>" +
                "<span>9</span>" +
            "</span>" +
            "<span class='numberJackpot-page-4'>" +
                "<span>0</span>" +
                "<span>1</span>" +
                "<span>2</span>" +
                "<span>3</span>" +
                "<span>4</span>" +
                "<span>5</span>" +
                "<span>6</span>" +
                "<span>7</span>" +
                "<span>8</span>" +
                "<span>9</span>" +
            "</span>" +
            "<span class='divider-jackpot'><span>.</span></span>" +
        "</div>" +
        "<div class='countJackpot-2'>" +
            "<span class='numberJackpot-page-4-2'>" +
                "<span id='jackpot-0'>0</span>" +
                "<span id='jackpot-1'>1</span>" +
                "<span id='jackpot-2'>2</span>" +
                "<span id='jackpot-3'>3</span>" +
                "<span id='jackpot-4'>4</span>" +
                "<span id='jackpot-5'>5</span>" +
                "<span id='jackpot-6'>6</span>" +
                "<span id='jackpot-7'>7</span>" +
                "<span id='jackpot-8'>8</span>" +
                "<span id='jackpot-9'>9</span>" +
            "</span>" +
            "<span class='numberJackpot-page-4-2'>" +
                "<span id='jackpot-0'>0</span>" +
                "<span id='jackpot-1'>1</span>" +
                "<span id='jackpot-2'>2</span>" +
                "<span id='jackpot-3'>3</span>" +
                "<span id='jackpot-4'>4</span>" +
                "<span id='jackpot-5'>5</span>" +
                "<span id='jackpot-6'>6</span>" +
                "<span id='jackpot-7'>7</span>" +
                "<span id='jackpot-8'>8</span>" +
                "<span id='jackpot-9'>9</span>" +
            "</span>" +
        "</div>" +
    "</div>" +
    "</div>" +

    "<div id='page4bloc1-bonus-last-tirage' >" +
    "<span>Dernier tirage</span>" +
    "<div id ='page4bloc1-bonus-last-tirage-contain'>" +
    "<div class='page4bloc1-bonus-last-tirage-item'>" +
    "<span class='label'>AUGUSTIN 10</span>" +
    "<span>ID: 32232323232</span>" +
    "<span>26/02</span>" +
    "<span class=''>68000</span>" +
    "</div>" +

    "<div class='page4bloc1-bonus-last-tirage-item'>" +
    "<span class='label'>AUGUSTIN 10</span>" +
    "<span>ID: 32232323232</span>" +
    "<span>26/02</span>" +
    "<span>68000</span>" +
    "</div>" +

    "<div class='page4bloc1-bonus-last-tirage-item'>" +
    "<span class='label' >AUGUSTIN 10</span>" +
    "<span>ID: 32232323232</span>" +
    "<span>26/02</span>" +
    "<span>68000</span>" +
    "</div>" +
    "</div>" +
    "</div>" +

    "<div id='page4bloc1-logo-time' >" +
    "<div id='page4bloc1-logo-time-logo' >" +
    "<img src='./assets/logo.jpeg' alt='logo'/>" +
    "</div>" +
    "<div id='page4bloc1-logo-time-time' >" +
    "<span>Time</span>" +
    "<span id='compteur2'></span>" +
    "</div>" +
    "</div>" +
    "</div>" +

    "<div id='page4bloc2'>" +
    "</div>" +

    "<div id='page4bloc3'>" +
    "<table class='page4bloc-table' id='page4bloc3-table-1'>" +
    "<tr>" +
    "<td colspan=6>total sum in the last 5 draw</td>" +
    "</tr>" +
    "</table>" +

    "<table class='page4bloc-table' id='page4bloc3-table-2'>" +
    "<tr>" +
    "<td colspan=12>Numero le plus tiree dans les 10 derniers tirages</td>" +
    "</tr>" +
    "</table>" +
    "</div>" +

    "<div id='page4bloc4'>" +
    "<table class=' page4bloc-table' id='page4bloc4-table-1'>" +
    "<tr>" +
    "<td colspan=5>1 st color of the draw</td>" +
    "</tr>" +
    "</table>" +

    "<table class='page4bloc-table' id='page4bloc4-table-2'>" +
    "<tr>" +
    "<td colspan=13>12 derniers multiplicateurs</td>" +
    "</tr>" +
    "</table>" +
    "</div>"
    ;

//fake array 5 derniers tirages
let arrayDernierTirage = [
    {
        identifiant: '234567',
        heure: '15:45',
        arrayNumero: [12, 24, 38, 49, 50, 66, 75, 80, 79, 60, 11, 28, 16, 18, 51, 45, 17, 32, 27, 20],
        multiplicateur: '1x'
    },
    {
        identifiant: '234567',
        heure: '15:45',
        arrayNumero: [12, 24, 38, 49, 50, 66, 75, 80, 79, 60, 11, 28, 16, 18, 51, 45, 17, 32, 27, 20],
        multiplicateur: '1x'
    },
    {
        identifiant: '234567',
        heure: '15:45',
        arrayNumero: [12, 24, 38, 49, 50, 66, 75, 80, 79, 60, 11, 28, 16, 18, 51, 45, 17, 32, 27, 20],
        multiplicateur: '1x'
    },
    {
        identifiant: '234567',
        heure: '15:45',
        arrayNumero: [12, 24, 38, 49, 50, 66, 75, 80, 79, 60, 11, 28, 16, 18, 51, 45, 17, 32, 27, 20],
        multiplicateur: '1x'
    },
    {
        identifiant: '234567',
        heure: '15:45',
        arrayNumero: [12, 24, 38, 49, 50, 66, 75, 80, 79, 60, 11, 28, 16, 18, 51, 45, 17, 32, 27, 20],
        multiplicateur: '1x'
    },
];

//fake array numero les plus tirees
let arrayNumeroLesPlusTirees = [
    {
        temp: '1x',
        numero: '30',
    },
    {
        temp: '2x',
        numero: '92',
    },
    {
        temp: '3x',
        numero: '62',
    },
    {
        temp: '4x',
        numero: '43',
    },
    {
        temp: '5x',
        numero: '35',
    },
    {
        temp: '6x',
        numero: '22',
    },
    {
        temp: '7x',
        numero: '28',
    },
    {
        temp: '8x',
        numero: '36',
    },
    {
        temp: '9x',
        numero: '12',
    },
    {
        temp: '10',
        numero: '43',
    },
];

//fake array pour les multiplicateurs
let arrayDernierMultiplicateur = [
    {
        temp: '1x',
        time: '12:34',
    },
    {
        temp: '2x',
        time: '12:34',
    },
    {
        temp: '3x',
        time: '12:34',
    },
    {
        temp: '4x',
        time: '12:34',
    },
    {
        temp: '5x',
        time: '12:34',
    },
    {
        temp: '6x',
        time: '12:34',
    },
    {
        temp: '7x',
        time: '12:34',
    },
    {
        temp: '8x',
        time: '12:34',
    },
    {
        temp: '9x',
        time: '12:34',
    },
    {
        temp: '10',
        time: '12:34',
    },
    {
        temp: '10',
        time: '12:34',
    },
    {
        temp: '10',
        time: '12:34',
    },
];

//fake array pour la somme totale
let arraySommeTotale5derniersTirage = [300, 100, 100, 300, 300];

//fake array first color of draw
let arrayFistColorOfDraw = [18, 34, 56, 78, 3];

function buildLastTirage() {
    let htmlTr = "<table id='page4bloc2-table'>";
    const page4bloc2 = $('#page4bloc2');
    for (let i = 0; i < arrayDernierTirage.length; i++) {
        htmlTr +=
            "<tr>" +
            "<td>" + arrayDernierTirage[i].identifiant + "</td>" +
            "<td>" + arrayDernierTirage[i].heure + "</td>";
        //start build number
        for (let j = 0; j < arrayDernierTirage[i].arrayNumero.length; j++) {
            htmlTr += "<td><span class='page4bloc2-table-number num" + arrayDernierTirage[i].arrayNumero[j] + " '>" + arrayDernierTirage[i].arrayNumero[j] + "</span></td>";
        }
        //end build number
        htmlTr += "<td>" + arrayDernierTirage[i].multiplicateur + "</td>" +
            "</tr>"
    }
    htmlTr += "</table>";
    page4bloc2.append(htmlTr);
}

function buildNumeroLesPLusTirees() {
    //build first row
    let htmlTr = "<tr><td><span>temp</span></td>";
    const page4bloc3Table2 = $('#page4bloc3-table-2');
    for (let i = 0; i < arrayNumeroLesPlusTirees.length; i++) {
        htmlTr += "<td><span>" + arrayNumeroLesPlusTirees[i].temp + "</span></td>";
    }
    htmlTr += "</tr>";
    //end build first row

    //build second row
    htmlTr += "<tr><td><span>numero</span></td>";
    for (let i = 0; i < arrayNumeroLesPlusTirees.length; i++) {
        htmlTr += "<td><span>" + arrayNumeroLesPlusTirees[i].numero + "</span></td>";
    }
    //end build second row
    page4bloc3Table2.append(htmlTr);
}

function buildDernierMultiplicateur() {
    //build first row
    let htmlTr = "<tr><td><span>time</span></td>";
    const page4bloc4Table2 = $('#page4bloc4-table-2');
    for (let i = 0; i < arrayDernierMultiplicateur.length; i++) {
        htmlTr += "<td><span>" + arrayDernierMultiplicateur[i].time + "</span></td>";
    }
    htmlTr += "</tr>";
    //end build first row

    //build second row
    htmlTr += "<tr><td><span>multi</span></td>";
    for (let i = 0; i < arrayDernierMultiplicateur.length; i++) {
        htmlTr += "<td><span>" + arrayDernierMultiplicateur[i].temp + "</span></td>";
    }
    htmlTr += "</tr>";
    //end build second row
    page4bloc4Table2.append(htmlTr);
}

function buildSommeTotale() {
    //build first row
    let htmlTr = "<tr><td><span>total</span></td>";
    const page4bloc3Table1 = $('#page4bloc3-table-1');
    for (let i = 0; i < arraySommeTotale5derniersTirage.length; i++) {
        htmlTr += "<td>" + arraySommeTotale5derniersTirage[i] + "</td>";
    }
    htmlTr += "</tr>";
    //end build first row
    page4bloc3Table1.append(htmlTr);
}

function buildFirstColorOfDraw() {
    //build first row
    let htmlTr = "<tr>";
    const page4bloc4Table1 = $('#page4bloc4-table-1');
    for (let i = 0; i < arrayFistColorOfDraw.length; i++) {
        htmlTr += "<td><span class='page4bloc2-table-number num" + arrayFistColorOfDraw[i] + "'>" + arrayFistColorOfDraw[i] + "</span></td>";
    }
    htmlTr += "</tr>";
    //end build first row
    page4bloc4Table1.append(htmlTr);
}

let currentNumber2 = null;
let arrayJackpot2 = [
    3000.19,
    3000.25,
    3000.48,
    3000.18,
    3000.99,
    3001.60,
    3001.36,
    3001.46,
    3001.71,
    3001.97,
    3001.93,
    3002.99,
]

function animationJackpotCountNumberPartIntPage4(j, k) {
    let jackpotNumber = $(".numberJackpot-page-4").eq(k);
    let coordY = null;

    if (currentNumber2 == null) {
        coordY = -65 * j;
    } else {
        coordY = -65 * (j - currentNumber2);
        currentNumber2 = j
    }

    if (j == 0) {
        coordY = 0;
        jackpotNumber.css("transform", "translateY(" + coordY + "px)");

    } else {
        jackpotNumber.css("transform", "translateY(" + coordY + "px)");
    }
}

function animationJackpotCountNumberPartDecimalPage4(j, k) {
    let jackpotNumber = $(".numberJackpot-page-4-2").eq(k);
    let coordY = null;

    if (currentNumber2 == null) {
        coordY = -65 * j;
    } else {
        coordY = -65 * (j - currentNumber2);
        currentNumber2 = j
    }

    if (j == 0) {
        coordY = 0;
        jackpotNumber.css("transform", "translateY(" + coordY + "px)");

    } else {
        jackpotNumber.css("transform", "translateY(" + coordY + "px)");
    }
}

function setNumberInjackPotSecondPage4() {
    let i = 0;
    let setNumberInJackpotId = setInterval(
        () => {
            let item = arrayJackpot2[i].toString();
            //first number
            animationJackpotCountNumberPartIntPage4(parseInt(item[0]), 0);

            //second
            animationJackpotCountNumberPartIntPage4(parseInt(item[1]), 1);

            //third
            animationJackpotCountNumberPartIntPage4(parseInt(item[2]), 2);

            //fourth
            animationJackpotCountNumberPartIntPage4(parseInt(item[3]), 3);

            //decimal 1
            animationJackpotCountNumberPartDecimalPage4(parseInt(item[5]), 0);

            //decimal 2
            animationJackpotCountNumberPartDecimalPage4(parseInt(item[6]), 1);

            i++;
            console.log(i, arrayJackpot2.length);
            if (i == arrayJackpot2.length) {
                clearInterval(setNumberInJackpotId);
            }
        }, 100
    )
}

function setNumberInjackPotFirstPage4() {
    let item = arrayJackpot2[0].toString();
    //first number
    animationJackpotCountNumberPartIntPage4(parseInt(item[0]), 0);

    //second
    animationJackpotCountNumberPartIntPage4(parseInt(item[1]), 1);

    //third
    animationJackpotCountNumberPartIntPage4(parseInt(item[2]), 2);

    //fourth
    animationJackpotCountNumberPartIntPage4(parseInt(item[3]), 3);

    //decimal 1
    animationJackpotCountNumberPartDecimalPage4(parseInt(item[5]), 0);

    //decimal 2
    animationJackpotCountNumberPartDecimalPage4(parseInt(item[6]), 1);

}

function animateShowElement() {
    setNumberInjackPotFirstPage4();

    $('#page4bloc4-table-1').css("visibility", "visible");
    $('#page4bloc4-table-1').addClass('animated bounceInRight');

    setTimeout(
        () => {
            $('#page4bloc4-table-2').css("visibility", "visible");
            $('#page4bloc4-table-2').addClass('animated bounceInRight');

            setTimeout(
                () => {
                    $('#page4bloc3-table-1').css("visibility", "visible");
                    $('#page4bloc3-table-1').addClass('animated bounceInRight');

                    setTimeout(
                        () => {
                            $('#page4bloc3-table-2').css("visibility", "visible");
                            $('#page4bloc3-table-2').addClass('animated bounceInRight');

                            setTimeout(
                                () => {
                                    $('#page4bloc2').css("visibility", "visible");
                                    $('#page4bloc2').addClass('animated bounceInRight');

                                    setTimeout(
                                        () => {
                                            $('#page4bloc1-jackpot').css("visibility", "visible");
                                            $('#page4bloc1-jackpot').addClass('animated bounceInRight');
                                            setTimeout(
                                                () => {
                                                    setNumberInjackPotSecondPage4();
                                                }, 2500
                                            )

                                            setTimeout(
                                                () => {
                                                    $('#page4bloc1-bonus-last-tirage').css("visibility", "visible");
                                                    $('#page4bloc1-bonus-last-tirage').addClass('animated bounceInRight');

                                                    setTimeout(
                                                        () => {
                                                            $('#page4bloc1-logo-time-logo').css("visibility", "visible");
                                                            $('#page4bloc1-logo-time-logo').addClass('animated bounceInRight');

                                                            $('#page4bloc1-shuffle').css("visibility", "visible");
                                                            $('#page4bloc1-shuffle').addClass('animated bounceInRight');


                                                            setTimeout(
                                                                () => {
                                                                    $('#page4bloc1-logo-time-time').css("visibility", "visible");
                                                                    $('#page4bloc1-logo-time-time').addClass('animated bounceInRight');

                                                                    setTimeout(
                                                                        () => {
                                                                            animateTableLastTirage();
                                                                        }, 100
                                                                    )
                                                                }, 100)

                                                        }, 100)

                                                }, 100)

                                        }, 100)

                                }, 300)

                        }, 300)

                }, 100)

        }, 100)

}

function animateTableLastTirage() {
    let i = 0;
    let intervalId = setInterval(
        () => {
            $('#page4bloc2 tr').eq(i).addClass('animated pulse');
            i++;
            if (i > $('#page4bloc2 tr').length) {

                clearInterval(intervalId);
                zoomTableOther();
            }
        }, 1800
    );

    arrayInterval.push(intervalId);


}

function zoomTableOther() {
    $('#page4bloc3-table-1').removeClass('bounceInRight');
    $('#page4bloc3-table-1').addClass('pulse');

    setTimeout(
        () => {
            $('#page4bloc3-table-2').removeClass('bounceInRight');
            $('#page4bloc3-table-2').addClass('pulse');

            setTimeout(
                () => {
                    $('#page4bloc4-table-1').removeClass('bounceInRight');
                    $('#page4bloc4-table-1').addClass('pulse');

                    setTimeout(
                        () => {
                            $('#page4bloc4-table-2').removeClass('bounceInRight');
                            $('#page4bloc4-table-2').addClass('pulse');

                            setTimeout(
                                () => {
                                    hideAllTable();
                                }, 1500
                            )
                        }, 1800
                    )
                }, 1800
            )
        }, 1800
    )
}

function hideAllTable() {
    $('#page4bloc4-table-1').removeClass('bounceInRight')
    $('#page4bloc4-table-1').addClass('bounceOutRight')

    setTimeout(
        () => {
            $('#page4bloc4-table-2').removeClass('bounceInRight')
            $('#page4bloc4-table-2').addClass('bounceOutRight')

            setTimeout(
                () => {
                    $('#page4bloc3-table-1').removeClass('bounceInRight')
                    $('#page4bloc3-table-1').addClass('bounceOutRight')

                    setTimeout(
                        () => {
                            $('#page4bloc3-table-2').removeClass('bounceInRight')
                            $('#page4bloc3-table-2').addClass('bounceOutRight')

                            setTimeout(
                                () => {
                                    $('#page4bloc2').removeClass('bounceInRight')
                                    $('#page4bloc2').addClass('bounceOutRight')

                                    setTimeout(
                                        () => {
                                            $('#page4bloc1-jackpot').removeClass('bounceInRight')
                                            $('#page4bloc1-jackpot').addClass('bounceOutRight')

                                            setTimeout(
                                                () => {
                                                    $('#page4bloc1-bonus-last-tirage').removeClass('bounceInRight')
                                                    $('#page4bloc1-bonus-last-tirage').addClass('bounceOutRight')

                                                    setTimeout(
                                                        () => {
                                                            $('#page4bloc1-logo-time-logo').removeClass('bounceInRight')
                                                            $('#page4bloc1-logo-time-logo').addClass('bounceOutRight')

                                                            setTimeout(
                                                                () => {
                                                                    $('#page4bloc1-logo-time-time').removeClass('bounceInRight')
                                                                    $('#page4bloc1-logo-time-time').addClass('bounceOutRight')

                                                                    $('#page4bloc1-shuffle').removeClass('bounceInRight')
                                                                    $('#page4bloc1-shuffle').addClass('bounceOutRight')
                                                                }, 100)
                                                        }, 100)
                                                }, 100)
                                        }, 100)
                                }, 100)
                        }, 100)
                }, 100)
        }, 100)
}
