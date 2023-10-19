const plugin = require('tailwindcss/plugin')
const defaultTheme = require('tailwindcss/defaultTheme.js')

const spacing = require('./tailwind.spacing')
const zIndex = require('./tailwind.zIndex')
const transitionDuration = require('./tailwind.transitionDuration')
const keyframes = require('./tailwind.keyframes')
const animation = require('./tailwind.animation')

module.exports = plugin(function({ theme }) {}, {
  theme: {
    spacing: {...defaultTheme.spacing, ...spacing},
    zIndex: {...defaultTheme.zIndex, ...zIndex},
    minHeight: {...defaultTheme.minHeight, ...spacing},
    transitionDuration: {...defaultTheme.minHeight, ...transitionDuration},
    keyframes: {...defaultTheme.keyframes, ...keyframes},
    animation: {...defaultTheme.animation, ...animation}
  }
})
