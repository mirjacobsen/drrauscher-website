import DataStore from 'flux/stores/DataStore.js';
import Dropdown   from 'components/Dropdown.js';
import {Link} from 'react-router-dom';

class FooterNavigationLink extends React.Component {

    render() {

        const {page, hasDropdownChildren, toggleDropdown, getPageUrl} = this.props;
        let link;

        // if a menu item has dropdown children, it is not clickable.         
        if (hasDropdownChildren(page)) {
            link = 
                <span className='navigation__link navigation__link--dropdown'>
                    {page.title.rendered}
                </span>
        
        } else {
            link =
                 <Link
                    to={getPageUrl(page)}
                    className='navigation__link'
                >
                    {page.title.rendered}
                </Link>
        }

        return (
            <div className="link-wrap">
                {link}
            </div>
        );
    }
}

export default FooterNavigationLink;
