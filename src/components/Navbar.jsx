import React from 'react'
import {Menu, Typography} from 'antd';
import { Link } from 'react-router-dom';
import { HomeFilled, BulbFilled, FundFilled, MoneyCollectFilled } from "@ant-design/icons";

const Navbar = () => {
    return (
        <div className="nav-container">
            <div className="logo-container">
                {/* <Avatar src={icon} size="small" /> */}
                <Typography.Title level={2} className="logo">
                    <Link to="/">Papercoin</Link>
                </Typography.Title>
            </div>
            <Menu theme='dark' style={{width:300}}>
                <Menu.Item icon={<HomeFilled/>}>
                    <Link to="/">Home</Link>
                </Menu.Item>
                <Menu.Item icon={<FundFilled/>}>
                    <Link to="/cryptocurrencies">Cryptocurrencies</Link>
                </Menu.Item>
                <Menu.Item icon={<MoneyCollectFilled/>}>
                    <Link to="/exchanges">Exchanges</Link>
                </Menu.Item>
                <Menu.Item icon={<BulbFilled/>}>
                    <Link to="/news">News</Link>
                </Menu.Item>
            </Menu>
        </div>
    )
}

export default Navbar
