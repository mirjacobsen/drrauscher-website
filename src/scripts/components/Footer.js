import {Link} from 'react-router-dom';
import InlineSVG from 'svg-inline-react';
import DataStore from 'flux/stores/DataStore.js';
import Dropdown   from 'components/Dropdown.js';


class Footer extends React.Component {

    // constructor() {
    //     super();
    //     this.pipDown = this.pipDown.bind(this);
    // }

    // pipDown() {
    //     const footerPositon = document.querySelector('.footer').getBoundingClientRect();
    //     // const footerPositon = document.querySelector('.footer').getBoundingClientRect();
    //     // const pip = document.querySelector('pip');
    //     const scrollPostion = document.documentElement.scrollTop || document.body.scrollTop;
    //     if(footerPosition > scrollPosition) {
    //         return 'column-3 scrolledTo'
    //     } else {
    //         return 'column-3'
    //     }
    // }
        

    render() {
        let allPages = DataStore.getAllPages();
        allPages = _.sortBy(allPages, [function(page) { return page.menu_order; }]); // Sort pages by order

       

        

        return (
            <footer className="footer">
                <div className="column-3">
                    <InlineSVG src={require("../svg/map-white.svg")} />
                </div>
                <div className="column-3">
                    <div className="footer-contact">
                        Office Hours:
                        Tuesday: 11:00am-8:00pm
                        Wednesday: 9:00am-6:00pm
                        Friday: 9:00am-6:00pm
                        Saturday 9:00am-4:00pm

                        Lonsdale Naturopathic Clinic
                        404-1200 Lonsdale Avenue
                        North Vancouver, BC   V7M 3H6

                        Phone: 604.987.1418 | Fax: 604.960.9648 
                        Email: dr.rauscher.nd@gmail.com

                    </div>

                </div>

                <div className="column-3">
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
                </div>

            </footer>
        );
    }
}

export default Footer;