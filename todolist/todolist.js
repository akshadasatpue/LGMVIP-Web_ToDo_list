 // fetching input from user  and store array of objects to the localstorage
    
 document.getElementById("addtask").addEventListener("click", gettask)

 var arr = JSON.parse(localStorage.getItem("tasks"))||[];
 function gettask(){
     var task = document.getElementById("task").value;
     var timing = document.getElementById("timing").value;

     // alert(`Task added successfully in ${timing} table`);
     var taskobject = {
         task : task,
         timing: timing,

     }
     arr.push(taskobject);
     console.log(arr)
     localStorage.setItem("tasks", JSON.stringify(arr));
     display(arr);
     
 }
 
 function display(arr){
     document.getElementById("morningtablebody").innerText="";
     document.getElementById("afternoontablebody").innerText="";
     document.getElementById("eveningtablebody").innerText="";
     document.getElementById("nighttablebody").innerText="";
     arr.map(function(todo, index){

         // condition for if time given by user is morning 
         if(todo.timing == "Morning")
         {   
             var morningtablebody= document.getElementById("morningtablebody");

             var tr = document.createElement("tr");
             tr.id = "bodyrow";

             var td1 = document.createElement("td");
             td1.id= "td1";

             var td2 = document.createElement("td");
             td2.id= "td2";
             td2.addEventListener("click", function(){
                 delettask(index);
             })

             td1.textContent= todo.task;
             td2.textContent="done";

             tr.append(td1, td2);
             morningtablebody.append(tr);

         }

         // condition for if time given by user is afternoon 
         if(todo.timing == "Afternoon")
         {
             var morningtablebody= document.getElementById("afternoontablebody");

             var tr = document.createElement("tr");
             tr.id = "bodyrow";

             var td1 = document.createElement("td");
             td1.id= "td1";

             var td2 = document.createElement("td");
             td2.id= "td2";
             td2.addEventListener("click", function(){
                 delettask(index);
             })

             td1.textContent= todo.task;
             td2.textContent="done";

             tr.append(td1, td2);
             morningtablebody.append(tr);
         }

         // condition for if time given by user is evening 
         if(todo.timing == "Evening")
         {
             var morningtablebody= document.getElementById("eveningtablebody");

             var tr = document.createElement("tr");
             tr.id = "bodyrow";

             var td1 = document.createElement("td");
             td1.id= "td1";

             var td2 = document.createElement("td");
             td2.id= "td2";
             td2.addEventListener("click", function(){
                 delettask(index);
             })

             td1.textContent= todo.task;
             td2.textContent="done";

             tr.append(td1, td2);
             morningtablebody.append(tr);
         }

         // condition for if time given by user is night 
         if(todo.timing == "Night")
         {
             var morningtablebody= document.getElementById("nighttablebody");

             var tr = document.createElement("tr");
             tr.id = "bodyrow";

             var td1 = document.createElement("td");
             td1.id= "td1";

             var td2 = document.createElement("td");
             td2.id= "td2";
             td2.addEventListener("click", function(){
                 delettask(index);
             })

             td1.textContent= todo.task;
             td2.textContent="done";

             tr.append(td1, td2);
             morningtablebody.append(tr);
         }

     })
     
 }
 function delettask(index){
             arr.splice(index, 1);
             localStorage.setItem("tasks", JSON.stringify(arr));
             display(arr);
             alert(`Are you sure want to delet task`);
 }