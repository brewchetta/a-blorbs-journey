import Tooth from "../bullets/Tooth";
import { THUM2_SOUND } from "../consts/sounds";

export default class SideToothGun {
  constructor(scene) {
    this.interval = 400;
    this.nextFire = 0;
    this.scene = scene;
  }

  fire(x, y, angle, scale) {
    if (this.scene.time.now < this.nextFire) return;

    this.nextFire = this.scene.time.now + this.interval;

    for (let i = 0; i <= 1; i++) {
      const offsetAngle = i * 180 + 90;
      const bullet = new Tooth(this.scene, x, y);
      this.scene.bulletGroup.add(bullet);
      bullet.init(angle + offsetAngle, scale);
    }

    // play launch sound
    this.scene.sound.play(THUM2_SOUND, {
      seek: 0.15
    });
  }
}
