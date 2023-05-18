function z1() 
{
    var number = 3;
    Del(number);
    function Del(number)
    {
        document.getElementById("z1").innerHTML = "Числа в массиве делящиеся на 3: ";
        let array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        for (let i = 0; i < array.length; i++)
        {
            if (array[i] % number == 0)
                document.getElementById("z1").innerHTML += array[i] + " ";
        }
    }
}

function z2()
{
    var word1 = "кот", word2 = "ток", result, count = 0;
    let array1 = [], array2 = [];
    for (let i = 0; i < word1.length; i++)
    {
        if ((word1[i] != ' ') && (word1[i] != ',') && (word1[i] != '!') && (word1[i] != '?') && (word1[i] != '.'))
            { array1.push(word1[i]); }
    }
    for (let i = 0; i < word2.length; i++)
    {
        if ((word2[i] != ' ') && (word2[i] != ',') && (word2[i] != '!') && (word2[i] != '?') && (word2[i] != '.'))
            { array2.push(word2[i]); } 
    }
    if (array1.length != array2.length)
        { count = 0; }
    else
    {
        for (let i = 0; i < array1.length; i++)
            for (let j = 0; j < array1.length; j++)
            {
                if (array1[i] == array2[j])
                    { count++; }
            }
    }
    if (count == array1.length)
        document.getElementById("z2").innerHTML = word1 + " и " + word2 + " являются анаграммами";
    else document.getElementById("z2").innerHTML = word1 + " и " + word2 + " не являются анаграммами";
}

function z3()
{
    let str = "This is a string";
    CountOfVowels(str);
    function CountOfVowels(str)
    {
        let count = 0;
        for (let i = 0; i < str.length; i++)
            switch(str[i]){
                case 'a': count++; break;
                case 'e': count++; break;
                case 'i': count++; break;
                case 'o': count++; break;
                case 'u': count++; break;
            }
        document.getElementById("z3").innerHTML = "Количество гласных в " + "'" + str + "'" + " = " + count;
    }
}

function z4()
{
    let s = "#";
    for (i = 1; i < 8; i++)
        { document.getElementById("z4").innerHTML += s.repeat(i) + '<br>'; }
}

function z5()
{
    let str_1 = "", str_2 = "", str_3 = "", str_4 = "";
    for (let i = 1; i < 101; i++)
    {
        if (i % 3 == 0 && i % 5 != 0)
        {
            str_1 += i + " ";
            continue;
        }
        else if (i % 3 != 0 && i % 5 == 0)
        {
            str_2 += i + " ";
            continue;
        }
        else if (i % 3 == 0 && i % 5 == 0)
        {
            str_3 += i + " ";
            continue;
        }
        else 
        {
            str_4 += i + " ";
        }
    }
    document.getElementById("z5_1").innerHTML = "Fizz: " + str_1;
    document.getElementById("z5_2").innerHTML = "Buzz: " + str_2;
    document.getElementById("z5_3").innerHTML = "FizzBuzz: " + str_3;
    document.getElementById("z5_4").innerHTML = "Other: " + str_4;
}

function z6()
{
    let size = 8;
    let Chess_board = "";
    for (let y = 0; y < size; y++) 
    {
      for (let x = 0; x < size; x++) 
      {
        if ((x + y) % 2 == 0)
          Chess_board += "#";
        else 
          Chess_board += "_";
      }
      Chess_board += "<br>";
    }
    document.getElementById("z6").innerHTML = Chess_board;
}

function z7()
{
    let number_1 = 10, number_2 = 15;
    document.getElementById("z7").innerHTML = "Минимальное из " + number_1 + " и " + number_2 + ": " + min(number_1, number_2);

    function min(number_1, number_2)
    {
        if (number_1 < number_2)
            return number_1;
        else return number_2;
    }
}

function z8()
{
    document.getElementById("z8_1").innerHTML = "Для 10: " + isEven(10);
    document.getElementById("z8_2").innerHTML = "Для 50: " + isEven(50);
    document.getElementById("z8_3").innerHTML = "Для 75: " + isEven(75);
    document.getElementById("z8_4").innerHTML = "Для -1: " + isEven(-1);

    function isEven(number) {
        if (number == 0)
          return true;
        else if (number == 1)
          return false;
        else if (number < 0)
          return isEven(-number);
        else
          return isEven(number - 2);
      }
}

