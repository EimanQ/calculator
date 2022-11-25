const btnNum1 = document.querySelector(`#num1`),
    btnNum2 = document.querySelector(`#num2`),
    btnNum3 = document.querySelector(`#num3`),
    btnNum4 = document.querySelector(`#num4`),
    btnNum5 = document.querySelector(`#num5`),
    btnNum6 = document.querySelector(`#num6`),
    btnNum7 = document.querySelector(`#num7`),
    btnNum8 = document.querySelector(`#num8`),
    btnNum9 = document.querySelector(`#num9`),
    btnNum0 = document.querySelector(`#num0`);
const btnPlus = document.querySelector(`#plus`),
    btnMinus = document.querySelector(`#minus`),
    btnDivide = document.querySelector(`#divide`),
    btnMultiply = document.querySelector(`#multiply`),
    btnProcent = document.querySelector(`#procent`),
    btnXY = document.querySelector(`#xy`),
    btnX2 = document.querySelector(`#x2`),
    btnEquals = document.querySelector(`#equals`),
    btnCos = document.querySelector(`#cos`),
    refresh = document.querySelector(`.c-icon`),
    reverse = document.querySelector(`.refresh-icon`),
    btnDelete = document.querySelector(`.clean-icon`);
const mainCalcZone = document.querySelector(`.main-operation`),
    operationZone = document.querySelector(`.calc-operation`);
let firstNumber = ``,
    lastNumber = ``;
let resultOfMath = 0,
    previousNumb = 0;
let archiveOfSymblos = [];
let equalsFlag = false,
    mathFlag = false;


