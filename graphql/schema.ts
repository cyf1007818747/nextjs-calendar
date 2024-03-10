import "./types/Customer";
import "./types/Invoice";
import { builder } from "./builder";

export const schema = builder.toSchema()

// export const typeDefs = `
//   type Link {
//     id: ID
//     title: String
//     description: String
//     url: String
//     category: String
//     imageUrl: String
//     users: [String]
//   }

//   type Customer {
//     id:        ID    
//     name:      String     
//     email:     String     
//     image_url: String     
//   }

//   type Query {
//     links: [Link]!,
//     customers: [Customer]!,
//   }
// `