import Head from 'next/head';
import Layout from '../components/Layout';
import PortfolioForm from '../components/Form';
import { useForm } from "react-hook-form";
import { useState, useEffect } from 'react'



const assetPaths = {
  logo: '/logo/SVGS/SRrecordings.svg',
  logoWhite: '/logo/SVGS/SRRecordings_white.svg',
  home: '/Icons/SVGs/Home.svg',
  records: '/Icons/SVGs/records.svg',
  music: '/Icons/SVGs/music.svg',
  artists: '/Icons/SVGs/artists.svg',
  concerts: '/Icons/SVGs/concerts.svg',
  hero: '/Images/image1.png',
  contactUs: '/Images/image3.png',
  playButton: '/Icons/SVGs/playbutton.svg',
  brent: '/Images/image2.png',
  youtube: '/Icons/SVGs/youtube.svg',
  twitter: '/Icons/SVGs/twitter.svg',
  instagram: '/Icons/SVGs/Instagram.svg',
  snapchat: '/Icons/SVGs/Snapchat.svg'
}

const PlayButton =()=> {
  const [opacity, setOpacity] = useState(0.8)
  return (
    <>
      <svg width="39px" height="39px" viewBox="0 0 39 39" version="1.1" xmlns="http://www.w3.org/2000/svg" >
          <title>Group 4 Copy</title>
          <desc>Created with Sketch.</desc>
          <defs></defs>
          <g id="DevTest" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd" transform="translate(-640.000000, -1918.000000)">
              <g id="caro" transform="translate(-219.000000, 1346.000000)" fill="#fff">
                  <g id="Group-4-Copy" transform="translate(878.500000, 591.500000) scale(-1, 1) translate(-878.500000, -591.500000) translate(859.000000, 572.000000)">
                      <circle id="Oval" onMouseEnter={()=>{setOpacity(1)}} onMouseLeave={()=>{setOpacity(0.8)}} fillOpacity={opacity} cx="19.5" cy="19.5" r="19.5"></circle>
                      <g id="Group-6-Copy" transform="translate(18.500000, 19.500000) rotate(180.000000) translate(-18.500000, -19.500000) translate(14.000000, 15.000000)">
                          <polygon id="Triangle" fill="#001D5D" transform="translate(4.500000, 4.500000) rotate(90.000000) translate(-4.500000, -4.500000) " points="4.5 0 9 9 0 9"></polygon>
                      </g>
                  </g>
              </g>
          </g>
      </svg>
      <style jsx>
        {`
          svg {
            margin-right: 1em;

          }

          circle :hover {
            fill
          }
        `}
      </style>
    </>
  )
}



const NavBar = (props) => {
  const { logo, home, records, music, artists, concerts, windowWidth } = props;
  const navWidth = windowWidth-.001;
  console.log(`navWidth:${navWidth}`);

  return (
    <div className="Header" style={{ width: `${navWidth}px`}}>
      <img 
        src={logo}
        className="SRRLogo" 
        alt="logo" />
      <ul className="Menu">
        <li className="Menu"><img className="Menu" alt='home' src={home} /><span className="Menu">Home</span></li>
        <li className="Menu"><img className="Menu" alt='records' src={records} /><span className="Menu">Records</span></li>
        <li className="Menu"><img className="Menu" alt='music' src={music} />Music</li>
        <li className="Menu"><img className="Menu" alt='artists' src={artists} />Artists</li>
        <li className="Menu"><img className="Menu" alt='concerts' src={concerts} />Concerts</li>
      </ul>
      <button className="Menu">Sign Up</button>
    </div>
  )
}

