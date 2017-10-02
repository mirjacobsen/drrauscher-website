import DataStore from 'flux/stores/DataStore.js'

class SecondaryPageBanner extends React.Component {
    render() {
         return (
            <div className="page-banner">
                <img src="//api2.alexarauschernaturopath.com/api2/wp-content/uploads/2017/10/alexa-banner-subpage-blur.jpg" alt={this.props.pageName} className="page-banner__image"/>
                <h1 className="page-banner__title">{this.props.pageName}</h1>
            </div>

        );
    }
}

export default SecondaryPageBanner;
