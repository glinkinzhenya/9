// Створити масив, довжину та елементи якого задає користувач.
// Відсортувати масив за зростанням.
// Видалити елементи з масиву з 2 по 4(включно!).

// У міру змін виводити вміст масиву на сторінку.
    


color = [];

lengthArrey = parseInt(prompt("Введите длину массива."));
while (isNaN(lengthArrey)) {
    alert("Это не номер")
    lengthArrey = parseInt(prompt("Введите длину массива."));
}

color[lengthArrey -1] = undefined;

console.log(`Вы ввели длину массива равную ${color.length}`);

for (i = 0; i <= lengthArrey - 1; i++) {

    element = parseInt(prompt(`Введите наименование ${lengthArrey} элементов`));
    while (element === null || element === "" || isNaN(element)) {
        alert("Ошибка")
        element = parseInt(prompt(`Введите наименование ${lengthArrey} элементов`));
    }
    color[i] = element;
}

console.log(`Наш массив до сортировки ${color}`);

for (i = 0; i < (color.length - 1); i++) {
    flag = false;
    for (j = 0; j < (color.length - i); j++) {
        if (color[j] > color[j + 1]) {
            [color[j], color[j + 1]] = [color[j + 1], color[j]];
            flag = true;
        }
    }
    if (!flag) break;
}

console.log(`Наш массив после сортировки ${color}`);

newColor = color.splice(2, 3);

console.log(`Наш массив после того как мы вырезали с 2 по 4 элемент (включительно), мы считаем от нуля.
 ${color}`);






