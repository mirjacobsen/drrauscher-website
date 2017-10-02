import DataStore from 'flux/stores/DataStore.js';
import SecondaryPageBanner from 'components/SecondaryPageBanner.js';

class Contact extends React.Component {
    render() {
        let pageData = DataStore.getPageBySlug('contact');

        return (
            <div className="page-content">
                <SecondaryPageBanner pageName={pageData.title.rendered} />

                <div dangerouslySetInnerHTML={{__html: pageData.content.rendered}} className="column" />
            </div>
        );
    }
}

export default Contact;
