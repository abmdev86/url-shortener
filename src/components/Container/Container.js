import Header from '../Header/Header.js';
import URLInputComponent from '../URLComponent/URLInputComponent'

export default function Container(props) {
  return (

    < div className='container' >
      <Header />
      <URLInputComponent/>
    </div >
  );
}