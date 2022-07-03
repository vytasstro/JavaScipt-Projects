var submitButton = document.getElementById("submit");
var clearButton = document.getElementById("clear");
var content = document.getElementById("textbox");
var goalsbox = document.getElementById("enteredgoals");
submitButton.onclick = function(){
    if(content.value != ''){
        //add goal
        var ol = document.createElement("ol");
        var deleteButton = document.createElement("button");
        deleteButton.appendChild(document.createTextNode("X"));
        deleteButton.onclick = function(){
            goalsbox.removeChild(ol);
        }
        ol.appendChild(document.createTextNode(content.value));
        ol.appendChild(document.createTextNode(" "));
        ol.appendChild(deleteButton);//.addEventListener("click", deleteGoal);
        goalsbox.appendChild(ol);
    }
    else{
        alert("Please enter a goal.");
    }
}

clearButton.onclick = function(){
        //delete all goals
       goalsbox.textContent = '';
}

