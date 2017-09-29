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
        this.mobileDropdownOpen = this.mobileDropdownOpen.bind(this);

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
        const noChildren = page.id == 7 || page.id == 25 || page.id == 27;

        if (!noChildren) {
            return true;
        } else {
            return false;
        }
    } 

    hasDropdown(page) {
        // TODO: figure out a more reusable way to do this
        const noChildren = page.id == 7 || page.id == 25 || page.id == 27;

        if (!noChildren) {
            return true;
        } else {
            return false;
        }
    } 

    mobileDropdownOpen(e) {
        e.preventDefault();
        console.log(e);
        const hasDropdown = e.target.classList.contains('navigation__link--dropdown');
        // console.log(hasDropdown);

        if (hasDropdown) {
            // add open class to dropdown
        } else {
            // go to the target
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
                                    <li className="navigation__list-item" key={page.id} id={page.id}>
                                        <Link
                                            to={`/${page.slug}`}
                                            className=
                                            {this.hasDropdownChildren(page) ? 'navigation__link navigation__link--dropdown' : 'navigation__link'}
                                            onClick={() => this.toggleDropdown()} 
                                        >
                                            {page.title.rendered}
                                        </Link>
                                        <Dropdown id={page.id} hasDropdownChildren={ this.hasDropdownChildren(page)} isDropdownOpen={this.state.isDropdownOpen} />
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