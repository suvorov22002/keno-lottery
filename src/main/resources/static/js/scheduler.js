let arrayInterval = [];

async function buildPage4() {
    await page1.hide();
    await page4.empty();
    await page4.append(page4content);
    buildFirstColorOfDraw();
    buildSommeTotale();
    buildDernierMultiplicateur();
    buildNumeroLesPLusTirees();
    buildLastTirage();
    updateColor();
    await page4.show();
    animateShowElement();
}

async function buildPage1() {
    await page2.hide();
    await page3.hide();
    await page4.hide();
    await page1.empty();
    await page1.append(page1content);
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

    setarrayNumroSortant();
    animationCircle();
}

function updateColor() {
    //start build color from number
    for (let k = 1; k <= 80; k++) {
        let selector = 'span.num' + k;
        if (k >= 1 && k <= 20 && $(selector).length > 0) {
            gsap.to(selector, { background: 'radial-gradient(circle at 5px 5px,#1a7332, green)' });
        }
        if (k > 21 && k <= 40 && $(selector).length > 0) {
            gsap.to(selector, { background: 'radial-gradient(circle at 5px 5px,#336dff, blue)' });
        }
        if (k > 41 && k <= 60 && $(selector).length > 0) {
            gsap.to(selector, { background: 'radial-gradient(circle at 5px 5px,#ad2b2b, red)' });
        }
        if (k > 61 && k <= 80 && $(selector).length > 0) {
            gsap.to(selector, { background: 'radial-gradient(circle at 5px 5px,#f7d71e, #ebb746)' });
        }
    }
    //end build color from number
}

function timeToLeft() {
    //time to left 
    //let timeStart = 158;
    console.log("Before Draw Time",timeStart)
    let timePage1 = [136, 86, 36];
    let timePage2 = [158, 108, 58, 8];
    let intervalIdTimeLeft = setInterval(
        () => {
        //    timeStart--;
            console.log("timeStart",timeStart)
            $('#compteur1').text(timeStart);
            $('#compteur2').text(timeStart);
            if (timeStart < 1) {
                clearInterval(intervalIdTimeLeft);
                buildPage2();
            }

            for (let i = 0; i < timePage1.length; i++) {
                if (timePage1[i] == timeStart) {
                    buildPage1();
                }
            }

            for (let i = 0; i < timePage2.length; i++) {
                if (timePage2[i] == timeStart) {
                    buildPage4();
                }
            }
        }, 1000
    )
}

function init() {
    clearIntervalId()
    buildPage1();
    timeToLeft();
}

function clearIntervalId() {
    for (let i = 0; i < arrayInterval.length; i++) {
        clearInterval(arrayInterval[i]);
    }
}

init();



