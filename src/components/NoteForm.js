import React from 'react';
import { connect } from 'react-redux';
import { actAddData } from '../actions/index';



class NoteForm extends React.Component {
    state = {
        noteTitle: '',
        noteContent: ''
    }
    isChange(event) {
        const target = event.target;
        const name = target.name;
        const value = target.value;
        this.setState({
            [name]: value
        })

    }
    addData = (title, content) => {
        var item = {};
        item.noteTitle = title;
        item.noteContent = content
        // this.props.actAddData(item);

        this.props.actAddData(item)
    }

    render() {



        return (

            <div className="col-4">
                <form>
                    <h3>Sửa Nội Dung Note</h3>
                    <label htmlFor="noteTitle"><h5>Tiêu đề</h5></label>
                    <input onChange={(event) => this.isChange(event)} value={this.state.noteTitle} type="text" name="noteTitle" className="form-control" placeholder="Tiêu đề note" aria-describedby="helpId" />
                    <small id="helpId" className="text-muted"><p>Điền nội dung vào đây</p></small>
                    <textarea onChange={(event) => this.isChange(event)} value={this.state.noteContent} type="text" name="noteContent" className="form-control" placeholder="Nội dung note" aria-describedby="helpId" ></textarea>
                </form>
                <button type="reset" onClick={() => this.addData(this.state.noteTitle, this.state.noteContent)} className="btn btn-success btn-block ">Lưu</button>
            </div>

        );
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        text: state.text
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        actAddData: (item) => {
            dispatch({ actAddData, item })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NoteForm);

