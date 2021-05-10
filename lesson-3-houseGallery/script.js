const firstHouse = document.getElementById('house1');
const lastHouse = document.getElementById('house4');
const progressBar = document.getElementById('progressBar');
const progressLeftBorder = progressBar.getBoundingClientRect().left;
const progressRightBorder = progressBar.getBoundingClientRect().right;

function getHousesRightBorder(){
    return lastHouse.getBoundingClientRect().right;
}

function getHousesLeftBorder(){
    return firstHouse.getBoundingClientRect().left
}

const total = getHousesRightBorder() - progressRightBorder;

function changeHousesLeftMargin(marginOffset) {
    let marginLeft = parseInt(document.getElementById('house1').style.marginLeft, 10) || 0;
    marginLeft += marginOffset;

    if ((marginOffset > 0) && (getHousesLeftBorder() >= progressLeftBorder))
        return;

    if ((marginOffset < 0) && (getHousesRightBorder() <= progressRightBorder))
        return;


    // -- shift
    firstHouse.style.marginLeft = marginLeft.toString() + 'px';
    const currentProgress = (1 - ((getHousesRightBorder() - progressRightBorder) / total)) * 100;
    document.getElementById('progressBar').setAttribute('value', currentProgress.toString());
}

const houseWidth = document.getElementById('house1').clientWidth / 2;

const buttonRight = document.getElementsByClassName('navigationButtons-right')[0];
buttonRight.addEventListener('click', () => {
    changeHousesLeftMargin(-houseWidth);
    // disable on the border
});

const buttonLeft = document.getElementsByClassName('navigationButtons-left')[0];
buttonLeft.addEventListener('click', () => {
    changeHousesLeftMargin(houseWidth);
    // disable on the border
});

