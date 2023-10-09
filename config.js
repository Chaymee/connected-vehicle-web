const config = {
  //"trace","debug","info","warn","error"
  logLevel: "debug",

  // acmeResources/veh_trak/gps/v2/{route}/{vehType}/{vehID}/{lat}/{lng}/{dir}/{status}
  topicPrefix: "sanfran/bus/veh_trak/gps/v2/",
  title: "Real-time Connected Fleet Demo",
  subTitles: [
    "Bidirectional IoT Communication using MQTT",
    "Advanced Filtering and Routing Capabilities"
  ],

  //googleApiKey: "AIzaSyCfUpei863cqkmQvV9KavBsjybNQ4hr6wA",
  googleApiKey: "key",
  mapOptions: {
    center: { lat: 37.65697400684236, lng: -122.3915164857602}, // Newman Mine Site
    zoom: 16,
    mapId: "DEMO_MAP_ID",
    mapTypeId: 'hybrid',
    fullscreenControl: false,
    streetViewControl: false,
    scaleControl: true,
    drawable: true,
    mapTypeControlOptions: {
      position: 3, //"TOP_RIGHT"
    }
  },

  singleLevelWildCard: "*",
  solace: {
    SessionProperties: {
      // check (https://docs.solace.com/API-Developer-Online-Ref-Documentation/js/solace.SessionProperties.html)
      // for details of all properties
      url: "wss://mr-connection-9hw7diagtnp.messaging.solace.cloud:443",
      vpnName: "jamieson-demo-mesh-gcp",
      userName: "solace-cloud-client",
      password: "password",
    },
    // FATAL: 0, ERROR: 1, WARN: 2, INFO: 3, DEBUG: 4, TRACE: 5
    // NOTICE: works only with "solclientjs-debug.js"
    LogLevel: 1,
  },

  iconBase: "./icons/",
  vehicleTypes: {
    bus: { // type name
      reportInterval: 2, // seconds
      icon: "haul.svg",
      bodyLength: 20, // meters
      infoImage: "genentech-coach.png"
    },
    delivery: {
      reportInterval: 2,
      icon: "orecar.svg",
      bodyLength: 20,
      infoImage: "ore-car-info.jpg"
    }
  }
}

export { config as default }