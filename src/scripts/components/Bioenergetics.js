import DataStore from 'flux/stores/DataStore.js';
import SecondaryPageBanner from 'components/SecondaryPageBanner.js';

class Bioenergetics extends React.Component {
    render() {
        let pageData = DataStore.getPageBySlug('bioenergetics-bie');

       return (
            <div className="page-content">
               <SecondaryPageBanner pageName={pageData.title.rendered} />

                <div dangerouslySetInnerHTML={{__html: pageData.content.rendered}} className="columns" />
            </div>
        );
    }
}

export default Bioenergetics;
