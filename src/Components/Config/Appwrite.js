import { Client, Account, Databases } from 'appwrite'

const client = new Client()
client
  .setEndpoint('https://cloud.appwrite.io/v1')
  .setProject('654f25b25f1c4a244fe2')

export const account = new Account(client)
export const database = new Databases(client, '654f26c5e8feed4be7f2')
