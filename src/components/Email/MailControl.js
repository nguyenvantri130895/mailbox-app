import React, { Component } from 'react';
import { connect } from 'react-redux'
import * as actions from '../../actions'
import { Link } from 'react-router-dom'

class MailControl extends Component {
    constructor(props) {
        super(props);
        this.state = {
            keyword: ''
        }
    }

    onSort = (sortBy, sortValue) => {
        this.props.onSort({
            by: sortBy,
            value: sortValue
        });
    }

    onChange  = (event) => {
        console.log(event.target.value)
        var target = event.target;
        var name = target.name;
        var value = target.value;
        this.setState({
            [name]: value
        })
        console.log(this.state)
    }

    onSearch = () => {
        this.props.onSearch(this.state.keyword);
    }

    render() {
        return (
            <div className="mailbox-box-header row">

                <h3 className="col-xs-1 col-sm-1 col-md-1 col-lg-1 mailbox-box-title">Inbox</h3>
                <div className="mr-10 dropdown pull-right">
                    <button className="btn btn-primary dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                        Sort <span className="fa fa-caret-square-o-down ml-10"></span>
                    </button>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
                        <li onClick={() => this.onSort('name', 1)}>
                            <Link
                                to="/mail"
                                className={(this.props.sort.by === 'name' && this.props.sort.value === 1) ? 'sort_selected' : ''}
                            >
                                <span className="fa fa-sort-alpha-asc pr-5"> A-Z
                                </span>
                            </Link>
                        </li>
                        <li
                            onClick={() => this.onSort('name', -1)}>
                            <Link
                                to="/mail"
                                className={(this.props.sort.by === 'name' && this.props.sort.value === -1) ? 'sort_selected' : ''}
                            >
                                <span className="fa fa-sort-alpha-desc pr-5"> Z-A
                                </span>
                            </Link>
                        </li>
                        <li role="separator" className="divider"></li>
                        <li
                            onClick={() => this.onSort('time', 1)}>
                            <Link
                                to="/mail"
                                className={(this.props.sort.by === 'time' && this.props.sort.value === 1) ? 'sort_selected' : ''}
                            >
                                <span className="fa fa-sort-numeric-down"> Time
                                </span>
                            </Link>
                        </li>
                        <li
                            onClick={() => this.onSort('time', -1)}>
                            <Link
                                to="/mail"
                                className={(this.props.sort.by === 'time' && this.props.sort.value === -1) ? 'sort_selected' : ''}
                            >
                                <span className="fa fa-sort-numeric-up"> Time
                                </span>
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="col-xs-5 col-sm-5 col-md-5 col-lg-5 pull-right mr-10">
                    <div className="input-group">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Find..."
                            name="keyword"
                            onChange={this.onChange}
                        />
                        <span className="input-group-btn">
                            <button
                                className="btn btn-primary"
                                type="button"
                                onClick={this.onSearch}
                            >
                                <span className="fa fa-search mr-10"></span>Search
                                    </button>
                        </span>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        sort: state.sort
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onSort: (sort) => {
            dispatch(actions.sortEmail(sort))
        },
        onSearch: (keyword) => {
            dispatch(actions.searchEmail(keyword))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MailControl);