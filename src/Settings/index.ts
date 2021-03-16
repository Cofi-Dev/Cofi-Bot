const dotenv = require("dotenv")
dotenv.config({ path: `.env.${process.env.NODE_ENV}` })

/* Bot settings */
export const token: string = process.env.TOKEN
export const authorization: string = process.env.API_TOKEN
export const prefix: string = process.env.PREFIX ? process.env.PREFIX : "!"
export const owners: string[] = []
export const color: string = "BLUE"

/* Dashboard settings */
export const clientID: string = process.env.CLIENT_ID
export const clientSecret: string = process.env.CLIEN_SECRECT
export const redirectUri: string = process.env.REDIRECT_URI
export const callbackUrl: string = process.env.CALLBACK_URL

/* OAuth URLS */
export const discordURL: String = "https://discord.com/api/oauth2"
