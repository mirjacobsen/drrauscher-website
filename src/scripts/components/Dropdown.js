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

    // toggleDropdown() {
    //    if ( this.props.isDropdownOpen ) {
    //       this.setState({
    //         isDropdownOpen: true
    //       })
    //     } 

    //     else {
    //         this.setState({
    //             isDropdownOpen: false
    //         })
    //     }
    // }
   
    render() {
        const allPages = DataStore.getAllPages();
        // const props = this.props;
        // let parent = this.props.parent;
        // console.log('props' + props);
        const { id, hasDropdownChildren, isDropdownOpen} = this.props;

        if (!hasDropdownChildren) {
            return null;
        } else {

            return (
                <div className='dropdown'>
                    <ul className="navigation__list" id={this.props.id}>

                        {allPages.map((page) => {
                            if(page.parent == this.props.id){
                               return(
                                    <li className="navigation__list-item" key={page.id}>
                                        <Link
                                            
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
                </div>
            );
        }

    }
}

export default Dropdown;