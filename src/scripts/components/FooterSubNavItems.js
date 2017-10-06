import {Link} from 'react-router-dom';
import DataStore from 'flux/stores/DataStore.js';

class FooterSubNavItems extends React.Component { 

     constructor() {
        super();

        //get Initial state
        this.state= {
          isDropdownOpen: false
        }
    } 
   
    render() {
        const allPages = DataStore.getAllPages();
        const { id, hasDropdownChildren, getPageUrl} = this.props;

        if (!hasDropdownChildren) {
            return null;
        } else {

            return (

                <ul className="navigation__list sub-navigation" id={id}>

                    {allPages.map((page) => {
                        if(page.parent == id){
                           return(
                                <li className="navigation__list-item" key={page.id}>
                                    <Link
                                        to={getPageUrl(page)}
                                        className="navigation__link"
                                    >
                                        {page.title.rendered}
                                    </Link>
                                </li>      
                            )                     
                        }
                    })}
                    
                </ul>
            );
        }

    }
}

export default FooterSubNavItems;