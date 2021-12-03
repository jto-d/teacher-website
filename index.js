var pictureNum = 1;
const pictureOne = "boogaard.jpeg";
const pictureTwo = "3678016F-1A6A-45B0-86C4-CD2724FF92E6.jpg";
const pictureThree = "F02370A4-A6AD-432F-BD0B-7DFEB05A21E9.jpg";
const pictureFour = "67389675-863F-4CF0-BF45-85DFC931946B.jpg"
const pictureFive = "574EAE32-532A-4E0A-B9D7-969958E9C68C.jpg";
var numbers =['indexOne', 'indexTwo', 'indexThree', 'indexFour', 'indexFive'];
var pictures = [pictureOne, pictureTwo, pictureThree, pictureFour, pictureFive];

function rightArrow(){
    console.log('right arrow');
    if(pictureNum < pictures.length-1){
        pictureNum++;

    }
    else{
        pictureNum = 0;
    }
    document.getElementById('mainPicture').src = pictures[pictureNum];
    console.log(pictureNum);
    
    for(var i = 0;i<pictures.length;i++){
        if(i==pictureNum){
            document.getElementById(numbers[pictureNum]).style.color = "red";
        }
        else{
            document.getElementById(numbers[i]).style.color = "blue";
        }
        
    }
   
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