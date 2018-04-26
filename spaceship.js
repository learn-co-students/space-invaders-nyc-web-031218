class Spaceship {
  constructor(name, crew, phasers, shields) {
    this.name = name
    this.phasers = phasers
    this.shields = shields
    this.cloaked = false
    this.crew = crew
    this.warpDrive = "disengaged"
    this.phasersCharge = "uncharged"
    this.docked = !this.crew.length

    for(const member of this.crew){
      member.currentShip = this
    }
  }
}
