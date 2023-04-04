"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RightButton = exports.LeftButton = void 0;
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const LeftButton = (_a) => {
    var { onPress = () => { }, width = 100, backgroundColor = '#ff0015', underlayColor = '#b00412', style = {}, children = <></> } = _a, props = __rest(_a, ["onPress", "width", "backgroundColor", "underlayColor", "style", "children"]);
    return (<react_native_1.TouchableHighlight underlayColor={underlayColor} onPress={onPress} style={[
            {
                backgroundColor,
                flex: 1,
                alignItems: 'flex-start',
                justifyContent: 'center',
                paddingLeft: 8,
                overflow: 'hidden',
                width: '100%',
            },
            style,
        ]} {...props}>
        <react_native_1.View style={{
            width,
            alignItems: 'center',
            justifyContent: 'center',
        }}>
            {children}
        </react_native_1.View>
    </react_native_1.TouchableHighlight>);
};
exports.LeftButton = LeftButton;
const RightButton = (_a) => {
    var { onPress = () => { }, width = 100, backgroundColor = '#0088ff', underlayColor = '#0077ff', style = {}, children = <></> } = _a, props = __rest(_a, ["onPress", "width", "backgroundColor", "underlayColor", "style", "children"]);
    return (<react_native_1.TouchableHighlight underlayColor={underlayColor} onPress={onPress} style={[
            {
                backgroundColor,
                flex: 1,
                width: '100%',
                alignItems: 'flex-end',
                justifyContent: 'center',
                paddingRight: 8,
            },
            style,
        ]} {...props}>
        <react_native_1.View style={{
            width,
            alignItems: 'center',
            justifyContent: 'center',
        }}>
            {children}
        </react_native_1.View>
    </react_native_1.TouchableHighlight>);
};
exports.RightButton = RightButton;
