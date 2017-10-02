import DataStore from 'flux/stores/DataStore.js';
import SecondaryPageBanner from 'components/SecondaryPageBanner.js';

class ConditionsAndTreatments extends React.Component {
    render() {
        let pageData = DataStore.getPageBySlug('conditions-and-treatments');

        return (
            <div>
                <SecondaryPageBanner pageName={pageData.title.rendered} />

                <div dangerouslySetInnerHTML={{__html: pageData.content.rendered}} />
            </div>
        );
    }
}

export default ConditionsAndTreatments;
