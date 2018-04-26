let store = {ships: [], crew: []}


let spaceId = 0
class Spaceship {
  constructor(name, crew, phasers, shields) {
    this.id = spaceId++
    this.name = name
    this.crew = crew
    crew.forEach(crewmember => {
      crewmember.currentShip = this 
    })
    this.phasersCharge = "uncharged"
    if (crew.length > 0) {
    this.docked = false
    store.ships.push(this)
  }
   else {
     this.docked = true
   }
    this.shields = shields
    this.phasers = phasers
    this.cloaked = false
    this.warpDrive = "disengaged"
  }

}
