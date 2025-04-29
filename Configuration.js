function getConfiguration(config) {
  config.addressLabel = { en: "DevEUI", es: "DevEUI" };
}

function getEndpoints(deviceAddress, endpoints) {
  var em = endpoints.addEndpoint("1","Battery Level", endpointType.genericSensor);
  em.variableTypeId = 1006;

  endpoints.addEndpoint("2","Temperature sensor", endpointType.temperatureSensor);

  endpoints.addEndpoint("3", "Humidity sensor", endpointType.humiditySensor);

  endpoints.addEndpoint("4","CO₂ sensor", endpointType.ppmConcentrationSensor,ppmConcentrationSensorSubType.carbonDioxide);
}

function updateDeviceUIRules(device, rules) {
  rules.canCreateEndpoints = true;
  //No fueron especificadas reglas para los dispositivos
}

function updateEndpointUIRules(endpoint, rules) {
  rules.canDelete = true;
  //No fueron especificadas reglas para los endpoints
}
