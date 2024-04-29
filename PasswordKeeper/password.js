async function getData() {
    try {
        let result = await axios.get("https://crudcrud.com/api/63d4e2c3243c4777a864db0a4a9bf6d5/PasswordKeeper");
        result.data.forEach(element => {
            showOnScreen(element);
            increment(); 
        });
        // for (let i = 0; i < result.data.length; i++) {
        //     showOnScreen(result.data[i]);
        //     increment();
        // }
    } catch (err) {
        console.log(err);
    }
} getData();
const add = document.querySelector('form');
add.addEventListener('submit', (event) => {
    event.preventDefault();
    const Title = event.target.Title.value;
    const Password = event.target.Password.value;
    obj = {
        Title: Title,
        Password: Password
    }
    increment();
    async function postData(obj) {
        try {
            let result = await axios.post("https://crudcrud.com/api/63d4e2c3243c4777a864db0a4a9bf6d5/PasswordKeeper", obj);
            showOnScreen(result.data);
        } catch (err) {
            console.log(err);
        }
    }
    postData(obj);
    document.querySelector('#Title').value = "";
    document.querySelector('#Password').value = "";
})
const Filter = document.querySelector('#Search');
Filter.addEventListener('keyup', (event) => {
    event.preventDefault();
    const keyValue = event.target.value.toLowerCase();
    const List = document.getElementsByClassName('listItem');
    for (let i = 0; i < List.length; i++) {
        const currentList = List[i].firstChild.textContent.toLocaleLowerCase();
        if (currentList.indexOf(keyValue) === -1)
            List[i].style.display = 'none';
        else
            List[i].style.display = 'flex';
    }
})
function showOnScreen(obj) {
    const ul = document.querySelector('ul');
    const list = document.createElement('li');
    list.innerText=`${obj.Title}-${obj.Password}`;
    const deletebtn = document.createElement('button');
    deletebtn.innerText='Delete';
    deletebtn.type = 'button';
    const editbtn = document.createElement('button');
    editbtn.innerText='Edit';
    editbtn.type = 'button';
    list.appendChild(deletebtn);
    list.appendChild(editbtn);
    list.className = 'listItem';
    deletebtn.addEventListener('click', (event) => {
        event.preventDefault();
        const listitem = event.target.parentElement;
        listitem.remove();
        decrement();
        async function deleteData() {
            try {
                let result = await axios.delete(`https://crudcrud.com/api/63d4e2c3243c4777a864db0a4a9bf6d5/PasswordKeeper/${obj._id}`);
                console.log(result);
            } catch (err) {
                console.log(err);
            }
        }
        deleteData();
    })
    editbtn.addEventListener('click', (event) => {
        event.preventDefault();
        decrement();
        axios
            .delete(`https://crudcrud.com/api/63d4e2c3243c4777a864db0a4a9bf6d5/PasswordKeeper/${obj._id}`)
            .then((result) => console.log(result))
            .catch((err) => console.log(err));
        document.querySelector('#Title').value = obj.Title;
        document.querySelector('#Password').value = obj.Password;
        const listitem = event.target.parentElement;
        listitem.remove();
    })
    ul.appendChild(list);
}
var count = 0;
const para = document.querySelector('p');
function increment() {
    count++;
    para.innerText = `Total passwords: ${count}`;
}
function decrement() {
    count--;
    para.innerText = `Total passwords: ${count}`;
}
