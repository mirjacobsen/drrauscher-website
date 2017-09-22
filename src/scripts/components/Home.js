import DataStore from 'flux/stores/DataStore.js'
import '../../css/style.css';



class Home extends React.Component {
    render() {
        let pageData = DataStore.getPageBySlug('sample-page');
        console.log({pageData});
        return (
            <div>
                
                <h1 className="header">{pageData.title.rendered}</h1>

                <div dangerouslySetInnerHTML={{__html: pageData.excerpt.rendered}} />
                           </div>
        );
    }
}

export default Home;
