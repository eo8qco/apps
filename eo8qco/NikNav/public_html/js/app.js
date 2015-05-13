/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var PROXY = "http://5.249.155.46:8080/FirefoxOSParty/Proxy/";
var SERVER_BASE_URL = "http://analog.nik.uni-obuda.hu:65119";
var SERVER_BASE_URL_WITHOUT_PROTOCOL = "analog.nik.uni-obuda.hu:65119";
var TOROOM = "TOROOM";
var FROMROOM = "FROMROOM";
var POI_FOR_ROOTING = SERVER_BASE_URL_WITHOUT_PROTOCOL
        + "/ds/query?query=prefix+loc%3A+%3Chttp%3A%2F%2Flod.nik.uni-obuda.hu%2Foloud-indoor.owl%23%3E+prefix+oe%3A+%3Chttp%3A%2F%2Flod.nik.uni-obuda.hu%2Fdata%2F%3E+prefix+rdfs%3A+%3Chttp%3A%2F%2Fwww.w3.org%2F2000%2F01%2Frdf-schema%23%3E+SELECT+DISTINCT+%3Fl1+%3Fl2+%3Fl3+%3Fl4+%3Fl5+%3Fl6+%3Fl7+%3Fl8+%3Fl9+%3Fl10+%7B+%7B+%3Fp1+loc%3AbelongsToRoom+oe%3A"
        + FROMROOM
        + ".+%3Fp1+%28loc%3AbelongsToRoom%7Cloc%3AconnectsPOI%29+oe%3A"
        + TOROOM
        + ".+%3Fp1+rdfs%3Alabel+%3Fl1.+%7D+UNION+%7B+%3Fp1+loc%3AbelongsToRoom+oe%3A"
        + FROMROOM
        + ".+%3Fp1+%28loc%3AbelongsToRoom%7Cloc%3AconnectsPOI%29+%3Fp2.+%3Fp2+%28loc%3AbelongsToRoom%7Cloc%3AconnectsPOI%29+oe%3A"
        + TOROOM
        + ".+%3Fp2+rdfs%3Alabel+%3Fl2.+%3Fp2+rdfs%3Alabel+%3Fl2.+%7D+UNION+%7B+%3Fp1+loc%3AbelongsToRoom+oe%3A"
        + FROMROOM
        + ".+%3Fp1+%28loc%3AbelongsToRoom%7Cloc%3AconnectsPOI%29+%3Fp2.+%3Fp2+%28loc%3AbelongsToRoom%7Cloc%3AconnectsPOI%29+%3Fp3.+%3Fp3+%28loc%3AbelongsToRoom%7Cloc%3AconnectsPOI%29+oe%3A"
        + TOROOM
        + ".+%3Fp1+rdfs%3Alabel+%3Fl1.+%3Fp2+rdfs%3Alabel+%3Fl2.+%3Fp3+rdfs%3Alabel+%3Fl3.+%7D+UNION+%7B+%3Fp1+loc%3AbelongsToRoom+oe%3A"
        + FROMROOM
        + ".+%3Fp1+%28loc%3AbelongsToRoom%7Cloc%3AconnectsPOI%29+%3Fp2.+%3Fp2+%28loc%3AbelongsToRoom%7Cloc%3AconnectsPOI%29+%3Fp3.+%3Fp3+%28loc%3AbelongsToRoom%7Cloc%3AconnectsPOI%29+%3Fp4.+%3Fp4+%28loc%3AbelongsToRoom%7Cloc%3AconnectsPOI%29+oe%3A"
        + TOROOM
        + ".+%3Fp1+rdfs%3Alabel+%3Fl1.+%3Fp2+rdfs%3Alabel+%3Fl2.+%3Fp3+rdfs%3Alabel+%3Fl3.+%3Fp4+rdfs%3Alabel+%3Fl4.+%7D+UNION+%7B+%3Fp1+loc%3AbelongsToRoom+oe%3A"
        + FROMROOM
        + ".+%3Fp1+%28loc%3AbelongsToRoom%7Cloc%3AconnectsPOI%29+%3Fp2.+%3Fp2+%28loc%3AbelongsToRoom%7Cloc%3AconnectsPOI%29+%3Fp3.+%3Fp3+%28loc%3AbelongsToRoom%7Cloc%3AconnectsPOI%29+%3Fp4.+%3Fp4+%28loc%3AbelongsToRoom%7Cloc%3AconnectsPOI%29+%3Fp5.+%3Fp5+%28loc%3AbelongsToRoom%7Cloc%3AconnectsPOI%29+oe%3A"
        + TOROOM
        + ".+%3Fp1+rdfs%3Alabel+%3Fl1.+%3Fp2+rdfs%3Alabel+%3Fl2.+%3Fp3+rdfs%3Alabel+%3Fl3.+%3Fp4+rdfs%3Alabel+%3Fl4.+%3Fp5+rdfs%3Alabel+%3Fl5.+%7D+UNION+%7B+%3Fp1+loc%3AbelongsToRoom+oe%3A"
        + FROMROOM
        + ".+%3Fp1+%28loc%3AbelongsToRoom%7Cloc%3AconnectsPOI%29+%3Fp2.+%3Fp2+%28loc%3AbelongsToRoom%7Cloc%3AconnectsPOI%29+%3Fp3.+%3Fp3+%28loc%3AbelongsToRoom%7Cloc%3AconnectsPOI%29+%3Fp4.+%3Fp4+%28loc%3AbelongsToRoom%7Cloc%3AconnectsPOI%29+%3Fp5.+%3Fp5+%28loc%3AbelongsToRoom%7Cloc%3AconnectsPOI%29+%3Fp6.+%3Fp6+%28loc%3AbelongsToRoom%7Cloc%3AconnectsPOI%29+oe%3A"
        + TOROOM
        + ".+%3Fp1+rdfs%3Alabel+%3Fl1.+%3Fp2+rdfs%3Alabel+%3Fl2.+%3Fp3+rdfs%3Alabel+%3Fl3.+%3Fp4+rdfs%3Alabel+%3Fl4.+%3Fp5+rdfs%3Alabel+%3Fl5.+%3Fp6+rdfs%3Alabel+%3Fl6.+%7D+UNION+%7B+%3Fp1+loc%3AbelongsToRoom+oe%3A"
        + FROMROOM
        + ".+%3Fp1+%28loc%3AbelongsToRoom%7Cloc%3AconnectsPOI%29+%3Fp2.+%3Fp2+%28loc%3AbelongsToRoom%7Cloc%3AconnectsPOI%29+%3Fp3.+%3Fp3+%28loc%3AbelongsToRoom%7Cloc%3AconnectsPOI%29+%3Fp4.+%3Fp4+%28loc%3AbelongsToRoom%7Cloc%3AconnectsPOI%29+%3Fp5.+%3Fp5+%28loc%3AbelongsToRoom%7Cloc%3AconnectsPOI%29+%3Fp6.+%3Fp6+%28loc%3AbelongsToRoom%7Cloc%3AconnectsPOI%29+%3Fp7.+%3Fp7+%28loc%3AbelongsToRoom%7Cloc%3AconnectsPOI%29+oe%3A"
        + TOROOM
        + ".+%3Fp1+rdfs%3Alabel+%3Fl1.+%3Fp2+rdfs%3Alabel+%3Fl2.+%3Fp3+rdfs%3Alabel+%3Fl3.+%3Fp4+rdfs%3Alabel+%3Fl4.+%3Fp5+rdfs%3Alabel+%3Fl5.+%3Fp6+rdfs%3Alabel+%3Fl6.+%3Fp7+rdfs%3Alabel+%3Fl7.+%7D+UNION+%7B+%3Fp1+loc%3AbelongsToRoom+oe%3A"
        + FROMROOM
        + ".+%3Fp1+%28loc%3AbelongsToRoom%7Cloc%3AconnectsPOI%29+%3Fp2.+%3Fp2+%28loc%3AbelongsToRoom%7Cloc%3AconnectsPOI%29+%3Fp3.+%3Fp3+%28loc%3AbelongsToRoom%7Cloc%3AconnectsPOI%29+%3Fp4.+%3Fp4+%28loc%3AbelongsToRoom%7Cloc%3AconnectsPOI%29+%3Fp5.+%3Fp5+%28loc%3AbelongsToRoom%7Cloc%3AconnectsPOI%29+%3Fp6.+%3Fp6+%28loc%3AbelongsToRoom%7Cloc%3AconnectsPOI%29+%3Fp7.+%3Fp7+%28loc%3AbelongsToRoom%7Cloc%3AconnectsPOI%29+%3Fp8.+%3Fp8+%28loc%3AbelongsToRoom%7Cloc%3AconnectsPOI%29+oe%3A"
        + TOROOM
        + ".+%3Fp1+rdfs%3Alabel+%3Fl1.+%3Fp2+rdfs%3Alabel+%3Fl2.+%3Fp3+rdfs%3Alabel+%3Fl3.+%3Fp4+rdfs%3Alabel+%3Fl4.+%3Fp5+rdfs%3Alabel+%3Fl5.+%3Fp6+rdfs%3Alabel+%3Fl6.+%3Fp7+rdfs%3Alabel+%3Fl7.+%3Fp8+rdfs%3Alabel+%3Fl8.+%7D+UNION+%7B+%3Fp1+loc%3AbelongsToRoom+oe%3A"
        + FROMROOM
        + ".+%3Fp1+%28loc%3AbelongsToRoom%7Cloc%3AconnectsPOI%29+%3Fp2.+%3Fp2+%28loc%3AbelongsToRoom%7Cloc%3AconnectsPOI%29+%3Fp3.+%3Fp3+%28loc%3AbelongsToRoom%7Cloc%3AconnectsPOI%29+%3Fp4.+%3Fp4+%28loc%3AbelongsToRoom%7Cloc%3AconnectsPOI%29+%3Fp5.+%3Fp5+%28loc%3AbelongsToRoom%7Cloc%3AconnectsPOI%29+%3Fp6.+%3Fp6+%28loc%3AbelongsToRoom%7Cloc%3AconnectsPOI%29+%3Fp7.+%3Fp7+%28loc%3AbelongsToRoom%7Cloc%3AconnectsPOI%29+%3Fp8.+%3Fp8+%28loc%3AbelongsToRoom%7Cloc%3AconnectsPOI%29+%3Fp9.+%3Fp9+%28loc%3AbelongsToRoom%7Cloc%3AconnectsPOI%29+oe%3A"
        + TOROOM
        + ".+%3Fp1+rdfs%3Alabel+%3Fl1.+%3Fp2+rdfs%3Alabel+%3Fl2.+%3Fp3+rdfs%3Alabel+%3Fl3.+%3Fp4+rdfs%3Alabel+%3Fl4.+%3Fp5+rdfs%3Alabel+%3Fl5.+%3Fp6+rdfs%3Alabel+%3Fl6.+%3Fp7+rdfs%3Alabel+%3Fl7.+%3Fp8+rdfs%3Alabel+%3Fl8.+%3Fp9+rdfs%3Alabel+%3Fl9.+%7D+UNION+%7B+%3Fp1+loc%3AbelongsToRoom+oe%3A"
        + FROMROOM
        + ".+%3Fp1+%28loc%3AbelongsToRoom%7Cloc%3AconnectsPOI%29+%3Fp2.+%3Fp2+%28loc%3AbelongsToRoom%7Cloc%3AconnectsPOI%29+%3Fp3.+%3Fp3+%28loc%3AbelongsToRoom%7Cloc%3AconnectsPOI%29+%3Fp4.+%3Fp4+%28loc%3AbelongsToRoom%7Cloc%3AconnectsPOI%29+%3Fp5.+%3Fp5+%28loc%3AbelongsToRoom%7Cloc%3AconnectsPOI%29+%3Fp6.+%3Fp6+%28loc%3AbelongsToRoom%7Cloc%3AconnectsPOI%29+%3Fp7.+%3Fp7+%28loc%3AbelongsToRoom%7Cloc%3AconnectsPOI%29+%3Fp8.+%3Fp8+%28loc%3AbelongsToRoom%7Cloc%3AconnectsPOI%29+%3Fp9.+%3Fp9+%28loc%3AbelongsToRoom%7Cloc%3AconnectsPOI%29+%3Fp10.+%3Fp10+%28loc%3AbelongsToRoom%7Cloc%3AconnectsPOI%29+oe%3A"
        + TOROOM
        + ".+%3Fp1+rdfs%3Alabel+%3Fl1.+%3Fp2+rdfs%3Alabel+%3Fl2.+%3Fp3+rdfs%3Alabel+%3Fl3.+%3Fp4+rdfs%3Alabel+%3Fl4.+%3Fp5+rdfs%3Alabel+%3Fl5.+%3Fp6+rdfs%3Alabel+%3Fl6.+%3Fp7+rdfs%3Alabel+%3Fl7.+%3Fp8+rdfs%3Alabel+%3Fl8.+%3Fp9+rdfs%3Alabel+%3Fl9.+%3Fp10+rdfs%3Alabel+%3Fl10.+%7D+%7D+LIMIT+1&output=json&stylesheet=";


