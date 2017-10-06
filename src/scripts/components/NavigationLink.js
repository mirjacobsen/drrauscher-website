import DataStore from 'flux/stores/DataStore.js';
import Dropdown   from 'components/Dropdown.js';
import {Link} from 'react-router-dom';

class NavigationLink extends React.Component {
    
    render() {

        const {page, hasDropdownChildren, toggleDropdown, getPageUrl} = this.props;
        let link;
        
        if (hasDropdownChildren(page)) {
            link = 
            <Link
                to={getPageUrl(page)}
                className='navigation__link navigation__link--dropdown'
                onClick={(e) => this.props.toggleDropdown(e)} 
            >
                {page.title.rendered}
            </Link>
           
        
        } else {
            link =
             <Link
                to={getPageUrl(page)}
                className='navigation__link'
                onClick={() => this.props.toggleNavigation()}
            >
                {page.title.rendered}
            </Link>
        }


        return (
            <div className="link-wrap">
                {link }
            </div>
        );
    }
}

export default NavigationLink;
