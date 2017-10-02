import DataStore from 'flux/stores/DataStore.js';
import SecondaryPageBanner from 'components/SecondaryPageBanner.js';

class AboutNaturopathicMedicine extends React.Component {
    render() {
        let pageData = DataStore.getPageBySlug('about-naturopathic-medicine');

        return (
            <div className="page-content">
               <SecondaryPageBanner pageName={pageData.title.rendered} />

                <div dangerouslySetInnerHTML={{__html: pageData.content.rendered}} className="columns" />
            </div>
        );
    }
}

export default AboutNaturopathicMedicine;
