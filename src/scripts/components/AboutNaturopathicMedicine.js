import DataStore from 'flux/stores/DataStore.js'

class AboutNaturopathicMedicine extends React.Component {
    render() {
        let pageData = DataStore.getPageBySlug('about-naturopathic-medicine');

        return (
            <div className="page-content">
                <div className="page-banner">
                    <img src="http://localhost/wordpress/wp-content/uploads/2017/09/alexa-rauscher-banner.jpg" alt={pageData.title.rendered} className="page-banner__image"/>
                    <h1 className="page-banner__title">{pageData.title.rendered}</h1>
                </div>

                <div dangerouslySetInnerHTML={{__html: pageData.content.rendered}} className="columns" />
            </div>
        );
    }
}

export default AboutNaturopathicMedicine;