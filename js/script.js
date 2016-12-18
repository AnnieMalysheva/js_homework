

// 1-1

var button1 = function() {
    var a=prompt('Введите первое ненулевое число');
    a = parseInt(a);
    var b=prompt('Введите второе ненулевое число');
    b = parseInt(b);
    console.log(a);
    console.log(b);
    var c = a + b;
    console.log(c);
    var d = a - b;
    console.log(d);
    var e = a * b;
    console.log(e);
    var f = a / b;
    console.log(f);
};



// 1-2

var button2 = function() {
    var a=prompt('Введите первое ненулевое число');
    a = parseInt(a);
    var b=prompt('Введите второе ненулевое число');
    b = parseInt(b);
    console.log(a);
    console.log(b);
    console.log((Math.pow(a, 2) + Math.pow(b, 2))/2);
    console.log((Math.abs(a, 2) + Math.abs(b, 2))/2);
};

// 1-3

var button3 = function() {
    var V = prompt('Введите скорость лодки в стоячей воде');
    V = parseInt(V);
    var U = prompt('Введите скорость течения реки');
    U = parseInt(U);
    var T1 = prompt('Введите время движения лодки по озеру');
    T1 = parseInt(T1);
    var T2 = prompt('Введите время движения лодки по реке (против течения)');
    T2 = parseInt(T2);
    if (U < V) {
    S = Math.abs(V * T1 + (V - U) * T2);
    } else {
    alert('Введите такую скорость лодки в стоячей вроде, которая будет больше скорости течения реки');
    }
    alert('Пройденный путь равен '+S);
    console.log(V);
    console.log(U);
    console.log(T1);
    console.log(T2);
    console.log(S);
};


// 1-4

var button4 = function() {
    var a = prompt('Введите начальную координату фигуры по оси X');
    a=parseInt(a);
    var b = prompt('Введите начальную координату фигуры по оси Y');
    b=parseInt(b);
    var c = prompt('Введите конечную координату фигуры по оси X');
    c=parseInt(c);
    var d = prompt('Введите конечную координату фигуры по оси Y');
    d = parseInt(d);
    if (((Math.abs(c - a) == 1) && (Math.abs(d - b) == 2)) || ((Math.abs(c - a) == 2) && (Math.abs(d - b) == 1))) {
    alert('True');
    } else {
    alert('False');
    }
};


// 2-1-1

var button5 = function() {
str = "";
var a = prompt('Введите строку');
i = a.length-1;
while (i != -1) {
    str = str+a[i];
    i = i - 1;
}
alert(str);
};


// 2-1-2

var button6 = function() {
    str = '';
    var a = prompt('Введите число');
    a = parseInt(a);
    var b = a.toString(3);
    console.log(b);
    for (i = b.length-1; i >= 0; i--) {
        str = str+b[i];
    }
    console.log(str);
    var c = parseInt(str, 3);
    var d = c.toString(10);
    console.log(d);
};


// 2-1-3

var button7 = function() {
    var a = 1;
    var b = prompt('Введите неотрицательное число');
    b = parseInt(b);
    var sum = 0;
    while(a <= b) {       
       sum += a;  
       a++;
    }
    console.log(sum);
};


// 2-2-1

var button8 = function() {
    var a = prompt('Введите целое число от 1 до 7')
    a = parseInt(a);
    switch(a){
    case 1: console.log('Понедельник'); break;
    case 2: console.log('Вторник'); break;
    case 3: console.log('Среда'); break;
    case 4: console.log('Четверг'); break;
    case 5: console.log('Пятница'); break;
    case 6: if (a == 6) {
        console.log('Ура! Суббота!')
    }; break;
    case 7: if (a == 7) {
        console.log('Ура! Воскресенье!')
    }; break;
    default: console.log('Введите целое число от 1 до 7!')
    }
};


// 2-2-2

