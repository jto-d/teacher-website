var pictureNum = 1;
const pictureOne = "home-pictures/boogaard.jpeg";
const pictureTwo = "home-pictures/3678016F-1A6A-45B0-86C4-CD2724FF92E6.jpg";
const pictureThree = "home-pictures/F02370A4-A6AD-432F-BD0B-7DFEB05A21E9.jpg";
const pictureFour = "home-pictures/67389675-863F-4CF0-BF45-85DFC931946B.jpg"
const pictureFive = "home-pictures/574EAE32-532A-4E0A-B9D7-969958E9C68C.jpg";
var numbers =['indexOne', 'indexTwo', 'indexThree', 'indexFour', 'indexFive'];
var pictures = [pictureOne, pictureTwo, pictureThree, pictureFour, pictureFive];
var Interval;
var seconds;
var miliseconds;
var Interval;

window.onload = function() { 
    Interval = setInterval(startTimer, 5000);
    
}

function startTimer(){
        console.log("run");
        document.getElementById('mainPicture').src = pictures[pictureNum];
        
        for(var i = 0;i<numbers.length;i++){
            if(i!=pictureNum){
                document.getElementById(numbers[i]).style.color = "white";

            }
        }
        
        document.getElementById(numbers[pictureNum]).style.color = "aqua";
        if(pictureNum > pictures.length-2){
            pictureNum = 0;
        }
        else{
            pictureNum++;
        }
}

function numClick(x){
    console.log(x);
    clearInterval(Interval);
    Interval = setInterval(startTimer, 5000);
    pictureNum = x-1;
    for(var i = 0;i<numbers.length;i++){
        if(i!=pictureNum){
            document.getElementById(numbers[i]).style.color = "white";

        }
    }
    
    document.getElementById(numbers[pictureNum]).style.color = "aqua";
    document.getElementById('mainPicture').src = pictures[x-1];
}