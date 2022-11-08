let addBtn = document.querySelector("#addBtn");
addBtn.addEventListener("click", addActivity);

function addActivity(){
    if (document.querySelector("#inputAct").value == ""){
        document.querySelector("#alert").textContent = "Please input activity";
    } else {
        document.querySelector("#alert").textContent = "";
        let inputAct = document.querySelector("#inputAct").value;
        document.querySelector("#inputAct").value = "";
        let toDoList = document.querySelector("#toDoList");
        let listItem = document.createElement("div");
        let listInput = document.createElement("input");
        listInput.classList = "listinput";
        listInput.setAttribute("disabled", "");
        listInput.value = inputAct;
        listInput.defaultValue = inputAct;

        let editBtn = document.createElement("button");
        editBtn.textContent = "Edit";
        editBtn.classList = "editBtn";
        let removeBtn = document.createElement("button");
        removeBtn.textContent = "Remove";
        removeBtn.classList = "removeBtn";
        
        toDoList.appendChild(listItem);
        listItem.appendChild(listInput);
        listItem.appendChild(editBtn);
        listItem.appendChild(removeBtn);

        let listCount = toDoList.childElementCount; 

            if (listCount >= 5){
                document.querySelector("#addBtn").setAttribute("disabled", "");
                document.querySelector("#alert").textContent = "You can only input up to 5 Activities";
            }

        editBtn.addEventListener("click", editList)

        function editList(){

            editBtn.style.display = "none";
            listInput.removeAttribute("disabled", "");

            let saveBtn = document.createElement("button");
            saveBtn.textContent = "Save";
            saveBtn.classList = "saveBtn";
            listItem.insertBefore(saveBtn, removeBtn);
    
            let cancelBtn = document.createElement("button");
            cancelBtn.textContent = "Cancel";
            cancelBtn.classList = "cancelBtn";
            listItem.insertBefore(cancelBtn, removeBtn);
    
           
            saveBtn.addEventListener("click", saveList)

            function saveList(){
                if (listInput.value == ""){
                    alert("Please input activity");
                } else{
                editBtn.style.display = "";
                saveBtn.style.display = "none";
                cancelBtn.style.display = "none";
                listInput.setAttribute("disabled", "");
                listInput.defaultValue = listInput.value;
                }
            }

            cancelBtn.addEventListener("click", cancelEdit)

            function cancelEdit(){
                editBtn.style.display = "";
                saveBtn.style.display = "none";
                cancelBtn.style.display = "none";
                listInput.setAttribute("disabled", "");
                listInput.value = listInput.defaultValue;
            }

        }

        removeBtn.addEventListener("click", removeList)

        function removeList(){
            let text = "Are you sure you want to remove this list?"

            if (confirm(text) == true){
                text = "Removed successfully";
                this.parentNode.remove();
                alert(text);
            }
   
            let listCount = toDoList.childElementCount; 

            if (listCount < 5){
                document.querySelector("#addBtn").removeAttribute("disabled", "");
                document.querySelector("#alert").textContent = "";
            }
        }

    } 
          
 

}







