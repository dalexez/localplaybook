const MissionCommander = require('./app/missionCommander')

const carlo = new MissionCommander("Carlo")
const fer = new MissionCommander("Fer")
const rodrigo = MissionCommander("Rodrigo")

console.log(carlo.name)
console.log(fer.name)
console.log(rodrigo.name)