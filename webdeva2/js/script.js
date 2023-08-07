//buttons for each page
const page1btn=document.querySelector("#homeButton");
const page2btn=document.querySelector("#cppButton");
const page3btn=document.querySelector("#pyButton");

//execute buttons for home page
const homeCalcButton = document.querySelectorAll(".homeCalcButton")[0];
const homeCalcButton2 = document.querySelectorAll(".homeCalcButton")[1];

//result boxes for home page
const code = document.querySelectorAll(".Code")[0];
const code2 = document.querySelectorAll(".Code")[1];

//navigation bar button to toggle hamburger
const navBarButton = document.querySelector("#NavBar");

//hamburger content
const hamburgerContent = document.querySelectorAll(".navItem");

//intro scroll button
//const introButton = document.querySelector("#scrollIntro");

//button toggle light & dark mode
const switchButton = document.querySelector("#darkModeButton");

//extra images in python site
const extraButton = document.querySelector(".extra");

//title and execute buttons in cpp site for cout, cin, if else
const coutTitleBtn = document.querySelector("#coutTitle");
const coutExecBtn = document.querySelector("#coutExec");

const cinTitleBtn = document.querySelector("#cinTitle");
const cinExecBtn = document.querySelector("#cinExec");

const ifElseTitleBtn = document.querySelector("#ifElseTitle");
const ifElseExecBtn = document.querySelector("#ifElseExec");

//title and execute buttons in python site for print, input, if
const printTitleBtn = document.querySelector("#printTitle");
const printExecBtn = document.querySelector("#printExec");
const inputTitleBtn = document.querySelector("#inputTitle");
const inputExecBtn = document.querySelector("#inputExec");
const ifTitleBtn = document.querySelector("#ifTitle");
const ifExecBtn = document.querySelector("#ifExec");

//pages for site and choose which to show or not
var allpages=document.querySelectorAll(".page");

//transition storage units
var currTransition;
var currTransitionX;
var currTransitionY;
var currDestinationX;
var currDestinationY;
var currItem;
//select all subtopic pages

hideall();
function hideall(){ //function to hide all pages
    for(let onepage of allpages){ //go through all subtopic pages
        onepage.style.display="none"; //hide it
    }
}

function show(pgno){ //function to show selected page no
    hideall();
    //select the page based on the parameter passed in
    let onepage=document.querySelector("#page"+pgno);
    //show the page
    onepage.style.display="block";
}

//example code in homepge function
function showExample(){
    console.log("hi");
    code.innerHTML = "<div>Answer : 10</div>";
}
function showCalculationExample(){
    var a = parseInt(document.getElementById("calc1").value);
    var b = parseInt(document.getElementById("calc2").value);
    code2.innerHTML = "<div>Answer : "+ String(a+b) + "</div>";
}
//toggle the hamburger by check its concurrent display type
function toggleBurg(){
    if (document.documentElement.clientWidth < 800){
        var newDisplay;
        if (hamburgerContent[1].style.display == "none"){
            newDisplay = "flex";
        }
        else{
            newDisplay = "none";
        }
        for (let hamContentNum = 1; hamContentNum < hamburgerContent.length; hamContentNum++){
            hamburgerContent[hamContentNum].style.display = newDisplay;
        }
    }
}
//function scrollTo(id){
    //window.scrollTo(Document.querySelector(id).style.left,document.querySelector(id).style.top);
//}

//moves the element to its target destination
function goToByID(id,startX,startY,destionationx,destionationy){
    if (currTransition != null){
        //auto sets the position if another transition is requested
        clearInterval(currTransition);
        currItem.style.left = currDestinationX + "px";
        currItem.style.top = currDestinationY + "px";
    }
    currDestinationX = destionationx;
    currDestinationY = destionationy;
    currItem = document.getElementById(id);
    currTransitionX = startX;
    currTransitionY = startY;
    //sets interval for smoother movement
    currTransition = setInterval(function(){translate(currItem,currDestinationX,currDestinationY); },0);
}
function translate(id,x,y){
    //runs at 60fps
    currTransitionX += (x - currTransitionX) * 0.0166666666667;
    currTransitionY += (y - currTransitionY) * 0.0166666666667;
    id.style.left = currTransitionX + "px";
    id.style.top = currTransitionY + "px";
    //auto clear interval once reaches a close enough position
    if (Math.abs(currTransitionX - x) < 0.1 && Math.abs(currTransitionY - y) < 0.1){
        clearInterval(currTransition);
    }
    console.log(currTransitionX);
}
function toggleLight(){
    //toggles the attribute for multiple colours to take effect
    if (document.documentElement.getAttribute('data-theme') == "dark"){
        switchButton.innerHTML = "Dark Mode";
        document.documentElement.setAttribute('data-theme', 'light');
    }
    else{
        switchButton.innerHTML = "Light Mode";
        document.documentElement.setAttribute('data-theme', 'dark');
    }
}
/*Listen for clicks on the buttons, assign anonymous
eventhandler functions to call show function*/
if (page1btn != null)
page1btn.addEventListener("click", function () { show(0); });
if (page2btn != null)
page2btn.addEventListener("click", function () { show(1); });
if (page3btn != null)
page3btn.addEventListener("click", function () { show(2); });

