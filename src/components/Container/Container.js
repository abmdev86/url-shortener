import Header from '../Header/Header.js';
import URLComponent from '../URLComponent/URLComponent.js';


export default function Container(props) {
  return (

    < div className='container' >
      <Header />
      <URLComponent />
    </div >
  );
}