export default `
    scalar Date

    type Status {
        message: String!
    }

    type Auth {
        token: String!
    }

    type User {
        _id: ID!
        username: String
        firstName: String
        lastName: String
        avatar: String
        email: String!
        createdAt: Date!
        updatedAt: Date!
    }

    type Me {
         _id: ID!
        username: String
        firstName: String
        lastName: String
        avatar: String
        password:String
        email: String!
        createdAt: Date!
        updatedAt: Date!
    }

    type Tweet {
        _id: String!
        user: User!
        text: String!
        favoriteCount: Int!
        createdAt: Date!
        updatedAt: Date!
       
    }

    type Query {
        getTweet(_id: ID!): Tweet
        getTweets: [Tweet]
        getUserTweets: [Tweet]
        me: Me
    }

    type Mutation {
        createTweet(text: String!): Tweet
        updateTweet(_id: ID!, text: String): Tweet
        deleteTweet(_id: ID!): Status

        signup(email:String!, username: String!, fullName: String!, password: String!, avatar: String): Auth
        login(email: String!, password: String!): Auth 
    }
    
    schema {
        query: Query
        mutation: Mutation
    }
`;
