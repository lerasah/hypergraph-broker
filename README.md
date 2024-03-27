# Canned Responses
This will be converted into a lambda, utilizing dynamodb and s3 soon! 

CICD main will be deployed to https://dev-canned-responses-fe.azurewebsites.net

Example api call: https://dev-canned-responses-fe.azurewebsites.net/api/v1/canned-responses?category=DriversLicenseRenewal

GitHub workflow https://github.com/lerasah/hypergraph-broker/actions/workflows/main_dev-canned-responses-fe.yml

## Running Project

### Prerequesites
- [Node.js](https://nodejs.dev/)

### Setup
1. Install dependencies: `npm install`

### Run
- Local development: `npm run dev`
- Production build: `npm run build && npm start`