var OWL_TAG = "http://lod.nik.uni-obuda.hu/data/";
var GET_ALL_SEARCHABLE_ROOM = SERVER_BASE_URL_WITHOUT_PROTOCOL
        + "/ds/query?query=prefix+loc%3A+%3Chttp%3A%2F%2Flod.nik.uni-obuda.hu%2Foloud-indoor.owl%23%3E%0D%0Aprefix+oe%3A+%3Chttp%3A%2F%2Flod.nik.uni-obuda.hu%2Fdata%2F%3E%0D%0ASELECT+%3Froom+WHERE%0D%0A%7B%0D%0A++%7B%3Froom+a+loc%3AOffice.%7D%0D%0A++UNION+%0D%0A++%7B%3Froom+a+loc%3ALab.%7D%0D%0A++UNION%0D%0A++%7B%3Froom+a+loc%3ALectureHall.%7D%0D%0A++UNION%0D%0A++%7B%3Froom+a+loc%3AToilet.%7D%0D%0A++UNION%0D%0A++%7B%3Froom+a+loc%3ACafeteria.%7D%0D%0A++UNION%0D%0A++%7B%3Froom+a+loc%3AWardrobe.%7D%0D%0A++UNION%0D%0A++%7B%3Froom+a+loc%3AToilet.%7D%0D%0A%7D%0D%0AORDER+BY+%3Froom&output=json&stylesheet=";
