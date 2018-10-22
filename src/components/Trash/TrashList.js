import React, { Component } from 'react';
import TrashItem from './TrashItem';
import { connect } from 'react-redux'
import * as actions from '../../actions'

class TrashList extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    componentWillMount = () => {
        this.props.onShowList()
    }

    render() {
        var { trash } = this.props;

        var renderItem = trash.map((emailTrash, index) => {
            return (
                <TrashItem
                    emailTrash={emailTrash}
                    key={emailTrash.id}
                    index={index}
                />
            )
        })

        var renderList = () => {
            return (trash.length ?
                <div className="col-md-10">

                    <div className="mailbox-box mailbox-box-primary">

                        <div className="mailbox-box-header">

                            <h3 className="mailbox-box-title">Trash</h3>

                        </div>

                        <div className="mailbox-box-body">

                            {renderItem}

                        </div>
                    </div>
                </div>
                : <h4 className="text-center">No email to display in trash</h4>
            )
        }

        return (
            renderList()
        );
    }
}

const mapStateToProps = (state) => {
    return {
        trash: state.trash,
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onShowList: () => {
            dispatch(actions.showListTrash())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TrashList);