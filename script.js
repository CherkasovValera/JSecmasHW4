"use strict";
// Домашнее задание

// Задание 1. Получение данных о пользователе.

async function getUserData(ID) {
  const response = await fetch("https://reqres.in/api/unknown");
  if (response.ok) {
    return await response.json();
  }
  throw new Error(`Error status ${response.status}`);
}
getUserData()
  .then(function (result) {
    console.log(result);
  })
  .catch(function (error) {
    console.log(error);
  });

// Задание 2. Отправка данных на сервер.

async function saveUserData(user) {
  const response = await fetch("https://reqres.in/api/unknown", {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify(user),
  });
  if (response.ok) {
    return await response.json();
  }
  throw new Error(`Error status ${response.status}`);
}

const user = {
  name: "John Doe",
  job: "unknown",
};

saveUserData(user)
  .then(() => {
    console.log("User data saved successfully");
  })
  .catch((error) => {
    console.log(error.message);
  });

// Задание 3.
function changeStyleDelayed(idElement, delay) {
  const idElem = document.getElementById(idElement);
  setTimeout(() => (idElem.style.backgroundColor = "green"), delay);
}

changeStyleDelayed("myElement", 2000); // Через 2 секунды изменяет стиль элемента с id 'myElement'"
