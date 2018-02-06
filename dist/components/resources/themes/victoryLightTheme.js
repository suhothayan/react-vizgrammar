'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _assign = require('lodash/assign');

var _assign2 = _interopRequireDefault(_assign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Colors
var yellow200 = '#FFF59D';
var deepOrange600 = '#F4511E';
var lime300 = '#DCE775';
var lightGreen500 = '#8BC34A';
var teal700 = '#00796B';
var cyan900 = '#006064';
var blueGrey50 = '#ECEFF1';
var blueGrey300 = '#90A4AE';
var blueGrey700 = '#455A64';
var grey900 = '#212121';
var colors = [deepOrange600, yellow200, lime300, lightGreen500, teal700, cyan900];

// Typography
var sansSerif = "'Roboto', 'Helvetica Neue', Helvetica, sans-serif";
var letterSpacing = 'normal';
var fontSize = 14;
var fontSizeSmall = 12;

// Layout
var padding = 10;
var axisLabelPadding = 30;
var tickLabelpadding = 0;
var baseProps = {
    width: 800,
    height: 450,
    padding: 50,
    colorScale: colors
};

// Labels
var baseLabelStyles = {
    fontFamily: sansSerif,
    fontSize: fontSize,
    letterSpacing: letterSpacing,
    padding: padding,
    fill: blueGrey700,
    stroke: 'transparent'
};

var centeredLabelStyles = (0, _assign2.default)({ textAnchor: 'middle' }, baseLabelStyles);

// Strokes
var strokeDasharray = 'none';
var strokeLinecap = 'round';
var strokeLinejoin = 'round';
var strokeOpacity = '.15';

var victoryLightTheme = {
    area: (0, _assign2.default)({
        style: {
            data: {
                fill: grey900
            },
            labels: centeredLabelStyles
        }
    }, baseProps),
    axis: (0, _assign2.default)({
        style: {
            axis: {
                fill: 'transparent',
                stroke: blueGrey300,
                strokeWidth: 1,
                strokeLinecap: strokeLinecap,
                strokeLinejoin: strokeLinejoin
            },
            axisLabel: (0, _assign2.default)({}, centeredLabelStyles, {
                padding: axisLabelPadding,
                stroke: 'transparent'
            }),
            grid: {
                fill: 'transparent',
                stroke: blueGrey300,
                strokeDasharray: strokeDasharray,
                strokeLinecap: strokeLinecap,
                strokeLinejoin: strokeLinejoin,
                strokeOpacity: strokeOpacity
            },
            ticks: {
                fill: 'transparent',
                size: 10,
                stroke: blueGrey300,
                strokeWidth: 1,
                strokeLinecap: strokeLinecap,
                strokeLinejoin: strokeLinejoin,
                strokeOpacity: strokeOpacity
            },
            tickLabels: (0, _assign2.default)({}, baseLabelStyles, {
                fontSize: fontSizeSmall,
                fill: blueGrey300,
                stroke: 'transparent',
                padding: tickLabelpadding
            })
        }
    }, baseProps),
    bar: (0, _assign2.default)({
        style: {
            data: {
                fill: blueGrey700,
                padding: padding,
                stroke: 'transparent',
                strokeWidth: 0,
                width: 5
            },
            labels: baseLabelStyles
        }
    }, baseProps),
    candlestick: (0, _assign2.default)({
        style: {
            data: {
                stroke: blueGrey700,
                strokeWidth: 1
            },
            labels: centeredLabelStyles
        },
        candleColors: {
            positive: blueGrey50,
            negative: blueGrey700
        }
    }, baseProps),
    chart: baseProps,
    errorbar: (0, _assign2.default)({
        style: {
            data: {
                fill: 'transparent',
                opacity: 1,
                stroke: blueGrey700,
                strokeWidth: 2
            },
            labels: (0, _assign2.default)({}, centeredLabelStyles, {
                stroke: 'transparent',
                strokeWidth: 0
            })
        }
    }, baseProps),
    group: (0, _assign2.default)({
        colorScale: colors
    }, baseProps),
    line: (0, _assign2.default)({
        style: {
            data: {
                fill: 'transparent',
                opacity: 1,
                stroke: blueGrey700,
                strokeWidth: 2
            },
            labels: (0, _assign2.default)({}, baseLabelStyles, {
                stroke: 'transparent',
                strokeWidth: 0,
                textAnchor: 'start'
            })
        }
    }, baseProps),
    pie: (0, _assign2.default)({
        colorScale: colors,
        style: {
            data: {
                padding: padding,
                stroke: blueGrey50,
                strokeWidth: 1
            },
            labels: (0, _assign2.default)({}, baseLabelStyles, {
                padding: 20,
                stroke: 'transparent',
                strokeWidth: 0
            })
        }
    }, baseProps),
    scatter: (0, _assign2.default)({
        style: {
            data: {
                fill: blueGrey700,
                opacity: 1,
                stroke: 'transparent',
                strokeWidth: 0
            },
            labels: (0, _assign2.default)({}, centeredLabelStyles, {
                stroke: 'transparent'
            })
        }
    }, baseProps),
    stack: (0, _assign2.default)({
        colorScale: colors
    }, baseProps),
    tooltip: (0, _assign2.default)({
        style: {
            data: {
                fill: 'transparent',
                stroke: 'transparent',
                strokeWidth: 0
            },
            labels: centeredLabelStyles,
            flyout: {
                stroke: blueGrey700,
                strokeWidth: 1,
                fill: blueGrey50
            }
        },
        flyoutProps: {
            cornerRadius: 10,
            pointerLength: 10
        }
    }, baseProps),
    voronoi: (0, _assign2.default)({
        style: {
            data: {
                fill: 'transparent',
                stroke: 'transparent',
                strokeWidth: 0
            },
            labels: centeredLabelStyles
        }
    }, baseProps)
};

exports.default = victoryLightTheme;