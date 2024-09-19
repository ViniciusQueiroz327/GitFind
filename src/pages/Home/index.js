import { Header } from '../../components/Header';
import background from '../../assets/imgs/background.svg'
import profilePicture from '../../assets/imgs/profilePicture.jpeg'

import './styles.css'

function App() {
  return (
    <div className="App">
      <Header />
      <div className="conteudo">
        <img src={background} className="background" alt="backgrond app"/>
        <div className="info">
          <div className='inputs'>
            <input name="usuario" placeholder="@username"/>
            <button>Buscar</button>
          </div>
          <div className='profileInfos'>
            <img src={profilePicture} className="profilePicture" alt="profile"/>
            <div>
              <h3>Vinicius Silva Queiroz</h3>
              <span>@ViniciusQueiroz327</span>
              <p>Descrição</p>
            </div>
          </div>
          <hr />
        </div>
      </div>
    </div>
  );
}

export default App;
