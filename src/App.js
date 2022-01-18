import './App.css';
import React, {useState} from 'react';
import '../node_modules/bulma/css/bulma.min.css'
import Header from './Composants/Header/Header';
import Card from './Composants/Card/Card';

function App() {


const [stateTodo, setStateTodo] = useState([
  {tache : 'Ma première tâche', txt : 'Une description pour ma première tâche'}
]);

const [tache, setTache] = useState();
const [txt, setTxt] = useState();


function creationCarte(e){
  e.preventDefault();
  const mesTaches = [...stateTodo, {tache: tache, txt: txt}]
  setStateTodo(mesTaches);
  setTache('');
  setTxt('');
}

function suppCarte(index){
  const clearTab = [...stateTodo];

  // console.log(clearTab.filter(item => clearTab.indexOf(item) != clearTab.indexOf(clearTab[index])));
  setStateTodo(clearTab.filter(item => clearTab.indexOf(item) != clearTab.indexOf(clearTab[index])))

}


  return (
    <div>
      <Header />

      <div className="container px-3">
        <h2 className="title mt-5">Tâches à réaliser </h2>

        <form onSubmit={creationCarte}>
          <div className="field">
            <div className="control">
              <label htmlFor="tache" className='label'>Tâche</label>
              <input value={tache} type="text" name="tache" id="tache" className='input' placeholder='Saisir une tâche.' onChange={e => setTache(e.target.value)}/>
            </div>
          </div>

          <div className="field">
            <div className="control">
              <label htmlFor="txt" className='label'>Description</label>
              <textarea value={txt} name="txt" id="txt" cols="30" rows="10" className='textarea' placeholder='Description de la tâche' onChange={e => setTxt(e.target.value)}></textarea>
            </div>
          </div>


          <div className="control">
            <button type='submit' className="button is-link has-background-primary">Ajouter</button>
          </div>


        </form>


        {
          stateTodo.map((todo, index) => (
            <Card key={index} index={index} tache={todo.tache} txt={todo.txt} suppFunc={suppCarte}/>
          ))
        }

      </div>
    </div>
  );
}

export default App;
