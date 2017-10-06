import {Link} from 'react-router-dom';
import DataStore from 'flux/stores/DataStore.js';
import Dropdown   from 'components/Dropdown.js';
import NavigationLink   from 'components/NavigationLink.js';
import '../../css/style.css';

class Header extends React.Component {

    constructor() {
        super();
        this.toggleNavigation = this.toggleNavigation.bind(this);
        this.toggleDropdown = this.toggleDropdown.bind(this);
        this.hasDropdownChildren = this.hasDropdownChildren.bind(this);
        this.toggleDropdownFromDropdown = this.toggleDropdownFromDropdown.bind(this);

        //get Initial state
        this.state= {
          isNavigationOpen: false,
          navigationButtonText: 'Open',
          isDropdownOpen: false,
          isSmallScreen: false
        }
    }

    // Scroll to the top of the page when a new sub page loads
    componentDidUpdate() {
      window.scrollTo(0, 0)
    }

    // TODO: set isSmallScreen based on screen size

    toggleNavigation() {
        // TODO: only run this on mobile
       if ( !this.state.isNavigationOpen ) {
          this.setState({
            isNavigationOpen: true,
            navigationButtonText: 'Close'
          })
        } 

        else {
            this.setState({
                isNavigationOpen: false,
                navigationButtonText: 'Open'
            })
        }
    }

    toggleDropdown(e) {
        // On Mobile, click link with dropdown to toggle open and closed
        e.preventDefault();

        if ( !this.state.isDropdownOpen ) {
            e.target.parentElement.nextSibling.classList.add('open');

            //TODO: add a second class and delay the opacity transition?
            this.setState({
                isDropdownOpen: true
            })
            
        } 

        else {
            e.target.parentElement.nextSibling.classList.remove('open');

            this.setState({
                isDropdownOpen: false
            })
        }
    }

    toggleDropdownFromDropdown(e) {
        // When the dropdown is open and a link is clicked inside it, close the dropdown before opening page

        if ( !this.state.isDropdownOpen ) {
            return null; 
        } 

        else {
            e.target.parentElement.parentElement.parentElement.classList.remove('open');

            this.setState({
                isDropdownOpen: false
            })
        }
    }

    hasDropdownChildren(page) {
        // TODO: figure out a more reusable way to do this
        const noChildren = page.id == 36 || page.id == 58 || page.id == 30;

        if (!noChildren) {
            return true;
        } else {
            return false;
        }
    } 
   
    render() {
        let allPages = DataStore.getAllPages();
        allPages = _.sortBy(allPages, [function(page) { return page.menu_order; }]); // Sort pages by order

        let pageBanners = DataStore.getAllPages();
        const { getPageUrl } =  this.props;

        return (
            <header className="header">
                <h1 className="header__title">
                    <Link to="/" className="header__link">Dr. Alexa Rauscher, ND BSc </Link>
                </h1>
                <a href="tel:604-987-1418" className="header__phone">604-987-1418</a>

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
                                    <li 
                                        className="navigation__list-item" 
                                        key={page.id} 
                                        id={page.id}
                                    >
                                        <NavigationLink 
                                            page={page}
                                            hasDropdownChildren={this.hasDropdownChildren}
                                            toggleDropdown={this.toggleDropdown}
                                            toggleNavigation={this.toggleNavigation}
                                            getPageUrl={getPageUrl}
                                        />
                                        <Dropdown 
                                            id={page.id} 
                                            key={page.id} 
                                            hasDropdownChildren={ this.hasDropdownChildren(page)}
                                            isDropdownOpen={this.state.isDropdownOpen}
                                            toggleNavigation={this.toggleNavigation}
                                            toggleDropdown={this.toggleDropdownFromDropdown}
                                            getPageUrl={getPageUrl}
                                        />
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