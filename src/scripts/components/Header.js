import {Link} from 'react-router-dom';
import DataStore from 'flux/stores/DataStore.js';
import Dropdown   from 'components/Dropdown.js';
import '../../css/style.css';

class Header extends React.Component {

    constructor() {
        super();
        this.toggleNavigation = this.toggleNavigation.bind(this);
        this.toggleDropdown = this.toggleDropdown.bind(this);
        this.hasDropdownChildren = this.hasDropdownChildren.bind(this);

        //get Initial state
        this.state= {
          isNavigationOpen: false,
          navigationButtonText: 'Open',
          isDropdownOpen: false
        }
    } 

    toggleNavigation() {
       if ( !this.state.isNavigationOpen ) {
          this.setState({
            isNavigationOpen: true,
            navigationButtonText: 'Close'
          })
        } 

        else {
            this.setState({
                isNavigationOpen: false
            })
        }
    }

    toggleDropdown() {
       if ( !this.state.isDropdownOpen ) {
          this.setState({
            isDropdownOpen: true
          })
        } 

        else {
            this.setState({
                isDropdownOpen: false
            })
        }
    }

    hasDropdownChildren(page) {
        // TODO: figure out a more reusable way to do this
        if (page.id == 7 || page.id == 25 || page.id == 27) {
            return false;
        } else {

             return true;
        }
    } 
   
    render() {
        let allPages = DataStore.getAllPages();
        allPages = _.sortBy(allPages, [function(page) { return page.menu_order; }]); // Sort pages by order

        let pageBanners = DataStore.getAllPages();

       

        return (
            <header className="header">
                <h1 className="header__title">
                    <Link to="/" className="header__link">Dr. Alexa Rauscher, ND BSc </Link>
                </h1>

                <button 
                    className={this.state.isNavigationOpen ? 'navigation-button open' : 'navigation-button'} 
                    onClick={() => this.toggleNavigation()} >
                    <span className="navigation-button__text">{this.state.navigationButtonText} Menu</span>
                </button>

                <nav className={this.state.isNavigationOpen ? 'navigation open' : 'navigation'}>
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
                                        <Dropdown id={page.id} hasDropdownChildren={ this.hasDropdownChildren(page)} />

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