const firstHouse = document.getElementById('house1');
const lastHouse = document.getElementById('house4');
const progressBar = document.getElementById('progressBar');
const progressLeftBorder = progressBar.getBoundingClientRect().left;
const progressRightBorder = progressBar.getBoundingClientRect().right;
const buttonLeft = document.getElementsByClassName('navigationButtons-left')[0];
const buttonRight = document.getElementsByClassName('navigationButtons-right')[0];

function getHousesRightBorder() {
    return lastHouse.getBoundingClientRect().right;
}

function getHousesLeftBorder() {
    return firstHouse.getBoundingClientRect().left
}

let totalHousesWidth = getHousesRightBorder() - progressRightBorder;
disableNavButtonsIfNeeded(0);

function changeHousesLeftMargin(marginOffset) {
    let marginLeft = parseInt(document.getElementById('house1').style.marginLeft, 10) || 0;
    marginLeft += marginOffset;

    if ((marginOffset > 0) && (getHousesLeftBorder() >= progressLeftBorder) || (marginOffset < 0) && (getHousesRightBorder() <= progressRightBorder))
        return;

    // -- shift
    firstHouse.style.marginLeft = marginLeft.toString() + 'px';
    const currentProgress = (1 - ((getHousesRightBorder() - progressRightBorder) / totalHousesWidth)) * 100;
    disableNavButtonsIfNeeded(currentProgress);
    document.getElementById('progressBar').setAttribute('value', currentProgress.toString());
}

function disableNavButtonsIfNeeded(currentProgress) {
    if (currentProgress == 0) {
        buttonLeft.setAttribute("style", "background-color: antiquewhite;");
    } else
        buttonLeft.setAttribute("style", "background-color: #1C4088;");

    if (currentProgress >= 100) {
        buttonRight.setAttribute("style", "background-color: antiquewhite;");
    } else
        buttonRight.setAttribute("style", "background-color: #1C4088;");
}

const shiftWidth = document.getElementById('house1').clientWidth / 2;

buttonRight.addEventListener('click', () => {
    changeHousesLeftMargin(-shiftWidth);
});

buttonLeft.addEventListener('click', () => {
    changeHousesLeftMargin(shiftWidth);
});

