import {Link} from 'react-router-dom';
import DataStore from 'flux/stores/DataStore.js';

class Dropdown extends React.Component { 

     constructor() {
        super();

        //get Initial state
        this.state= {
          isDropdownOpen: false
        }
    } 
   
    render() {
        const allPages = DataStore.getAllPages();
        const { id, hasDropdownChildren, isDropdownOpen, toggleDropdown, getPageUrl} = this.props;

        if (!hasDropdownChildren) {
            return null;
        } else {

            return (
                <div className='dropdown'>
                    <ul className="navigation__list" id={id}>

                        {allPages.map((page) => {
                            if(page.parent == id){
                               return(
                                    <li className="navigation__list-item" key={page.id}>
                                        <Link
                                            to={getPageUrl(page)}
                                            className="navigation__link"
                                            onClick={(e) => {this.props.toggleNavigation(); this.props.toggleDropdown(e);}}

                                        >
                                            {page.title.rendered}
                                        </Link>
                                    </li>      
                                )                     
                            }
                        })}
                    </ul>
                </div>
            );
        }

    }
}

export default Dropdown;