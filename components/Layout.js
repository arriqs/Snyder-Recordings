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
            margin: 0 5% 5% 5%
          }

          .Header {
            background-color: #FFF;
            font-size: 14px;
            font-weight: bold;
            display: inline-flex;
            align-items: center;
            justify-content: space-between;
            width: 100vw;
            position: fixed;
            z-index: 10;
            transform: translateX(-5%);
            padding: 0 5% 0 5%
          }

          ul.Menu {
            display: inline;
            list-style-type: none;
          }

          li.Menu {
            display: inline;
            margin-right: 3em;
            float: inline-end
            color: #001D5D;
            transition: .35s ease-in-out
          }
          
          li.Menu:hover {
            color: #525252;
            cursor: pointer;
            font-size: 1.1em;
            margin-right: 2.9em
          }


          img.Menu {
            margin-right: 0.5em;
            transform: translateY(28%)
          }

          .Container {
            margin: 0% 5% 5% 5%;
          }

          img.SRRLogo {
            height: 6em;
            width: 6em;
            margin-right: 15vw;
          }

          h1.HeroText {
            font-size: 65px;
            font-weight: bold;
            color: #FFF;
            letter-spacing: 0.73px
          }

          h1 {
            font-size: 2.5rem;
            font-weight: bold;
            letter-spacing: 0;
            line-height: 50px;
            color: #001D5D
          }

          h2 {
            font-size: 30px;
            font-weight: bold;
            letter-spacing: 0;
            line-height: 40px;
          }

          h3 {
            font-size: 16px;
            font-weight: bold;
            color: #68C242
          }

          button {
            font-size: 14px;
            font-weight: bold;
            background-color: #D9F0D0;
            border: none;
            color: #68C242;
            padding: 10px 32px;
            text-align: center;
            font-size: 16px;
            margin: 4px 2px;
            opacity: 0.7;
            transition: 0.5s;
          }

          button:hover {
            opacity: 1;
            background-color: #68C242;
            color: white;
          }

          p {
            font-size: 1rem;
            font-weight: light;
            font-kerning: normal;
            line-height: 25px;
            color: ##B8BFCF;
            letter-spacing: 0
          }
        `}</style>
      </div>
    )
  }
  
  export default Layout