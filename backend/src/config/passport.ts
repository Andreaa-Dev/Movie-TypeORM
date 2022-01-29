import GoogleTokenStrategy from 'passport-google-id-token'

export const googleStrategy = new GoogleTokenStrategy (clientID) 
async function (parsedToken:any, googleId: string, done: any ){
const userPayload= {
    email: pasrsedToken.payload.email
}
}