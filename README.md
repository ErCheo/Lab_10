<h1 align="center">МИНИСТЕРСТВО НАУКИ И ВЫСШЕГО ОБРАЗОВАНИЯ РОССИЙСКОЙ ФЕДЕРАЦИИ ФЕДЕРАЛЬНОЕ ГОСУДАРСТВЕННОЕ БЮДЖЕТНОЕ ОБРАЗОВАТЕЛЬНОЕ УЧРЕЖДЕНИЕ ВЫСШЕГО ОБРАЗОВАНИЯ «САХАЛИНСКИЙ ГОСУДАРСТВЕННЫЙ УНИВЕРСИТЕТ»</h1>
<p align="center">Лабораторная работа №10</p>
<p align="center">"JavaScript"</p>
<br>
<p align="right">Работу выполнила Чёо Эрика Ильинична</p>
<p align="right">Работу проверил Соболев Евгений Игоревич</p>

___

### **Цели и задачи**:
1.	Напишите функцию, которая найдёт числа в массиве, которые делятся на заданное число. 
2.	Нужно написать функцию, которая проверяет, являются ли две строки анаграммами, причем регистр букв не имеет значения. Учитываются лишь символы; пробелы или знаки препинания в расчет не берутся.
3.	Нужно написать функцию, принимающую строку в качестве аргумента и возвращающую количество гласных, которые содержатся в строке.
Гласными являются «a», «e», «i», «o», «u».
4.	Треугольник. Напишите цикл,  который выводит такой треугольник: <br>
1   # <br>
2   ## <br>
3   ### <br>
4   #### <br>
5   ##### <br>
6   ###### <br>
7	#######
5.	FizzBuzz. Напишите программу, которая выводит через console.log все числа от 1 до 100, с двумя исключениями. Для чисел, нацело делящихся на 3, она должна выводить ‘Fizz’, а для чисел, делящихся на 5 (но не на 3) – ‘Buzz’.Когда сумеете – исправьте её так, чтобы она выводила «FizzBuzz» для всех чисел, которые делятся и на 3 и на 5.
6.	Шахматная доска. Напишите программу, создающую строку, содержащую решётку 8х8, в которой линии разделяются символами новой строки. На каждой позиции либо пробел, либо #. 
7.	Минимум. Напишите функцию min, принимающую два аргумента, и возвращающую минимальный из них.
8.	Рекурсия. Ноль чётный. Единица нечётная. У любого числа N чётность такая же, как у N-2. Напишите рекурсивную функцию isEven согласно этим правилам. Она должна принимать число и возвращать булевское значение. Потестируйте её на 50 и 75. Попробуйте задать ей -1. Почему она ведёт себя таким образом? Можно ли её как-то исправить?
9.	Считаем бобы. Символ номер N строки можно получить, добавив к ней .```charAt(N)``` ( ```“строчка”.charAt(5)``` ) – схожим образом с получением длины строки при помощи .length. Возвращаемое значение будет строковым, состоящим из одного символа (к примеру, “к”). У первого символа строки позиция 0, что означает, что у последнего символа позиция будет string.length – 1. Другими словами, у строки из двух символов длина 2, а позиции её символов будут 0 и 1.Напишите функцию countBs, которая принимает строку в качестве аргумента, и возвращает количество символов “B”, содержащихся в строке.Затем напишите функцию countChar, которая работает примерно как countBs, только принимает второй параметр — символ, который мы будем искать в строке (вместо того, чтобы просто считать количество символов “B”). Для этого переделайте функцию countBs.
10.	Сумма диапазона.  Напишите функцию range, принимающую два аргумента, начало и конец диапазона, и возвращающую массив, который содержит все числа из него, включая начальное и конечное.Затем напишите функцию sum, принимающую массив чисел и возвращающую их сумму. Запустите указанную выше инструкцию и убедитесь, что она возвращает 55.В качестве бонуса дополните функцию range, чтобы она могла принимать необязательный третий аргумент – шаг для построения массива. Если он не задан, шаг равен единице. Вызов функции ```range(1, 10, 2)``` должен будет вернуть [1, 3, 5, 7, 9]. Убедитесь, что она работает с отрицательным шагом так, что вызов ```range(5, 2, -1)``` возвращает [5, 4, 3, 2].
11.	Обращаем массив вспять. Напишите две функции, reverseArray и reverseArrayInPlace. Первая получает массив как аргумент и выдаёт новый массив, с обратным порядком элементов. Вторая работает как оригинальный метод reverse – она меняет порядок элементов на обратный в том массиве, который был ей передан в качестве аргумента. Не используйте стандартный метод reverse.
12.	Глубокое сравнение. Оператор == сравнивает переменные объектов, проверяя, ссылаются ли они на один объект. Но иногда полезно было бы сравнить объекты по содержимому. Напишите функцию deepEqual, которая принимает два значения и возвращает true, только если это два одинаковых значения или это объекты, свойства которых имеют одинаковые значения, если их сравнивать рекурсивным вызовом deepEqual. Чтобы узнать, когда сравнивать величины через ===, а когда – объекты по содержимому, используйте оператор typeof. Если он выдаёт “object” для обеих величин, значит нужно делать глубокое сравнение. Не забудьте об одном дурацком исключении, случившемся из-за исторических причин: “typeof null” тоже возвращает “object”.
13.	Свертка. Используйте метод reduce в комбинации с concat для свёртки массива массивов в один массив, у которого есть все элементы входных массивов.

___

**Задание 1**
```js
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
```
**Задание 2**
```js
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
```
**Задание 3**
```js
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
```
**Задание 4**
```js
let s = "#";
for (i = 1; i < 8; i++)
    { document.getElementById("z4").innerHTML += s.repeat(i) + '<br>'; }
```
**Задание 5**
```js
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
```
**Задание 6**
```js
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
```
**Задание 7**
```js
let number_1 = 10, number_2 = 15;
document.getElementById("z7").innerHTML = "Минимальное из " + number_1 + " и " + number_2 + ": " + min(number_1, number_2);

function min(number_1, number_2)
{
    if (number_1 < number_2)
        return number_1;
    else return number_2;
}
```
**Задание 8**
```js
function isEven(number)
{
    if (number == 0)
        return true;
    else if (number == 1)
        return false;
    else if (number < 0)
        return isEven(-number);
    else
        return isEven(number - 2);
}
```
**Задание 9**
```js
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
```
**Задание 10**
```js
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
```
**Задание 11**
```js
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
```
**Задание 12**
```js
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
```
**Задание 13**
```js
let array = [[1, 2], [3, 4], [5, 6], [7, 8], [9, 10]];
array = array.reduce(function(a, b) {
    return a.concat(b); });
document.getElementById("z13").innerHTML = "Результат: " + array;
```

___

### **Вывод:**
После выполнения данной лабораторной работы я улучшила свои навыки работы с JavaScript.
