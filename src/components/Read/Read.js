import React, { Component } from 'react';
import '../MailBox.css'

class Read extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    componentWillMount() {

    }

    render() {
        var { emails, trash, drafts, id, index, readMessage } = this.props;
        // var mailToRead = JSON.parse(localStorage.getItem('readMessage')) ? JSON.parse(localStorage.getItem('readMessage')) : '';
        console.log(readMessage)
        // Check emailId to display emailContent (in inbox or trash)
        // const mailContent = () => {
        //     if (emails[index]) {
        //         debugger
        //         if (emails[index].id === id) {
        //             console.log(emails[index].id)
        //             return emails[index].content
        //         }
        //         else if (trash[index].id === id) {
        //             return trash[index].content
        //         }
        //         else {
        //             return drafts[index].content
        //         }
        //     }
        //     else if (trash[index]) {
        //         if (trash[index].id === id) {
        //             return trash[index].content
        //         }
        //         else {
        //             return drafts[index].content
        //         }
        //     }
        //     else {
        //         return drafts[index].content
        //     }
        // }

        // const messageContent = mailContent();

        // const mailComposer = () => {
        //     if (messageContent === emails[index].content) {
        //         return emails[index].composer
        //     }
        //     else if (messageContent === trash[index].content) {
        //         return trash[index].composer
        //     }
        //     else {
        //         return drafts[index].composer
        //     }
        // }

        // const mailSubject = () => {
        //     if (messageContent === emails[index].content) {
        //         return emails[index].subject
        //     }
        //     else if (messageContent === trash[index].content) {
        //         return trash[index].subject
        //     }
        //     else {
        //         return drafts[index].subject
        //     }
        // }

        var d = new Date();
        var date = d.getDate();
        var month = d.getMonth() + 1;
        var year = d.getFullYear();
        var hours = d.getHours();
        var min = d.getMinutes();
        min = (min < 10) ? ('0' + min) : min
        const now = date + "/" + month + "/" + year + " - " + hours + ":" + min
        return (
            <div className="container-fluid mailbox">

                <div className="col-md-10">

                    <div className="mailbox-box mailbox-box-primary">

                        <div className="mailbox-box-header">
                            <span className="mailbox-read-info-time pull-right flip">
                                {now}
                            </span>

                            <h3 className="mailbox-box-title">Read Mail</h3>

                        </div>

                        <div className="mailbox-box-body">

                            <div className="mailbox-read-info">
                                <h3>
                                    {readMessage.subject}
                                </h3>
                                <h4>
                                    From: {readMessage.composer}
                                </h4>
                            </div>
                            {/* <!-- Read Info --> */}

                            <div className="mailbox-read-message">
                                {readMessage.content}
                            </div>
                            {/* <!-- Read Message --> */}

                            <ul className="mailbox-attachment clearfix">

                                <li>
                                    <span className="mailbox-attachment-icon">
                                        <i className="fa fa-file-pdf-o">
                                        </i>
                                    </span>
                                    <div className="mailbox-attachment-info">
                                        <a className="mailbox-attachment-name" href="/mail/read">
                                            <i className="fa fa-paperclip mr-4">
                                            </i>
                                            Sep2014-report.pdf
					                    </a>
                                        <span className="mailbox-attachment-size">
                                            1,245 KB
					                <a className="btn btn-default btn-xs pull-right flip" href="/mail/read">
                                                <i className="fa fa-cloud-download-alt">
                                                </i>
                                            </a>
                                        </span>
                                    </div>
                                </li>
                                <li>
                                    <span className="mailbox-attachment-icon">
                                        <i className="fa fa-file-word-o">
                                        </i>
                                    </span>
                                    <div className="mailbox-attachment-info">
                                        <a className="mailbox-attachment-name" href="/mail/read">
                                            <i className="fa fa-paperclip mr-4">
                                            </i>
                                            App Description.docx
					                    </a>
                                        <span className="mailbox-attachment-size">
                                            1,245 KB
					                <a className="btn btn-default btn-xs pull-right flip" href="/mail/read">
                                                <i className="fa fa-cloud-download-alt">
                                                </i>
                                            </a>
                                        </span>
                                    </div>
                                </li>

                                <li>
                                    <span className="mailbox-attachment-icon has-img">
                                        <img alt="Attachment" src="https://stepupandlive.files.wordpress.com/2014/09/3d-animated-frog-image.jpg" />
                                    </span>
                                    <div className="mailbox-attachment-info">
                                        <a className="mailbox-attachment-name" href="/mail/read">
                                            <i className="fa fa-camera">
                                            </i>
                                            photo2.png
					                    </a>
                                        <span className="mailbox-attachment-size">
                                            1.9 MB
					                        <a className="btn btn-default btn-xs pull-right flip" href="/mail/read">
                                                <i className="fa fa-cloud-download-alt">
                                                </i>
                                            </a>
                                        </span>
                                    </div>
                                </li>

                            </ul>
                            {/* <!-- Attachments --> */}

                        </div>

                        <div className="mailbox-box-footer">
                            <div className="pull-right flip">
                                <button className="btn btn-default" type="button">
                                    Forward
                                    <i className="far fa-hand-point-right ml-10">
                                    </i>
                                </button>
                            </div>
                            <button className="btn btn-default" type="button">
                                <i className="fa fa-reply mr-10">
                                </i>
                                Reply
				            </button>
                        </div>

                    </div>
                    {/* <!-- End Box --> */}

                </div>

            </div>
        );
    }
}

export default Read