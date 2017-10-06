import DataStore from 'flux/stores/DataStore.js';
import {Link} from 'react-router-dom';
import InlineSVG from 'svg-inline-react';

class Home extends React.Component {
    render() {
        let pageData = DataStore.getPageBySlug('home');
        return (
            <div className="page-content">

                <div className="banner">
                    <img src="//api2.alexarauschernaturopath.com/api2/wp-content/uploads/2017/09/alexa-rauscher-banner.jpg" alt="Dr Alexa Rauscher" className="banner__image"  />
                </div>

                <div className="nav-blocks">
                    <Link to='/about-dr-alexa-rauscher' className="nav-block">
                        <img src="//api2.alexarauschernaturopath.com/api2/wp-content/uploads/2017/09/Detox-square.jpg" alt="Dr. Alexa Rauscher" className="nav-block__image"/>
                        <span className="nav-block__text">Dr. Alexa Rauscher</span>
                    </Link>
                    <Link to='/about-naturopathic-medicine/naturopathic-philosophies' className="nav-block">
                        <img src="//api2.alexarauschernaturopath.com/api2/wp-content/uploads/2017/09/Supplements-square.jpg" alt="About Naturopathic Medicine"className="nav-block__image"/>
                         <span className="nav-block__text">Naturopathic Philosophies</span>
                    </Link>
                    <Link to='/conditions-and-treatments/treatments' className="nav-block">
                        <img src="//api2.alexarauschernaturopath.com/api2/wp-content/uploads/2017/09/homeopathy-square.jpg" alt="Conditions and Treatments"className="nav-block__image"/>
                        <span className="nav-block__text">Treatment Modalities</span>
                    </Link>
                </div>
                
                <div dangerouslySetInnerHTML={{__html: pageData.content.rendered}} className="intro"/>
                <div className="headshot">
                    <InlineSVG src={require("../svg/alexa-signature.svg")} />
                    <img src="//api2.alexarauschernaturopath.com/api2/wp-content/uploads/2017/10/alexa.jpg" alt="Dr. Alexa Rauscher" className="image"/>
                </div>
            </div>
        );
    }
}

export default Home;