function z9()
{
    let str_1 = "String have some char B", str_2 = "This is a string", s = 'i';
    document.getElementById("z9_1").innerHTML = "Количество символов 'B' в строке " + str_1 + " = " + countBs(str_1);
    document.getElementById("z9_2").innerHTML = "Количество символов " + s + " в строке " + str_2 + " = " + countChar(str_2, s);

    function countBs(str)
    {
        let count = 0;
        for (let i = 0; i < str.length; i++)
        {
            if (str[i] === 'B')
                count++;
        }
        return count;
    }

    function countChar(str, s)
    {
        let count = 0;
        for (let i = 0; i < str.length; i++)
        {
            if (str[i] === s)
                count++;
        }
        return count;
    }
}

function z10()
{
    let start_1 = 1, end_1 = 10, step_1 = 2, start_2 = 5, end_2 = 2, step_2 = -1;
    document.getElementById("z10_1").innerHTML = "Массив чисел с " + start_1 + " до " + end_1 + " с шагом " + step_1 + ": " + range(start_1, end_1, step_1);
    document.getElementById("z10_2").innerHTML = "Массив чисел с " + start_2 + " до " + end_2 + " с шагом " + step_2 + ": " + range(start_2, end_2, step_2);
    document.getElementById("z10_3").innerHTML = "Сумма числе из массива " + range(start_1, end_1, step_1) + ": " + sum(range(start_1, end_1, step_1));
    document.getElementById("z10_4").innerHTML = "Сумма числе из массива " + range(start_2, end_2, step_2) + ": " + sum(range(start_2, end_2, step_2));

    function range(start, end, step)
    {
        let array = [];
        if (step === null)
            step = 1;
        if (step > 0)
        {
            for (let i = start; i <= end; i += step)
            { array.push(i); }
        }
        else 
        {
            for (let i = start; i >= end; i += step)
                { array.push(i); }
        }
        return array;
    }

    function sum(array)
    {
        let count = 0;
        for (let i = 0; i < array.length; i++)
            count += array[i];
        return count;
    }
}

function z11()
{
    let array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    document.getElementById("z11_1").innerHTML = "Массив array в обратном порядке при помощи функции reverseArray: " + reverseArray(array);
    document.getElementById("z11_2").innerHTML = "Массив array в обратном порядке при помощи функции reverseArrayInPlace: " + reverseArrayInPlace(array);

    function reverseArray(array)
    {
        let new_array = [];
        for (let i = 0; i <= array.length; i++)
            new_array.push(array[array.length - i]);
        return new_array;
    }

    function reverseArrayInPlace(array)
    {
        let temp;
        for (let i = 0; i < Math.floor(array.length / 2); i++)
        {
            temp = array[i];
            array[i] = array[array.length - (1 + i)];
            array[array.length - (1 + i)] = temp;
        }
        return array;
    }
}

function z12()
{
    var obj = {here: {is: "an"}, object: 2};
    document.getElementById("z12_1").innerHTML = "deepEqual(obj, obj) = " + deepEqual(obj, obj);        
    document.getElementById("z12_2").innerHTML = "deepEqual(obj, {here: 1, object: 2}) = " + deepEqual(obj, {here: 1, object: 2});
    document.getElementById("z12_3").innerHTML = "deepEqual(obj, {here: {is: \"an\"}, object: 2}) = " + deepEqual(obj, {here: {is: "an"}, object: 2});

    function deepEqual(a, b)
    {
    if (a === b) 
        { return true; }

    if (a == null || typeof(a) != "object" || b == null || typeof(b) != "object")
        { return false; }

    var propertiesInA = 0, propertiesInB = 0;
    for (var property in a) 
        { propertiesInA += 1; }
    for (var property in b) 
    {
        propertiesInB += 1;
        if (!(property in a) || !deepEqual(a[property], b[property])) 
            { return false; }
    }        
    return propertiesInA == propertiesInB;
    }
}

function z13()
{
    let array = [[1, 2], [3, 4], [5, 6], [7, 8], [9, 10]];
    array = array.reduce(function(a, b) {
        return a.concat(b);
    });
    document.getElementById("z13").innerHTML = "Результат: " + array;
}