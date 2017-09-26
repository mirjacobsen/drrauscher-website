import {Link} from 'react-router-dom';
import DataStore from 'flux/stores/DataStore.js';
import Dropdown   from 'components/Dropdown.js';
import '../../css/style.css';

class Header extends React.Component {   
   
    render() {
        let allPages = DataStore.getAllPages();
        allPages = _.sortBy(allPages, [function(page) { return page.menu_order; }]); // Sort pages by order

        let pageBanners = DataStore.getAllPages();
        console.log( pageBanners );

        return (
            <header className="header">
                <h1 className="header__title">Dr. Alexa Rauscher, ND BSc</h1>
                <nav className="navigation">
                    <ul className="navigation__list">
                        {allPages.map((page) => {
                            if(page.slug !== 'home' && page.parent == 0){
                               return(
                                    <li className="navigation__list-item" key={page.id}>
                                        <Link
                                            to={`/${page.slug}`}
                                            className="navigation__link"
                                        >
                                            {page.title.rendered}
                                        </Link>
                                        <Dropdown id={page.id} />
                                    </li>      
                                )                     
                           }

                        })}
                    </ul>
                </nav>

            </header>
        );
    }
}

export default Header;