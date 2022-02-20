function delivery() {
    let doc = document,
        fieldName = null,
        fieldPhone = null,
        fieldEmail = null,
        fieldDeliveryMethod = null,
        fieldDateCurrent = null,
        fiedDistA = null,
        fiedDistB = null,
        fiedDateDeparture = null,
        fiedDateDelivery = null,
        dataArray = [];
        distances = [
            {
                a: 'Минск',
                b: 'Гродно',
                c: 278
            },
            {
                a: 'Минск',
                b: 'Гомель',
                c: 313
            },
            {
                a: 'Минск',
                b: 'Брест',
                c: 348
            },
            {
                a: 'Минск',
                b: 'Витебск',
                c: 290
            },
            {
                a: 'Минск',
                b: 'Могилёв',
                c: 198
            },
            {
                a: 'Гродно',
                b: 'Гомель',
                c: 595
            },
            {
                a: 'Гродно',
                b: 'Брест',
                c: 251
            },
            {
                a: 'Гродно',
                b: 'Витебск',
                c: 569
            },
            {
                a: 'Гродно',
                b: 'Могилёв',
                c: 481
            },
            {
                a: 'Гомель',
                b: 'Брест',
                c: 530
            },
            {
                a: 'Гомель',
                b: 'Витебск',
                c: 337
            },
            {
                a: 'Гомель',
                b: 'Могилёв',
                c: 183
            },
            {
                a: 'Брест',
                b: 'Витебск',
                c: 630
            },
            {
                a: 'Брест',
                b: 'Могилёв',
                c: 534
            },
            {
                a: 'Витебск',
                b: 'Могилёв',
                c: 161
            }
        ],
        prices = [
            {
                method: 'самолёт',
                price: 3
            },
            {
                method: 'такси',
                price: 0.5
            },
            {
                method: 'частный водитель',
                price: 0.8
            },
            {
                method: 'пеший курьер',
                price: 0.1
            }
        ];   
    function showForm() {
        // ВВОДИМ ПЕРЕМЕННЫЕ
        let form = doc.createElement('form'),
            fio = doc.createElement('input'),
            phone = doc.createElement('input'),
            email = doc.createElement('input'),
            deliveryMethod = doc.createElement('select'),  
            today = doc.createElement('input'),
            departurePoint = doc.createElement('select'),
            deliveryPoint = doc.createElement('select'), 
            departureDate = doc.createElement('input'),
            deliveryDate = doc.createElement('input'),
            button = doc.createElement('button'),
    
            deliveryMethods = ['самолёт', 'такси', 'частный водитель', 'пеший курьер'],
            destinations = ['Минск', 'Гродно', 'Гомель', 'Брест', 'Витебск', 'Могилёв'];  

        // РАССТОЯНИЯ МЕЖДУ ГОРОДАМИ
    
        // ДОБАВЛЯЕМ АТРИБУТЫ
        fio.setAttribute('type','text');
        fio.setAttribute('class','inputs');
        fio.setAttribute('placeholder','ФИО');
        fio.required ='true';  // по умолчанию false. Делает поле обязательным
    
        phone.setAttribute('type','tel');
        phone.setAttribute('class','inputs');
        phone.setAttribute('placeholder','Введите номер');
        phone.required ='true';
    
        email.setAttribute('type','email');
        email.setAttribute('class','inputs');
        email.setAttribute('placeholder','Введите email');
        email.required ='true';
    
        deliveryMethod.setAttribute('type','select');
        deliveryMethod.setAttribute('class','inputs');
        deliveryMethod.required ='true';
    
    /// Добавляем опции (способ доставки)
        let deliveryMethodOption = createSelects(deliveryMethods);
        deliveryMethodOption.map(option => {
            deliveryMethod.append(option);
        });
    
        today.setAttribute('type','datetime');
        today.setAttribute('class','inputs');
        today.disabled = true; // Блокирует доступ к данным.
        let newToday = new Date(),
            day = newToday.getDate(),
            mounth = newToday.getMonth()+ 1;
            hour = newToday.getHours();
            minutes = newToday.getMinutes();
            seconds = newToday.getSeconds();
        function getZero(el) {  // Добавляем 0 перед однозначными данными Date()
            if(el < 10) el ='0'+ el;
            return el
        };
        today.value =`${getZero(day)}/${getZero(mounth)}/${newToday.getFullYear()}; ${getZero(hour)}:${getZero(minutes)}:${getZero(seconds)}`;
    
        departurePoint.setAttribute('type','select');
        departurePoint.setAttribute('class','inputs');
    
        deliveryPoint.setAttribute('type','select');
        deliveryPoint.setAttribute('class','inputs');
    
    /// Добавляем опции (откуда -куда)
        let departurePointOption = createSelects(destinations);
        departurePointOption.map(option => {
            departurePoint.append(option);
        });
        let deliveryPointOption = createSelects(destinations);
        deliveryPointOption.map(option => {
            deliveryPoint.append(option);
        });
    
        departureDate.setAttribute('type', 'date');
        departureDate.setAttribute('class','inputs');
        departureDate.required ='true';
    
        deliveryDate.setAttribute('type', 'date');
        deliveryDate.setAttribute('class','inputs');
        deliveryDate.required ='true';
    
        button.setAttribute('type', 'text');
        button.setAttribute('class','button');
        button.innerHTML='Рассчитать стоимость';
        form.addEventListener('submit', (event) => {
            formHandler(event, form, departurePoint, deliveryPoint);
        });
        
        form.append(fio, phone, email, deliveryMethod, today, departurePoint, deliveryPoint, departureDate, deliveryDate, button);
        doc.body.append(form);

    };
    
        function createSelects(data) { //ф-я обработчик, закидываем массив на место date c транспортом и т.д.
            return data.map(elem => { 
                let option = doc.createElement('option')
                option.setAttribute('value', elem)
                option.innerText = elem;
                return option
            });
        }
        function formHandler(event, container, dep, dest){
            event.preventDefault();  /// отмена действия браузера по умолчанию
            if(dep.value == dest.value) return
            [...container.children].map((elem, i) => {
                if(elem.tagName != "BUTTON") dataArray[i] = elem.value
            });
            [fieldName,
            fieldPhone, 
            fieldEmail, 
            fieldDeliveryMethod, 
            fieldDateCurrent, 
            fiedDistA, 
            fiedDistB, 
            fiedDateDeparture, 
            fiedDateDelivery] = dataArray;
            console.log(dataArray);
            let price= calculation();
            showCalculation(price);
        };

        function calculation() {
            let distA = fiedDistA,
                distB = fiedDistB,
                method = fieldDeliveryMethod;
            let dist = distances.find(elem =>{
                if((elem.a == distA || elem.b == distA) && (elem.a == distB || elem.b == distB)) {
                    return elem
            }
        });
        let coof = prices.find(elem => elem.method == method ? elem : null);
        return dist.c * coof.price;
        }
    

        function showCalculation(price) {
            if(doc.body.lastChild.className != 'price') {
                let priceFinaly = doc.createElement('div');
                priceFinaly.setAttribute('class', 'price');
                priceFinaly.innerText = `Заказчик: ${fieldName},
                Стоимость доставки: ${price}$,
                Тип доставки: ${fieldDeliveryMethod},
                Пункт отправки: ${fiedDistA},
                Пункт назначения: ${fiedDistB},
                Дата отправки: ${fiedDateDeparture},
                Дата доставки: ${fiedDateDelivery}.`;
                doc.body.append(priceFinaly)
            } 
            else {
                doc.body.lastChild.innerText = `Заказчик: ${fieldName},
                Стоимость доставки: ${price}$,
                Тип доставки: ${fieldDeliveryMethod},
                Пункт отправки: ${fiedDistA},
                Пункт назначения: ${fiedDistB},
                Дата отправки: ${fiedDateDeparture},
                Дата доставки: ${fiedDateDelivery}.`;
            }
        }   
    showForm()
}
window.addEventListener('DOMContentLoaded', delivery);

