/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors:{

      mainBlue: '#0a2867',
      buttonBlue: '#00c1b2',
      backBlue: 'rgba(0, 193, 178, 0.18)',
      backGreen: 'rgba(22, 195, 29, 0.19)',
      backRed: 'rgba(244, 67, 54, 0.18)',
      mainGreen: '#16c31d',
      midGreen: '#0f956d',
      mainRed: '#f44336',
      redError: '#d9004c',
      redErrorHover: '#610c04',
      buttonHoverBlue: '#04978c',
      navBlue: '#0b307d',
      white: '#ffffff',
      black: '#000000',
      errorRed: '#d9004c',
      borderGray: '#e7e7e7',
      darkGray: '#7b7b7d',
      disableGray: '#f1f1f1',

      textColor: '#263238',
      secondColor: '#2E3F59',
      mainColor: '#F7BA34',
      mainLight: 'rgba(255, 213, 95, 0.16)',
      mainWhite: '#E0E0E0',
      bgGray: 'rgba(224, 224, 224, 0.2)',
      backGray:'#F6F6F6',
      videoButton: 'rgba(255, 199, 39, 0.68)',
      textYellow: 'rgba(255, 199, 39, 1)',
      bronzs: 'rgba(247, 130, 72, 1)',
      bronze: 'rgba(220, 49, 61, 1)',
      
    },
    fontFamily: {
      IRANYekanExtra :["IRANYekanExtra","sans-serif"],
      IRANYekanBold :["IRANYekanBold","sans-serif"],
      IRANYekanMedium :["IRANYekanMedium","sans-serif"],
      IRANYekanLight :["IRANYekanLight","sans-serif"],
      IRANYekanNormal :["IRANYekanNormal","sans-serif"],
      TimesNewRoman :["TimesNewRoman","sans-serif"],
    },
    extend: {
      boxShadow: {

        'navShadow': '0 3px 8px 0 rgba(0, 0, 0, 0.25)',
        'topShadow': '0 2px 11px 11px rgba(106, 105, 105, 0.19)',
        'buttonShadow': '-2px 4px 11px 0 rgba(0, 193, 178, 0.46)',
        'redbuttonShadow': '0 4px 4px 0 rgba(217, 0, 76, 0.2)',
        'mainBoxShadow': '0 0 8px 10px rgba(194, 194, 194, 0.12)',

        'button': '-30px 30px 30px 30px ',
        'navbar': '0px 4px 50px 0px rgba(224, 224, 224, 0.49)',
        'box': '0px 2px 22px 0px rgba(0, 0, 0, 0.07)',
        'small': '0px 3px 16px 1px rgba(255, 199, 39, 0.27)',
        'row': '0px 1px 30px 5px rgba(166, 166, 166, 0.15)',
        'yellow': '0px 3px 16px 1px #FFC72745',
        '3xl': '0px 2px 20px 0px rgba(105, 105, 105, 0.28)',
        'bigbox': '0px 4px 10px 0px rgba(0, 0, 0, 0.16)',
        
      },
      backgroundImage: {
        'Pic1-navbar': "url('./assets/img/general/NavbarBg.png')", 
        'Pic2-bg': "url('./assets/img/login/MainLoginBg.png')",
        'ThingPic3-bg': "url('./assets/img/UserImg/ThingPic3.png')",
        'ThingPic5-bg': "url('./assets/img/UserImg/ThingPic5.png')",  
        'hero-pattern': "url('./assets/img/UserImg/map.png')",
        'topbox-background':"url('./assets/img/SingleBack.jpg')",
        'contact-background':"url('./assets/img/contactBanner.jpg')",
    
      },
      screens:{
        'totop': {'min': '1590px', 'max': '1710px'},
        'd1690': {'max':'1690px'},
        '2xl': {'max':'1536px'},
        'a1475': {'max':'1475px'},
        'e1440': {'max':'1440px'},
        'ss1440': {'min' : '1440px'},
        'minxl':{'max':'1336px'},
        'xl': {'max': '1280px'},
        'b1115': {'max':'1115px'},
        'lg': {'max': '1024px'},
        'z940' : {'max': '940px'},
        'h800' : {'max': '800px'},
        'md':{'max' : '768px'},
        'sm':{'max':'640px'},
        'c550': {'max':'550px'},
        'xs':{'max':'480px'},
        'y408':{'max':'408px'},
        'k395':{'max':'395px'},
        'u390':{'max':'390px'},
        'q339':{'max':'339px'},
    
      }
    },
  },
  plugins: [],
}


