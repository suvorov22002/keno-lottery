let page3 = $('#page3');
let page3content =
    "<div id ='page3-output-winnner-container'>" +
    "<div id='page3-output-winnner-1'>" +
    "<div class='number-output-item zoom'>" +
    "</div>" +
    "<div class='number-output-item zoom'>" +
    "</div>" +
    "<div class='number-output-item zoom'>" +
    "</div>" +
    "<div class='number-output-item zoom'>" +
    "</div>" +
    "<div class='number-output-item zoom'>" +
    "</div>" +
    "<div class='number-output-item zoom'>" +
    "</div>" +
    "<div class='number-output-item zoom'>" +
    "</div>" +
    "<div class='number-output-item zoom'>" +
    "</div>" +
    "<div class='number-output-item zoom'>" +
    "</div>" +
    "<div class='number-output-item zoom'>" +
    "</div>" +
    "</div>" +
    "<div id='page3-output-winnner-2'>" +
    "<div class='number-output-item zoom'>" +
    "</div>" +
    "<div class='number-output-item zoom'>" +
    "</div>" +
    "<div class='number-output-item zoom'>" +
    "</div>" +
    "<div class='number-output-item zoom'>" +
    "</div>" +
    "<div class='number-output-item zoom'>" +
    "</div>" +
    "<div class='number-output-item zoom'>" +
    "</div>" +
    "<div class='number-output-item zoom'>" +
    "</div>" +
    "<div class='number-output-item zoom'>" +
    "</div>" +
    "<div class='number-output-item zoom'>" +
    "</div>" +
    "<div class='number-output-item zoom'>" +
    "</div>" +
    "</div>" +
    "</div>" +


    "<div id='page3-logo'>" +
    "<div class='logo-container'><img src='./assets/logo.jpeg' alt='logo'/></div>" +
    "</div>" +


    "<div id='page3-jackpot-tirage'>" +
    "<div id='page3-jackpot'>" +
    "<span class='label label-bloc1'>jackpot</span>" +
    "<div class='jackpot-container-page-3'>" +
        "<div class='countJackpot'>" +
            "<span class='numberJackpot-page-3'>" +
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
            "<span class='divider-jackpotPage2'><span>,</span></span>" +
            "<span class='numberJackpot-page-3'>" +
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
            "<span class='numberJackpot-page-3'>" +
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
            "<span class='numberJackpot-page-3'>" +
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
            "<span class='divider-jackpotPage2'><span>.</span></span>" +
        "</div>" +
        "<div class='countJackpot-2'>" +
            "<span class='numberJackpot-page-3-2'>" +
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
            "<span class='numberJackpot-page-3-2'>" +
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
    "<div id='page3-tirage'>" +
    "<div class='page3-tirage-item'>" +
    "<span class='label label-bloc1'>tirage</span>" +
    "<span class='value'>32323</span>" +
    "</div>" +

    "<div class='page3-tirage-item'>" +
    "<span class='label label-bloc1'>M</span>" +
    "<span class='value'>-</span>" +
    "</div>" +
    "</div>" +
    "</div>";

let outputNumber = [12, 24, 38, 49, 50, 66, 75, 80, 79, 60, 11, 28, 16, 18, 51, 45, 17, 32, 27, 20]

function setOutputNumber() {
    //set number in first row
    let page3OutputWinnner1 = $('#page3-output-winnner-1');
    let children1 = page3OutputWinnner1.children()
    for (let i = 0; i < children1.length; i++) {
        let currentChildren1 = children1.eq(i);
        currentChildren1.append("<span class='numOutput num" + outputNumber[i] + "'>" + outputNumber[i] + "</span>");
    }

    //set number in second row
    let page3OutputWinnner2 = $('#page3-output-winnner-2');
    let children2 = page3OutputWinnner2.children()
    for (let i = 0; i < children2.length; i++) {
        let currentChildren2 = children2.eq(i);
        currentChildren2.append("<span class='numOutput num" + outputNumber[i + 10] + "'>" + outputNumber[i + 10] + "</span>");
    }
    updateColor();
}

//2
function animationJackPot() {
    setNumberInjackPotFirstPage3();
    $('#page3-jackpot-tirage').css('visibility', 'visible');
    $('#page3-jackpot-tirage').children().addClass('animated bounceInUp');

    setTimeout(
        () => {
            setNumberInjackPotSecondPage3();
        }, 2500
    )

    setTimeout(
        () => {
            animationLogo();
        }, 2000
    )


}

//3
function animationLogo() {
    $('#page3-logo').css('visibility', 'visible');
    $('#page3-logo').children().addClass('animated fadeIn');
    setTimeout(
        () => {
            zoomAnimationOutPutNumberWithBorder();
        }, 2000
    )
}

//1
function animationStartOutPutNumber() {
    $('#page3-output-winnner-1').css('visibility', 'visible');
    $('#page3-output-winnner-2').css('visibility', 'visible');
    // $('#page3-output-winnner-1').children().addClass('animated pulse');
    // $('#page3-output-winnner-2').children().addClass('animated pulse');
    setTimeout(
        () => {
            animationJackPot();
        }, 2000
    )
}

