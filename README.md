# svara-api

This is the GraphQL API for the Svara generative music system.

## API Reference

### `/graphql`

All GraphQL calls are sent to this endpoint.

For full schema reference, see [the schema](./src/graphql/schema.js).

## Running Locally

### Step 1: Clone the API

```shell
# Clone the repo
git clone https://github.com/ryantoddgarza/svara-api.git

# Move into the project
cd svara-api

# Install dependencies
npm run bootstrap
```

### Step 2: Configure `env` variables

| Name        | Description                                                      |
| ----------- | ---------------------------------------------------------------- |
| `APP_PORT`  | The port number for the API server.                              |
| `MONGO_URI` | The MongoDB Atlas connection string.                             |
| `NODE_ENV`  | The current Node environment in which the API server is running. |

### Step 3: Run the development server

```shell
npm run develop
```
