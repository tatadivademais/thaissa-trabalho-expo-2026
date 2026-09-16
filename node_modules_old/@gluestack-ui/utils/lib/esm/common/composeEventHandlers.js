export function composeEventHandlers(...args) {
    return function handleEvent(event) {
        var _a;
        try {
            for (let i = 0; i < args.length; i++) {
                (_a = args[i]) === null || _a === void 0 ? void 0 : _a.call(args, event);
            }
        }
        catch (e) {
            //
        }
    };
}
//# sourceMappingURL=composeEventHandlers.js.map