"use strict";

class KmsDistance {
  static degreesToRadians(x) {
    return (x * Math.PI) / 180;
  }

  static getDistance(p1, p2) {
    var earth_radius = 6378137;
    var dLat = this.degreesToRadians(p2.lat - p1.lat);
    var dLong = this.degreesToRadians(p2.lng - p1.lng);
    var a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(this.degreesToRadians(p1.lat)) *
        Math.cos(this.degreesToRadians(p2.lat)) *
        Math.sin(dLong / 2) *
        Math.sin(dLong / 2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    var meter_distance = earth_radius * c;
    return meter_distance;
  }

  static getKms(p1, p2) {
    const meter_distance = this.getDistance(p1, p2);
    const dist_10th = Math.round(meter_distance / 100);
    return dist_10th / 10 + " km";
  }
}
module.exports = KmsDistance;
