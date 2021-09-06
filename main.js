/*//Задание 1
let userAge = +prompt ("Введите свой возраст");
if (userAge<2) {
    alert ("ребёнок");
} else if(userAge<18) {
    alert ("подросток");
} else if (userAge<60){
    alert ("взрослый");
} else {
    alert ("пенсионер")
};
//Задание 2
let i = +prompt ("Введите число от 0 до 9")
switch (i) {
    case 0 : alert (')');
    break;
    case 1 : alert ('!');
    break;
    case 2 : alert ('@');
    break;
    case 3 : alert ('#');
    break;
    case 4 : alert ('$');
    break;
    case 5 : alert ('%');
    break;
    case 6 : alert ('^');
    break;
    case 7 : alert ('&');
    case 8 : alert ('*');
    break;
    case 9 : alert ('(');
    break
};
//Задание 4
let userYear = +prompt ('Введите год');
((userYear%400===0)||(userYear%4===0&&userYear%100!==0))? alert ('високосный') : alert ('невисокосный');
//Задание 6
let money = +prompt ('Введите сумму в USD');
let exchange = prompt ("Выберите: EUR, UAN, AZN");
if (exchange==="EUR") {
    let a = money*0.8415;
    alert (a);
} else if (exchange==="UAN") {
    let b = money*6.45;
    alert (b);
} else {
    let c = money*1.699;
    alert (c);
};
//Задание 7
let cashe = +prompt ("Введите число");
if (cashe<200) {
    alert ('Скидки нет');
} else if (cashe<300) {
    alert ('Скидка равна 3%');
} else if (cashe<500) {
    alert ('Скидка равна 5%');
} else {
    alert ('Скидка равна 7%');
};
//Задание 9
let firstQuestion, secondQuestion, thirdQuestion;
firstQuestion = +prompt ('Сколько будет 2**9? Варианты ответов: 512, 213, 513');
let a;
if (firstQuestion ==512) {
    a=2;
} else {
    a=0;
};
secondQuestion = +prompt ('Сколько будет 89*35? Варианты ответов: 3112, 3116, 3115');
let b;
if (secondQuestion ==3115) {
    b=2;
} else {
    b=0;
};
thirdQuestion = +prompt ('Сколько будет 2+2*2-2+2/2? Варианты ответов: 4, 5, 6');
let c;
if (thirdQuestion ==5) {
    c=2;
} else {
    c=0;
};
let d= a+b+c;
alert (d);
//Задание 1
let firstNum = +prompt ('Введите первое число диапазона');
let secondNum = +prompt ('Введите второе число диапазона');
let S, i;
S=0;
i = firstNum;
while (i<=secondNum) {
    S= S+i;
    i++;
};
alert (S);
//Задание 2
let numFirst = +prompt ('Введите первое число');
let numSecond = +prompt ('Введите второе число');
let min, max;
if (numFirst>numSecond) {
    max= numFirst;
    min= numSecond;
} else {
    min= numFirst;
    max= numSecond;
};
while ((numFirst % min) >0 || (numSecond % min) > 0) {
    min--;
};
alert(min);
//Задание 3
let num = +prompt ('Введите число');
let i;
for (i = 1; i<=num; i++) {
    if (num%i==0) {;
    alert (i);
    }
};
//Задание 4
let number = +prompt ('Введите число');
let i=1;
while ((number/=10) >= 1) {
    i++;
};
alert (i);
//Задание 5
let i, num, q = 0,
    v = 0,
    j = 0;
    k = 0;
    l = 0;
for (i = 0; i < 10; ++i) {
    num = +prompt("Введите 10 чисел: ", );
    if (num > 0) {
        q++;
    } else if (num < 0) {
        v++;
    } else {
        j++;
    }
    if (num%2 ===0) {
        k++;
    } else if (num %2 !==0) {
        l++;
    }
}
if (q > 0) {
    alert("Количество положительных чисел равно " + q);
} else alert("Положительных чисел нет");
if (v > 0) {
    alert("Количество отрицательных чисел равно " + v);
} else alert("Отрицательных чисел нет");
if (j > 0) {
    alert("Количество нулей равно " + j);
} else alert("Нулей нет");
if (k>0) {alert ("Количество четных чисел равно " + v);}
else alert ("Четных чисел нет");
if (l>0) {alert ("Количество нечетных чисел равно " + v);}
else alert ("Нечетных чисел нет");
//Задание 6
while (confirm("Хотите решить ещё один пример?")) {
    let firstNum = +prompt ("Введите первое число");
    let secondNum = +prompt ("Введите второе число");
    let symbol = prompt ("Введите символ");
    switch (symbol) {
        case "+" : alert (firstNum+secondNum);
        break;
        case "-" : alert (firstNum-secondNum);
        break;
        case "/" : alert (firstNum/secondNum);
        break;
        case "*" : alert (firstNum*secondNum);
        break;
        default : alert ("Вы ввели несуществующую операцию");
    }
}
//Задание 8
while (confirm("Хотите увидеть следующий день недели?")) {
    let day = +prompt ('Введите число дня недели');
    switch (day) {
        case 1 : day= alert ("Понедельник");
        break;
        case 2 : day = alert ("Вторник");
        break;
        case 3 : day = alert ("Среда");
        break;
        case 4 : day = alert ("Четверг");
        break;
        case 5 : day = alert ("Пятница");
        break;
        case 6 : day = alert ("Суббота");
        break;
        case 7 : day = alert ("Воскресенье");
        break;
    }
}
//Задание 9
let i, f=0;
for (let i=2; i<=9; i++) {
    f+= " "+i;
    if (i==9) {
        i+"\n";
    }
for (let y=1; y<=10; y++) {
    f +=y*i;
    if (y==10) {
        y+"\n";
    }
}
}
alert (f);*/