//4
function zoomAnimationOutPutNumberWithBorder() {
    let i = 0;
    let intervalId = setInterval(
        () => {
            $('#page3-output-winnner-1').children().eq(i).addClass('animated pulse');
            i++;
            // remove border

            if (i > $('#page3-output-winnner-1').children().length) {
                clearInterval(intervalId);
                let j = 0;
                let intervalId2 = setInterval(
                    () => {
                        $('#page3-output-winnner-2').children().eq(j).addClass('animated pulse');
                        j++;
                        // remove border

                        if (j > $('#page3-output-winnner-2').children().length) {
                            clearInterval(intervalId2);

                            animationHideJackpotLogo();
                        }
                    }, 50
                )
            }
        }, 100
    );
    arrayInterval.push(intervalId);

}


let currentNumber4 = null;
let arrayJackpot4 = [
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

function animationJackpotCountNumberPartIntPage3(j, k) {
    let jackpotNumber = $(".numberJackpot-page-3").eq(k);
    let coordY = null;

    if (currentNumber4 == null) {
        coordY = -65 * j;
    } else {
        coordY = -65 * (j - currentNumber4);
        currentNumber4 = j
    }

    if (j == 0) {
        coordY = 0;
        jackpotNumber.css("transform", "translateY(" + coordY + "px)");

    } else {
        jackpotNumber.css("transform", "translateY(" + coordY + "px)");
    }
}

function animationJackpotCountNumberPartDecimalPage3(j, k) {
    let jackpotNumber = $(".numberJackpot-page-3-2").eq(k);
    let coordY = null;

    if (currentNumber4 == null) {
        coordY = -65 * j;
    } else {
        coordY = -65 * (j - currentNumber4);
        currentNumber4 = j
    }

    if (j == 0) {
        coordY = 0;
        jackpotNumber.css("transform", "translateY(" + coordY + "px)");

    } else {
        jackpotNumber.css("transform", "translateY(" + coordY + "px)");
    }
}

function setNumberInjackPotSecondPage3() {
    let i = 0;
    let setNumberInJackpotId = setInterval(
        () => {
            let item = arrayJackpot4[i].toString();
            //first number
            animationJackpotCountNumberPartIntPage3(parseInt(item[0]), 0);

            //second
            animationJackpotCountNumberPartIntPage3(parseInt(item[1]), 1);

            //third
            animationJackpotCountNumberPartIntPage3(parseInt(item[2]), 2);

            //fourth
            animationJackpotCountNumberPartIntPage3(parseInt(item[3]), 3);

            //decimal 1
            animationJackpotCountNumberPartDecimalPage3(parseInt(item[5]), 0);

            //decimal 2
            animationJackpotCountNumberPartDecimalPage3(parseInt(item[6]), 1);

            i++;
            console.log(i, arrayJackpot4.length);
            if (i == arrayJackpot4.length) {
                clearInterval(setNumberInJackpotId);
            }
        }, 100
    )
}

function setNumberInjackPotFirstPage3() {
    let item = arrayJackpot4[0].toString();
    //first number
    animationJackpotCountNumberPartIntPage3(parseInt(item[0]), 0);

    //second
    animationJackpotCountNumberPartIntPage3(parseInt(item[1]), 1);

    //third
    animationJackpotCountNumberPartIntPage3(parseInt(item[2]), 2);

    //fourth
    animationJackpotCountNumberPartIntPage3(parseInt(item[3]), 3);

    //decimal 1
    animationJackpotCountNumberPartDecimalPage3(parseInt(item[5]), 0);

    //decimal 2
    animationJackpotCountNumberPartDecimalPage3(parseInt(item[6]), 1);

}

function animationHideJackpotLogo() {
    setTimeout(
        () => {
            $('#page3-logo').children().removeClass('animated fadeIn');
            $('#page3-logo').children().addClass('animated bounceOutDown');

            $('#page3-jackpot-tirage').children().removeClass('animated bounceInUp');
            $('#page3-jackpot-tirage').children().addClass('animated bounceOutDown');

            setTimeout(
                () => {
                    animationHideNumeroOutput();
                }, 300
            )
        }, 2500
    )
}

function animationHideNumeroOutput() {
    let i = 10;
    let j = 10;

    let intervalId1 = setInterval(
        () => {
            $('#page3-output-winnner-1').children().eq(i).removeClass('animated pulse');
            $('#page3-output-winnner-1').children().eq(i).addClass('animated bounceOutDown');
            i--;
            if (i < 0) {
                clearInterval(intervalId1);
                sendMessage(0);
                window.location.reload();
            }
        }, 100
    )
    arrayInterval.push(intervalId1);

    let intervalId2 = setInterval(
        () => {
            $('#page3-output-winnner-2').children().eq(i).removeClass('animated pulse');
            $('#page3-output-winnner-2').children().eq(i).addClass('animated bounceOutDown');
            j--;
            if (j < 0) {
                clearInterval(intervalId2);
            }
        }, 100
    )
    arrayInterval.push(intervalId2);

}