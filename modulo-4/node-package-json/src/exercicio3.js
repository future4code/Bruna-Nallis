const colors= requere('colors')

const tasks = [
    "estudar",
    "fazer comida",
    "ler livro"
  ]

  const task = process.argv[2]

if (!task) {
  return console.log(`Was expecting at least 1 parameter for new task`.red)
}

tasks.push(task)

console.log(`Task ${task} added successfuly`.green)
console.log("tasks:".green, tasks.toString().green) 