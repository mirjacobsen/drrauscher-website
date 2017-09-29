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
                <div className="column-3 footer__map">
                    <InlineSVG src={require("../svg/map-white.svg")} />
                </div>
                <div className="column-3 footer__contact">
                    <h3>Office Hours:</h3>
                    <ul className="list">
                        <li className="list__item"><span className="list__item__title">Tuesday:</span> 11:00am-8:00pm</li>
                        <li className="list__item"><span className="list__item__title">Wednesday:</span> 9:00am-6:00pm</li>
                        <li className="list__item"><span className="list__item__title">Friday:</span> 9:00am-6:00pm</li>
                        <li className="list__item"><span className="list__item__title">Saturday</span> 9:00am-4:00pm</li>
                    </ul>
                    <p className="text">
                        Lonsdale Naturopathic Clinic <br />
                        404-1200 Lonsdale Avenue<br />
                        North Vancouver, BC   V7M 3H6<br />
                        Phone: <a className="link" href="tel:604.987.1418">604.987.1418</a> | Fax: 604.960.9648<br /> 
                        Email: <a className="link" href="mailto:dr.rauscher.nd@gmail.com">dr.rauscher.nd@gmail.com</a>
                    </p>
                </div>

                <nav className="column-3 footer__navigation">
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

            </footer>
        );
    }
}

export default Footer;