var rooms;
var where;
var to;
var rooting;
var poiList;
var pois;
var fetchRoomsSuccess;
var fromRoom;
var toRoom;

function getRooms() {
    var oReq = new XMLHttpRequest();
    oReq.onload = showData;
    oReq.open("get", PROXY + GET_ALL_SEARCHABLE_ROOM, true);
    oReq.send();
}

function putObject(pName, data) {
    var tx = db.transaction(pName, 'readwrite');
    var storeRoomsPut = tx.objectStore(pName);
    var request = storeRoomsPut.add(data);
    console.log("putObject to DB: " + data.name);
    request.onsuccess = function (event) {
        console.log("tranzakciossuccess");
    };
    request.onerror = function (event) {
        console.log("tranzakcioserr:" + event.result.error.message);
    };
}

function showData() {
    var selectFrom = document.getElementById("roomsListFrom");
    var selectTo = document.getElementById("roomsListTo");
    var position = 0;
    rooms = this.responseText;
    JSON.parse(this.responseText, function (k, v) {
        if (k === 'value') {
            var item = v.replace(OWL_TAG, "");
            console.log(item);
            var option = document.createElement('option');
            option.innerHTML = item;
            option.id = "room" + position;
            option.value = item;
            var option2 = document.createElement('option');
            option2.innerHTML = item;
            option2.id = "room" + position;
            option2.value = item;
            selectFrom.appendChild(option);
            selectTo.appendChild(option2);

            putObject(TABLE_ROOMS, {"name": item});

            position = position + 1;
            return v;
        }
    });

    init();
}


