let crewId = 0
class CrewMember {
  constructor(position) {
    this.position = position
    this.id = crewId++
    store.crew.push(this)
    this.currentShip = 'Looking for a Rig'
  }
  chargePhasers() {
    if (this.currentShip === "Looking for a Rig") {
      return "had no effect"
    }
    else {
    this.currentShip.phasers = "charged"
    }
  }
  engageWarpDrive() {
    if (this.currentShip === "Looking for a Rig") {
      return "had no effect"
    }
    else if (this.position === "Pilot") {
    this.currentShip.warpDrive = "engaged"

    }
  }
  setsInvisibility() {
    if (this.currentShip === "Looking for a Rig") {
      return "had no effect"
    }
    else if (this.position === "Defender"){

    this.currentShip.cloaked = true
    }
  }

}
