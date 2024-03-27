import configs from '../config/config'
import { request, gql, GraphQLClient } from 'graphql-request';
const fetch = require('node-fetch');

// https://stepzen.com/docs/connecting-frontends/connecting-via-nodejs#graphql-request
export class HygraphService {

    private client: any; // Declare the type of the client property

    constructor() {
        this.client = new GraphQLClient(
            configs.HYGRAPH_CONTENT_API, {
            headers: {
                authorization: 'Bearer ' + configs.HYGRAPH_TOKEN,
            },
        });
    }

    async fetch(query: string) {
        console.info('Query', query);
        try {
            const response = await this.client.request(query);
            console.info('Response', response)
            return response;
        } catch (error) {
            console.error('Error fetching data:', error);
            throw error;
        }
    }

    async mutate(mutation: string, variables: object) {
        console.info('mutation', mutation);
        try {
            const response = await this.client.request(mutation, variables);
            console.info('Response', response)
            return response;
        } catch (error) {
            console.error('Error fetching data:', error);
            throw error;
        }
    }
}

//module.exports = HygraphService;