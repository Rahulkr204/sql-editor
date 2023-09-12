import React, { useState } from "react";
import {
    DesktopOutlined,
    PieChartOutlined,
    NotificationTwoTone,
    UserOutlined,
} from "@ant-design/icons";
import { Layout, Menu, Avatar, Space } from "antd";
// components
import Editor from "./components/Editor";
import DataSourceTree from "./components/DataSourceTree";
import Query from "./pages/Query";
// context
import { QueryContext } from "./context/queryContext";
// data
import { publishedQueries } from "./data/publishedQueries";

import "./App.css";
const { Content, Sider } = Layout;

function getItem(label, key, icon, children) {
    return {
        key,
        icon,
        children,
        label,
    };
}

const items = [
    getItem("Data Sources", "1", <PieChartOutlined />),
    getItem("Published", "2", <DesktopOutlined />),
];
const bottomItems = [
    getItem(
        "Notification",
        "3",
        <NotificationTwoTone twoToneColor="#2026D2" />
    ),
    getItem("User Profile", "4", <UserOutlined style={{ color: "#2026D2" }} />),
];

const App = () => {
    const [queries, setQueries] = useState([
        {
            label: "Tab 1",
            children: (
                <div>
                    <Editor />
                </div>
            ),
            value: "",
            key: 4,
            id: 4,
        },
    ]);
    const [publishedQueryList, setPublishedQueriesList] =
        useState(publishedQueries);
    const [activeKey, setActiveKey] = useState(queries[0]?.key);

    return (
        <QueryContext.Provider
            value={{
                queries,
                setQueries,
                publishedQueryList,
                setPublishedQueriesList,
                activeKey,
                setActiveKey,
            }}
        >
            <Layout className="layoutContainer">
                <Sider collapsed={true} theme="light" className="appSider">
                    <div>
                        <div className="logoContainer">
                            <img
                                src="https://img.stackshare.io/service/40523/default_c89319f77677b9a9c4a5ceed791da7fcf3148832.png"
                                alt="atlan"
                            />
                        </div>
                        <Menu
                            theme="light"
                            defaultSelectedKeys={["1"]}
                            mode="inline"
                            items={items}
                        />
                    </div>
                    <div>
                        <Menu
                            theme="light"
                            defaultSelectedKeys={["1"]}
                            mode="inline"
                            items={bottomItems}
                        />
                    </div>
                </Sider>
                <Layout className="appLayout">
                    <Sider
                        collapsed={false}
                        theme="light"
                        className="dataSourceSider"
                        width={"240px"}
                    >
                        <DataSourceTree />
                    </Sider>
                    <Content className="contentContainer">
                        <Query />
                    </Content>
                </Layout>
            </Layout>
        </QueryContext.Provider>
    );
};
export default App;
