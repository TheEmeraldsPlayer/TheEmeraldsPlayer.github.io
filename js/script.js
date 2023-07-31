const page1btn=document.querySelector("#homeButton");
const page2btn=document.querySelector("#cppButton");
const page3btn=document.querySelector("#pyButton");
var allpages=document.querySelectorAll(".page");
//select all subtopic pages
console.log(allpages);
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

/*Listen for clicks on the buttons, assign anonymous
eventhandler functions to call show function*/
if (page1btn != null)
page1btn.addEventListener("click", function () { show(0); });
if (page2btn != null)
page2btn.addEventListener("click", function () { show(1); });
if (page3btn != null)
page3btn.addEventListener("click", function () { show(2); });

