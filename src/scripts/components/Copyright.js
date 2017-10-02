import {Link} from 'react-router-dom';
import InlineSVG from 'svg-inline-react';
import DataStore from 'flux/stores/DataStore.js';

class Copyright extends React.Component {

    render() {

        return (
      
            <div className="copyright">
                <div className="copyright__text">Copyright 2017 Dr. Alexa Rauscher, ND BSc</div> 
                <div className="copyright__text">
                    Website built with love by <a href="http://www.mirandajacobsen.com" target="/blank" className="copyright__link">Miranda Jacobsen</a>
                </div> 
            </div>

        );
    }
}

export default Copyright;