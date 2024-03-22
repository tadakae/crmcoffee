// @ts-ignore
import {Account, account, client, Databases, Storage} from 'appwrite'
import { APP_WRITE_ID } from '~/app.constants'
// @ts-ignore
import {Client} from "undici";

// @ts-ignore
export const client = new Client()

client.setEndpoint('https://cloud.appwrite.io/v1').setProject(APP_WRITE_ID)
new Account(client);
// @ts-ignore
export { ID } from 'appwrite'
export const DB = new Databases(client)
export const storage = new Storage(client)
