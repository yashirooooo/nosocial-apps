const apps = {
    activated: [ // App has two states notStart and actived
        {
            id: "0x123",
            name: "Lenster",
            description: "..., ..., ...", // lenster description
            picture: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4kWo1LqrT0NThGfCzrguFPsSiqphFHQ3fSt9d8jlL&s",
            url: ".../...",

            // The following is unique information about the profile
            activities: {      
                posts: 2,
                comments: 0,
                mirrors: 0,
                collects: 120
            },

            achievements: [
                {
                    id: "0x123",
                    category: "popularity", 
                    provider: "Lenster", // Must be provided by the app
                    name: "100 Followers",
                    description: "..., ..., ...",
                    tokenId: "0x10",
                    picture: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4kWo1LqrT0NThGfCzrguFPsSiqphFHQ3fSt9d8jlL&s",
                    url: ".../...",
                    status: "ready", // inProgress, ready, achieved
                },
            ] 
        },
    ],
    notStart: [

    ]
};

export default apps;