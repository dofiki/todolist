const addBtn = document.getElementById('addBtn');
let userInput = document.getElementById("userInput");
let tasks = document.getElementById("tasks")

//when btn is click, addTask function is called
addBtn.addEventListener("click", addTask);
//or when enter is pressed, addTask function is called
userInput.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
      addTask();
    }
});

function addTask(){

    if(userInput.value==''){
        alert("please enter something!!!");
        
    }

    else{
        //creating list
        let li = document.createElement('li');
        //inserting user input in list 
        li.textContent=userInput.value 
        tasks.appendChild(li);
        
        //creating delete btn
        let span = document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);
    }

//clearing user input from textfield
userInput.value='';
saveData();         
}

function saveData(){
    localStorage.setItem("data", tasks.innerHTML);
}

function showData(){
    tasks.innerHTML = localStorage.getItem("data");
}
//check and delete function
taskContainer.addEventListener("click", function(e){
    if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
        else if(e.target.tagName==="LI"){
                 e.target.classList.toggle("cut");
                 saveData();
        }  
});


showData();