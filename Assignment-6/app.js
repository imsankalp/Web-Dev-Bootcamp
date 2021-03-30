const inp = document.getElementById('inp');
const btn = document.getElementById('addTodo');
const list = document.getElementById('list');


btn.onclick = function(e){
    console.log('Clicked');
    let todoText = inp.value;

    const span = document.createElement('span');
    const li = document.createElement('li');
    const doneTask = document.createElement('button');
    const delTask = document.createElement('button');
    const editTask = document.createElement('button');
   
    
    span.innerText = todoText;
    span.style.textTransform = "uppercase";
    console.log(span);
    li.append(span);


    li.append(doneTask);
    doneTask.style.float = "right";
    doneTask.setAttribute("class","fas fa-check-circle");
    doneTask.onclick = function(e){
        li.setAttribute("class","done-task");
    }

    li.append(delTask);
    delTask.style.float = "right";
    delTask.setAttribute("class", "far fa-trash-alt");
    delTask.onclick = function(e){
        e.target.remove();
        li.remove();
    }

    li.append(editTask);
    editTask.style.float = "right";
    editTask.setAttribute("class","fas fa-edit");
    editTask.onclick = function(e){
        const edit = li.firstElementChild;
      const input = document.createElement('input');
      input.type = 'text';
      input.value = edit.textContent;
      li.insertBefore(input, edit);
      li.removeChild(span);
        editTask.onclick = function(s){
            const inputContent = li.firstElementChild;
            const spanEdited = document.createElement('span');
            spanEdited.textContent = inputContent.value;
            spanEdited.style.textTransform = "uppercase";
            li.insertBefore(spanEdited, inputContent);
            li.removeChild(input);
        }

    }

    list.append(li); 
    inp.value = "";
}