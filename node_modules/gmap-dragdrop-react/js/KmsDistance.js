'use strict';

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}();

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

var KmsDistance = function () {
  function KmsDistance() {
    _classCallCheck(this, KmsDistance);
  }

  _createClass(KmsDistance, null, [{
    key: 'degreesToRadians',
    value: function degreesToRadians(x) {
      return x * Math.PI / 180;
    }
  }, {
    key: 'getDistance',
    value: function getDistance(p1, p2) {
      var earth_radius = 6378137;
      var dLat = KmsDistance.degreesToRadians(p2.lat - p1.lat);
      var dLong = KmsDistance.degreesToRadians(p2.lng - p1.lng);
      var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) + Math.cos(KmsDistance.degreesToRadians(p1.lat)) * Math.cos(KmsDistance.degreesToRadians(p2.lat)) * Math.sin(dLong / 2) * Math.sin(dLong / 2);
      var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
      var meter_distance = earth_radius * c;
      return meter_distance;
    }
  }, {
    key: 'getKms',
    value: function getKms(p1, p2) {
      var meter_distance = KmsDistance.getDistance(p1, p2);
      var dist_10th = Math.round(meter_distance / 100);
      return dist_10th / 10 + ' km';
    }
  }]);

  return KmsDistance;
}();

module.exports = KmsDistance;