//assigns example code execute function to their results
if (homeCalcButton != null){
    homeCalcButton.addEventListener("click", function() { showExample(); });
}
if (homeCalcButton2 != null){
    homeCalcButton2.addEventListener("click", function() { showCalculationExample(); });
}

//assigns navbar button to toggle hamburger function
if (navBarButton != null){
    navBarButton.addEventListener("click", function() { toggleBurg(); });
}

//if (introButton != null){
    //introButton.addEventListener("click", function() { scrollTo("#Intro"); });
//}

//assigns darklightmode button to the toggle light function
if (switchButton != null){
    switchButton.addEventListener("click", function() { toggleLight();});
}

//assigns the extra button to set display to flex
if (extraButton != null){
    extraButton.addEventListener("click", function() {document.querySelector(".extraClicked").style.display = "flex"; });
}
//sets the title button to its description of lessons cout, cin & ifElse
if (coutTitleBtn != null){
    coutTitleBtn.addEventListener("click", function(){document.querySelector("#coutDesc").style.display = "flex";
    const isCom = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0) > 800;
    goToByID("coutDesc",(isCom * -100) - 200,0, -50 - (isCom * 150),0);});
}
if (cinTitleBtn != null){
    cinTitleBtn.addEventListener("click", function(){document.querySelector("#cinDesc").style.display = "flex";
    const isCom = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0) > 800;
    goToByID("cinDesc",(isCom * -100) - 200,0, -50 - (isCom * 150),0);});
}
if (ifElseTitleBtn != null){
    ifElseTitleBtn.addEventListener("click", function(){document.querySelector("#ifElseDesc").style.display = "flex";
    const isCom = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0) > 800;
    goToByID("ifElseDesc",(isCom * -100) - 200,0, -50 - (isCom * 150),0);});
}
//sets the execute buttons to display result
if (coutExecBtn != null){
    //displays input field value
    coutExecBtn.addEventListener("click", function(){ document.querySelector("#coutResult").innerHTML = "Result: " + document.querySelector("#coutInput").value; console.log(document.getElementById("coutInput"));});
}
if (cinExecBtn != null){
    //checks for answer, and displays error if desired answer was not found
    cinExecBtn.addEventListener("click", function(){
        var ans;
        if (document.querySelector("#cinInput").value == "std::cin"){
            ans = "<input>";
        }
        else{
            ans = "Error : " + document.querySelector("#cinInput").value + " not defined.";
        }
        document.querySelector("#cinResult").innerHTML = "Result: " + ans; 
        });
}
if (ifElseExecBtn != null){
    ifElseExecBtn.addEventListener("click", function(){
        var ans;
        if (document.querySelector("#ifElseInput").value == "if"){
            ans = "Correct";
        }
        else{
            ans = "Error : " + document.querySelector("#ifElseInput").value + " not defined.";
        }
        document.querySelector("#ifElseResult").innerHTML = "Result: " + ans; 
    });
}

// sets execute button and title to print, input & if statements for python
if (printExecBtn != null){
    printExecBtn.addEventListener("click", function(){
        var ans;
        if (document.querySelector("#printInput").value == "print"){
            ans = "Hello World!";
        }
        else{
            ans = "Error : " + document.querySelector("#printInput").value + " not defined.";
        }
        document.querySelector("#printResult").innerHTML = "Result: " + ans; 
    });
}
if (printTitleBtn != null){
    printTitleBtn.addEventListener("click", function(){document.querySelector("#printDesc").style.display = "flex";
    const isCom = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0) > 800;
    goToByID("printDesc",(isCom * -100) - 200,0, -50 - (isCom * 150),0);});
}
if (inputExecBtn != null){
    inputExecBtn.addEventListener("click", function(){
        var ans;
        if (document.querySelector("#inputInput").value == "input"){
            ans = "Name?<input>";
        }
        else{
            ans = "Error : " + document.querySelector("#inputInput").value + " not defined.";
        }
        document.querySelector("#inputResult").innerHTML = "Result: " + ans; 
    });
}
if (inputTitleBtn != null){
    inputTitleBtn.addEventListener("click", function(){document.querySelector("#inputDesc").style.display = "flex";
    const isCom = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0) > 800;
    goToByID("inputDesc",(isCom * -100) - 200,0, -50 - (isCom * 150),0);});
}
if (ifExecBtn != null){
    ifExecBtn.addEventListener("click", function(){
        var ans;
        if (document.querySelector("#ifInput").value == "if"){
            ans = "apples!";
        }
        else{
            ans = "Error : " + document.querySelector("#ifInput").value + " not defined.";
        }
        document.querySelector("#ifResult").innerHTML = "Result: " + ans; 
    });
}
if (ifTitleBtn != null){
    ifTitleBtn.addEventListener("click", function(){document.querySelector("#ifDesc").style.display = "flex";
    const isCom = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0) > 800;
    goToByID("ifDesc",(isCom * -100) - 200,0, -50 - (isCom * 150),0);});
}
//sets the attribute to dark, toggle the burger & default show first page
document.documentElement.setAttribute('data-theme', 'dark');
toggleBurg();
show(0);


