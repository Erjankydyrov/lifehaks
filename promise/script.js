// let myPromise = new Promise((resolve, reject) => {
//   // Асинхронная операция
//   if (typeof resolve === 'number' && resolve >= 0) {
//     resolve("Успех!"); // Вызов resolve, если операция успешна
//   } else {
//     reject("Ошибка!"); // Вызов reject, если операция завершилась ошибкой
//   }
// });

// let result = '10'

// myPromise.then((result) => {
//   console.log(result); // Выводит "Успех!" в случае успешного выполнения промиса
// }).catch((error) => {
//   console.log(error); // Выводит "Ошибка!" в случае ошибки промиса
// });

// Выполняем GET-запрос с помощью fetch
// fetch('https://jsonplaceholder.typicode.com/posts')
//   // После получения ответа от сервера, обрабатываем его
//   .then((response) => {
//     // Проверяем, что ответ успешный (HTTP-статус 200-299)
//     if (!response.ok) {
//       throw new Error("Ошибка HTTP: " + response.status);
//     }
//     // Возвращаем промис с преобразованными в JSON данными
//     return response.json();
//   })
//   // После преобразования ответа в JSON, обрабатываем его
//   .then((data) => {
//     // Выводим полученные данные в консоль
//     console.log(data);
//   })
//   .finally(() => {
//     console.log("УРА!");
//   })
//   // Если возникла ошибка, обрабатываем её
//   .catch((error) => {
//     // Выводим ошибку в консоль
//     console.error("Произошла ошибка:", error);
//   });
