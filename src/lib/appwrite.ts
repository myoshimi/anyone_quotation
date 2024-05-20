import { Client, Account, Databases } from 'appwrite';

const client = new Client();

client.setEndpoint('https://cloud.appwrite.io/v1').setProject('664725f300337ad66f5f');

export const account = new Account(client);
export const databases = new Databases(client);

export { ID } from 'appwrite';
