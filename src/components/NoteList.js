import React from 'react';
import { connect } from 'react-redux';
import { changeEditStatus } from '../actions/index'

class NoteList extends React.Component {

    changeEditStatus = () => {
        this.props.changeEditStatus(this.props.isEdit)

        console.log('dasd', this.props.isEdit);

    }
    render() {
        const { text } = this.props
        // console.log(text);
        let result = text.map((item, index) => {
            // console.log(item);

            return (
                <div key={index}>
                    <div className="card-header" role="tab" id="note1" >
                        <h5 className="mb-0">
                            <a data-toggle="collapse" data-parent="#noteList" href="#noteContent1" aria-expanded="true" aria-controls="noteContent1">
                                {item.noteTitle}
                            </a>
                            <div className="btn-group float-right">
                                <button onClick={this.changeEditStatus} type="button" className="btn  btn-success">Sửa</button>
                                <button type="button" className="btn  btn-danger"> Xóa</button>
                            </div>
                        </h5>
                    </div >
                    <div id="noteContent1" className="collapse in" role="tabpanel" aria-labelledby="section1HeaderId">
                        <div className="card-body">
                            <p>{item.noteContent}</p>
                        </div>
                    </div>
                </div>
            )
        })

        return (
            <div className="col" >
                <div id="noteList" role="tablist" aria-multiselectable="true">
                    <div className="card">
                        {result}
                    </div >

                </div>
            </div>


        );
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        text: state.text,
        isEdit: state.isEdit
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        changeEditStatus: (isEdit) => {
            dispatch(changeEditStatus(isEdit))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(NoteList);
