module.exports = {
  fadeIn: {
    '0%': { opacity: '0'},
    '100%': { opacity: '1'}
  },
  fadeOut: {
    '0%': { opacity: '1'},
    '100%': { opacity: '0'}
  },
  'bounce-down': {
    '0%': {
      transform: 'translateY(0)',
      animationTimingFunction: 'cubic-bezier(0,0,0.8,0.8)'
    },
    '50%': {
      transform: 'translateY(-10%)',
      animationTimingFunction: 'cubic-bezier(0.8,0,1,1)'
    },
    '100%': {
      transform: 'translateY(0)',
      animationTimingFunction: 'cubic-bezier(0.8,0,1,1)'
    }
  }
}
