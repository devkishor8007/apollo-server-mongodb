# apollo-server-mongodb
sample todo project with Node.js, GraphQL, and MongoDB

## Use dependencies 
    "apollo-server": "^3.10.2",
    "apollo-server-core": "^3.10.2",
    "graphql": "^16.6.0"
    "mongoose": "^6.5.5"
    
## To Use this Repository
    git clone https://github.com/devkishor8007/apollo-server-mongodb.git
    cd apollo-server-mongodb
    $ npm install
    make a directory of < config >, inside < config > make a file i.e < mongodb.js >, use below 2 line of code inside it
       - const MONGODB_URL = "<mongoDB-url>";
       - module.exports = MONGODB_URL;

    after setup, we have to run our server, do < $ node index.js >

## After running server
    use http://localhost:4000 => open playground of graphql, its like a postman
    check out the < clientQuery.txt > for the endpoint of graphql
    thank you
 
