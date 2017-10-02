import DataStore from 'flux/stores/DataStore.js';
import SecondaryPageBanner from 'components/SecondaryPageBanner.js';

class Testimonials extends React.Component {
    render() {
        let pageData = DataStore.getPageBySlug('testimonials');

       return (
            <div className="page-content">
                <SecondaryPageBanner pageName={pageData.title.rendered} />

                <div dangerouslySetInnerHTML={{__html: pageData.content.rendered}} className="columns" />
            </div>
        );
    }
}

export default Testimonials;
