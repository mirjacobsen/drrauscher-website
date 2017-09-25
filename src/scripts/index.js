import {render}                 from 'react-dom';
import DataActions              from 'flux/actions/DataActions.js';

import Home                     from 'components/Home.js';
import About                    from 'components/About.js';
import Contact                  from 'components/Contact.js';
import ConditionsAndTreatments  from 'components/ConditionsAndTreatments.js';
import Conditions               from 'components/Conditions.js';
import Treatments               from 'components/Treatments.js';
import AboutNaturopathicMedicine               from 'components/AboutNaturopathicMedicine.js';
import NaturopathicPhilosophies               from 'components/NaturopathicPhilosophies.js';
import Faq               from 'components/Faq.js';
import Bioenergetics               from 'components/Bioenergetics.js';
import Testimonials               from 'components/Testimonials.js';
import TBM               from 'components/TBM.js';
import Header                   from 'components/Header.js';

import {
    BrowserRouter as Router,
    Route,
    Redirect,
    Switch
} from 'react-router-dom';



class AppInitializer {

    templates = {
        'about': About,
        'contact': Contact,
        'conditions-and-treatments': ConditionsAndTreatments,
        'conditions': Conditions,
        'treatments': Treatments,
        'about-naturopathic-medicine': AboutNaturopathicMedicine,
        'naturopathic-philosophies': NaturopathicPhilosophies,
        'faq': Faq,
        'bioenergetics-bie': Bioenergetics,
        'total-body-modification-tbm': TBM,
        'testimonials': Testimonials,

    }

    buildRoutes(data){
        return data.pages.map((page, i) => {
            return(
                <Route
                    key={i}
                    component={this.templates[page.slug]}
                    path={`/${page.slug}`}
                    exact
                /> 
            )
        })     
    }

    run() {
        DataActions.getPages((response)=>{
            render(
                <Router>
                    <div>
                        <Header />

                        <Switch>
                            <Route path="/" component={ Home } exact />

                            {this.buildRoutes(response)}
                            <Route render={() => { return <Redirect to="/" /> }} />
                        </Switch> 
                    </div>
                </Router>

                , document.getElementById('app')
            );
        });
    }
}

new AppInitializer().run();
