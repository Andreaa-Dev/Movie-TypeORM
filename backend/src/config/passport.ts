import GoogleTokenStrategy from 'passport-google-id-token'
import {Strategy as JwtStrategy, ExtractJwt} from 'passport-jwt'

const clientId = process.env.GOOGLE_CLIENT_ID
export const googleStrategy = new GoogleTokenStrategy (clientID) 
async function (parsedToken:any, googleId: string, done: any ){
const userPayload= {
    email: pasrsedToken.payload.email,

}
}