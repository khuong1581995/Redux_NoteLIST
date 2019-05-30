import React from 'react';
import './App.css';
import Menu from './components/Menu';
import NoteForm from './components/NoteForm';
import NoteList from './components/NoteList';
import { connect } from 'react-redux'


class App extends React.Component {
  showForm = () => {
    if (this.props.isEdit) {
      return <NoteForm />
    }
  }
  render() {
    return (
      <div>

        <Menu />
        <div className="container" style={{ marginTop: '40px' }}>
          <div className="row">
            <NoteList />
            {this.showForm()}
          </div>
        </div>
      </div >
    );
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
    isEdit: state.isEdit
  }
}


export default connect(mapStateToProps, null)(App);

