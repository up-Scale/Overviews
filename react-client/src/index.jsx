import React from 'react';
import ReactDOM from 'react-dom';
import SocialShare from './components/SocialShare.jsx';
import Description from './components/Description.jsx'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state ={
      socialShareIcon: ['https://png.icons8.com/color/2x/facebook.png', 
                        'https://png.icons8.com/color/2x/twitter-squared.png', 
                        'https://png.icons8.com/color/2x/secured-letter.png', 
                        'https://png.icons8.com/windows/2x/copy-link.png'
                      ],
      socialShareLink: [ 'https://twitter.com/intent/tweet?url=http%3A%2F%2Fdro.ps%2Fb%2FAe94eO7AQm5O%2Ft&text=Get%20%2410%20off%20your%20first%20purchase%20on%20Massdrop.%20Sign%20up%20and%20check%20out%20the%20%22Massdrop%20CTRL%20High-Profile%20Mechanical%20Ke...%22%3A&original_referer=https%3A%2F%2Ftwitter.com%2Fshare%3Furl%3Dhttp%253A%252F%252Fdro.ps%252Fb%252FAe94eO7AQm5O%252Ft%26text%3DGet%2520%252410%2520off%2520your%2520first%2520purchase%2520on%2520Massdrop.%2520Sign%2520up%2520and%2520check%2520out%2520the%2520%2522Massdrop%2520CTRL%2520High-Profile%2520Mechanical%2520Ke...%2522%253A',
                         'https://www.facebook.com/v2.9/dialog/share?app_id=142386762546138&channel_url=https%3A%2F%2Fstaticxx.facebook.com%2Fconnect%2Fxd_arbiter%2Fr%2F__Bz3h5RzMx.js%3Fversion%3D42%23cb%3Dfb2994efa4d47%26domain%3Dwww.massdrop.com%26origin%3Dhttps%253A%252F%252Fwww.massdrop.com%252Ff3f88d7eeee8d64%26relation%3Dopener&display=popup&e2e=%7B%7D&fallback_redirect_uri=https%3A%2F%2Fwww.massdrop.com%2Fbuy%2Fmassdrop-ctrl-high-profile-mechanical-keyboard&href=https%3A%2F%2Fwww.massdrop.com%2Fbuy%2Fmassdrop-ctrl-high-profile-mechanical-keyboard%3Freferer%3DBKMU4J%26utm_source%3Dfbshare%26s%3Dfb&locale=en_US&mobile_iframe=false&next=https%3A%2F%2Fstaticxx.facebook.com%2Fconnect%2Fxd_arbiter%2Fr%2F__Bz3h5RzMx.js%3Fversion%3D42%23cb%3Df208862e79761e4%26domain%3Dwww.massdrop.com%26origin%3Dhttps%253A%252F%252Fwww.massdrop.com%252Ff3f88d7eeee8d64%26relation%3Dopener%26frame%3Df1c9c7f3733784%26result%3D%2522xxRESULTTOKENxx%2522&sdk=joey&version=v2.9' 

      ],
      description:''
    }
    
  }

  // componentDidMount() {
  //   axios.get('/main/description')
  //     .then((response) => {
  //       this.setState({
  //         description: response
  //       })
  //     })
  // }


  render () {
    return (<div>
      {/* <h1>Hello World!</h1> */}
      <section>
        <SocialShare icons={this.state.socialShareIcon}/>
      </section>
      {/* <section>
        <Description desc={this.state.description}></Description>
      </section> */}
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));