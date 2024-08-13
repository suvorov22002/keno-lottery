let stompClient = null;
let stompStateClient = null;
let stompJackotClient = null;

function countAllNumOdds(allDraws) {

    var allDraw = [];
    var allDrawNumOdds = new Map();

    for (let k of allDraws) {
        allDraw.push(k.tirage);
    }
    //console.log("allDraw",allDraw)
    // Initialisation des coefficients
    for(let i = 0; i < 80; i++) {
        allDrawNumOdds.set((i+1).toString(), "0");
    }

    var passDraw;

    for (let ss of allDraw) {

        passDraw  = ss.split("-");

        for(let j= 0; j < passDraw.length; j++) {

            var key = passDraw[j];
            var value = allDrawNumOdds.get(key);
            try {
                allDrawNumOdds.set(key, (parseInt(value) + 1).toString());
            }
            catch(err) {
                allDrawNumOdds.set(key,   "1");
            }
        }

    }

    m = triAvecValeur( allDrawNumOdds );

    return m;
}

function triAvecValeur(m){

    var map = new Map();

    for (let [key, value] of m) {
       // console.log(key + " = " + value);
        map.set(key, parseInt(value));
    }

    // Convert the map's entries to an array of [key, value] pairs
    let list = Array.from(map.entries());
    // Sort the list based on the values in descending order
    list.sort((a, b) => b[1] - a[1]);

    // Create a new Map to maintain the insertion order
    let map_apres = new Map();

    // Iterate over the list and populate the map
        list.forEach(entry => {
            map_apres.set(entry[0], entry[1]);
        });

    return map_apres;
}

function retrieveMultiplicateur(data) {

    var donne;
    var _data = data.slice(0, 12);
    console.log("MULTIPLICATEUR",_data);
    $.each(_data, function(key, value){

        donne = {
            'multiplicateur': value.multiplicateur,
            'heureTirage': new Date(value.heureTirage).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        }

        arrayLastMultiplicateur.push(donne);
    });

    console.log("arrayLastMultiplicateur",arrayLastMultiplicateur);
}

function retrieveSumOdd(data) {

    var _data = data.slice(0, 100);
 //   console.log("SUM_ODD",_data);
    var m = countAllNumOdds(_data);

    // Convert the Map to an Array of entries ([key, value] pairs)
    const entriesArray = Array.from(m);

    var st;

    for (let i = 0; i < 9; i++) {
        const [key, value] = entriesArray[i];
    //    console.log(`Index: ${i}, Key: ${key}, Value: ${value}`);

        st = {
            temp: `${key}X`,
            numero: `${value}`
        };

        arrayNumeroLesPlusTirees.push(st);
    }

    for (let i= 79; i > 74; i--) {
        const [key, value] = entriesArray[i];
     //   console.log(`Index: ${i}, Key: ${key}, Value: ${value}`);

        st = {
            temp: `${key}X`,
            numero: `${value}`
        };

        arrayNumeroLesMoinsTirees.push(st);
    }
}

let messageQueue = [];
let _socket;
function connectState() {

    console.log('Connected WebSocket GameState');

    _socket = new SockJS('http://localhost:8180/state');

    // Define the event listeners for the socket
    // Attempt to send queued messages when the connection opens
    _socket.onopen = function() {
        console.log('Connection opened. Sending queued messages.');
        while (messageQueue.length > 0) {
            let queuedMessage = messageQueue.shift();
            sendStateMessage(queuedMessage);
        }
    };

    _socket.onmessage = function(e) {
        console.log('Message received:', e.data);
    };

    _socket.onclose = function() {
        console.log('Connection closed');
    };

    stompStateClient = Stomp.over(_socket);

    stompStateClient.connect({}, function(frame) {

        console.log('State Connected: ' + frame);

        stompStateClient.subscribe('/topic/gamestates', function(messageOutput) {

            showStateMessageOutput(JSON.parse(messageOutput.body));
        });

    });


}

