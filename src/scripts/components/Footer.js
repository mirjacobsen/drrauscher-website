import {Link} from 'react-router-dom';
import InlineSVG from 'svg-inline-react';
import DataStore from 'flux/stores/DataStore.js';
import Dropdown   from 'components/Dropdown.js';
import FooterSubNavItems   from 'components/FooterSubNavItems.js';
import FooterNavigationLink   from 'components/FooterNavigationLink.js';


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

        const { getPageUrl } =  this.props;

        return (
            <footer className="footer">
                <a href="https://www.google.ca/maps/place/1200+Lonsdale+Ave,+North+Vancouver,+BC+V7M+3H6/@49.3191835,-123.0740707,17z/data=!3m1!4b1!4m5!3m4!1s0x54867047d2131a47:0x16b4f197403badb1!8m2!3d49.31918!4d-123.071882" className="column-3 footer__map" target="/blank">
                    <InlineSVG src={require("../svg/map-white.svg")} />
                </a>
                <div className="column-3 footer__contact">

                 <h3 className="show-mobile">Office Hours</h3>
                    <ul className="list show-mobile">
                        <li className="list__item"><span className="list__item__title">Tuesday:</span> 11:00am-8:00pm</li>
                        <li className="list__item"><span className="list__item__title">Wednesday:</span> 9:00am-6:00pm</li>
                        <li className="list__item"><span className="list__item__title">Friday:</span> 9:00am-6:00pm</li>
                        <li className="list__item"><span className="list__item__title">Saturday</span> 9:00am-4:00pm</li>
                    </ul>

                    <h3 className="subtitle">Contact</h3>
                   
                    <p className="text">
                        Lonsdale Naturopathic Clinic <br />
                        404-1200 Lonsdale Avenue<br />
                        North Vancouver, BC   V7M 3H6
                    </p>
                    <p className="text">
                        Phone: <a className="link" href="tel:604.987.1418">604.987.1418</a> <br />
                        Fax: 604.960.9648<br /> 
                        Email: <a className="link" href="mailto:dr.rauscher.nd@gmail.com">dr.rauscher.nd@gmail.com</a>
                    </p>
                </div>

                <nav className="column-3 footer__navigation">
                    <ul className="navigation__list">
                        {allPages.map((page) => {
                            if(page.slug !== 'home' && page.parent == 0){
                               return(
                                    <li className="navigation__list-item" key={page.id}>
                                        <FooterNavigationLink 
                                            page={page}
                                            hasDropdownChildren={this.hasDropdownChildren}
                                            toggleDropdown={this.toggleDropdown}
                                            toggleNavigation={this.toggleNavigation}
                                            getPageUrl={getPageUrl}
                                        />
                                     
                                        <FooterSubNavItems 
                                            id={page.id} 
                                            key={page.id} 
                                            hasDropdownChildren={this.hasDropdownChildren(page)}
                                            getPageUrl={getPageUrl}
                                        />
                                    </li>      
                                )                     
                           }

                        })}
                    </ul>
                </nav>

            </footer>
        );
    }
}

export default Footer;