document.addEventListener("DOMContentLoaded", function (event) {
    openDB();
});

function showPOIS() {
    poiList = document.getElementById('poiList');
    poiList.innerHTML = '';
    pois = this.responseText;
    console.log(pois);
    var position = 1;
    JSON.parse(this.responseText, function (k, v) {
        if (k === 'value') {
            var item = v.replace(OWL_TAG, "");
            console.log(item);
            var li = document.createElement('li');
            li.innerHTML = position + ". " + item;
            position++;
            poiList.appendChild(li);
            return v;
        }
    });
}

function getPOI() {
    var selectFrom = document.getElementById("roomsListFrom");
    var selectTo = document.getElementById("roomsListTo");
    fromRoom = selectFrom.options[selectFrom.selectedIndex].text;
    toRoom = selectTo.options[selectTo.selectedIndex].text;
    console.log("fromRoom: " + fromRoom);
    console.log("toRoom: " + toRoom);

    var GETPOI = POI_FOR_ROOTING.split(FROMROOM).join(fromRoom).split(TOROOM).join(toRoom);
    console.log("GETPOI " + GETPOI);
    var oReq2 = new XMLHttpRequest();
    oReq2.onload = showPOIS;
    oReq2.open("get", PROXY + GETPOI, true);
    oReq2.send();
}

