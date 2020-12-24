const users = [
  {
    _id: "5d220b10e8265cc978e2586b",
    isActive: true,
    balance: 2853.33,
    age: 20,
    name: "Buckner Osborne",
    gender: "male",
    company: "EMPIRICA",
    email: "bucknerosborne@empirica.com",
    phone: "+1 (850) 411-2997",
    registered: "2018-08-13T04:28:45 -03:00",
		nestedField: { total: 300 }
  },
  {
    _id: "5d220b10e8265cc978e8996",
    isActive: true,
    balance: 5853.33,
    age: 25,
    name: "Buckny Osborne",
    gender: "male",
    company: "EMPIRICA",
    email: "bucknerosborne@empirica.com",
    phone: "+1 (850) 411-2997",
    registered: "2018-08-13T04:28:45 -03:00",
		nestedField: { total: 300 }
  },
  {
    _id: "5d220b10e82657644",
    isActive: true,
    balance: 3853.33,
    age: 22,
    name: "Oleg Melnichuk",
    gender: "male",
    company: "EMPIRICA",
    email: "bucknerosborne@empirica.com",
    phone: "+1 (850) 411-2997",
    registered: "2018-08-13T04:28:45 -03:00",
		nestedField: { total: 300 }
  },
  {
    _id: "5d220b10e8265cc97",
    isActive: true,
    balance: 3853.33,
    age: 21,
    name: "Anna Teremok",
    gender: "female",
    company: "EMPIRICA",
    email: "bucknerosborne@empirica.com",
    phone: "+1 (850) 411-2997",
    registered: "2018-08-13T04:28:45 -03:00",
		nestedField: { total: 300 }
  },
];

(function (arrOfUsers) {
  const objOfUsers = arrOfUsers.reduce((acc, user) => {
    acc[user._id] = user;
    return acc;
  }, {});

  const tableBlock = document.querySelector('table');

  //*Events
  renderUsers(objOfUsers);

  function renderUsers(usersList) {
    if (!usersList) {
      console.log('Передайте одного пользователя');
      return;
    }
    const fragment = document.createDocumentFragment();

    Object.values(usersList).forEach(user => {
      const tr = listUserTemplate(user);
      fragment.appendChild(tr);
    });

    tableBlock.appendChild(fragment);
  }

  function listUserTemplate({ name, email, balance } = {}) {
    const tr = document.createElement('tr');
    tr.classList.add('align-items-center', 'tr-list');

    const tdName = document.createElement('td');
    tdName.textContent = name;
    tdName.classList.add('tdName');
    
    const tdEmail = document.createElement('td');
    tdEmail.textContent = email;
    tdEmail.classList.add('tdEmail');
    
    const tdBalance = document.createElement('td');
    tdBalance.textContent = balance;
    
    //* Добавляем елементы в наш список tr
    
    tr.appendChild(tdName);
    tr.appendChild(tdEmail);
    tr.appendChild(tdBalance);

    return tr;
  }
  let totalBalance = users.reduce((acc, user) => acc += user.balance, 0);
  const trBalance = document.createElement('tr');
  trBalance.classList.add('totalBalance');
  trBalance.textContent = `Total balance: ${totalBalance}`;
  trBalance.style.fontWeight = 'bold';
  trBalance.style.paddingTop = '10px';

  console.log(totalBalance);
  tableBlock.insertAdjacentElement("beforeend", trBalance);






  

  
})(users);