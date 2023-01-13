const basic_info = {
  info: {
    picture: '/assets/images/default_user.png',
    coverPicture: 'https://images.hdqwalls.com/wallpapers/colorful-neon-city-4k-tx.jpg',
    id: '0x123',
    name: 'Bobdean',
    handle: '@bobdean',
    bio: 'hahaha',
    followers: 123,
    following: 456,
    attributes: {
      location: 'Brussels',
      website: 'crust.network',
      twitter: 'ndsmyy',
    },
    createdAt: '2022-11-01T17:03:49.000Z'
  },
  aiTags: [{
    id: '0x4', // AI class id
    name: 'AI Content',
    category: 'AI',
    provider: 'NoSocial',
    description: 'Keywords from social content analysis',
    picture: 'https://xxx',
    tokenId: '0x10',
    url: '.../...',
  }],
  achievements: [
    // {
    //   id: '0x1', // achievement class id
    //   category: 'popularity', // Classification
    //   provider: 'NoSocial',
    //   name: '100 Followers',
    //   description: '..., ..., ...',
    //   picture: 'https://xxx',
    //   tokenId: '0x10',
    //   url: '.../...',
    //   status: 'ready' // There are three states: inProgress, ready, achieved; Here, only two types are returned: ready, achieved
    // },
    {
      id:"0x2",
      category:"publictions",
      provider:"lenster",
      name:"20 Posts",
      description:"Published 20 posts on lenster",
      picture:"https://data.nosocial.xyz/achievements/0x2.png",
      status:"inProgress",
      tokenId: '',
      url: ''
    },
    {
      id:"0x3",
      category:"time",
      provider:"lenster",
      name:"3 days post",
      description:"Use the Lenster APP to send post works for three consecutive days to get this reward",
      picture:"https://data.nosocial.xyz/achievements/0x3.png",
      status:"inProgress",
      tokenId: '',
      url: ''
    }
  ],

  activities: {
    posts: { total: 10, lastWeek: 3 },
    comments: { total: 10, lastWeek: 3 },
    mirrors: { total: 10, lastWeek: 3 },
    collects: { total: 10, lastWeek: 3 }
  },

  benefits: [
    {
      id: '0x123',
      rewardType: 'token',
      category: 'publiction',
      provider: 'lenster',
      name: '1.3 ETH',
      benefitName: '1.5 ETH',
      description: '..., ..., ...',
      picture: '/assets/images/image2.svg',
      providerPicture: '/assets/images/image1.svg',
      url: '.../...',
      status: 'achieved', // There are three states: notStart, inProgress, achieved; there are only two types here: ready, achieved
    },
    {
      id: '0x123',
      rewardType: 'token',
      category: 'publiction',
      provider: 'lens protocol',
      name: '1.3 ETH',
      benefitName: '567 MATICS',
      description: '..., ..., ...',
      picture: '/assets/images/matic_icon.svg',
      providerPicture: '/assets/images/lens.svg',
      url: '.../...',
      status: 'achieved', // There are three states: notStart, inProgress, achieved; there are only two types here: ready, achieved
    },
    {
      id: '0x123',
      rewardType: 'token',
      category: 'publiction',
      provider: 'ARDrive',
      name: '1.3 ETH',
      benefitName: '100GB Free Storage',
      description: '..., ..., ...',
      picture: '/assets/images/storage.svg',
      providerPicture: '/assets/images/fs.svg',
      url: '.../...',
      status: 'achieved', // There are three states: notStart, inProgress, achieved; there are only two types here: ready, achieved
    },
    {
      id: '0x123',
      rewardType: 'token',
      category: 'publiction',
      provider: 'Crust Network',
      name: '1.3 ETH',
      benefitName: '100GB Free Storage',
      description: '..., ..., ...',
      picture: '/assets/images/storage.svg',
      providerPicture: '/assets/images/crust.svg',
      url: '.../...',
      status: 'achieved', // There are three states: notStart, inProgress, achieved; there are only two types here: ready, achieved
    },
  ]
}

export default basic_info;