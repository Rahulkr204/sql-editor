import React, { Suspense, useMemo, useState, lazy } from "react";
import {
    DesktopOutlined,
    PieChartOutlined,
    NotificationTwoTone,
    UserOutlined,
} from "@ant-design/icons";
import { Layout, Menu, Avatar, Space, Skeleton } from "antd";
// components
import Editor from "./components/Editor";
import DataSourceTree from "./components/DataSourceTree";
// context
import { QueryContext } from "./context/queryContext";
// data
import { publishedQueries } from "./data/publishedQueries";
import { getMenuItem } from "./utils";
import "./App.css";
const { Content, Sider } = Layout;
const MemoizedQueryComponent = lazy(() => import("./pages/Query"));

const items = [
    getMenuItem("Data Sources", "1", <PieChartOutlined />),
    getMenuItem("Published", "2", <DesktopOutlined />),
];
const bottomItems = [
    getMenuItem(
        "Notification",
        "3",
        <NotificationTwoTone twoToneColor="#2026D2" />
    ),
    getMenuItem(
        "User Profile",
        "4",
        <UserOutlined style={{ color: "#2026D2" }} />
    ),
];
const initialQueries = [
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
];
const App = () => {
    const [queries, setQueries] = useState(initialQueries);
    const [publishedQueryList, setPublishedQueriesList] =
        useState(publishedQueries);

    const [queryList, setQueryList] = useState();
    const [activeKey, setActiveKey] = useState(queries[0]?.key);

    const contextValue = useMemo(() => {
        return {
            queries,
            setQueries,
            publishedQueryList,
            setPublishedQueriesList,
            activeKey,
            setActiveKey,
        };
    }, [
        queries,
        setQueries,
        publishedQueryList,
        setPublishedQueriesList,
        activeKey,
        setActiveKey,
    ]);

    return (
        <Layout className="layoutContainer">
            <Sider collapsed={true} theme="light" className="appSider">
                <div>
                    <div className="logoContainer">
                        <img
                            src="https://img.stackshare.io/service/40523/default_c89319f77677b9a9c4a5ceed791da7fcf3148832.png"
                            alt="atlan"
                            loading="lazy"
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
            <QueryContext.Provider value={contextValue}>
                <Layout className="appLayout">
                    <Suspense fallback={<Skeleton />}>
                        <Sider
                            collapsed={false}
                            theme="light"
                            className="dataSourceSider"
                            width={200}
                        >
                            <DataSourceTree />
                        </Sider>
                    </Suspense>
                    <Suspense fallback={<Skeleton paragraph={20} />}>
                        <Content className="contentContainer">
                            <MemoizedQueryComponent />
                        </Content>
                    </Suspense>
                </Layout>
            </QueryContext.Provider>
        </Layout>
    );
};
export default App;
