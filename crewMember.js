class CrewMember {
  constructor(position) {
    this.position = position;
    this.currentShip = "Looking for a Rig";
  }

  // setCurrentShip(ship) {
  //   this.currentShip = ship;
  // }

  engageWarpDrive() {
    if (this.currentShip === "Looking for a Rig" || this.position !== "Pilot") {
      return "had no effect";
    } else {
      this.currentShip.warpDrive = "engaged";
    }
  }

  chargePhasers() {
    if (this.currentShip === "Looking for a Rig" || this.position !== "Gunner") {
      return "had no effect";
    } else {
      this.currentShip.phasersCharge = "charged";
    }
  }

  setsInvisibility() {
    if (this.currentShip === "Looking for a Rig" || this.position !== "Defender") {
      return "had no effect";
    } else {
      this.currentShip.cloaked = true;
    }
  }
}
