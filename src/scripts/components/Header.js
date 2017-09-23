import {Link} from 'react-router-dom';
import DataStore from 'flux/stores/DataStore.js'

class Header extends React.Component {   
   
    render() {
        let allPages = DataStore.getAllPages();
        allPages = _.sortBy(allPages, [function(page) { return page.menu_order; }]); // Sort pages by order

        return (
            <header className="header">
                <h1 className="header__title">Dr. Alexa Rauscher, ND BSc</h1>
                <nav className="navigation">
                    <ul className="navigation__list">
                        {allPages.map((page) => {
                            if(page.slug !== 'home'){
                               return(
                                    <li className="navigation__list-item">
                                        <Link 
                                            key={page.id} 
                                            to={`/${page.slug}`} 
                                            
                                            className="navigation__link"
                                        >
                                            {page.title.rendered}
                                        </Link>
                                    </li>
                                )                     
                           }
                        })}
                    </ul>
                </nav>
                <div className="banner">
                    <img src="http://localhost/wordpress/wp-content/uploads/2017/09/alexa-rauscher-banner.jpg" alt="Dr Alexa Rauscher" className="banner__image" />
                </div>
            </header>
        );
    }
}

export default Header;