const HeroImage = (props) => {
  const { hero, windowWidth } = props;
  const heroWidth = windowWidth-.001;
  console.log(`heroWidth:${heroWidth}`);
  return (
    <div style={{ backgroundImage: `url(${hero})`, width: `${heroWidth}px` }} className='Hero'>
      <div className='HeroText' style={{ width: `${heroWidth/2}px` }}>
        <h1 className='HeroText'>A.M. Paradox</h1>
        <p>Christopher Brent Wood, better known as by stage name Brent Faiyaz, is an American singer and record producer. He released his debut project, an extended play entitled A.M. Paradox, in 2016.</p>
        <div className='PlayButton'>
          <PlayButton />
          <p>Watch Video</p>
        </div>
      </div>
      <style jsx>{`
        .Hero {
          height: 100vh;
          background-repeat: repeat;
          background-size: 110%;
          display: flex;
          color: white;
          align-items: center;
          text-align: left;
          transform: translateY(10%);
          animation: animatedBackground 30s linear infinite alternate;
          transition: background-position .35s ease-in-out;
        }

        @keyframes animatedBackground {
          from {
            background-position: 0 0;
            background-size: 130%;
          }
          to {
            background-position: left;
            background-size: 170%;
          }
        }
        
        .HeroText {
          margin-left: 5%;
          display: inline;
        }

        h1.HeroText {
          margin: 0px;
        }

        div.PlayButton {
          display: flex;
          align-items: center
        }

        img.PlayButton {
          margin-right: 1em;
        }

        img.PlayButton :hover {
          color: #000
        }
      `}</style>
    </div>
  )
}

const ImageWText = (props) => {
  const { windowWidth } = props;
  const iwtWidth = windowWidth-.001;
  console.log(`iwtWidth:${iwtWidth}`);
  return (
    <div className='wrapper' style={{ width: `${iwtWidth}px` }}>
      <div className="artistImg" style={{backgroundImage: `url(${assetPaths.brent})`}}></div>
      <div className="imageTextContainer">
        <h1>Brent Faiyaz, So Far Gone</h1>
        <p className="BodyText">
          Faiyaz began uploading his music onto SoundCloud in 2014 and moved from his hometown Columbia, Maryland to Charlotte, North Carolina before ultimately settling in Los Angeles, California to further his music career. On January 19, 2015, he released his debut single "Allure".[4] On June 1, 2016, Faiyaz released "Invite Me", the lead single from his upcoming debut EP. On September 19, 2016, his 21st birthday, the EP entitled A.M. Paradox was released and received with positive revviews from music critics. On January 26, 2017, Sonder released their debut EP Into.
        </p>
        <button>Learn More</button>
      </div>
      <style jsx>{`
        .wrapper {
          margin-top: 10%;
          display: flex;
          flex-wrap: wrap;
          height: 70vh
        }
        
        .artistImg {
          height: inherit;
          background-repeat: no-repeat;
          background-attachment: scroll;
          background-position: center;
          background-size: cover;
          flex-basis: 50%;
          float: left;
          width: 33em;
          margin-right: 3%
        }

        .imageTextContainer {
          display: flex;
          flex-direction: column;
          max-width: 40%;
          height: inherit;
          align-items: flex-start;
          justify-content: space-between;
        }

        button {
          max-width: 35%;
          margin: 0
        }

        h1 {
          margin-top: 1%;
          margin-bottom: 0;
          padding-top: 0;
          padding-right: 10vw;
          font-size: 40px;
          line-height: 1.3em
        }

        p {
          height: 60%;
          padding: 1em 1vw 1em 0;
          margin: 0 0 1em;
          overflow-y: scroll;
          font-size: 1em
        }
      `}</style>
    </div>
  )
}

