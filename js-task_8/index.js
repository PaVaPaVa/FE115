"use strict";
let Calc = function() {
this.get = function() {
    this.a = +prompt('Введите показания электроэнергии за ПРОШЛЫЙ месяц, кВт*ч');
    this.b = +prompt('Введите показания электроэнергии за ТЕКУЩИЙ месяц, кВт*ч');
    this.c = +prompt('Введите показания воды за ПРОШЛЫЙ месяц, м3:');
    this.d = +prompt('Введите показания воды за ТЕКУЩИЙ месяц, м3:');
    this.e = +prompt('Введите показания по газу за ПРОШЛЫЙ месяц, м3:');
    this.f = +prompt('Введите показания по газу за ТЕКУЩИЙ месяц, м3:');
    this.month = prompt('Введите отчётный месяц (текстом):')
    this._operation();
};
this._operation = function() {
    this.limitElectric = 200;
    let tarifElNominal = 0.255;
    let tarifElExcessNominal = 0.35;
    this.electric = this.b - this.a;
    if(this.electric >= 0 && this.electric <= this.limitElectric) {
        this.electric;
        this.sumElectric = this.electric * tarifElNominal;
    }
    else if (this.electric > this.limitElectric) {
        this.sumElectric = ((this.electric - this.limitElectric) * tarifElExcessNominal) + (this.limitElectric * tarifElNominal);
        this.electric = `${this.electric} кВт*ч ВНИМАНИЕ!!! Превышен лимит ${this.limitElectric}`;
    }
    else this.electric = 'Проверьте введённые данные по электроэнергии, ОШИБКА!';
        this.limitWater = 20;
        let tarifWaterNominal = 1.20;
        let tarifWaterExcessNominal = 1.22;
        this.water = this.d - this.c;
    if(this.water >= 0 && this.water <= this.limitWater) {
        this.water;
        this.sumWater = this.water * tarifWaterNominal;
    }
    else if (this.water > this.limitWater) {
        this.sumWater = ((this.water - this.limitWater) * tarifWaterExcessNominal) + (this.limitWater * tarifWaterNominal);
        this.water = `${this.water} м3 ВНИМАНИЕ!!! Превышен лимит ${this.limitWater}`;
    }
    else this.water = 'Проверьте введённые данные по воде, ОШИБКА!';
        this.limitGas = 400;
        let tarifGasNominal = 0.15;
        let tarifGasExcessNominal = 0.20;
        this.gas = this.f - this.e;
    if(this.gas >= 0 && this.gas <= this.limitGas) {
        this.gas;
        this.sumGas = this.gas * tarifGasNominal;
    }
    else if (this.gas > this.limitWater) {
        this.sumGas = ((this.gas - this.limitGas) * tarifGasExcessNominal) + (this.limitGas * tarifGasNominal);
        this.gas = `${this.gas} м3 ВНИМАНИЕ!!! Превышен лимит ${this.limitGas}`;
    }
    else this.gas = 'Проверьте введённые данные по газу, ОШИБКА!';
this._show();
};

this._show = function() {
alert(`Расход энергоресурсов за ${this.month} составил: \n Электроэнергия:\n ${this.electric} кВт*ч;\n К оплате ${this.sumElectric} BYN; \n Вода: \n ${this.water} м3;\n К оплате ${this.sumWater} BYN; \n Газ: \n ${this.gas} м3;\n К оплате ${this.sumGas} BYN;`)
};
};

let calcEnergy = new Calc();
calcEnergy.get();