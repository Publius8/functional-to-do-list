document.addEventListener('DOMContentLoaded', function() {
    let sendButton = document.querySelector("#addButton");
    let allButton = document.querySelector("#all");
    let completeButton = document.querySelector("#Complete");
    let pendingButton = document.querySelector("#Pending");

    sendButton.addEventListener("click", function() {
        let input = document.querySelector("#input");
        const inputValue = input.value;

        
        if (inputValue === "") {
            alert("Please write something");
        } else {
            const newDiv = document.createElement('div');
            const deleteButton = document.createElement('button');
            const editButton = document.createElement('button');
            const checkbox = document.createElement('input');

            newDiv.classList.add('new-block');
            newDiv.style.border = "1px solid #E1E1E1";
            newDiv.style.padding = "10px";
            newDiv.style.display = "flex";
            newDiv.style.flexDirection = "row";
            newDiv.style.justifyContent = "space-around";
            newDiv.style.alignItems = "center";
            newDiv.style.gap = "6px";
            newDiv.style.width = "390px";
            newDiv.style.height = "40px";
            newDiv.style.margin = "0 auto";
            newDiv.style.marginBottom = "6px";
               

            checkbox.type = "checkbox";
            

            deleteButton.innerHTML = '<img src="./assets/images/Frame.svg">';
            deleteButton.classList.add('deleteButton');

            deleteButton.style.border = "none";
            deleteButton.style.width = "20px";
            deleteButton.style.height = "20px";
            deleteButton.style.borderRadius = "5px 5px 5px 5px";
            deleteButton.style.backgroundColor = "#FF0000";
            deleteButton.style.display = "flex";
            deleteButton.style.justifyContent = "center";
            deleteButton.style.alignItems = "center";



            editButton.innerHTML = '<img src="./assets/images/Vector (1).svg">';
            editButton.classList.add('edit');

            editButton.style.border = "none";
            editButton.style.width = "20px";
            editButton.style.height = "20px";
            editButton.style.borderRadius = "5px 5px 5px 5px";
            editButton.style.backgroundColor = "#0085FF";
            editButton.style.display = "flex";
            editButton.style.justifyContent = "center";
            editButton.style.alignItems = "center";
            


            newDiv.appendChild(checkbox);
            newDiv.appendChild(document.createElement('h2')).innerText = inputValue;
            newDiv.appendChild(editButton);
            newDiv.appendChild(deleteButton);

            deleteButton.addEventListener('click', function() {
                newDiv.remove();
            });

            editButton.addEventListener('click', function() {
                const h2 = newDiv.querySelector('h2');
                const currentText = h2.textContent;
                const inputField = document.createElement('input');
                inputField.type = 'text';
                inputField.value = currentText;
                inputField.style.width = 'auto';
                inputField.style.whiteSpace = 'normal';
                                

                h2.replaceWith(inputField);
                
                inputField.addEventListener('blur', function() {
                    const newText = inputField.value;
                    h2.textContent = newText;
                    inputField.replaceWith(h2);
                });
            });

            document.querySelector("#taskContainer").appendChild(newDiv);
            input.value = '';
        }
    });

    // filter
    function filterTasks(filter) {
        const tasks = document.querySelectorAll('.new-block');
        tasks.forEach(task => {
            const checkbox = task.querySelector('input[type="checkbox"]');
            switch (filter) {
                case 'all':
                    task.style.display = 'flex';
                    break;
                case 'complete':
                    if (checkbox.checked) {
                        task.style.display = 'flex';
                    } else {
                        task.style.display = 'none';
                    }
                    break;
                case 'pending':
                    if (!checkbox.checked) {
                        task.style.display = 'flex';
                    } else {
                        task.style.display = 'none';
                    }
                    break;
            }
        });
    }

    
    function setActiveButton(button) {
        allButton.classList.remove('active');
        completeButton.classList.remove('active');
        pendingButton.classList.remove('active');
        
        button.classList.add('active');
    }
    
    allButton.addEventListener('click', function() {
        filterTasks('all');
        setActiveButton(allButton);
    });
    
    completeButton.addEventListener('click', function() {
        filterTasks('complete');
        setActiveButton(completeButton);
    });
    
    pendingButton.addEventListener('click', function() {
        filterTasks('pending');
        setActiveButton(pendingButton);
    });
    
});
