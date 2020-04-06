'use strict';

function _toArray(arr) { return Array.isArray(arr) ? arr : Array.from(arr); }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var sayHello = function sayHello() {
    var say = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : ' Hello ';
    var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : ' World ';
    return document.getElementById("demo1").innerHTML = say + ' ' + name;
};
sayHello();

var multiply = function multiply(a) {
    var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '1';

    document.getElementById("demo2").innerHTML = a * b;
};
var calculate = function calculate() {
    var a = document.getElementById("a").value;
    var b = document.getElementById("b").value;
    multiply(a, b);
};

var average = function average() {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
    }

    // args - tablica podanych parametrów

    var sum = 0,
        ilparam = 0;
    args.forEach(function (arg) {
        sum = sum + parseInt(arg, 10);
        ilparam = ilparam + 1;
    });
    return sum / ilparam;
};

var averagecalculate = function averagecalculate() {
    var params = document.getElementById("args").value;
    var args = params.split(',');
    document.getElementById("demo3").innerHTML = average.apply(undefined, _toConsumableArray(args));
};

var gradescalculate = function gradescalculate() {
    var params = document.getElementById("grades").value;
    var grades = params.split(',');
    document.getElementById("demo4").innerHTML = average.apply(undefined, _toConsumableArray(grades));
};

var collectname = function collectname() {
    var readname = function readname(elements) {
        if (elements.length === 0) {
            // Sprawdzam pusta tablice
            if (firstname !== '') {
                alert('No lastname');
            } else {
                alert('No firstname and lastname');
            }
            return name;
        } else {
            var _elements = _toArray(elements),
                first = _elements[0],
                rest = _elements.slice(1);

            if (typeof first === 'string') {
                if (firstname === '') {
                    firstname = firstname + first;
                } else {
                    if (lastname === '') {
                        lastname = lastname + first;
                    }
                }
            };
            if (lastname === '') {
                readname(rest);
            }
        }
    };

    var dane = [1, 4, 'Iwona', false, 'Nowak'];
    var firstname = '',
        lastname = '';
    readname(dane);
    document.getElementById("demo5").innerHTML = 'Firstname = ' + firstname + '<br>' + 'Lastname = ' + lastname;
};
