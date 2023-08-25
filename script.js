

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
        inputBox.classList.remove("border-danger")
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
        document.getElementById('doneBtn').innerHTML = 'Edit &#10004;';
        e.target.parentElement.remove();
        inputBox.classList.add("border-danger");
    }
})







// const inputBox = document.getElementById('task');
// const list = document.getElementById('todoList');

// function addItem() {
//     if (inputBox.value == '') {
//         alert('Enter your Task');
//     } else {
//         let item = document.createElement("p");
//         item.innerHTML = inputBox.value;
//         let span = document.createElement('span');
//         span.innerHTML = '&#10006;';
//         item.appendChild(span);
//         list.appendChild(item);
//         inputBox.value = ''
//     }
// }

// list.addEventListener("click",function(e){
//     if(e.target.tagName == "SPAN"){
//         e.target.parentElement.remove();
//     }
//     console.log(e.target.tagName);
//     console.log(e.target.parentElement);
// })
