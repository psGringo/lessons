function changeHousesLeftMargin(marginOffset) {
    let marginLeft = parseInt(document.getElementById('house1').style.marginLeft, 10) || 0;
    marginLeft += marginOffset;
    document.getElementById('house1').style.marginLeft = marginLeft.toString() + 'px';
    const progressValue = Math.random() * 100;
    document.getElementById('progressBar').setAttribute('value', progressValue.toString());
}

const houseWidth = document.getElementById('house1').clientWidth / 2;

const buttonRight = document.getElementsByClassName('navigationButtons-left')[0];
buttonRight.addEventListener('click', () => {
    changeHousesLeftMargin(houseWidth);
});

const buttonLeft = document.getElementsByClassName('navigationButtons-right')[0];
buttonLeft.addEventListener('click', () => {
    changeHousesLeftMargin(-houseWidth);
});

function IsLeftButtonEnabled(){

}