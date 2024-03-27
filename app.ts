import express, { Response } from "express";
// import studentRouter from "./routes/student-router";
// import courseRouter from "./routes/course-router";
// import resultRouter from "./routes/result-router";
import cannedresponsesrouter from "./routes/canned-response-router";
import morgan from "morgan";
import swaggerUi from "swagger-ui-express";

const bodyParser = require("body-parser"),
  swaggerJsdoc = require("swagger-jsdoc");

const app = express();

app.use(morgan("tiny"));
app.use(express.json());

app.use("/api/v1/canned-responses", cannedresponsesrouter);

app.use(express.static("public"));

const specs = swaggerJsdoc({
  definition: {
    openapi: "3.1.0",
    info: {
      title: "Canned Responses API with Swagger",
      version: "1.0.0"
    },
    servers: [
      {
        url: "/",
      },
    ],
  },
  apis: ["./routes/*.ts"],
});

app.use(
  "/docs",
  swaggerUi.serve,
  swaggerUi.setup(specs)
);

app.use(function notFoundHandler(_req, res: Response) {
  res.status(404).json({
    msg: "Not Found",
  });
});

export default app;