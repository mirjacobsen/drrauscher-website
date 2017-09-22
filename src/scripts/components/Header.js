import {Link} from 'react-router-dom';
import DataStore from 'flux/stores/DataStore.js'

class Header extends React.Component {   
   
    render() {
        let allPages = DataStore.getAllPages();
        allPages = _.sortBy(allPages, [function(page) { return page.menu_order; }]); // Sort pages by order

        return (
            <div className="header">
                <nav className="navigation">
                    <ul>
                        {allPages.map((page) => {
                            if(page.slug != 'home' && page.title.rendered !== 'home'){
                               return(
                                    <li>
                                        <Link 
                                            key={page.id} 
                                            to={`/${page.slug}`} 
                                            style={{marginRight: '10px'}}
                                        >
                                            {page.title.rendered}
                                        </Link>
                                    </li>
                                )                     
                           }
                        })}
                    </ul>
                </nav>
            </div>
        );
    }
}

export default Header;