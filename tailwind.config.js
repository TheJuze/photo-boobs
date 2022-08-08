// Custom spacing
const spacingMap = [ 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 32, 36, 40, 44, 48, 52, 56, 60, 64, 72, 80, 96, 112 ]

const spacing = spacingMap.reduce((acc, item) => {
  acc[item.toString()] = `${item}rem`

  return acc
}, {})

// Custom width/height
const sizeMap = [ 8, 12, 14, 16, 20, 28, 32, 40, 44, 48, 64 ]

const sizes = sizeMap.reduce((acc, size) => {
  acc.height[size.toString()] = `${size}rem`
  acc.width[size.toString()] = `${size}rem`

  return acc
}, {
  height: {},
  width: {}
})


module.exports = {
  content: [
    "./src/pages/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
    "./src/compositions/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      spacing,
      ...sizes,
      colors: {
        'white': '#FFFFFF',
        'gray': '#394147',
        'light-gray': '#8C9093',
        'black': '#2A2A2A',
        'accent': '#00C8B0',
      },
      fontSize: {
        // some styles are in globals.scss
        'subheading': ['24rem', '34rem'],
        'button': ['16rem', '24rem'],
        'button-semibold': ['16rem', '20rem'],
        'caption': ['12rem', '18rem'],
        'label': ['14rem', '15rem'],
        'description': ['14rem', '20rem'],
      },
      borderRadius: {
        32: '32rem',
      }
    },
  },
  plugins: [],
}
