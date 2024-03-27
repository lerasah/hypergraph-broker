import express, { Response } from "express";
import studentRouter from "./routes/student-router";
import courseRouter from "./routes/course-router";
import resultRouter from "./routes/result-router";
import morgan from "morgan";
import swaggerUi from "swagger-ui-express";

const app = express();

app.use(morgan("tiny"));
app.use(express.json());

app.use("/api/v1/students", studentRouter);
app.use("/api/v1/courses", courseRouter);
app.use("/api/v1/results", resultRouter);

app.use(express.static("public"));
app.use(
    "/docs",
    swaggerUi.serve,
    swaggerUi.setup(undefined, {
      swaggerOptions: {
        url: "/swagger.json",
      },
    })
);

app.use(function notFoundHandler(_req, res: Response) {
    res.status(404).json({
      msg: "Not Found",
    });
});

export default app;