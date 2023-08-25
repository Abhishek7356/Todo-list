

const inputBox = document.getElementById('task');
const list = document.getElementById('todoList');

function addItem(content) {
    if (content.innerHTML == 'Add Task') {
        if (document.getElementById('task').value == '') {
            alert('Please Enter ..')
        } else {
            let p = document.createElement('p');
            p.classList.add("list");
            let span = document.createElement('span');
            span.innerHTML = inputBox.value;
            p.appendChild(span);
            let editbtn = document.createElement('button');
            editbtn.classList.add('edit');
            editbtn.innerHTML = '🖊️';
            p.appendChild(editbtn);
            let deletebtn = document.createElement('button');
            deletebtn.classList.add('delete');
            deletebtn.innerHTML = '❎';
            p.appendChild(deletebtn);
            list.appendChild(p)
        }
        inputBox.value = '';
    } else {
        document.getElementById('doneBtn').innerHTML = 'Add Task';
        inputBox.classList.remove("border-danger");
        document.getElementById('doneBtn').classList.remove("bg-danger");
        inputBox.style.outline = '';
        inputBox.style.outlineOffset = '';
        if (document.getElementById('task').value == '') {
            alert('Please Enter ..')
        } else {
            let p = document.createElement('p');
            p.classList.add("list");
            let span = document.createElement('span');
            span.innerHTML = inputBox.value;
            p.appendChild(span);
            let editbtn = document.createElement('button');
            editbtn.classList.add('edit');
            editbtn.innerHTML = '🖊️';
            p.appendChild(editbtn);
            let deletebtn = document.createElement('button');
            deletebtn.classList.add('delete');
            deletebtn.innerHTML = '❎';
            p.appendChild(deletebtn);
            list.appendChild(p)
        }
        inputBox.value = '';
    }


}

list.addEventListener("click", function (e) {
    // console.log(e.target.className);
    if (e.target.className == 'delete') {
        e.target.parentElement.remove();
    } else if (e.target.className == 'edit') {
        let tag = e.target.parentElement;
        console.log(tag.childNodes[0]);
        inputBox.value = tag.childNodes[0].innerHTML;
        document.getElementById('doneBtn').innerHTML = 'Edit 🖊️';
        document.getElementById('doneBtn').classList.add("bg-danger");
        inputBox.style.outline = '2px solid gray';
        inputBox.style.outlineOffset = '5px';
        e.target.parentElement.remove();
        inputBox.classList.add("border-danger");
    }
})