btnNum1.addEventListener(`click`, () => {
    if (resultOfMath === 0 && mathFlag != true) {
        firstNumber += +btnNum1.textContent;
        mainCalcZone.textContent += btnNum1.textContent;
    } else {
        lastNumber += +btnNum1.textContent;
        previousNumb = +lastNumber;
        mainCalcZone.textContent += btnNum1.textContent;
    }
})
btnNum2.addEventListener(`click`, () => {
    if (resultOfMath === 0 && mathFlag != true) {
        firstNumber += +btnNum2.textContent;
        mainCalcZone.textContent += btnNum2.textContent;
    } else {
        lastNumber += +btnNum2.textContent;
        previousNumb = +lastNumber;
        mainCalcZone.textContent += btnNum2.textContent;
    }
})
btnNum3.addEventListener(`click`, () => {
    if (resultOfMath === 0 && mathFlag != true) {
        firstNumber += +btnNum3.textContent;
        mainCalcZone.textContent += btnNum3.textContent;
    } else {
        lastNumber += +btnNum3.textContent;
        previousNumb = +lastNumber;
        mainCalcZone.textContent += btnNum3.textContent;
    }
})
btnNum4.addEventListener(`click`, () => {
    if (resultOfMath === 0 && mathFlag != true) {
        firstNumber += +btnNum4.textContent;
        mainCalcZone.textContent += btnNum4.textContent;
    } else {
        lastNumber += +btnNum4.textContent;
        previousNumb = +lastNumber;
        mainCalcZone.textContent += btnNum4.textContent;
    }
})
btnNum5.addEventListener(`click`, () => {
    if (resultOfMath === 0 && mathFlag != true) {
        firstNumber += +btnNum5.textContent;
        mainCalcZone.textContent += btnNum5.textContent;
    } else {
        lastNumber += +btnNum5.textContent;
        previousNumb = +lastNumber;
        mainCalcZone.textContent += btnNum5.textContent;
    }
})
btnNum6.addEventListener(`click`, () => {
    if (resultOfMath === 0 && mathFlag != true) {
        firstNumber += +btnNum6.textContent;
        mainCalcZone.textContent += btnNum6.textContent;
    } else {
        lastNumber += +btnNum6.textContent;
        previousNumb = +lastNumber;
        mainCalcZone.textContent += btnNum6.textContent;
    }
})
btnNum7.addEventListener(`click`, () => {
    if (resultOfMath === 0 && mathFlag != true) {
        firstNumber += +btnNum7.textContent;
        mainCalcZone.textContent += btnNum7.textContent;
    } else {
        lastNumber += +btnNum7.textContent;
        previousNumb = +lastNumber;
        mainCalcZone.textContent += btnNum7.textContent;
    }
})
btnNum8.addEventListener(`click`, () => {
    if (resultOfMath === 0 && mathFlag != true) {
        firstNumber += +btnNum8.textContent;
        mainCalcZone.textContent += btnNum8.textContent;
    } else {
        lastNumber += +btnNum8.textContent;
        previousNumb = +lastNumber;
        mainCalcZone.textContent += btnNum8.textContent;
    }
})
btnNum9.addEventListener(`click`, () => {
    if (resultOfMath === 0 && mathFlag != true) {
        firstNumber += +btnNum9.textContent;
        mainCalcZone.textContent += btnNum9.textContent;
    } else {
        lastNumber += +btnNum9.textContent;
        previousNumb = +lastNumber;
        mainCalcZone.textContent += btnNum9.textContent;
    }
})
btnNum0.addEventListener(`click`, () => {
    if (resultOfMath === 0 && mathFlag != true) {
        firstNumber += +btnNum0.textContent;
        mainCalcZone.textContent += btnNum0.textContent;
    } else {
        lastNumber += +btnNum0.textContent;
        previousNumb = +lastNumber;
        mainCalcZone.textContent += btnNum0.textContent;
    }
})
btnPlus.addEventListener(`click`, () => {
    if (resultOfMath != 0) {
        operationZone.textContent = `${resultOfMath} + `;
    } else {
        operationZone.textContent = `${firstNumber} + `;
    }
    lastNumber = ``;
    archiveOfSymblos = [];
    archiveOfSymblos.push(`+`);
    mainCalcZone.textContent = ``;
    mathFlag = true;
    equalsFlag = false;
})
btnMinus.addEventListener(`click`, () => {
    if (resultOfMath != 0) {
        operationZone.textContent = `${resultOfMath} - `;
    } else {
        operationZone.textContent = `${firstNumber} - `;
    }
    lastNumber = ``;
    archiveOfSymblos = [];
    archiveOfSymblos.push(`-`);
    mainCalcZone.textContent = ``;
    mathFlag = true;
    equalsFlag = false;
})
btnMultiply.addEventListener(`click`, () => {
    if (resultOfMath != 0) {
        operationZone.textContent = `${resultOfMath} x `;
    } else {
        operationZone.textContent = `${firstNumber} x `;
    }
    lastNumber = ``;
    archiveOfSymblos = [];
    archiveOfSymblos.push(`*`);
    mainCalcZone.textContent = ``;
    mathFlag = true;
    equalsFlag = false;
})
btnDivide.addEventListener(`click`, () => {
    if (resultOfMath != 0) {
        operationZone.textContent = `${resultOfMath} / `;
    } else {
        operationZone.textContent = `${firstNumber} / `;
    }
    lastNumber = ``;
    archiveOfSymblos = [];
    archiveOfSymblos.push(`/`);
    mainCalcZone.textContent = ``;
    mathFlag = true;
    equalsFlag = false;
})
btnXY.addEventListener(`click`, () => {
    if (resultOfMath != 0) {
        operationZone.textContent = `${resultOfMath} ^ `;
    } else {
        operationZone.textContent = `${firstNumber} ^ `;
    }
    lastNumber = ``;
    archiveOfSymblos = [];
    archiveOfSymblos.push(`^`);
    mainCalcZone.textContent = ``;
    mathFlag = true;
    equalsFlag = false;
})
btnX2.addEventListener(`click`, () => {
    if (resultOfMath != 0) {
        operationZone.textContent = `${resultOfMath} ^ 2`;
    } else {
        operationZone.textContent = `${firstNumber} ^ 2`;
    }
    lastNumber = ``;
    archiveOfSymblos = [];
    archiveOfSymblos.push(`^2`);
    mainCalcZone.textContent = ``;
    mathFlag = true;
    equalsFlag = false;
})
btnProcent.addEventListener(`click`, () => {
    if (resultOfMath != 0) {
        operationZone.textContent = `${resultOfMath} % `;
    } else {
        operationZone.textContent = `${firstNumber} % `;
    }
    lastNumber = ``;
    archiveOfSymblos = [];
    archiveOfSymblos.push(`%`);
    mainCalcZone.textContent = ``;
    mathFlag = true;
    equalsFlag = false;
})
btnCos.addEventListener(`click`, () => {
    if (resultOfMath != 0) {
        operationZone.textContent = `cos(${resultOfMath})`;
    } else {
        operationZone.textContent = `cos(${firstNumber})`;
    }
    lastNumber = ``;
    archiveOfSymblos = [];
    archiveOfSymblos.push(``);
    mainCalcZone.textContent = ``;
    mathFlag = true;
    equalsFlag = false;
})
btnEquals.addEventListener(`click`, () => {
    if (archiveOfSymblos.includes(`+`)) {
        if (resultOfMath != 0 && equalsFlag === true) {
            operationZone.textContent = `${resultOfMath} + ${previousNumb}`;
            resultOfMath += +previousNumb;
            mainCalcZone.textContent = resultOfMath;
            equalsFlag = false;
        } else if (equalsFlag === false && resultOfMath === 0) {
            resultOfMath = +firstNumber + +lastNumber;
            operationZone.textContent = `${firstNumber} + ${lastNumber}`;
            mainCalcZone.textContent = resultOfMath;
            lastNumber = ``;
            mathFlag = false;
            equalsFlag = true;
        } else {
            operationZone.textContent = `${resultOfMath} + ${previousNumb}`;
            resultOfMath += +previousNumb;
            mainCalcZone.textContent = resultOfMath;
        }
    }
    if (archiveOfSymblos.includes(`-`)) {
        if (resultOfMath != 0 && equalsFlag === true) {
            operationZone.textContent = `${resultOfMath} - ${previousNumb}`;
            resultOfMath -= +previousNumb;
            mainCalcZone.textContent = resultOfMath;
            equalsFlag = false;
        } else if (equalsFlag === false && resultOfMath === 0) {
            resultOfMath = +firstNumber - +lastNumber;
            operationZone.textContent = `${firstNumber} - ${lastNumber}`;
            mainCalcZone.textContent = resultOfMath;
            lastNumber = ``;
            mathFlag = false;
            equalsFlag = true;
        } else {
            operationZone.textContent = `${resultOfMath} - ${previousNumb}`;
            resultOfMath -= +previousNumb;
            mainCalcZone.textContent = resultOfMath;
        }
    }
    if (archiveOfSymblos.includes(`*`)) {
        if (resultOfMath != 0 && equalsFlag === true) {

            operationZone.textContent = `${resultOfMath} x ${previousNumb}`;
            resultOfMath *= +previousNumb;
            mainCalcZone.textContent = resultOfMath;
            equalsFlag = false;
        } else if (equalsFlag === false && resultOfMath === 0) {

            resultOfMath = +firstNumber * +lastNumber;
            operationZone.textContent = `${firstNumber} x ${lastNumber}`;
            mainCalcZone.textContent = resultOfMath;
            lastNumber = ``;
            mathFlag = false;
            equalsFlag = true;
        } else {
            operationZone.textContent = `${resultOfMath} x ${previousNumb}`;
            resultOfMath *= +previousNumb;
            mainCalcZone.textContent = resultOfMath;
        }
    }
    if (archiveOfSymblos.includes(`/`)) {
        if (resultOfMath != 0 && equalsFlag === true) {

            operationZone.textContent = `${resultOfMath} / ${previousNumb}`;
            resultOfMath /= +previousNumb;
            mainCalcZone.textContent = resultOfMath;
            equalsFlag = false;
        } else if (equalsFlag === false && resultOfMath === 0) {

            resultOfMath = +firstNumber / +lastNumber;
            operationZone.textContent = `${firstNumber} / ${lastNumber}`;
            mainCalcZone.textContent = resultOfMath;
            lastNumber = ``;
            mathFlag = false;
            equalsFlag = true;
        } else {
            operationZone.textContent = `${resultOfMath} / ${previousNumb}`;
            resultOfMath /= +previousNumb;
            mainCalcZone.textContent = resultOfMath;
        }
    }
    if (archiveOfSymblos.includes(`^`)) {
        if (resultOfMath != 0 && equalsFlag === true) {

            operationZone.textContent = `${resultOfMath} ^ ${previousNumb}`;
            resultOfMath **= +previousNumb;
            mainCalcZone.textContent = resultOfMath;
            equalsFlag = false;
        } else if (equalsFlag === false && resultOfMath === 0) {
            resultOfMath = firstNumber ** +lastNumber;
            operationZone.textContent = `${firstNumber} ^ ${lastNumber}`;
            mainCalcZone.textContent = resultOfMath;
            lastNumber = ``;
            mathFlag = false;
            equalsFlag = true;
        } else {
            operationZone.textContent = `${resultOfMath} ** ${previousNumb}`;
            resultOfMath **= +previousNumb;
            mainCalcZone.textContent = resultOfMath;
        }
    }
    if (archiveOfSymblos.includes(`^2`)) {
        if (resultOfMath != 0 && equalsFlag === true) {
            operationZone.textContent = `${resultOfMath} ^ 2`;
            resultOfMath **= 2;
            mainCalcZone.textContent = resultOfMath;
            equalsFlag = false;
        } else if (equalsFlag === false && resultOfMath === 0) {
            resultOfMath = firstNumber ** 2;
            operationZone.textContent = `${firstNumber} ^ ${2}`;
            mainCalcZone.textContent = resultOfMath;
            lastNumber = ``;
            mathFlag = false;
            equalsFlag = true;
        } else {
            operationZone.textContent = `${resultOfMath} ^ 2`;
            resultOfMath **= 2;
            mainCalcZone.textContent = resultOfMath;
        }
    }
    if (archiveOfSymblos.includes(`%`)) {
        if (resultOfMath != 0 && equalsFlag === true) {
            operationZone.textContent = `${resultOfMath} % ${previousNumb}`;
            resultOfMath = (resultOfMath * +previousNumb) / 100;
            mainCalcZone.textContent = resultOfMath;
            equalsFlag = false;
        } else if (equalsFlag === false && resultOfMath === 0) {
            resultOfMath = (+firstNumber * +lastNumber) / 100;
            operationZone.textContent = `${firstNumber} % ${lastNumber}`;
            mainCalcZone.textContent = resultOfMath;
            lastNumber = ``;
            mathFlag = false;
            equalsFlag = true;
        } else {
            operationZone.textContent = `${resultOfMath} % ${previousNumb}`;
            resultOfMath = (resultOfMath * +previousNumb) / 100;
            mainCalcZone.textContent = resultOfMath;
        }
    }
})

