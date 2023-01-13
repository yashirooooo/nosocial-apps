const apps = {
    actived: [ // App has two states notStart and actived
        {
            id: "0x123",
            name: "NoSocial",
            description: "NoSocial is a gate to the decentralized socials, which provides the achievement system to help user earn benefits.", // lenster description
            picture: "/assets/images/nosocial.svg",
            url: "https://nosocial.xyz",

            // The following is unique information about the profile
            activities: {
                posts: 0,
                comments: 0,
                mirrors: 0,
                collects: 0
            },

            achievements: [
                // {
                //     id: "0x123",
                //     category: "popularity", 
                //     provider: "Lenster", // Must be provided by the app
                //     name: "100 Followers",
                //     description: "..., ..., ...",
                //     tokenId: "0x10",
                //     picture: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4kWo1LqrT0NThGfCzrguFPsSiqphFHQ3fSt9d8jlL&s",
                //     url: ".../...",
                //     status: "ready", // inProgress, ready, achieved
                // },
                {
                    id:"0x1",
                    category:"popularity",
                    provider:"NoSocial",
                    name:"100 Lens Followers",
                    description:"Have 100 followers on the lens protocol",
                    picture:"https://data.nosocial.xyz/achievements/0x1.png",
                    tokenId: '',
                    url:"https://opensea.io/assets/matic/0x9b82daf85e9dcc4409ed13970035a181fb411542/NaN",
                    status:"ready"
                }
            ]
        },
    ],
    notStart: [
        {
            id: "0x123",
            name: "re:meme",
            description: "re:meme is the first on-chain meme remixer - build on top of Lens Protocol", // lenster description
            picture: "/assets/images/re.svg",
            url: "https://github.com/WeAreNewt/re-meme",

            // The following is unique information about the profile
            activities: {
                posts: 2,
                comments: 0,
                mirrors: 0,
                collects: 120
            },

            achievements: [
                // {
                //     id: "0x123",
                //     category: "popularity", 
                //     provider: "Lenster", // Must be provided by the app
                //     name: "100 Followers",
                //     description: "..., ..., ...",
                //     tokenId: "0x10",
                //     picture: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4kWo1LqrT0NThGfCzrguFPsSiqphFHQ3fSt9d8jlL&s",
                //     url: ".../...",
                //     status: "ready", // inProgress, ready, achieved
                // },
            ]
        },
        {
            id: "0x123",
            name: "LensFrens",
            description: "The last social media handle I'll ever have to create, my Lens profile is portable across any application powered by Lens Protocol.", // lenster description
            picture: "/assets/images/lensFrens.svg",
            url: "https://www.lensfrens.xyz/",

            // The following is unique information about the profile
            activities: {
                posts: 2,
                comments: 0,
                mirrors: 0,
                collects: 120
            },

            achievements: [
                // {
                //     id: "0x123",
                //     category: "popularity", 
                //     provider: "Lenster", // Must be provided by the app
                //     name: "100 Followers",
                //     description: "..., ..., ...",
                //     tokenId: "0x10",
                //     picture: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4kWo1LqrT0NThGfCzrguFPsSiqphFHQ3fSt9d8jlL&s",
                //     url: ".../...",
                //     status: "ready", // inProgress, ready, achieved
                // },
            ]
        }
    ]
};

export default apps;