function init() {
    rooting = document.getElementById('rooting');
    rooting.addEventListener("click", getPOI);
}

window.indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;
var DB_NAME = 'NikNavDB';
var DB_VERSION = 1;
var TABLE_ROOMS = 'rooms';
var TABLE_FAVS = 'favs';
var db;

function openDB() {
    var req = window.indexedDB.open(DB_NAME, DB_VERSION);
    req.onsuccess = function (evt) {
        db = this.result;
        console.log("succes open db");
        getAllRoomsByName();
    };
    req.onerror = function (evt) {
        console.error("req.onerror:", evt.target.error.message);
    };

    req.onupgradeneeded = function (evt) {
        console.log("openDb.onupgradeneeded");
        try {
            var store0 = evt.currentTarget.result.createObjectStore(TABLE_ROOMS, {keyPath: 'id', autoIncrement: true});
            store0.createIndex('name', 'name', {unique: false});

            var store1 = evt.currentTarget.result.createObjectStore(TABLE_FAVS, {keyPath: 'id', autoIncrement: true});
            store1.createIndex('name', 'name', {unique: false});
        }
        catch (e) {
            console.log(e);
        }
        console.log("openDb.onupgradeneeded");
    };
}

function getAllRoomsByName() {
    var tx = db.transaction(TABLE_ROOMS, 'readonly');
    var storeRooms = tx.objectStore(TABLE_ROOMS);
    var selectFrom = document.getElementById("roomsListFrom");
    var selectTo = document.getElementById("roomsListTo");
    var req = storeRooms.index("name").openCursor();
    req.onsuccess = function (evt) {
        var cursor = req.result;
        var position = 0;
        if (cursor) {
            fetchRoomsSuccess = "true";
            var value = cursor.value;
            console.log("fetch object from DB: " + value.name);
            var option = document.createElement('option');
            option.innerHTML = value.name;
            option.id = value.name + position;
            option.value = value.name;
            var option2 = document.createElement('option');
            option2.innerHTML = value.name;
            option2.id = value.name + position;
            option2.value = value.name;
            selectFrom.appendChild(option);
            selectTo.appendChild(option2);
            position = position + 1;
            cursor.continue();
        }

        if (fetchRoomsSuccess == undefined) {
            getRooms();
        } else {
            init();
        }

    };
}

