// Custom spacing
const spacingMap = [ 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 32, 36, 40, 42, 44, 48, 52, 56, 60, 64, 68, 72, 80, 96, 112 ]

const spacing = spacingMap.reduce((acc, item) => {
  acc[item.toString()] = `${item}rem`

  return acc
}, {})

// Custom width/height
const sizeMap = [ 8, 12, 14, 16, 20, 28, 32, 40, 44, 48, 62, 64 ]

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
        'black': '#1D1617',
        'white': '#FFFFFF',
        'gray-1': '#7B6F72',
        'gray-2': '#ADA4A5',
        'gray-3': '#DDDADA',
        'border-color': '#F7F8F8',
      },
      fontSize: {
        // some styles are in globals.scss
        'caption': ['10rem', '15rem'],
      },
      borderRadius: {
        32: '32rem',
        50: '50rem',
      },
      backgroundImage: {
        "brand-gradient": 'linear-gradient(274.42deg, #92A3FD 0%, #9DCEFF 124.45%)'
      },
      boxShadow: {
        "blue": "0 10rem 22rem  rgba(149, 173, 254, 0.3)"
      }
    },
  },
  plugins: [],
}
