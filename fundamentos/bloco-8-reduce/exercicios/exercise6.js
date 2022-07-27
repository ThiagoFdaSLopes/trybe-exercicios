const students = ['Pedro Henrique', 'Miguel', 'Maria Clara'];
const grades = [[9, 8, 10, 7, 5], [10, 9, 9, 10, 8], [10, 7, 10, 8, 9]];

const studentAverage = (arr1, arr2) => {
    const returnArr1 = arr1.map((element, index) => ({
        nome: element,
        average: (arr2[index].reduce((acc, curr) => acc + curr, 0) / arr2[index].length)
    }))
    return returnArr1
}

console.log(studentAverage(students, grades))