const colors = {
  suhYellow: '#FFCA05',
  suhLightBlue: '#0DB6E0',
  suhOrange: '#FF7017',
  suhTeal: '#18B49A',
  frescoYellow: '#FFC302',
  frescoRed: '#D0011C',
  wwBlue: '#379DCC',
  lehighPink: '#E02350',
  lehighBlue: '#19A3DD',
  wwPink: '#FEB2C8',
  wwLightBlue: '#3EBFF8',
  heapYellow: '#FDB809',
  heapRed: '#F20032',
  heapBlue: '#2B00FF'
};

const projects = [
  {
    id: '0',
    name: 'StartUp Health',
    projectType: 'Network',
    url: '/work/suh/network',
    images: [
      {
        name: 'suh-profile-desktop',
        location: 'bottom center',
        width: '220px'
      },
      {
        name: 'class',
        location: 'bottom left under',
        width: '196px'
      }
    ],
    shapes: [
      {
        id: 'suhYellowTriangle',
        type: 'triangle',
        location: 'bottom right over',
        width: 90,
        height: 90,
        definition: [[90/2,0], [0,90], [90,90]],
        fill: colors.suhYellow
      }
    ]
  },
  {
    id: '1',
    name: 'StartUp Health',
    projectType: 'Marketing',
    url: '/work/suh/marketing',
    images: [
      {
        name: 'suh-marketing-desktop',
        location: 'bottom center',
        width: '220px'
      },
      {
        name: 'suh-marketing-mobile',
        location: 'bottom right right-offset',
        width: '110px'
      },
    ],
    shapes: [
      {
        id: 'suhLightBlueTriangle',
        type: 'triangle',
        location: 'bottom right under',
        width: 300,
        height: 200,
        definition: [[300,0], [300,200], [0,200]],
        fill: colors.suhLightBlue
      },
      {
        id: 'suhYellowCircle',
        type: 'circle',
        location: 'bottom left over',
        width: 60,
        height: 60,
        definition: '',
        fill: colors.suhYellow
      }
    ]
  },
  {
    id: '2',
    name: 'StartUp Health',
    projectType: 'Hub Concept',
    url: '/work/suh/hub',
    images: [
      {
        name: 'suh-hub-tall',
        location: 'bottom left',
        width: '186px'
      },
      {
        name: 'suh-hub-short',
        location: 'bottom right right-offset',
        width: '225px'
      }
    ],
    shapes: [
      {
        id: 'suhTealRect',
        type: 'rect',
        location: 'bottom right under',
        width: 180,
        height: 180,
        definition: '',
        fill: colors.suhTeal
      },
      {
        id: 'suhOrangePolygon',
        type: 'polygon',
        location: 'bottom left over',
        width: 200,
        height: 200,
        definition: 'M96.8888889,133.698122 C96.2503257,133.620435 95.5838028,133.826655 95.0936768,134.316781 L75.9444444,153.466013 L56.795212,134.316781 C56.3050861,133.826655 55.6385632,133.620435 55,133.698122 C54.3614368,133.620435 53.6949139,133.826655 53.204788,134.316781 L34.0555556,153.466013 L14.9063232,134.316781 C14.4161972,133.826655 13.7496743,133.620435 13.1111111,133.698122 C12.4725479,133.620435 11.806025,133.826655 11.3158991,134.316781 L-9.36539803,154.998078 C-10.211534,155.844214 -10.211534,157.216071 -9.36539803,158.062207 C-8.51926206,158.908343 -7.14740461,158.908343 -6.30126864,158.062207 L13.1111111,138.649828 L32.5234909,158.062207 C32.9465588,158.485275 33.5010572,158.696809 34.0555556,158.696809 C34.6100539,158.696809 35.1645523,158.485275 35.5876202,158.062207 L55,138.649828 L74.4123798,158.062207 C74.8354477,158.485275 75.3899461,158.696809 75.9444444,158.696809 C76.4989428,158.696809 77.0534412,158.485275 77.4765091,158.062207 L96.8888889,138.649828 L116.301269,158.062207 C117.147405,158.908343 118.519262,158.908343 119.365398,158.062207 C120.211534,157.216071 120.211534,155.844214 119.365398,154.998078 L98.6841009,134.316781 C98.193975,133.826655 97.5274521,133.620435 96.8888889,133.698122 Z',
        rotation: 120,
        fill: colors.suhOrange
      }
    ]
  },
  {
    id: '3',
    name: 'Heap.li',
    projectType: 'Design Concept',
    url: '/work/heap',
    images: [
      {
        name: 'heap-browser',
        location: 'bottom center bottom-offset',
        width: '230px'
      }
    ],
    shapes: [
      {
        id: 'heapYellowCircle',
        type: 'circle',
        location: 'bottom left under',
        width: 200,
        height: 200,
        fill: colors.heapYellow
      },
      {
        id: 'heapBlueCircle',
        type: 'circle',
        location: 'bottom right right-offset under',
        width: 120,
        height: 120,
        fill: colors.heapBlue
      },
      {
        id: 'heapRedCircle',
        type: 'circle',
        location: 'top top-offset right under',
        width: 80,
        height: 80,
        fill: colors.heapRed
      },
    ]
  },
  {
    id: '4',
    name: 'Fresco for iPhone',
    projectType: 'iOS',
    url: '/work/fresco/iphone',
    images: [
      {
        name: 'fresco-phone-landscape',
        location: 'bottom center',
        width: '231px'
      },
      {
        name: 'fresco-phone-portrait',
        location: 'bottom right right-offset',
        width: '110px'
      },
      {
        name: 'protest',
        location: 'bottom left under',
        width: '196px'
      }
    ],
    shapes: [
      {
        id: 'frescoYellowCircle',
        type: 'circle',
        location: 'bottom right over',
        width: 100,
        height: 100,
        fill: colors.frescoYellow
      }
    ]
  },
  {
    id: '5',
    name: 'Fresco for Apple TV',
    projectType: 'tvOS',
    url: '/work/fresco/tv',
    images: [
      {
        name: 'fresco-tv',
        location: 'bottom center bottom-offset',
        width: '230px'
      }
    ],
    shapes: [
      {
        id: 'frescoRedTriangle',
        type: 'triangle',
        location: 'bottom right right-offset under',
        width: 172,
        height: 205,
        definition: [[172,0], [172,205], [0,205]],
        fill: colors.frescoRed
      },
      {
        id: 'frescoYellowPolygon',
        type: 'polygon',
        location: 'bottom left over',
        width: 110,
        height: 205,
        definition: 'M94.2205416,146.698122 C93.5819784,146.620435 92.9154555,146.826655 92.4253296,147.316781 L73.2760972,166.466013 L54.1268648,147.316781 C53.6367388,146.826655 52.9702159,146.620435 52.3316527,146.698122 C51.6930895,146.620435 51.0265666,146.826655 50.5364407,147.316781 L31.3872083,166.466013 L12.2379759,147.316781 C11.7478499,146.826655 11.081327,146.620435 10.4427638,146.698122 C9.80420059,146.620435 9.13767775,146.826655 8.64755177,147.316781 L-12.0337453,167.998078 C-12.8798813,168.844214 -12.8798813,170.216071 -12.0337453,171.062207 C-11.1876094,171.908343 -9.8157519,171.908343 -8.96961593,171.062207 L10.4427638,151.649828 L29.8551436,171.062207 C30.2782116,171.485275 30.8327099,171.696809 31.3872083,171.696809 C31.9417066,171.696809 32.496205,171.485275 32.919273,171.062207 L52.3316527,151.649828 L71.7440325,171.062207 C72.1671004,171.485275 72.7215988,171.696809 73.2760972,171.696809 C73.8305955,171.696809 74.3850939,171.485275 74.8081618,171.062207 L94.2205416,151.649828 L113.632921,171.062207 C114.479057,171.908343 115.850915,171.908343 116.697051,171.062207 C117.543187,170.216071 117.543187,168.844214 116.697051,167.998078 L96.0157536,147.316781 C95.5256277,146.826655 94.8591048,146.620435 94.2205416,146.698122 Z',
        rotation: 230,
        fill: colors.frescoYellow
      }
    ]
  },
  {
    id: '6',
    name: 'Weight Watchers',
    projectType: 'Landing Page',
    url: '/work/ww/landingpage',
    images: [
      {
        name: 'ww-landing-desktop',
        location: 'bottom center',
        width: '225px'
      },
      {
        name: 'ww-landing-mobile',
        location: 'bottom left under',
        width: '110px'
      }
    ],
    shapes: [
      {
        id: 'wwLightBlueCircle',
        type: 'circle',
        location: 'bottom right under',
        width: 200,
        height: 200,
        fill: colors.wwBlue
      }
    ]
  },
  {
    id: '7',
    name: 'Lehigh Valley',
    projectType: 'Health Network',
    url: '/work/lehighvalley/network',
    images: [
      {
        name: 'lehigh-network-desktop',
        location: 'bottom center',
        width: '220px'
      },
      {
        name: 'lehigh-network-mobile',
        location: 'bottom right right-offset',
        width: '110px'
      }
    ],
    shapes: [
      {
        id: 'lehighBlueTriangle',
        type: 'triangle',
        location: 'bottom right under',
        width: 250,
        height: 200,
        definition: [[0,0], [250,0], [250,200]],
        fill: colors.lehighBlue
      },
      {
        id: 'lehighPinkRect',
        type: 'rect',
        location: 'bottom left under',
        width: 184,
        height: 184,
        fill: colors.lehighPink
      }
    ]
  },
  {
    id: '8',
    name: 'Weight Watchers',
    projectType: 'Superbowl Ad 2015',
    url: '/work/ww/superbowl',
    images: [
      {
        name: 'ww-superbowl-desktop',
        location: 'bottom center',
        width: '186px'
      },
      {
        name: 'ww-superbowl-mobile',
        location: 'bottom right right-offset',
        width: '110px'
      },
      {
        name: 'donuts',
        location: 'bottom left under',
        width: '300px'
      }
    ],
    shapes: [
      {
        id: 'wwPinkPolygon',
        type: 'polygon',
        location: 'bottom left left-offset over',
        width: 200,
        height: 200,
        definition: 'M145.220542,139.053937 C144.581978,138.97625 143.915456,139.18247 143.42533,139.672596 L124.276097,158.821828 L105.126865,139.672596 C104.636739,139.18247 103.970216,138.97625 103.331653,139.053937 C102.693089,138.97625 102.026567,139.18247 101.536441,139.672596 L82.3872083,158.821828 L63.2379759,139.672596 C62.7478499,139.18247 62.081327,138.97625 61.4427638,139.053937 C60.8042006,138.97625 60.1376778,139.18247 59.6475518,139.672596 L38.9662547,160.353893 C38.1201187,161.200029 38.1201187,162.571886 38.9662547,163.418022 C39.8123906,164.264158 41.1842481,164.264158 42.0303841,163.418022 L61.4427638,144.005642 L80.8551436,163.418022 C81.2782116,163.84109 81.8327099,164.052624 82.3872083,164.052624 C82.9417066,164.052624 83.496205,163.84109 83.919273,163.418022 L103.331653,144.005642 L122.744032,163.418022 C123.1671,163.84109 123.721599,164.052624 124.276097,164.052624 C124.830596,164.052624 125.385094,163.84109 125.808162,163.418022 L145.220542,144.005642 L164.632921,163.418022 C165.479057,164.264158 166.850915,164.264158 167.697051,163.418022 C168.543187,162.571886 168.543187,161.200029 167.697051,160.353893 L147.015754,139.672596 C146.525628,139.18247 145.859105,138.97625 145.220542,139.053937 Z',
        rotation: 130,
        fill: colors.wwPink
      },
      {
        id: 'wwLightBluePolygon',
        type: 'polygon',
        location: 'bottom left left-offset over',
        width: 160,
        height: 210,
        definition: 'M164.10943,177.478634 C163.716469,177.430827 163.306301,177.557731 163.004685,177.859347 L151.220542,189.64349 L139.436399,177.859347 C139.134783,177.557731 138.724615,177.430827 138.331653,177.478634 C137.938691,177.430827 137.528523,177.557731 137.226907,177.859347 L125.442764,189.64349 L113.658621,177.859347 C113.357005,177.557731 112.946837,177.430827 112.553875,177.478634 C112.160913,177.430827 111.750745,177.557731 111.449129,177.859347 L98.722177,190.586299 C98.2014779,191.106998 98.2014779,191.951218 98.722177,192.471918 C99.2428761,192.992617 100.087096,192.992617 100.607795,192.471918 L112.553875,180.525838 L124.499955,192.471918 C124.760304,192.732267 125.101534,192.862442 125.442764,192.862442 C125.783994,192.862442 126.125223,192.732267 126.385573,192.471918 L138.331653,180.525838 L150.277733,192.471918 C150.538082,192.732267 150.879312,192.862442 151.220542,192.862442 C151.561771,192.862442 151.903001,192.732267 152.163351,192.471918 L164.10943,180.525838 L176.05551,192.471918 C176.576209,192.992617 177.420429,192.992617 177.941128,192.471918 C178.461827,191.951218 178.461827,191.106998 177.941128,190.586299 L165.214176,177.859347 C164.91256,177.557731 164.502392,177.430827 164.10943,177.478634 Z',
        rotation: 210,
        fill: colors.wwLightBlue
      }
    ]
  }
];

export default projects;
