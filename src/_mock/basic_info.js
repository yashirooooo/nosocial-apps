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
  aiTags: {
    id: '0x4', // AI class id
    name: 'AI Content',
    category: 'AI',
    provider: 'NoSocial',
    description: 'Keywords from social content analysis',
    picture: 'https://xxx',
    tokenId: '0x10',
    url: '.../...',
  },
  achievements: [
    {
      id: '0x1', // achievement class id
      category: 'popularity', // Classification
      provider: 'NoSocial',
      name: '100 Followers',
      description: '..., ..., ...',
      picture: 'https://xxx',
      tokenId: '0x10',
      url: '.../...',
      status: 'ready' // There are three states: inProgress, ready, achieved; Here, only two types are returned: ready, achieved
    },
  ],

  activities: {
    posts: { total: 10, lastweek: 3 },
    comments: { total: 10, lastweek: 3 },
    mirrors: { total: 10, lastweek: 3 },
    collects: { total: 10, lastweek: 3 }
  },

  benefits: [
    {
      id: '0x123',
      rewardType: 'token',
      category: 'publiction',
      provider: 'Lenster',
      name: '1.3 ETH',
      benefitName: 'Active user',
      description: '..., ..., ...',
      picture: 'https://xxx',
      providerPicture: 'https://xxx',
      url: '.../...',
      status: 'achieved', // There are three states: notStart, inProgress, achieved; there are only two types here: ready, achieved
    },
  ]
}

export default basic_info;