/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./components/**/*.tsx', './pages/**/*.tsx'],
  darkMode: "class",
  theme: {
    extend: {
      keyframes: {
        move: {
          from: { transform: 'translate(0,0)' },
          to: { transform: 'translate(0,calc(var(--s)*var(--h) * -1px))' },
        },
        moveMobile: {
          from: { transform: 'translate(0,0)' },
          to: { transform: 'translate(0,calc(var(--s)*var(--hm) * -1px))' },
        },
        liMove: {
          '0%': { opacity: "1", transform: 'translate(0,0)' },
          '10%' :{opacity: "0"},
          '20%' :{opacity: "0"},
          '40%': { opacity: "1", transform: 'translate(0, calc(var(--h) * -1px))' },
          '100%': { opacity: "1", transform: 'translate(0, calc(var(--h) * -1px))' },
        },
        liMoveMobile: {
          '0%': { opacity: "1", transform: 'translate(0,0)' },
          '10%' :{opacity: "0"},
          '20%' :{opacity: "0"},
          '40%': { opacity: "1", transform: 'translate(0, calc(var(--hm) * -1px))' },
          '100%': { opacity: "1", transform: 'translate(0, calc(var(--hm) * -1px))' },
        },
        slideUpAndFade: {
          from: { opacity: "0", transform: 'translateY(2px)' },
          to: { opacity: "1", transform: 'translateY(0)' },
        },
        enterFromRight: {
          from: { opacity: "0", transform: 'translateX(200px)' },
          to: { opacity: "1", transform: 'translateX(0)' },
        },
        enterFromLeft: {
          from: { opacity: "0", transform: 'translateX(-200px)' },
          to: { opacity: "1", transform: 'translateX(0)' },
        },
        exitToRight: {
          from: { opacity: "1", transform: 'translateX(0)' },
          to: { opacity: "0", transform: 'translateX(200px)' },
        },
        exitToLeft: {
          from: { opacity: "1", transform: 'translateX(0)' },
          to: { opacity: "0", transform: 'translateX(-200px)' },
        },
        scaleIn: {
          from: { opacity: "0", transform: 'rotateX(-10deg) scale(0.9)' },
          to: { opacity: "1", transform: 'rotateX(0deg) scale(1)' },
        },
        scaleOut: {
          from: { opacity: "1", transform: 'rotateX(0deg) scale(1)' },
          to: { opacity: "0", transform: 'rotateX(-10deg) scale(0.95)' },
        },
        fadeIn: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        fadeOut: {
          from: { opacity: "1" },
          to: { opacity: "0" },
        },
        pulse: {
           "0%, 100%": {opacity: "1"},
          "50%": {opacity: ".5"}
        }
      },
      animation: {
        move: 'move calc(var(--speed) * var(--s)) steps(var(--s)) infinite',
        liMove: 'liMove calc(var(--speed)) infinite',
        moveMobile: 'moveMobile calc(var(--speedMobile) * var(--s)) steps(var(--s)) infinite',
        liMoveMobile: 'liMoveMobile calc(var(--speedMobile)) infinite',
        slideUpAndFade: 'slideUpAndFade 600ms cubic-bezier(0.16, 1, 0.3, 1)',
        scaleIn: 'scaleIn 200ms ease',
        scaleOut: 'scaleOut 200ms ease',
        fadeIn: 'fadeIn 200ms ease',
        fadeOut: 'fadeOut 200ms ease',
        enterFromLeft: 'enterFromLeft 250ms ease',
        enterFromRight: 'enterFromRight 250ms ease',
        exitToLeft: 'exitToLeft 250ms ease',
        exitToRight: 'exitToRight 250ms ease',
        pulse: `2s cubic-bezier(0.4, 0, 0.6, 1) infinite`
      }
    },
  },
  plugins: [   require('@tailwindcss/typography'),],
}
