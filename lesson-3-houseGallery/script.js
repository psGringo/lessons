const houses = document.querySelectorAll('.house');
const firstHouse = houses[0];
const lastHouse = houses[houses.length - 1];

const progressControl = document.querySelector('progress');
let progressValue = 0;
const buttonLeft = document.querySelector('.buttons__left');
const buttonRight = document.querySelector('.buttons__right');

let leftBorder;
let rightBorder;

function getBorders() {
    leftBorder = progressControl.getBoundingClientRect().left;
    rightBorder = document.querySelector('.buttons__right').getBoundingClientRect().right;
}

function getProgress() {
    return lastHouse.getBoundingClientRect().right - buttonRight.getBoundingClientRect().right;
}

let maxProgressValue = getProgress();
const totalHousesWidth = getHousesRightBorder() - getHousesLeftBorder();
updateControlsState();

function shiftLeftMargin(offset) {
    let marginLeft = parseInt(firstHouse.style.marginLeft, 10) || 0;
    marginLeft += offset;

    if (isNoNeedUpdateLeftMargin(offset)) return
    else
        doShiftLeftMargin(marginLeft);
}

function doShiftLeftMargin(value) {
    firstHouse.style.marginLeft = value.toString() + 'px';
    updateControlsState();
}

function getHousesRightBorder() {
    return lastHouse.getBoundingClientRect().right;
}

function getHousesLeftBorder() {
    return firstHouse.getBoundingClientRect().left
}

function isNoNeedUpdateLeftMargin(marginOffset) {
    return ((marginOffset > 0) && (getHousesLeftBorder() >= leftBorder) || ((marginOffset < 0) && (getHousesRightBorder() <= rightBorder)))
}

function disableButton(button) {
    button.setAttribute("style", "background-color: burlywood;");
}

function enableButton(button) {
    button.setAttribute("style", "background-color: #1C4088;");
}

function updateProgressControl() {
    progressValue = (1 - (getProgress() / maxProgressValue)) * 100;
    document.querySelector('progress').setAttribute('value', progressValue.toString());
}

function getWindowWidth() {
    return window.innerWidth
        || document.documentElement.clientWidth
        || document.body.clientWidth;
}

function updateButtonsState() {

    if (progressValue === 0) disableButton(buttonLeft)
    else
        enableButton(buttonLeft);

    if ((progressValue >= 100) || (lastHouse.getBoundingClientRect().right <= getWindowWidth()))
        disableButton(buttonRight)
    else
        enableButton(buttonRight);
}

function updateControlsState() {
    updateProgressControl();
    updateButtonsState();
}

const shiftWidth = firstHouse.clientWidth / 2;

buttonRight.addEventListener('click', () => {
    shiftLeftMargin(-shiftWidth);
});

buttonLeft.addEventListener('click', () => {
    shiftLeftMargin(shiftWidth);
});

function initialize() {
    maxProgressValue = getProgress();
    getBorders();
    doShiftLeftMargin(0);
    updateButtonsState(0);
}

window.addEventListener('resize', (event) => {
    initialize();
})

window.addEventListener('load', (event) => {
    initialize();
})

