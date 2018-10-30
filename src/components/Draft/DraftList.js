import React, { Component } from 'react';
import DraftItem from './DraftItem';
import { connect } from 'react-redux'
import * as actions from '../../actions'
import Pagination from 'react-js-pagination'

class DraftList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activePage: 1,
            itemsCountPerPage: 5
        }
    }

    componentWillMount = () => {
        this.props.onShowList()
    }

    onChangePage = (pageNumber) => {
        this.setState({
            activePage: pageNumber
        })
    }

    render() {
        var { drafts } = this.props;
        var { activePage, itemsCountPerPage } = this.state;

        const indexOfLastDraft = itemsCountPerPage * activePage;
        const indexOfFirstDraft = indexOfLastDraft - itemsCountPerPage;
        const currentDrafts = drafts.slice(indexOfFirstDraft, indexOfLastDraft);

        var renderItem = currentDrafts.map((draft, index) => {
            return (
                <DraftItem
                    draft={draft}
                    key={draft.id}
                    index={index}
                />
            )
        })

        var renderList = () => {
            return (drafts.length ?
                <div className="col-md-10">

                    <div className="mailbox-box mailbox-box-primary">

                        <div className="mailbox-box-header">

                            <h3 className="mailbox-box-title">Draft</h3>

                        </div>

                        <div className="mailbox-box-body">

                            {renderItem}

                        </div>
                        <div className="pull-right">
                            <Pagination
                                activePage={activePage}
                                itemsCountPerPage={itemsCountPerPage}
                                totalItemsCount={drafts.length}
                                pageRangeDisplayed={3}
                                onChange={this.onChangePage}
                                prevPageText="Previous"
                                lastPageText="Last"
                                firstPageText="First"
                                nextPageText="Next"
                            />
                        </div>
                    </div>
                </div>
                : <h4 className="text-center">No email to display in draft</h4>
            )
        }

        return (
            renderList()
        );
    }
}

const mapStateToProps = (state) => {
    return {
        drafts: state.drafts,
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onShowList: () => {
            dispatch(actions.showListDraft())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DraftList);