/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'custom-blue': 'hsl(246, 80%, 60%)',
        'custom-light-red-work': 'hsl(15, 100%, 70%)',
        'custom-soft-blue-play': 'hsl(195, 74%, 62%)',
        'custom-light-red-study': 'hsl(348, 100%, 68%)',
        'custom-lime-green-exercise': 'hsl(145, 58%, 55%)',
        'custom-violet': 'hsl(264, 64%, 52%)',
        'custom-soft-orange-self-care': 'hsl(43, 84%, 65%)',
        'custom-very-dark-blue': 'hsl(226, 43%, 10%)',
        'custom-dark-blue': 'hsl(235, 46%, 20%)',
        'custom-blue-intermediate':'hsl(235, 54%, 41%)',
        'custom-desaturated-blue': 'hsl(235, 45%, 61%)',
        'custom-pale-blue': 'hsl(236, 100%, 87%)',
      },
      fontFamily:{
        'custom-font':'Rubik',
      }
    },
    plugins: [],
  }
}

