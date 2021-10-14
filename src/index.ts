/* eslint-disable no-console */
import { app } from "./app";
import { port } from "./config";

try {
  console.log("Starting server...");
  app.listen(port);
  console.log(`Server running on port ${port}`);
} catch (error) {
  console.error("Could not run server");
  console.error(error);
}
