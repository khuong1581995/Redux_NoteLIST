import React from 'react';


class App extends React.Component {
    render() {
        return (
            <div className="col">
                <div id="noteList" role="tablist" aria-multiselectable="true">
                    <div className="card">
                        <div className="card-header" role="tab" id="note1">
                            <h5 className="mb-0">
                                <a data-toggle="collapse" data-parent="#noteList" href="#noteContent1" aria-expanded="true" aria-controls="noteContent1">
                                    React Cơ Bản
                                </a>
                                <div class="btn-group float-right">
                                    <button type="button" className="btn  btn-warning">Sửa</button>
                                    <button type="button" className="btn  btn-danger"> Xóa</button>
                                </div>
                            </h5>
                        </div>
                        <div id="noteContent1" className="collapse in" role="tabpanel" aria-labelledby="section1HeaderId">
                            <div className="card-body">
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout</p>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-header  justify-content-end" role="tab" id="note2">
                            <h5 className="mb-0 ">
                                <a data-toggle="collapse" data-parent="#note2" href="#noteContent2" aria-expanded="true" aria-controls="noteContent2">
                                    Redux Nâng Cao
                                     </a>
                                <div class="btn-group  float-right">
                                    <button type="button" className="btn btn-warning">Sửa</button>
                                    <button type="button" className="btn  btn-danger"> Xóa</button>
                                </div>
                            </h5>
                        </div>
                        <div id="noteContent2" className="collapse in" role="tabpanel" aria-labelledby="section2HeaderId">
                            <div className="card-body">
                                <p>At W3Schools you will find complete references about tags, attributes, events, color names, entities, character-sets, URL encoding, language codes, HTTP messages, and more.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        );
    }
}


export default App;