const ImageSlider = (props) => {
  const { windowWidth } = props;
  const sliderWidth = (windowWidth-.001)*1.5;
  console.log(`sliderWidth:${sliderWidth}`);
  const [slideAnimation, setSlideAnimation] = useState(0)
  const sliderCard = [
    {
      src: '/Images/image4.png',
      h2: "Trapsoul",
      h3: "BRYSON TILLER",
      content: "Bryson Dijuan Tiller is an American rapper, singer, and songwriter. Born in Louisville, Kentucky, he started his career in 2011, releasing his debut mixtape titled Killer Instinct Vol. 1."
    },
    {
      src: '/Images/image4.png',
      h2: "Trapsoul",
      h3: "BRYSON TILLER",
      content: "Bryson Dijuan Tiller is an American rapper, singer, and songwriter. Born in Louisville, Kentucky, he started his career in 2011, releasing his debut mixtape titled Killer Instinct Vol. 1."
    },
    {
      src: '/Images/image4.png',
      h2: "Trapsoul",
      h3: "BRYSON TILLER",
      content: "Bryson Dijuan Tiller is an American rapper, singer, and songwriter. Born in Louisville, Kentucky, he started his career in 2011, releasing his debut mixtape titled Killer Instinct Vol. 1."
    }
  ]
  return (
    <div style={{ width: `${sliderWidth}px`, transform: `translateX(-${sliderWidth*.12}px)` }} className="sliderSectionWrapper">
      <div style={{ width: `${sliderWidth*1.5}px` }} className="sliderWrapper">
        <div className="sliderSectionTextBox">
          <h1 className="sliderSectionHeader">New Releases</h1>
          <p className="sliderSectionBodyText">New albums every single month, check out the newest & best from Snyder Recording artists, now available on Apple Music and Spotify.</p>
        </div>
        <div style={{ transform: `translateX(${slideAnimation}%)`, transition: 'translateX 3.5s ease-in-out' }} className={'sliderCardsWrapper'}>
          {sliderCard.map(card => (
            <div className="sliderCard">
              <img className="sliderImage" src={card.src} />
              <div className="sliderCardTextBox">
                <h2 className="sliderHeader2">
                  {card.h2}
                </h2>
                <h3 className="sliderHeader3">
                  {card.h3}
                </h3>
                <p className="sliderBodyText">{card.content}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="sliderSectionIcons">
          <img onClick={()=>{(slideAnimation === 0) ? setSlideAnimation(33) : (slideAnimation === 33) ? setSlideAnimation(-33) : (slideAnimation === -33) ? setSlideAnimation(0) : console.log('Slider Index Error - Left Arrow')}} src='/Icons/SVGs/left_controller.svg' alt="left arrow" />
          <img onClick={()=>{(slideAnimation === 0) ? setSlideAnimation(-33) : (slideAnimation === 33) ? setSlideAnimation(0) : (slideAnimation === -33) ? setSlideAnimation(33) : console.log('Slider Index Error - Right Arrow')}} src='/Icons/SVGs/right_controller.svg' alt="right arrow" />
        </div>
        </div>
        
      <style jsx>
        {`
          .sliderSectionWrapper {
            background-color: #f6f6f6;
            overflow-x: hidden;
          }

          .sliderWrapper {
            margin-top: 10%;
            display: flex;
            flex-direction: column;
            flex-wrap: none;
            overflow-x: hidden;
            justify-content: center;
            align-items: center;
            padding: 0 5em 0 5em;
            background-color: #f6f6f6;

            transform: translateX(-20%);
            
          }

          .sliderCardsWrapper {
            background-color: #f6f6f6;
            display: flex;
            flex-direction: row;
            transform: translateX(0);
            transition: translateX() 3.5s ease-in-out
          }

          .sliderCardsAnimation {
            animation: slide 3s
          }

          .sliderSectionTextBox {
            text-align: center;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            background-color: #f6f6f6;
            margin-top: 2.5em;
            margin-bottom: 3.5em
          }

          .sliderSectionIcons {
            text-align: center;
            display: flex;
            flex-direction: row
            align-items: center;
            justify-content: center;
            background-color: #f6f6f6;
            margin-top: 4em;
            margin-bottom: 4em
          }

          .sliderSectionIcons > img {
            padding: 0 1em 0 1em
          }

          .sliderSectionHeader {
            margin-bottom: 0
          }

          .sliderSectionBodyText {
            width: 50vw
          }

          .sliderCard {
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: row;
            border-radius: 10px;
            background-color: #fff;
            width: 70%;
            height: 15.5em;
            margin-left: 1em;
            margin-right: 1em;
            padding: 2em 1.5em 2em 1.5em
          }

          .sliderCard :first-child {
            height: 15.5em
          }

          .sliderCard :first-child > div {
            height: 10em;
            display: inline-table
          }

          .sliderCard :first-child > div > p {
            height: 8em;
            width: 20em;
          }

          .sliderImage {
            height: 8em;
            width: 8em;
            margin-right: 3em;
          }

          .sliderCardTextBox {
            width: 20em;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: center
          }

          .sliderHeader2 {
            margin: 0 0 0.25em 0;
            color: #001D5D
          }

          .sliderHeader3 {
            margin: 0
          }

          .sliderBodyText {
            margin: 0.25em 0.25em 0.25em 0 
          }
        `}
      </style>
    </div>
  )
}

const GMaps = (props) => {
  const { windowWidth } = props;
  const gMapsWidth = windowWidth-.001;
  console.log(`gMapsWidth:${gMapsWidth}`);
  return (
    <div style={{ height: `${80}vh`, width: `${gMapsWidth}px`, backgroundColor: "#001D5D"}}>

    </div>
  )
}

const ContactUs = ({onSubmit, windowWidth}) => {
  const { register, handleSubmit, errors } = useForm();
  const [ firstNameError, lastNameError, emailError, textboxReqError, textboxLengthError ] = [ errors.firstName && errors.firstName?.type === "required", errors.lastName && errors.lastName?.type === "required", errors.email && errors.email?.type === "required", errors.textbox && errors.textbox?.type === "required", errors.textbox && errors.textbox?.type === "minLength" ];

  const contactUsWidth = windowWidth-.001;
  console.log(`contactUsWidth:${contactUsWidth}`);
  return (
    <div style={{ width: `${contactUsWidth}px` }} className="ContactUsWrapper">
      <div style={{ width: `${contactUsWidth/2}px` }} className="formWrapper">
        <h1>Get In Touch</h1>
        <p>New albums every single month, check out the newest & best from Snyder Recording artists, now available on Apple Music & Spotify</p>
        <div>
          <form style={{ width: `${contactUsWidth/2}px` }} onSubmit={handleSubmit(onSubmit)}>
            {
              (()=>{
                if (firstNameError || lastNameError || emailError || textboxReqError || textboxLengthError) { return (
                  <p variant='danger'>
                    Please review required fields.
                  </p>
                )}
              })()
            }
            <input 
              placeholder={!firstNameError ? 'First Name' : 'First Name is required'}
              ref={register({required: true})}
              name="firstName"
              type="text"
              style={{ backgroundColor: `${!lastNameError ? `#f${6}f${6}f${6}` : `rgb(${255}, ${204}, ${204})`}` }}
            />
            
          
            <input 
              placeholder={!lastNameError ? 'Last Name' : 'Last Name is required'}
              ref={register({required: true})}
              name="lastName"
              rows="5"
              type="text"
              style={{ backgroundColor: `${!lastNameError ? `#f${6}f${6}f${6}` : `rgb(${255}, ${204}, ${204})`}` }}
            />

            <input 
              placeholder={!emailError ? 'Email' : 'Email is required'}
              ref={register({required: true, pattern: /.{1,}@[^.]{1,}/})}
              name="email"
              type="text"
              style={{ backgroundColor: `${!emailError ? `#f${6}f${6}f${6}` : `rgb(${255}, ${204}, ${204})`}` }}
            />

            <CustomSelect />

            <textarea
              name="textbox" 
              placeholder="Write a brief message..." 
              ref={register({required: true, minLength: 10})}
              type="text"
              style={{ backgroundColor: `${!textboxReqError && !textboxLengthError ? `#f${6}f${6}f${6}` : `rgb(${255}, ${204}, ${204})`}` }}
            ></textarea>

            <input className='submit' type="submit" value="Send Message" />
          </form>
        </div>
      </div>
      <div style={{ width: `${contactUsWidth/2}px`, backgroundImage: `url(${assetPaths.contactUs})` }} className="ContactUsImg">
      </div>
      <style jsx>
        {`
          .ContactUsWrapper {
            height: 120vh;
            background-color: #fff;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: flex-end;
          }

          .ContactUsImg {
            height: inherit;
            float: right;
            background-repeat: no-repeat;
            background-attachment: scroll;
            background-position: center;
          }

          .formWrapper{
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: center;
            margin-left: 5%;
          }

          p {
            padding-right: 22vw;
            margin-top: 0;
            margin-bottom: 3em
          }

          form {
            display: flex;
            flex-wrap: wrap;
            align-items: flex-start;
            justify-content: center
          }

          input {
            padding: 1em 1em 1em 2em;
            margin-left: 0;
            margin-right: 3em;
            margin-bottom: 3em;
            background-color: #f6f6f6;
            border: 1px solid transparent;
            cursor: pointer;
            user-select: none;
            width: 20em;
            color: #525252
          }

          input.submit {
            width: 10em;
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

          input.submit:hover {
            opacity: 1;
            background-color: #68C242;
            color: white;
          }

          select {
            padding: 1em 1em 1em 2em;
            margin-left: 0;
            margin-right: 1em;
            background-color: #f6f6f6;
            border: 1px solid transparent;
            cursor: pointer;
            user-select: none;
            width: 20em;
            color: #525252
          }

          textarea {
            width: 43em;
            height: 10em;
            margin-bottom: 3em;
            padding: 2em;
            border: none;
            resize: none
          }
        `}
      </style>
    </div>
  )
}






const CustomSelect =()=> {
  const options = ["Receive a Quote", "Explore Career Opportunities"];
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const toggling = () => setIsOpen(!isOpen);

  const onOptionClicked = value => () => {
    setSelectedOption(value);
    setIsOpen(false);
    console.log(selectedOption);
  };



  return (
    <div className="dropdownContainer">
      <div className="dropdownHeader" onClick={toggling}>
        { selectedOption || "Reason For Contacting" }
      </div>
      { isOpen && (
        <div className="dropdownListContainer">
          <ul className="dropdownList">
            {options.map(option=> (
              <li className="listItem" onClick={onOptionClicked(option)} key={Math.random()}>
                {option}
              </li>
            ))}
          </ul>
        </div>
      )}
      <style jsx>
        {`
          .dropdownListContainer {
            margin-top: 1em; 
            margin-bottom: 3em;
            display: flex;
            width: 20em
            
          }
          .dropdownContainer {
            width: 16.5em;
            height: 2.8em;
            margin: 0;
          }

          .dropdownHeader {
            margin-bottom: 0.8em;
            margin-left: 0;
            padding: 1em 1em 1em 2em;
            color: #525252;
            background-color: #f6f6f6;
            border: 1px solid transparent;
            cursor: pointer;
            user-select: none;
            height: 3.15em;
            width: 20em;
            text-rendering: auto;
            letter-spacing: normal;
            word-spacing: normal;
            text-transform: none;
            text-indent: 0px;
            text-shadow: none;
            display: inline-block;
            text-align: start;
            appearance: textfield;
            cursor: text;
            font: bold 13.3333px Karla;
          }

          ul {
            padding: 1em;
            margin: 0;
            background: #f6f6f6;
            box-sizing: border-box;
            color: #f6f6f6;
            z-index: 10;
            background-color: #001D5D;
            width: 16.5em
          }

          ul:first-child {
            padding-top: 0.8em;
          }

          li {
            padding-top: 1em;
            list-style: none;
            margin-bottom: 0.8em;
            font-family: Karla;
            z-index: 10;
            background-color: #001D5D
          }

        `}
      </style>
    </div>
  );
}

const Footer = (props) => {
  const { windowWidth } = props;
  const footerWidth = windowWidth-.001;
  console.log(`footerWidth:${footerWidth}`);
  const footerLists = [
    [
        assetPaths.logo,
        '8521 W Fairfax Rd',
        'Los Angeles, CA',
        '90210',
        "909.505.4302"
    ],

    [
        'Explore',
        'About Us',
        'Our Story',
        'Team',
        'Careers',
        'FAQ'
    ],

    [
        'Music',
        'Missing Out',
        'Trapsoul',
        'Sonder Sons',
        'Paradise Today',
        'Needed'
    ],

    [
        'Artists',
        'Brent Faiyaz',
        'Drake',
        'Bryson Tiller',
        'Young Ford',
        'Rudy Fresco'
    ],

    [
        'Records',
        'What a Time',
        'Coming Home',
        'Always First',
        'So Far Gone',
        'Big Bluez'
    ],

    [
        'Concerts',
        'Midland Live',
        'Granada 2018',
        'Tiller Unplugged',
        'Love Live',
        'XX Live Mix'
    ]
  ]

  const SwapInLogo = (props) => {
    const { logoBoolean, logo, item } = props;
    return (
      <>
        { !logoBoolean ? item : <img className='SRRLogo' src={logo} alt='logo' /> }
      </>
    )
  }
  console.log(assetPaths.youtube)
  return (
    <div style={{ width: `${footerWidth-0.1}px` }} className="listWrapper">
      <ul style={{ width: `${footerWidth-0.1}px` }} className="FooterLists">
        { 
          footerLists.map(list => (
            <ul className="list">
              {
                list.map(item => (
                  <>
                    <li className={(item === list[0]) ? 'listItem1' : 'listItem'}>
                      <SwapInLogo item={item} logo={assetPaths.logoWhite} logoBoolean={(item !== footerLists[0][0]) ? false : true} />
                    </li>
                  </>
                ))
              }
            </ul>
          ))
        }
      </ul>
      <div className="divider">
        <hr ></hr>
      </div>
      <div className="footerSocial">
        <br />
        <div className="textWrapper">
          <p>Privacy Policy</p>
          <p>Terms & Conditions</p>
        </div>
        <div className="socialIconWrapper">
          <img className='socialIcon' src={assetPaths.youtube} alt='Follow us on Youtube' />
          <img className='socialIcon' src={assetPaths.twitter} alt='Follow us on Twitter' />
          <img className='socialIcon' src={assetPaths.instagram} alt='Follow us on Instagram' />
          <img className='socialIcon' src={assetPaths.snapchat} alt='Follow us on Snapchat' />
        </div>
      </div>
      <style jsx>
        {`
          .ListWrapper {
            background-color: #001D5D;
            display: flex;
            flex-direction: column
          }

          .FooterLists {
            display: inline-flex;
            align-items: center;
            justify-content: flex-start;
            list-style-type: none;
            margin-top: 0;
            padding: 5%;
            background-color: #001D5D;
          }

          ul {
            list-style-type: none;
            margin-bottom: 0
          }

          ul > ul {
            padding-left: 0;
            margin-right: 3em;
            width: 10em
          }

          .listItem1 {
            color: #fff;
            font-weight: bold
          }

          img {
            padding-bottom: 0;
            height: auto
          }

          li {
            color: #B8BFCF;
            padding: 0.25em
          }

          li:hover {
            color: #fff
          }

          .footerSocial {
            display: flex;
            align-items: center;
            justify-content: flex-start;
            margin-top: 0;
            padding: 2% 0 2% 5%;
            background-color: #001D5D;
            width: 100vw;
          }

          .divider {
            background-color: #001D5D;
            width: 100vw;
            display: flex;
            align-items: center;
            justify-content: flex-start;
            padding-left: 5%;
            margin: 0
          }
          
          hr {
            border-top: 0.1px solid #001D5D;
            height: 0.001px;
            width: 89.5vw;
            color: #001D5D;
            margin: 0;
            padding: 0
          }

          .textWrapper {
            width: 40vw;
            margin-right: 48vw;
            display: flex
          }

          .textWrapper > p {
            margin-right: 1.5em;
            color: #fff
          }

          .socialIconWrapper {
            width: 30vw
          }

          .socialIcon {
            height: 2.5em;
            width: 2.5em;
            padding-left: 1em;
            margin-right: 0.5em
          }

        `}
      </style>
    </div>
  )
}

export default function Home() {
  async function checkWindow () {
    const windowIsLoaded = await Promise.resolve(window !== 'undefined' && !(isNaN(window.innerWidth)));
    return windowIsLoaded
  };
  const [windowWidth, setWindowWidth] = useState(()=>{checkWindow().then(()=>{
    console.log(`Initial Global Width:${window.innerWidth}`)
    return (window.innerWidth);
  })});
   
  useEffect(() => {
    checkWindow().then(()=>{
      function updateWidth() {
        setWindowWidth(window.innerWidth);
        console.log(`New global width:${window.innerWidth}`)
      }
      window.addEventListener("load", updateWidth)
      window.addEventListener("resize", updateWidth);
      return ()=>{window.removeEventListener("resize")}
    },[window.innerWidth])
  });
  

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <div className="LayoutWrapper">
          <NavBar
            logo={assetPaths.logo}
            home={assetPaths.home}
            records={assetPaths.records}
            music={assetPaths.music}
            artists={assetPaths.artists}
            concerts={assetPaths.concerts}
            windowWidth={windowWidth}
          />
          <HeroImage
            hero={assetPaths.hero}
            playButton={assetPaths.playButton}
            windowWidth={windowWidth}
          />
          <ImageWText windowWidth={windowWidth}  />
          <ImageSlider windowWidth={windowWidth}  />
          <GMaps windowWidth={windowWidth}  />
          <ContactUs windowWidth={windowWidth}  />
          <Footer windowWidth={windowWidth}  />
        </div>
      </Layout>
    </div>
  )
}
