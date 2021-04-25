function changeHousesLeftMargin(marginOffset) {
    let marginLeft = parseInt(document.getElementById('house1').style.marginLeft, 10) || 0;
    marginLeft += marginOffset;
    document.getElementById('house1').style.marginLeft = marginLeft.toString() + 'px';
    const progressValue = Math.random() * 100;
    document.getElementById('progress').setAttribute('value', progressValue.toString());
}

const houseWidth = document.getElementById('house1').clientWidth;

const buttonRight = document.getElementsByClassName('sliderNavigation__buttons_right')[0];
buttonRight.addEventListener('click', () => {
    changeHousesLeftMargin(houseWidth);
});

const buttonLeft = document.getElementsByClassName('sliderNavigation__buttons_left')[0];
buttonLeft.addEventListener('click', () => {
    changeHousesLeftMargin(-houseWidth);
});
