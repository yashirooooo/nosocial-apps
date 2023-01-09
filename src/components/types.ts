export interface ProfileInfo {
    info: {
        picture: string;
        coverPicture: string;
        id: string;
        name: string;
        handle: string;
        bio: string;
        followers: number;
        following: number;
        attributes: Attributes;
    }
}

interface Attributes {
    location: string;
    website: string;
    twitter: string;
}