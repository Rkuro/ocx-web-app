export type User = {
    _id?: string;
    email: string;
    password: string;
    auth0Id: string;
    googleId: string;
    facebookId: string;
    twitterId: string;
    githubId: string;
};

export default User;
