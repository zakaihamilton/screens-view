"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const screens_js_1 = __importDefault(require("screens-js"));
const server_1 = require("react-dom/server");
const react_1 = __importDefault(require("react"));
screens_js_1.default.startup().then(async () => {
    await screens_js_1.default.import("packages", __dirname, async (path) => {
        console.log(path);
        await Promise.resolve().then(() => __importStar(require("./" + path)));
    });
    await screens_js_1.default.init();
    console.log("init complete");
    screens_js_1.default.CoreHttp.register(/^\/$/, (req, resp) => {
        let headers = {
            "Content-Type": "text/html",
            "Access-Control-Allow-Methods": "*",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Headers": "*"
        };
        resp.writeHead(200, headers);
        resp.write("<!DOCTYPE html><html><head><title>My Page</title></head><body>");
        let Example = screens_js_1.default.Example;
        const stream = server_1.renderToNodeStream(react_1.default.createElement(Example, null));
        stream.pipe(resp, { end: false });
        stream.on('end', () => {
            resp.write("</div></body></html>");
            resp.end();
        });
    });
});
