var APP_DATA = {
  "scenes": [
    {
      "id": "0-foyer",
      "name": "Foyer",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 4096,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.0370655497921328
      },
      "linkHotspots": [
        {
          "yaw": 0.14451163140107148,
          "pitch": 0.034851215872176766,
          "rotation": 1.5707963267948966,
          "target": "1-live-studio"
        },
        {
          "yaw": -0.3153935138988331,
          "pitch": 0.15742248806593828,
          "rotation": 4.71238898038469,
          "target": "3-office-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-live-studio",
      "name": "Live Studio",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 4096,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -3.0193284823335187,
          "pitch": 0.17911921633556105,
          "rotation": 0,
          "target": "0-foyer"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-manager-room",
      "name": "Manager Room",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 4096,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 3.139730368211417,
          "pitch": 0.18232667183228024,
          "rotation": 0,
          "target": "3-office-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-office-1",
      "name": "Office 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 4096,
      "initialViewParameters": {
        "yaw": 0.04296195081832366,
        "pitch": -0.005565801821704852,
        "fov": 1.38217411905719
      },
      "linkHotspots": [
        {
          "yaw": 0.034080449171087324,
          "pitch": 0.007756572912274606,
          "rotation": 0,
          "target": "4-office-2a"
        },
        {
          "yaw": -1.3576153761316174,
          "pitch": 0.05322241463002264,
          "rotation": 0,
          "target": "2-manager-room"
        },
        {
          "yaw": -2.72078267090982,
          "pitch": 0.08952032853585123,
          "rotation": 0,
          "target": "0-foyer"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-office-2a",
      "name": "Office 2A",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 4096,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.8317112642582778,
          "pitch": 0.13854955348286424,
          "rotation": 4.71238898038469,
          "target": "6-office-3"
        },
        {
          "yaw": 0.6834707229066765,
          "pitch": 0.15241064900669343,
          "rotation": 14.137166941154074,
          "target": "3-office-1"
        },
        {
          "yaw": 1.2987600453968309,
          "pitch": 0.05776537026294193,
          "rotation": 0,
          "target": "0-foyer"
        },
        {
          "yaw": 1.9994529888968486,
          "pitch": 0.027155317767423526,
          "rotation": 1.5707963267948966,
          "target": "2-manager-room"
        },
        {
          "yaw": -0.12590350462068756,
          "pitch": 0.06599400593978721,
          "rotation": 0,
          "target": "5-office-2b"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-office-2b",
      "name": "Office 2B",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 4096,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.1259035192868847,
          "pitch": 0.019824399917725444,
          "rotation": 0,
          "target": "4-office-2a"
        },
        {
          "yaw": -0.8522467376066096,
          "pitch": 0.054031157387033346,
          "rotation": 4.71238898038469,
          "target": "6-office-3"
        },
        {
          "yaw": 0.7086656147210135,
          "pitch": 0.12246124602003405,
          "rotation": 1.5707963267948966,
          "target": "3-office-1"
        },
        {
          "yaw": 1.2973020939076374,
          "pitch": 0.04456712611592195,
          "rotation": 0,
          "target": "0-foyer"
        },
        {
          "yaw": 2.0118595450946506,
          "pitch": 0.014048484021429886,
          "rotation": 1.5707963267948966,
          "target": "2-manager-room"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-office-3",
      "name": "Office 3",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 4096,
      "initialViewParameters": {
        "yaw": -0.012387200164866385,
        "pitch": 0.0028049116192008228,
        "fov": 1.0448295781530728
      },
      "linkHotspots": [
        {
          "yaw": -0.5400933377007782,
          "pitch": 0.2210585305404802,
          "rotation": 4.71238898038469,
          "target": "7-multimedia-room"
        },
        {
          "yaw": -0.2562671886323056,
          "pitch": 0.08144570011558372,
          "rotation": 4.71238898038469,
          "target": "8-pantry"
        },
        {
          "yaw": -0.019429442627997062,
          "pitch": 0.06674723463632759,
          "rotation": 0,
          "target": "9-meeting-room-a"
        },
        {
          "yaw": -3.007769986977829,
          "pitch": 0.07452966475853096,
          "rotation": 0,
          "target": "0-foyer"
        },
        {
          "yaw": -2.4541494209829686,
          "pitch": 0.10685863327053546,
          "rotation": 1.5707963267948966,
          "target": "4-office-2a"
        },
        {
          "yaw": -2.604756660421593,
          "pitch": 0.02410191222586988,
          "rotation": 1.5707963267948966,
          "target": "2-manager-room"
        },
        {
          "yaw": -3.097367946134252,
          "pitch": 0.10468843422804142,
          "rotation": 0,
          "target": "3-office-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-multimedia-room",
      "name": "Multimedia Room",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 4096,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.1191364025912578
      },
      "linkHotspots": [
        {
          "yaw": 3.052722413619083,
          "pitch": 0.22207697119290337,
          "rotation": 0,
          "target": "6-office-3"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-pantry",
      "name": "Pantry",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 4096,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.400783879411991,
          "pitch": 0.1199811172273062,
          "rotation": 0,
          "target": "6-office-3"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-meeting-room-a",
      "name": "Meeting Room A",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 4096,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.01776275583084619,
          "pitch": 0.013320575624060638,
          "rotation": 0,
          "target": "10-meeting-room-b"
        },
        {
          "yaw": -3.1165762603508824,
          "pitch": 0.008294834501624493,
          "rotation": 0,
          "target": "6-office-3"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "10-meeting-room-b",
      "name": "Meeting Room B",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 4096,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.02220214729892156,
          "pitch": 0.013319391196963792,
          "rotation": 0,
          "target": "9-meeting-room-a"
        },
        {
          "yaw": 3.035309979422477,
          "pitch": 0.09486032723292581,
          "rotation": 0,
          "target": "6-office-3"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "REV2 KANTOR FINNA",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