var button9 = function() {
    while (a != ' ') {
        if (a == ' ' || a == 'exit') {
            break;
        }
        var a = prompt('Введите команду')
        switch(a){
                case ' ': 
                    break;
                case 'start': 
                    alert('Начало'); 
                    break;
                case 'options': 
                    alert('Опции'); 
                    break;
                case 'exit': 
                    alert('Выход'); 
                    break;
        default: alert('Команда не распознана')
        }
    }   
};


// 2-3-1

var button10 = function() {
    var a = prompt('Введите начальное значение')
    a = parseInt(a);
    var b = prompt('Введите конечное значение')
    b = parseInt(b);
    var n = prompt('Введите количество колонок')
    n = parseInt(n);
    output = '';
    for (i = a; i <= b; i++) {
        output = output + '\t' + a;
        a = a +1;
        if ((i % n) == 0) {
            output = output + "\n";
        }
    }
    console.log(output);
};


// 3-1

var button11 = function() {
    n = prompt('Какой размер обоймы?');
    n = parseInt(n);
    arr = [];
    x = '';
    while (x == '') {
        x = prompt('Нажми ок!');
        if (arr.length == 0) {
            // перезарядка
            for (i = 0; i < n; i++) {
                arr.push('патрон');
            }
        console.log('Перезаряжено. В обойме '+arr.length+' патронов');
        continue;
        }
        // выстрел
        if (arr.length != 0) {
            arr.pop();
        }
        console.log('Выстрел. Осталось '+arr.length+' патронов');
        continue;
    }
};


// 3-2-1

var button12 = function() {
    var x = prompt('Введите количество городов');
    x = parseInt(x);
    arr = [];
    for (i = 0; i < x; i++) {
        arr.push(prompt('Введите название города'));
    }
    console.log(arr);
};


// 3-2-2

var button13 = function() {
    arr = [];
    t = 1;
    while (t != '') {
        t = (prompt('Введите название города'));
            arr;
        if (t == '') break;
        arr.push(t);
    }
    console.log(arr);
};


// 3-3

var button14 = function() {
    x = prompt('Введите максимальное число');
    x = parseInt(x);
    var t = simple(x);

    function simple(max){
        var arr = [];
        for (var i = 2; i <= max; i++){
            arr[i] = true;
        }
        n = 2;
        while (n * n <= max){
            if (arr[n] == true){
                for(i = 2; i * n <= max; i++){
                    arr[i * n] = false;
                }
            }
        n++; 
        }
        return arr; 
    }

    console.log('Простые числа:\n');
    for (i = 2; i <= x; i++){
        if (t[i]) console.log(i + '\t');
    }
};


// 3-4-1 [y = 5 – (x * x/2)]

var button15 = function() {    
    var x = -5;
    var h = 0.5;
    var i = [];
    var str = '(x, y)' + '\n';
    while (x <= 5) {
        var y = 5 - x * x / 2;
        var str = str += x + ', ' + y + '\n';
        var x = x + h;
    }
    
    console.log(str);

};

// 3-4-2

var button16 = function() {
    var x = prompt('Вычисление факториала\nВведите натуральное число');
    x = parseInt(x);
    var result = 1;
    var i = 1;
    while (i <= x) {
        result = result * i;
        i++;
    }
    console.log(result);
};

// 3-4-3

var button17 = function() {
    var n = prompt('Выберите величину массива');
    n = parseInt(n);
    str = '';
    var a = 1;
    arr = [];
    for (i = 0; i < n; i++) {
        if(arr.length > 1) {
            a += arr[arr.length-2];
        }
        arr.push(a);
    }
    str = arr.join(', ');
    console.log(arr);
};


// 3-5

var button18 = function() {
    var n = prompt('Выберите величину массива');
    n = parseInt(n);
    var arr = [];
    str = ' ';
    var max = 100;
    var min = 1;
    for (i = 0; i < n; i++) {
        arr[i] = Math.floor(Math.random()*(max - min + 1)) + min;
    }
    console.log(arr);

    var arr_min = Math.min.apply({},arr);
    var arr_max = Math.max.apply({},arr);
    
    var arr_min_i = arr.indexOf(arr_min);
    var arr_max_i = arr.indexOf(arr_max);
    
    console.log('Array[' + arr_min_i + '] = min (' + arr_min + ')');
    console.log('Array[' + arr_max_i + '] = max (' + arr_max + ')');
};


