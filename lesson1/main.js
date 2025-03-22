var fullName = 'Giang Khanh';
var age = 21;
alert(fullName);
alert(age);


// đây là comment 1 dòng 
/*
*/

/* giới thiệu 1 số hàm built-in
1. alert
2. console
3. confirm
4. prompt
5. settimeout
6. setInterval

*/

console.log(123);
confirm('Xac nhan ban du tuoi!');
prompt('Nhap tuoi cua ban!');
setTimeout(function() {
    alert('Hello');
}, 1000); // 1000ms = 1s se chay 1 lan duy nhat

// setInterval(function() {
//     console.log('Hello' + Math.random());
// }, 1000); // cu cach 1s se chay 1 lan, chay lien tuc

// boolean 
var isSuccess = true; 
console.log(isSuccess);

var a = 1;
var b = 2;
var c = 3;
// if - else 
if (a>0 && b>0) {
    console.log('Dieu kien dung!');    
} else {
    console.log('Dieu kien sai!');
}

// Object types
// 1. Object
var myObject = {
    name: 'Giang Khanh',
    age: 21,
    address: 'Thanh Hoa',
    myFunction: function() {

    }
}

console.log('myObject', myObject);

// 2. Array
var myArray = ['Java', 'PHP', 'Ruby'];
console.log(myArray);

console.log(typeof myArray);
console.log(typeof fullName);

// Toan tu ===
// toan tu == chi so sanh ve gia tri
// toan tu === so sanh ve gia tri va ca kieu du lieu
// Ham

function showDialog() {
    alert('Xin chao cac ban!');
}

// call ()

showDialog();

function writeLog(message, message2) {
    if(message) {
        console.log(message);
    }
    if(message2) {
        console.log(message2);
    }
}

writeLog('log 1', 'log 2');


function writeLog2() {
    for (var param of arguments) {
        console.log(param);
    }
}
writeLog2('log 1', 'log 2', 'log 3', 'log 4');

function log3() {
    var myString = '';
    for (var param of arguments) {
        myString += '${param} - '
    }
    console.log(myString);
}

//return trong ham 

function sum(a,b) {
    return a + b;
    // ham ko return thi tra ve undefined
    // cac cau lenh sau return ko duoc thuc thi 
}
var result = sum(3,4);
console.log(result);

// declaration funtion

function show() {
    console.log('declaration funtion');
}

// expression function 

var show = function() {
    console.log('expression funtion');
}