var pictureNum = 1;
const pictureOne = "boogaard.jpeg";
const pictureTwo = "new-arrow.png";
var numbers =['indexOne', 'indexTwo', 'indexThree', 'indexFour', 'indexFive'];
var pictures = [pictureOne, pictureTwo];

function rightArrow(){
    console.log('right arrow');
    if(pictureNum < 1){
        pictureNum++;

    }
    else{
        pictureNum = 0;
    }
    document.getElementById('mainPicture').src = pictures[pictureNum];
    document.getElementById(numbers[pictureNum]).style.color = "white";
    document.getElementById(numbers[pictureNum]).style.color = "black";
}

function leftArrow(){
    console.log(pictureNum);
    if(pictureNum > 0){
        pictureNum--;
    }
    else{
        pictureNum = pictures.length-1;
    }
    document.getElementById('mainPicture').src = pictures[pictureNum];
}