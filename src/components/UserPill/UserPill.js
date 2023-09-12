import React, { useState } from "react";
import { Avatar, Dropdown, Menu } from "antd";
import {
    UserOutlined,
    LogoutOutlined,
    SettingOutlined,
} from "@ant-design/icons";
import "./UserPill.css";

const UserPill = () => {
    const [visible, setVisible] = useState(false);

    const handleVisibleChange = (flag) => {
        setVisible(flag);
    };

    const menu = (
        <Menu onClick={() => setVisible(false)}>
            <Menu.Item key="profile" icon={<UserOutlined />}>
                Profile
            </Menu.Item>
            <Menu.Item key="settings" icon={<SettingOutlined />}>
                Settings
            </Menu.Item>
            <Menu.Item key="logout" icon={<LogoutOutlined />}>
                Logout
            </Menu.Item>
        </Menu>
    );

    return (
        <Dropdown
            menu={menu}
            trigger={["click"]}
            open={visible}
            onOpenChange={handleVisibleChange}
        >
            <div className="user-profile-pill">
                <Avatar size="small" icon={<UserOutlined />} />
                <span className="username">John Doe</span>
            </div>
        </Dropdown>
    );
};

export default UserPill;
