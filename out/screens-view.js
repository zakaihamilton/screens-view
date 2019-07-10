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
screens_js_1.default.startup().then(async () => {
    await screens_js_1.default.import("packages", __dirname, async (path) => await Promise.resolve().then(() => __importStar(require("./" + path))));
    await screens_js_1.default.init();
    console.log("init complete");
    screens_js_1.default.CoreHttp.register(/^\/$/, async function (me) {
        await me.UIRender.component(screens_js_1.default.Example);
    });
});
