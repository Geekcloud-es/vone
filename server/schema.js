const { gql } = require('apollo-server-express')
const typeDefs = gql`
type Users {
    id_user: ID!
    document: Int!
    name: String!
    lastname: String!
    username: String!
    password: String!
    id_rol: Rol!
    status: Int!
    register_date: String!
    id_company: Company!
}
type Rol {
    id_rol: ID!
    name: String!
    register_date: String!
}
type Company {
    id_company: ID!
    name: String!
}
type Query {
    getUser(id_user: ID!): Users
    getAllUsers: [Users!]!
    getRol(id_rol: ID!): Rol
    getCompany(id_company: ID!): Company
    hello: String
    greet(name: String): String
}
type Mutation {
    createUser(name: String!,
        lastname: String!,
        username: String!,
        password: String!,
        id_rol: ID!,
        status: Int!,
        register_date: String!,
        id_company: ID!): Users!
    createRol( id_rol: ID!,
        name: String!,
        register_date: String!): Rol
    createCompany(input: CompanyInput): Company
}
input CompanyInput{
    id_company: ID!
    name: String!
}
`

module.exports = typeDefs