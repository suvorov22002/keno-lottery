let arrayInterval = [];
let time;
let  _str_combi = [];
let num_tirage;
let pg3 = false;
let draw = "";
let draw_boules = [];
let pg1 = false;
let pg2 = false;
let imagePage1;


async function buildPage4() {
    //  console.log('ICI PAGE2');
    await page1.hide();

    await page2.hide();
    await page3.hide();

    await page4.empty();
    await page4.append(page4content);

    var imag = '/assets/logo_'+coderace+'.jpeg'
    imag = '/assets/logo.jpeg';
    $("#myImage4").attr("src", imag);


    document.getElementById("myImage4").src = imag;

    buildFirstColorOfDraw();
    buildSommeTotale();
    buildDernierMultiplicateur();
    buildNumeroLesPLusTirees();
    buildLastTirage();
    updateColor();
    buildLastBonus();
    await page4.show();
    animateShowElement();
}

async function buildPage4_1() {
    //  console.log('ICI PAGE2');
    await page1.hide();
    await page2.hide();
    await page3.hide();


    buildFirstColorOfDraw();
    buildSommeTotale();
    buildDernierMultiplicateur();
    buildNumeroLesPLusTirees();
    buildLastTirage();
    updateColor();
    buildLastBonus();
    await page4.show();
    animateShowElement();
}

async function buildPage1() {
    await page2.hide();
    await page3.hide();
    await page4.hide();
    await page1.empty();
    await page1.append(page1content);

    var imag = '/assets/logo_'+coderace+'.jpeg';
    imag = '/assets/logo.jpeg'
    $("#myImage1").attr("src", imag);
    document.getElementById("myImage1").src = imag;

    /* logo cagnotte */
    console.log('imagePage1: '+imagePage1);
    if (!imagePage1){
        $("#cagnotte-container").css('display','none');
        const sp_span = document.getElementById("label-cagnotte");
        sp_span.innerHTML = "";
    }
    else{
        const image1 = '/assets/' + imagePage1 + '.jpg';
        $("#myImage").attr("src", image1);
        document.getElementById("myImage").src = image1;
    }

    await page1.show();
    animationShowBounceTable();
}

async function buildPage1_1() {
    await page2.hide();
    await page3.hide();
    await page4.hide();

    await page1.show();
    animationShowBounceTable();
}

async function buildPage3() {

    await page2.hide();
    await page1.hide();
    await page4.hide();
    await page1.empty();
    await page4.empty();
    await page2.empty();
    await page3.empty();
    await page3.append(page3content);

    str_combi = "";
    updateDrawNum2();
    var imag = '/assets/logo_' + coderace + '.jpeg';
    imag = '/assets/logo.jpeg';
    $("#myImage3").attr("src", imag);

    document.getElementById("myImage3").src = imag;
    //console.log(`num_tirage page 3:${numero_tirage}`);

    setOutputNumber();
    await page3.show('slow');

    animationStartOutPutNumber();

}

async function buildPage2() {

    await page1.hide();
    await page3.hide();
    await page4.hide();

    await page1.empty();
    await page3.empty();
    await page4.empty();
    await page2.empty();

    await page2.append(page2content);
    await page2.show();


    updateDrawNum();

    // console.log("draw_boules: "+draw_boules.length);
    let buscarInterval = setInterval(async function(){

        if(draw_boules.length < 20){
            //console.log("draw_boules: "+draw_boules.length);
            buscarDraw();
        }
        else{
            //console.log("draw_boules2: "+draw_boules.length);
            sendStateMessage(2);
            clearInterval(buscarInterval);
            setTimeout(
                () => {
                    setarrayNumroSortant();
                }, 2000 );
            animationCircle();
        }

    },1000);

    // }
    //addNewDraw("update");
    //  $("#drawnumb").text(numero_tirage);


}

function updateColor() {
    //start build color from number
    for (let k = 1; k <= 80; k++) {
        let selector = 'span.num' + k;
        if (k >= 1 && k <= 20 && $(selector).length > 0) {
            gsap.to(selector, { background: 'radial-gradient(circle at 5px 5px,#1a7332, green)' });
        }
        if (k >= 21 && k <= 40 && $(selector).length > 0) {
            gsap.to(selector, { background: 'radial-gradient(circle at 5px 5px,#336dff, blue)' });
        }
        if (k >= 41 && k <= 60 && $(selector).length > 0) {
            gsap.to(selector, { background: 'radial-gradient(circle at 5px 5px,#ad2b2b, red)' });
        }
        if (k >= 61 && k <= 80 && $(selector).length > 0) {
            gsap.to(selector, { background: 'radial-gradient(circle at 5px 5px,#f7d71e, #ebb746)' });
        }
    }
    //end build color from number
}

