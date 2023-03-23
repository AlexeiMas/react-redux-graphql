# React.js Application with using GraphQL API with anime content

Application consist of several pages with lazy loading pages and images. There is next data loading likes pagination. As well, there's search by title.

#### Main stack technologies
- React JS with TypeScript
- styled-components
- React router dom
- Redux-Toolkit
- Redux reselect
- Apollo Client for requests and graphql-codegen for typing data from API

***

### Start client

Create file in root directory `.env.local` by boilerplate `.env` file

Install mandatory dependencies:

> npm i

Get types for apollo clients from API:

> npm run compile

And in the directory `client/src/graphql` there is a file `.graphqlconfig` when launch GraphQL plugin for IDE.
It'll be created new file `schema.qraphql`, where types data from server are.

After fulfilling all above actions, run client application, proceed to command below:

> npm run start
