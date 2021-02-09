import React from 'react'
import { Link } from 'react-router-dom'
import '../../sidebar.css'
import '../../bootstrap.min.css'
import '../../fonts/font-awesome.min.css'
import '../../fonts/simple-line-icons.min.css'

const Sidebar = () => {
    return (
        <div className="wrapper">
            <nav id="sidebar">
                <div className="sidebar-header">
                    <h3>Agile Technodynamics</h3>
                </div>

                <ul className="list-unstyled components">
                    <li>
                        <Link to="/dashboard">
                            <i className="glyphicon glyphicon-briefcase"></i>
                            Dashboard
                        </Link>
                    </li>
                    <li className="active">
                        <a href ="#homeSubmenu" data-toggle="collapse" aria-expanded="false">
                            <i className="glyphicon glyphicon-home"></i>
                            Inbox
                        </a>
                        <ul className="collapse list-unstyled" id="homeSubmenu">
                            <li><Link to="/admin/inquiries">Inquiries</Link></li>
                            <li><Link to="/admin/quotations">Quotation Requests</Link></li>
                            <li><Link to="/admin/others">Other Concerns</Link></li>
                        </ul>
                    </li>
                    <li>
                        <Link to="/admin/archives">
                            <i className="glyphicon glyphicon-duplicate"></i>
                            Archives
                        </Link>
                    </li>
                    <li>
                        <Link to="/admin/trash">
                            <i className="glyphicon glyphicon-link"></i>
                            Trash
                        </Link>
                    </li>
                    <li>
                        <Link to="/admin/products">
                            <i className="glyphicon glyphicon-paperclip"></i>
                            Products
                        </Link>
                    </li>
                    <li className="active">
                        <a href ="#settingsSubmenu" data-toggle="collapse" aria-expanded="false">
                            <i className="glyphicon glyphicon-home"></i>
                            Settings
                        </a>
                        <ul className="collapse list-unstyled" id="settingsSubmenu">
                            <li><Link to="/admin/update-home">Update Home</Link></li>
                            <li><Link to="/admin/update-about">Update About</Link></li>
                            <li><Link to="/admin/update-services">Update Services</Link></li>
                        </ul>
                    </li>
                </ul>
            </nav>

            <div id="content">

            </div>
        </div>    
    )
}

export default Sidebar
