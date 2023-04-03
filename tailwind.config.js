/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      spacing: {
        '63': '63px',
        '77': '77px',
        '498': '498px',
        '555': '555px',
        '745': '730px',
        '710': '653px',
        '166': '1686px',
        '579': '579px',
        '19xl': '19rem',
        '101': '101px',
        '679': '707px',
        '676': '676px',
      },
      colors: {
        'bread':{
          '100':'#262626',
          '200':'#C2B29F',
          '300':'#6C6C6C',
          '400':'#B1B1B1',
          '500':'#D4D4D4',  
          '600':'#DBC5AF',
          '700':'#808080',
          '800':'#BDBDBD',
          '900':'#BABABA',
        },
        'crystal': {
          '100':'#939393',
          '200':'#A89176',
          '300':'#EAEAEA',
          '400':'#595959',
          '500':'#404040',
          '600':'#E3E3E3',
          '700':'#505050',
        }
      },
      fontFamily: {
        'Lato': ['Lato',],
        'Alata': ['Alata',],
      },
      boxShadow: {
        '3xl': '0px 4px 20px rgba(0, 0, 0, 0.03)',
        '4xl': '0px 4px 20px rgba(0, 0, 0, 0.06)',
        '5xl': '0px 4px 25px rgba(0, 0, 0, 0.04)',
        '6xl': '0px 4px 12px 0px #0000001F)',
        '7xl': '0px -4px 20px rgba(0, 0, 0, 0.03)',
      },
      backgroundImage: {
        'layer-amber':"linear-gradient(273.27deg, #AB987C -2.63%, #DBC5AF 101.98%)",
      },
      maxWidth: {
        '1162': '1162px',
      },
      fontSize: {
        40: ['40px', '40px'],
      },
      scale: {
        '200': '2',
      },
      rotate: {
        '23': '7deg',
        '19': '40deg',
      },
      screens: {
        'xs': '340px',
        'xl': '557px',
      },
    },
  },
  plugins: [],
}

