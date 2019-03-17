"use strict";
exports.__esModule = true;
exports["default"] = (function (keys, loading, results, error) {
    var _a;
    // TODO migrate selectProps
    // 可以在这里做更多的事情，把合并的过程放在这里，因为 getFunctions 已经是 private 的了，这样就不用考虑【是否要把 error: '' 给用户】
    // 同时可以把 fetchTime 放在这里
    // 但是为了用户友好，在下个大版本做这个
    if (typeof keys === 'string') {
        var props_1 = (_a = { loading: loading, error: error }, _a[keys] = results, _a);
        return props_1;
    }
    var props = { loading: loading, error: error };
    keys.forEach(function (key, index) {
        props[key] = results[index];
    });
    return props;
});