refresh.addEventListener(`click`, () => {
    resultOfMath = 0;
    mathFlag = false;
    firstNumber = ``;
    lastNumber = ``;
    operationZone.textContent = ``;
    mainCalcZone.textContent = ``;
});

btnDelete.addEventListener(`click`, () => {
    if (resultOfMath.length != 0 && resultOfMath != 0) {
        resultOfMath = resultOfMath + ``
        resultOfMath = resultOfMath.split(``).filter((el, index) => index < resultOfMath.length - 1).join(``);
        mainCalcZone.textContent = `${resultOfMath}`;
        console.log(Number(resultOfMath));
    } else if (archiveOfSymblos.length != 0) {
        if (lastNumber.length === 1) {
            lastNumber = `0`;
            mainCalcZone.textContent = ``;
        } else {
            lastNumber = lastNumber.split(``).filter((el, index) => index < lastNumber.length - 1).join(``);
            mainCalcZone.textContent = `${lastNumber}`;
        }
    } else {
        if (firstNumber.length === 1) {
            firstNumber = `0`;
            mainCalcZone.textContent = ``;
        } else {
            firstNumber = firstNumber.split(``).filter((el, index) => index < firstNumber.length - 1).join(``);
            mainCalcZone.textContent = `${firstNumber}`;
        }
    }
})

reverse.addEventListener(`click`, () => {
    if (resultOfMath != `0`) {
        resultOfMath = resultOfMath + ``;
        if (resultOfMath.length > 1) {
            resultOfMath = resultOfMath.split(``).reverse().join(``);
            resultOfMath = +resultOfMath;
            mainCalcZone.textContent = `${resultOfMath}`;
        }
    } else if (archiveOfSymblos.length != 0) {
        if (lastNumber.length > 1) {
            lastNumber = lastNumber.split(``).reverse().join(``);
            mainCalcZone.textContent = `${lastNumber}`;
        }
    } else {
        if (firstNumber.length > 1) {
            firstNumber = firstNumber.split(``).reverse().join(``);
            mainCalcZone.textContent = `${firstNumber}`;
        }
    }
})