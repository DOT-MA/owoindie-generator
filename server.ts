import * as express from "express";
import * as path from "path";
import * as logger from "morgan";
import * as cookieParser from "cookie-parser";
import * as bodyParser from "body-parser";
import * as http from "http";
import lessMiddleware = require("less-middleware");
import {config as dotenvConfig} from "dotenv";

dotenvConfig();

export const app = express();

import { router as index } from "routes/index";

// Create HTTP server.
const server = http.createServer(app);

// Normalize a port into a number, string, or false.
const normalizePort = (val) => {
    const p = parseInt(val, 10);
    if (isNaN(p)) {
        // named pipe
        return val;
    }
    if (p >= 0) {
        // port number
        return p;
    }
    return false;
};

// Event listener for HTTP server "error" event.
const onError = (error) => {
    if (error.syscall !== "listen") {
        throw error;
    }

    const bind = typeof port === "string"
      ? "Pipe " + port
      : "Port " + port;

    // handle specific listen errors with friendly messages
    switch (error.code) {
        case "EACCES":
            console.error(bind + " requires elevated privileges");
            process.exit(1);
            break;
        case "EADDRINUSE":
            console.error(bind + " is already in use");
            process.exit(1);
            break;
        default:
            throw error;
    }
};

// Event listener for HTTP server "listening" event.
const onListening = () => {
    const addr = server.address();
    const bind = typeof addr === "string"
      ? "pipe " + addr
      : "port " + addr.port;
    logger("Listening on " + bind);
};

// server setup
const port = normalizePort(process.env.PORT || "3000");
app.set("port", port);

// Listen on provided port, on all network interfaces.
server.listen(port);
server.on("error", onError);
server.on("listening", onListening);

// middleware setup
app.use(lessMiddleware(__dirname + "/public"));
app.use(express.static(__dirname + "/public"));
app.use(express.static(__dirname + "/dotma-resources"));
app.use(express.static(__dirname + "/resources"));
app.use("/node_modules", express.static(__dirname + "/node_modules"));
app.use("/dist", express.static(__dirname + "/dist"));

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

if (process.env.NODE_ENV !== "TEST") {
    app.use(logger("dev"));
}

app.use(bodyParser.urlencoded({ extended: false, limit: "50mb" }));
app.use(bodyParser.json({limit: "50mb"}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// routes setup
app.use("/", index);

// error handler
app.use((err, req, res, next) => {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get("env") === "development" ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render("error");
});