function timeToLeft() {

    pg1 = false;
    pg2 = false;

    let timePage1 = [136, 86, 36];
    let timePage2 = [158, 108, 58, 8];
    let intervalIdTimeLeft = setInterval(
        () => {
            //  if(gamestate == 1)  time--;

            console.log("TIMEKEO sheduler: "+timekeno+" - "+gamestate);
            if(timekeno === 185 && !gamestate){
                $('#compteur1').text('--');
            }
            else{
                $('#compteur1').text(timekeno);
            }

            $('#compteur2').text(timekeno);


            if (timekeno < 2) {

                clearInterval(intervalIdTimeLeft);
                buildPage2();
                sendStateMessage(2);

            }


            if (timekeno < 5) {
                canSubmit = false;
            }

            if (gamestate === 1 && ( (158<timekeno && timekeno<186) || (timekeno < 137 && timekeno > 108)
                || (timekeno < 87 && timekeno > 58) || (timekeno < 37 && timekeno > 8)) && pg1 === false) {

                clearIntervalId();
                buildPage1();
                pg1 = true;
                pg2 = false;

            }

            if (gamestate === 1 && ((timekeno < 159 && timekeno > 136) || (timekeno < 109 && timekeno > 86)
                || (timekeno < 59 && timekeno > 36) || (timekeno < 9 && timekeno > 1)) && pg2 === false) {

                buildPage4();
                pg1 = false;
                pg2 = true;

            }

            //gestion de la connexion du client lorsque le tirage est dej lancé
            if((gamestate === 2 || gamestate === 3) && timekeno === 185 && str_combi.length !== 0) {

                console.log("_str_combi_str_combi: "+str_combi.length);
                if(str_combi !== "" && str_combi !== undefined){
                    _str_combi = str_combi.split("-");
                    console.log("_str_combi: "+_str_combi);
                }

                console.log("_str_combi.length: "+_str_combi.length);
                if(_str_combi.length < 20){

                    clearInterval(intervalIdTimeLeft);
                    buildPage2();

                }
                else if(_str_combi.length === 20 && pg3 === false){

                    buildPage1();
                    pg3 = true;

                }
            }
            // else if(str_combi.length === 0){
            //
            // }

            if(gamestate === 0 && pg3 === false){

                clearIntervalId();
                buildPage1();

            }

        }, 1000
    )
    //buscarDraw();
}

function init() {

    clearIntervalId();
    sendStateMessage(1);
    sendMessage(0);
    // seekCagnot();

    //recordDisplay(); // recuperation du temps, combinaison, gamestate

    timeToLeft();

}

function clearIntervalId() {
    for (let i = 0; i < arrayInterval.length; i++) {
        clearInterval(arrayInterval[i]);
    }
}

function recordDisplay(){

    //TODO: retrieve draw datas
    //return str_combi = value.combi;
}

function seekCagnot(){
    console.log("seek-cagnotte");
    $.ajax({

        url:"getCagnotte",
        type:"GET",
        async: true,
        data:{
            'coderace':coderace
        },
        success:function(result){
            $.each(result, function(index, value){

                const barc = result['barcode'];
                if (barc !== 0) {
                    imagePage1 = "";
                }
                else{
                    imagePage1 = result['lot'];
                }
            });
        }
    });
}

function buscarDraw(){
    console.log("Generate draw");
    trouve_draw = false;

    // on retrouve les paramètres qu'on avait fixé via l'API Json dans la servlet
    draw = str_combi;
    console.log("drawnumbk: " + draw);
    draw_boules = [];
    draw_boules = draw.split("-");

    if(draw_boules.length === 20) {
        trouve_draw = true;

        for(let j = 0; j < 20; j++){
            arrayNumroSortant.push(draw_boules[j]);
        }
        outputNumber = arrayNumroSortant;
    }
}

_connectState()
    .then(() => {
        init(); // This will only run after successful connection and subscription
    })
    .catch((error) => {
        console.error('Failed to connect and subscribe:', error);
    });
//init();



