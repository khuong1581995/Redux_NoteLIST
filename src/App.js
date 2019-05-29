import React from 'react';
import './App.css';
import Menu from './components/Menu';
import NoteForm from './components/NoteForm';
import NoteList from './components/NoteList';

class App extends React.Component {
  render() {
    return (
      <div>

        <Menu />
        <div className="container" style={{ marginTop: '40px' }}>
          <div className="row">
            <NoteList />
            <NoteForm />
          </div>
        </div>
      </div >
    );
  }
}


export default App;
