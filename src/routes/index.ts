import { Express } from "express";
import { exampleRouter } from "./example/exampleRouter";


export function configureRoutes(app: Express) {
  // Add your routes here
  // you can set a name for the route by using the first parameter.
  // The example below would have a route like this: localhost:8080/example/[route]

  app.use("/example", exampleRouter);
}