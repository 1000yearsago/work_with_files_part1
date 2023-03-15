const fs = require ('fs');

const path1='work_with_files_part1/myfile.txt';
const path2='work_with_files_part1/createdfile.txt';
const path3='work_with_files_part1/tobedeleted.txt';
const path4='work_with_files_part1/tobemoved.txt';
const path5='work_with_files_part1/replacement/tobemoved.txt';
const data1='Hello! I was created. My life begun when you run this code.';
const data2=' This text is an addition';

function readmyFile(path){      // Завдання 1: Функція, яка читає вміст файлу
    fs.readFile(path,'utf8',(err,data)=>{
        if (err) {
            console.error(err);
            return
        }
        console.log(data);
    })
}

function createmyFile(path, data){   // Завдання 2: Функція, яка створює файл з контентом
    fs.writeFile(path, data, function (err) {
        if(err) throw err
        console.log("The file was created at:", path);
    })

}

function addData(path, data){   // Завдання 3: Функція, яка додає контент в створений файл
    fs.appendFile(path, data, function (err) {
        if (err) throw err
        console.log("You added data to this file:", path)
    } )


}

function deletemyFile(path){   // Завдання 4: Функція, яка видаляє файл
    if (fs.existsSync(path)) {
        try {
            fs.unlinkSync(path)
            console.log("Your file was deleted")
        } catch (err) {
            console.error(err)
        }
    }
    else {
        console.log('File was not found')
    }
}

function movemyFile(origin, destination){   // Завдання 5: Функція, яка переміщує файл
    fs.rename(origin, destination, function (err) {
        if (err) throw err
        console.log("Your file was moved to:", destination)
    })
}

readmyFile(path1)  // Перевірка 1 завдання

createmyFile(path2, data1)  // Перевірка 2 завдання
readmyFile(path2)

addData(path1, data2)  // Перевірка 3 завдання
readmyFile(path1)

deletemyFile(path3) // Перевірка 4 завдання
createmyFile(path3, 'delete me')

movemyFile(path4, path5) // Перевірка 5 завдання