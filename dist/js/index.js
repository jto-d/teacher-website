var pictureNum = 1;
const pictureOne = "home-pictures/boogaard.jpeg";
const pictureTwo = "home-pictures/574EAE32-532A-4E0A-B9D7-969958E9C68C.jpg";
const pictureThree = "home-pictures/E-Nwyl_XMAYD5W-.jpeg";
const pictureFour = "home-pictures/F02370A4-A6AD-432F-BD0B-7DFEB05A21E9.jpg"
const pictureFive = "home-pictures/3678016F-1A6A-45B0-86C4-CD2724FF92E6.jpg";
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
    console.log('jack');
    
    
    clearInterval(Interval);
    Interval = setInterval(startTimer, 5000);
    if(x==1){
        pictureNum = 0;
    }
    else{
        pictureNum = x-1;
    }
    for(var i = 0;i<numbers.length;i++){
        if(i!=pictureNum){
            document.getElementById(numbers[i]).style.color = "white";
        }
    }
    document.getElementById(numbers[pictureNum]).style.color = "aqua";
    document.getElementById('mainPicture').src = pictures[x-1];
}

var a = document.getElementsByClassName("slideshow");
$(a).on('click', function() {
    if ($('#form').css('opacity') == 0) $('#form').css('opacity', 1);
    else $('#form').css('opacity', 0);
});

function clubs(x){
    if(x == 'acc'){
        if(document.getElementById('acc').style.display = 'none'){
            document.getElementById('acc').style.display = 'block'
            document.getElementById('mun').style.display = 'none'
        }
        else{

        }
    }
    if(x == 'mun'){
        if(document.getElementById('mun').style.display = 'none'){
            document.getElementById('mun').style.display = 'block';
            document.getElementById('acc').style.display = 'none';
        }
    }
}