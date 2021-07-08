module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation:{
        moveLinear: 'move 3s linear infinite',
        moveEaseInOut: 'move 3s ease-in-out infinite',
        moveCubicBezier: 'move 3s cubic-bezier(.17, .67, .21, .77) infinite',
        moveDIY: 'move2 2s linear infinite',
        small: 'small 1.5s linear infinite',
        small1: 'small 1.5s linear .2s infinite',
        small2: 'small 1.5s linear .4s infinite',
        small3: 'small 1.5s linear .6s infinite',
        small4: 'small 1.5s linear .8s infinite',
        small5: 'small 1.5s linear 1s infinite',
        rotateX_f: 'rotateX 2s linear infinite',
        rotateX1_f: 'rotateX 2s linear .1s infinite',
        rotateX2_f: 'rotateX 2s linear .2s infinite',
        rotateX3_f: 'rotateX 2s linear .3s infinite',
        rotateY_f: 'rotateY 2s linear infinite',
        rotateY1_f: 'rotateY 2s linear .1s infinite',
        rotateY2_f: 'rotateY 2s linear .2s infinite',
        rotateY3_f: 'rotateY 2s linear .3s infinite',
        // ---------
        rotateX_n: 'rotateX 3s linear infinite',
        rotateX1_n: 'rotateX 5s linear .2s infinite',
        rotateX2_n: 'rotateX 5s linear .4s infinite',
        rotateX3_n: 'rotateX 5s linear .6s infinite',
        rotateY_n: 'rotateY 5s linear infinite',
        rotateY1_n: 'rotateY 5s linear .2s infinite',
        rotateY2_n: 'rotateY 5s linear .4s infinite',
        rotateY3_n: 'rotateY 5s linear .6s infinite',
        // ---------
        rotateX_s: 'rotateX 8s linear infinite',
        rotateX1_s: 'rotateX 8s linear .4s infinite',
        rotateX2_s: 'rotateX 8s linear .8s infinite',
        rotateX3_s: 'rotateX 8s linear 1.2s infinite',
        rotateY_s: 'rotateY 8s linear infinite',
        rotateY1_s: 'rotateY 8s linear .4s infinite',
        rotateY2_s: 'rotateY 8s linear .8s infinite',
        rotateY3_s: 'rotateY 8s linear 1.2s infinite',
        // ---------
        skew: 'skew .5s linear infinite',
        skew_reverse: 'skew_reverse .5s linear infinite',
      },
      keyframes: {
        move: {
          '0%, 100%': { transform: 'translateX(0)' },
          '50%': { transform: 'translateX(300px)' }
        },
        move2: {
          '0%, 100%': { transform: 'translate(0, 0)' },
          '25%': { transform: 'translate(30px, -30px)' },
          '50%': { transform: 'translate(60px, 0)' },
          '75%': { transform: 'translate(30px, -30px)' }
        },
        small: {
          '0%': { transform: 'scale(1)' },
          '10%': { transform: 'scale(.8)' },
          '20%': { transform: 'scale(.6)' },
          '30%': { transform: 'scale(.4)' },
          '40%': { transform: 'scale(.2)' },
          '50%': { transform: 'scale(0)' },
          '60%': { transform: 'scale(.2)' },
          '70%': { transform: 'scale(.4)' },
          '80%': { transform: 'scale(.6)' },
          '90%': { transform: 'scale(.8)' },
          '100%': { transform: 'scale(1)' },
        },
        rotateX: {
          '0%': { transform: 'rotateX(0)' },
          '50%': { transform: 'rotateX(180deg)' },
          '100%': { transform: 'rotateX(360deg)' },
        },
        rotateY: {
          '0%': { transform: 'rotateY(0)' },
          '50%': { transform: 'rotateY(180deg)' },
          '100%': { transform: 'rotateY(360deg)' },
        },
        skew: {
          '0%, 100%': { transform: 'skew(30deg, 0)' },
          '50%': { transform: 'skew(-30deg, 0)' }
        },
        skew_reverse: {
          '0%, 100%': { transform: 'skew(-30deg, 0)' },
          '50%': { transform: 'skew(30deg, 0)' }
        },
      }
    },
  },
  variants: {},
  plugins: [],
}
