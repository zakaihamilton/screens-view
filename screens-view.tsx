import screens from "screens-js"

screens.startup().then(async () => {
    await screens.import("packages", __dirname, async (path: string) => await import("./" + path));
    await screens.init();
    console.log("init complete");
    screens.CoreHttp.register(/^\/$/, async function (me: any) {
        await me.UIRender.component("AppMain");
    });
});
