const sayHello = (say = ' Hello ', name = ' World ') => document.getElementById("demo1").innerHTML = `${say} ${name}`;
sayHello();


const multiply = ( a, b = '1')  => {
    document.getElementById("demo2").innerHTML = a * b;
}
const calculate = () => {
    let a = document.getElementById("a").value;
    let b = document.getElementById("b").value;
    multiply(a, b);
}

const average = (...args) => {
    // args - tablica podanych parametrów
    
    let sum = 0, ilparam = 0;
    args.forEach(arg => {
            sum = sum + parseInt(arg,10);
            ilparam = ilparam + 1;
        }
    );
    return sum/ilparam;
}

const averagecalculate = () => {
    let params = document.getElementById("args").value;
    let args = params.split(',');
    document.getElementById("demo3").innerHTML = average(...args);
}

const gradescalculate = () => {
    let params = document.getElementById("grades").value;
    let grades = params.split(',');
    document.getElementById("demo4").innerHTML = average(...grades);
}

const collectname = () => {
    const readname = (elements) => {
        if (elements.length === 0) { // Sprawdzam pusta tablice
            if (firstname !== '') {
                alert('No lastname');
            } else {
                alert('No firstname and lastname');
            }
            return name;
        } else {
            const [first, ...rest] = elements;
            if (typeof(first) === 'string') { 
                if (firstname === '') {
                     firstname = firstname + first;
                    } else {
                        if (lastname === '') {
                            lastname = lastname + first;
                        }
                    }
            }; 
            if (lastname ==='') {
                readname(rest);
            }
        }
    }

    let dane = [1, 4, 'Iwona', false, 'Nowak'];
    let firstname = '', lastname='';
    readname(dane);
    document.getElementById("demo5").innerHTML = 'Firstname = '+firstname+'<br>'+'Lastname = '+lastname;
}