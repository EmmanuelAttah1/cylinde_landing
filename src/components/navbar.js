import {LineOutlined,MailOutlined,LinkedinOutlined} from '@ant-design/icons';

const NavBar=props=>{
    return(
        <div id="navbar">
            <div id="label">Cylinder</div>
            <div id="contact">
                <div className="icon-container">
                    <LineOutlined style={{color:'#274c77'}}/>
                </div>
                <div className="icon-container">
                    <MailOutlined style={{color:'#274c77'}}/>
                </div>
                <div className="icon-container">
                    <LinkedinOutlined style={{color:'#274c77'}}/>
                </div>
            </div>
        </div>
    )
}

export default NavBar