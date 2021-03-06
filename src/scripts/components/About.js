import DataStore from 'flux/stores/DataStore.js';
import SecondaryPageBanner from 'components/SecondaryPageBanner.js';

class About extends React.Component {
    render() {
        let pageData = DataStore.getPageBySlug('about-dr-alexa-rauscher');

         return (
            <div className="page-content">
                <SecondaryPageBanner pageName={pageData.title.rendered} />

                <div dangerouslySetInnerHTML={{__html: pageData.content.rendered}} className="columns" />
            </div>
        );
    }
}

export default About;
