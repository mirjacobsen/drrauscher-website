import DataStore from 'flux/stores/DataStore.js';
import {Link} from 'react-router-dom';

class Home extends React.Component {
    render() {
        let pageData = DataStore.getPageBySlug('home');
        console.log({pageData});
        return (
            <div className="page-content">

                <div className="banner">
                    <img src="http://localhost/wordpress/wp-content/uploads/2017/09/alexa-rauscher-banner.jpg" alt="Dr Alexa Rauscher" className="banner__image"  />
                </div>

                <div className="nav-blocks">
                    <Link to='/about-dr-alexa-rauscher' className="nav-block">
                        <img src="http://localhost/wordpress/wp-content/uploads/2017/09/Homeopathy.jpg" alt="Dr. Alexa Rauscher" className="nav-block__image"/>
                        <span className="nav-block__text">Dr. Alexa Rauscher</span>
                    </Link>
                    <Link to='/about-naturopathic-medicine' className="nav-block">
                        <img src="http://localhost/wordpress/wp-content/uploads/2017/09/Homeopathy.jpg" alt="About Naturopathic Medicine"className="nav-block__image"/>
                         <span className="nav-block__text">About Naturopathic Medicine</span>
                    </Link>
                    <Link to='/conditions-and-treatments' className="nav-block">
                        <img src="http://localhost/wordpress/wp-content/uploads/2017/09/Homeopathy.jpg" alt="Conditions and Treatments"className="nav-block__image"/>
                        <span className="nav-block__text">Conditions &amp; Treatments</span>
                    </Link>
                </div>
                

                <div dangerouslySetInnerHTML={{__html: pageData.content.rendered}} className="intro"/>
                           </div>
        );
    }
}

export default Home;
