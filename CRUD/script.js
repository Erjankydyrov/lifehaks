// Хранилище данных (массив объектов)
let users = [];

// Функция для обновления отображения списка пользователей
function renderUserList() {
  const userList = document.getElementById("userList");
  userList.innerHTML = "";

  users.forEach((user) => {
    const userItem = document.createElement("div");
    userItem.classList.add("user-item");
    userItem.innerHTML = `<strong>${user.name}</strong>, Age: ${user.age}`;
    userList.appendChild(userItem);
  });
}

// 1. Создание (Create): Добавление нового пользователя
function createUser() {
  const nameInput = document.getElementById("name");
  const ageInput = document.getElementById("age");

  const newUser = {
    id: users.length + 1,
    name: nameInput.value,
    age: parseInt(ageInput.value),
  };

  users.push(newUser);
  renderUserList();

  // Очищаем поля ввода после добавления пользователя
  nameInput.value = "";
  ageInput.value = "";
}

// 3. Обновление (Update): Изменение данных пользователя по идентификатору
function updateUser(userId) {
  const newName = prompt("Enter the new name:");
  const newAge = prompt("Enter the new age:");

  if (newName !== null && newAge !== null) {
    const userIndex = users.findIndex((user) => user.id === userId);

    if (userIndex !== -1) {
      users[userIndex].name = newName;
      users[userIndex].age = parseInt(newAge);
      renderUserList();
    }
  }
}

// 4. Удаление (Delete): Удаление пользователя по идентификатору
function deleteUser(userId) {
  const confirmDelete = confirm("Are you sure you want to delete this user?");

  if (confirmDelete) {
    users = users.filter((user) => user.id !== userId);
    renderUserList();
  }
}

// Функция для обновления отображения списка пользователей
function renderUserList() {
  const userList = document.getElementById("userList");
  userList.innerHTML = "";

  users.forEach((user) => {
    const userItem = document.createElement("div");
    userItem.classList.add("user-item");
    userItem.innerHTML = `
      <strong>${user.name}</strong>, Age: ${user.age}
      <button onclick="updateUser(${user.id})">Update</button>
      <button onclick="deleteUser(${user.id})">Delete</button>
    `;
    userList.appendChild(userItem);
  });
}

// 2. Read Инициализация отображения при загрузке страницы
document.addEventListener("DOMContentLoaded", () => {
  renderUserList();
});
