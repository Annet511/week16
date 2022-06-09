function sumInput () {
    let values = [];

    while (true) {
        let value = prompt ('Введите число');

        if (value === '' || isNaN(value) ||!value){
            break;
        }

   
    values.push (Number(value));
}
let sum = 0;
for (let i of values) {
    sum += i;
}
console.log (sum);
}

sumInput();

// другой вариант

// function sumInput() {
//     let numbers = [];
//      while (true) {
//        let value = prompt("Введите число", 0);
//        if (value === "" || value === null || !isFinite(value)) break;
//        numbers.push(+value);
//      }
//      let sum = 0;
//      for (let number of numbers) {
//        sum += number;
//      }
//      return sum;
//    }
//    alert( sumInput() );

// Задание 3.1

let arrays = ['js', 'css', 'html'];
alert (arrays[0]);

// Задание 3.2

let arr = [0, 1, false, 2, undefined, '', 3, null];
console.log (arr.filter (Boolean));


// Задание 4

const array = [[1,2], [1,2,3], [1,2,3,4]];
const el = array.findIndex (el => el.length > 3 );
console.log (el);