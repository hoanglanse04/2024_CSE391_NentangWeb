//Validate
jQuery.validator.setDefaults({
  debug: true,
  success: "valid"
});
$('#formSinhVien').validate({
  rules: {
    name: {
      required: true
    },
    id: {
      required: true
    },
    date:{
      required: true,
    },
    class:{
      required: true
    }
  },
  messages :{
    name:{
      required: "Vui lòng nhập họ tên."
    },
    id:{
      required: "Vui lòng nhập mã SV"
    },
    date:{
      required: "Vui lòng nhập ngày sinh",
    },
    class:{
      required: "Vui lòng nhập lớp"
    }
    
  },
  submitHandler: function() {
      let userName = document.getElementById('name').value;
      let userID = document.getElementById('id').value;
      let userDate = document.getElementById('date').value;
      let className = document.getElementById('class').value;
      addUser(userName,userID,userDate,className);
  }
});


document.addEventListener('DOMContentLoaded', ()=>{
  {
    renderData();
   
  }
})

const renderData = () =>{
  let listUsers = JSON.parse(localStorage.getItem('listUsers') || '[]');
  let dataTable = document.getElementById('bangSinhVien');
  dataTable.innerHTML='';
  list_btn=document.querySelectorAll('.btn_delete');
  listUsers.forEach(item =>{
    dataTable.innerHTML += `
    <tr>
    <th class="px-4 py-2">${item.userName}</th>
    <th class="px-4 py-2">${item.userId}</th>
    <th class="px-4 py-2">${item.userDate}</th>
    <th class="px-4 py-2">${item.className}</th>
    <th class="px-4 py-2">
    <i   key='${item.userId}' class="bi bi-pencil-square btn_edit"></i>
    <i   key='${item.userId}' class="bi bi-x-square btn_delete"></i>
    </th>
  </tr>
    `;
    list_btn = document.querySelectorAll('.btn_delete');
    list_btn.forEach(item => {
      item.addEventListener('click', () => {
        let key = item.getAttribute('key');
        console.log(key);
        removeUser(key);
      });
      });
      list_edit = document.querySelectorAll('.btn_edit');
      list_edit.forEach(item => {
      item.addEventListener('click', () => {
        let key = item.getAttribute('key');
        console.log(key);
        editUser(key);
      });
      });
  })
 
}

const handle = () =>{
  console.log('abc');
}

const addUser = (userName,id,date,className) =>{
  let listUsers = JSON.parse(localStorage.getItem('listUsers') || '[]');
  listUsers.push({userName:userName,userId:id,userDate:date,className:className})
  localStorage.setItem('listUsers', JSON.stringify(listUsers));
  let dataTable = document.getElementById('bangSinhVien');
  dataTable.innerHTML += `
  <tr>
  <th class="px-4 py-2">${userName}</th>
  <th  class="px-4 py-2">${id}</th>
  <th class="px-4 py-2">${date}</th>
  <th class="px-4 py-2">${className}</th>
  <th class="px-4 py-2">
  <i   key='${id}' class="bi bi-pencil-square btn_edit"></i>
  <i  key='${id}' class="bi bi-x-square btn_delete"></i>
  </th>
</tr>
  `;
  document.querySelectorAll('.btn_delete').forEach(item => {
    item.addEventListener('click', () => {
      let key =item.getAttribute('key')
      console.log(key);
      removeUser(key);
    });
  });
  list_edit = document.querySelectorAll('.btn_edit');
  list_edit.forEach(item => {
  item.addEventListener('click', () => {
    let key = item.getAttribute('key');
    console.log(key);
    editUser(key);
  });
  });
}


const removeUser = (id) =>{
  let listUsers = JSON.parse(localStorage.getItem('listUsers') || '[]');
  listUsers= listUsers.filter(user => user.userId !== id);
  localStorage.setItem('listUsers',JSON.stringify(listUsers));
  renderData();
}

const editUser = (id)=> {
  let listUsers = JSON.parse(localStorage.getItem('listUsers') || '[]');
  listUsers.forEach(item =>{
    if(item.userId==id){
      let newUserName = document.getElementById('name').value;
      let newUserId = document.getElementById('id').value;
      let newUserDate = document.getElementById('date').value;
      let newClassName = document.getElementById('class').value;

      item.userName=newUserName;
      item.userId=newUserId;
      item.userDate=newUserDate;
      item.className=newClassName;
    }
  })
  localStorage.setItem('listUsers', JSON.stringify(listUsers));
  renderData();
}