function _connectState() {
    return new Promise((resolve, reject) => {

        // Initialize the WebSocket connection
        _socket = new SockJS('http://localhost:8180/timekeno');
        stompStateClient = Stomp.over(_socket);

        // Attempt to connect with the STOMP client
        stompStateClient.connect({}, function(frame) {
            console.log('Connected --- Promise: ' + frame);

            // Subscribe to the topic
            stompStateClient.subscribe('/topic/gamestates', function(messageOutput) {
                showStateMessageOutput(JSON.parse(messageOutput.body));
            });

            // Resolve the promise after successful connection and subscription
            resolve();
        }, function(error) {
            console.error('Connection error:', error);
            reject(error); // Reject the promise if there is a connection error
        });

    });
}

function showStateMessageOutput(messageOutput) {
    console.log("GameState",messageOutput)
    if(messageOutput.gameState) gamestate = messageOutput.gameState;
    if(messageOutput.drawNum) {
        numero_tirage = messageOutput.drawNum;
        _numero_tirage = numero_tirage - 1;
    }
    if(messageOutput.drawResult) str_combi = messageOutput.drawResult;
    if(messageOutput.multiplicateur) multiplicateur = messageOutput.multiplicateur;

}
function sendStateMessage(state) {

    if (_socket.readyState === SockJS.OPEN) {
        stompStateClient.send("/app/state", {}, JSON.stringify({'partner':coderace, 'room':room, 'gameState':state}));
        console.log('Message sent:', JSON.stringify({'partner':coderace, 'room':room, 'gameState':state}));
    } else {
        console.log('Connection is not open. Queueing message:', state);
        messageQueue.push(JSON.stringify({'partner':coderace, 'room':room, 'gameState':state}));
    }

}

function updateDrawNum(){

    // page2
    $("#drawnumb").empty();
    // page3
    $("#drawnumb3").empty();

    $("#drawnumb").prepend(numero_tirage);
    $("#drawnumb3").prepend(numero_tirage);

}

function updateDrawNum2() {

    // page2
    $("#drawnumb").empty();

    // page3
    $("#drawnumb3").empty();


    $("#drawnumb").prepend(_numero_tirage);
    $("#drawnumb3").prepend(_numero_tirage);
}

function connect() {

    console.log('Connected Through WebSocket');

    var socket = new SockJS('http://localhost:8180/timekeno');
    stompClient = Stomp.over(socket);

    stompClient.connect({}, function(frame) {

        console.log('Connected: ' + frame);

        stompClient.subscribe('/topic/messages', function(messageOutput) {

            showMessageOutput(JSON.parse(messageOutput.body));
        });

    });
}
connect();

function connectJackpot() {

    var socket = new SockJS('http://localhost:8180/jackpot');
    stompJackotClient = Stomp.over(socket);

    stompJackotClient.connect({}, function(frame) {

        console.log('Connected: ' + frame);

        stompJackotClient.subscribe('/topic/bonusIncrease', function(messageOutput) {

            showMessageJackpotOutput(JSON.parse(messageOutput.body));
        });

    });
}
connectJackpot();

function disconnect() {

    if(stompClient != null) {
        stompClient.disconnect();
    }

    console.log("Disconnected");
}

function sendMessage(state) {

    stompClient.send("/app/timekeno", {}, JSON.stringify({'partner':coderace, 'room':room, 'gameState':state}));
}

function showMessageOutput(messageOutput) {
    //console.log("TIMEKENO",messageOutput)
    timekeno = messageOutput.timekeno;
}

function showMessageJackpotOutput(messageOutput) {
    console.log("KENO_JACKPOT",messageOutput)
    var responseBonus = messageOutput.bonusAmount;

    if(responseBonus) {
        $("#divide-jackpot").text(responseBonus);
        $("#divide4-jackpot").text(responseBonus);
        $("#divide2-jackpot").text(responseBonus);
        $("#divide3-jackpot").text(responseBonus);
        $("#divide-jackpot3").text(responseBonus);
    }

}