// 4-1

var button19 = function() {
    
};


// 

var button20 = function() {
    var check = {
        username: 'anna5',
        password: '12345'
    }
    
    a = prompt('Введите логин');
    b = prompt('Введите пароль');
    
    if ((a == check.username) && (b == check.password)) {
        alert('Здравствуй, ' + check.username)
    } else {
        alert('Неверная пара логин-пароль')
    }
};


// 4-3

var button21 = function() {
    
};



// 4-4

var button22 = function() {
    var smart={}
    smart.name='g9100';
    smart['hdd']=8192;//Mb
    smart['ram']=2048;//Mb
    smart.apps=[];//Установленные приложения
    smart.active=[];//Запущенные приложения
    smart.addapp=function(name,hdd,ram){
        x=smart.apps.length;
        smart.apps[x]={};
        smart.apps[x].name=name;
        smart.apps[x].hdd=hdd;
        smart.apps[x].ram=ram;
    }
    
    smart.start=function(n){
        smart.active.push(n);
    }
    
    smart.mystatus=function(){
        usedhdd=0;
        for (i=0;i<smart.apps.length;i++){
            usedhdd+=smart['apps'][i].hdd;
        }
        usedram=120;
        for (i=0;i<smart.active.length;i++){
            j=smart.active[i];
            usedram+=smart['apps'][j].ram;
        }
    console.log('Модель:' +smart.name+' \nЖесткий диск: '+usedhdd+'/'+smart.hdd+'\nПотребление памяти: '+usedram+'/'+smart.ram);
    }
    
    smart.addapp('firefox',30,250);
    smart.addapp('opera',300,200);
    smart.addapp('chrome',50,300);
    smart.addapp('Мимимишки',120,5)
    smart.start(2);
    smart.mystatus();
};






// 7-1

var button33 = function() {
    
}



// 7-2

var button33 = function() {
    
    var red_light = document.getElementById('red_light');
    var yellow_light = document.getElementById('yellow_light');
    var green_light = document.getElementById('green_light');
         
    function timer () { 
        var time_red = prompt('Задайте время работы красного светофора, секунд');
        time_red = parseInt(time_red);
        var time_green = prompt('Задайте время работы зеленого светофора, секунд');
        time_green = parseInt(time_green);
        
        a = time_red * 1000;
        b = time_green * 1000;
      //  while (true){
        setTimeout(function() {
        red_light.style.backgroundColor = 'red'; 
            
            setTimeout(function() { 
                red_light.style.backgroundColor = 'red';
                yellow_light.style.backgroundColor = 'yellow';
                
                setTimeout(function() { 
                    red_light.style.backgroundColor = 'darkgrey';
                    yellow_light.style.backgroundColor = 'darkgrey'; 
                    green_light.style.backgroundColor = 'green';
                    
                    setTimeout(function() {
                        green_light.style.backgroundColor = 'darkgrey';
                        yellow_light.style.backgroundColor = 'yellow';
                        
                        setTimeout(function() {
                            yellow_light.style.backgroundColor = 'darkgrey';
                            red_light.style.backgroundColor = 'red';
        }, 1000);
        }, b);
        }, 1000);
        }, 1000);
        }, a);
            
            //endofwhile
           // }
    }

    timer();                        
};
    
    
// 8-1

var button34 = function () {
    var t = document.getElementsByTagName('form')[0];
    t.addEventListener('click',handler,false)
    var t=document.getElementsByTagName('div')[0];
    t.addEventListener('click',handler,false)
    var t=document.getElementsByTagName('p')[0];
    t.addEventListener('click',handler,false)

    function handler(e) {
        e.preventDefault() // браузер стоять
        this.style.backgroundColor = 'yellow';
        //e.stopPropagation() //событие не всплывать
        console.log(this); alert(e.target+'---'+this);
        return false // Завершение
    }
    alert();
};



