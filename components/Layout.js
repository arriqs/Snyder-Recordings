import "@fontsource/karla";

function Layout(props) {
    return (
      <div className="page-layout">
        {props.children}
        <style jsx global>{`
          * {
            font-family: Karla;
            font-weight: bold
          }
          
          body {
            overflow-x: hidden;
            background-image: linear-gradient(#fff, #fff, #fff, #001D5D, #001D5D);
          }

          .LayoutWrapper {
            margin: 0;
          }

          .Header {
            background-color: #FFF;
            font-size: min(1rem, 14px);
            font-weight: bold;
            display: inline-flex;
            align-items: center;
            justify-content: space-between;
            position: fixed;
            z-index: 10;
            padding: 0 5% 0 5%
          }

          ul.Menu {
            display: inline;
            list-style-type: none;
          }

          li.Menu {
            display: inline;
            margin-right: 3em;
            float: right;
            color: #001D5D;
            transition: .35s ease-in-out
          }
          
          li.Menu:hover {
            color: #525252;
            cursor: pointer;
            font-size: 1.1em;
            margin-right: 2.9em
          }


          .menuIcon {
            margin-right: 0.5em;
            transform: translateY(28%);
          }

          .Container {
            margin: 0% 5% 5% 5%;
          }

          img.SRRLogo {
            margin-right: 15vw;
          }

          h1.HeroText {
            font-size: min(4rem, 65px);
            font-weight: bold;
            color: #FFF;
            letter-spacing: 0.73px
          }

          h1 {
            font-size: min(2.5rem, 40px);
            font-weight: bold;
            letter-spacing: 0;
            line-height: 50px;
            color: #001D5D
          }

          h2 {
            font-size: min(2rem, 30px);
            font-weight: bold;
            letter-spacing: 0;
            line-height: 40px;
          }

          h3 {
            font-size: min(1rem, 16px);
            font-weight: bold;
            color: #68C242
          }

          button {
            font-size: min(.8rem, 14px);
            font-weight: bold;
            background-color: #D9F0D0;
            border: none;
            color: #68C242;
            padding: 10px 32px;
            text-align: center;
            margin: 4px 2px;
            opacity: 0.7;
            transition: 0.5s;
          }

          button:hover {
            opacity: 1;
            background-color: #68C242;
            color: white;
          }

          span.Menu {
            padding-bottom: 1em
          }

          p {
            font-size: min(3rem, 16px);
            font-weight: light;
            font-kerning: normal;
            line-height: min(3rem, 25px);
            color: ##B8BFCF;
            letter-spacing: 0
          }
        `}</style>
      </div>
    )
  }
  
  export default Layout