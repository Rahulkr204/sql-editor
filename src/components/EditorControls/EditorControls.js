import React, { useState, useContext, useEffect } from "react";
import { Button, Space, Tabs, message } from "antd";
import { PlayCircleTwoTone } from "@ant-design/icons";

import ResultTable from "../../components/ResultTable";
import { QueryContext } from "../../context/queryContext";

const EditorControls = () => {
    const {
        queries,
        publishedQueryList,
        setPublishedQueriesList,
        setActiveKey,
        activeKey,
    } = useContext(QueryContext);
    const [selectedTab, setSelectedTab] = useState("1");
    const [selectedQuery, setSelected] = useState(
        queries.find((i) => i.key === activeKey)
    );
    const [messageApi, contextHolder] = message.useMessage();

    const handlePublish = () => {
        if (selectedQuery.value) {
            const published = [
                ...publishedQueryList,
                {
                    key: publishedQueryList.length + 1,
                    value: selectedQuery.value,
                    published: true,
                    name: "Customers",
                },
            ];
            setPublishedQueriesList(published);
            successPublish();
        } else {
            message.error("You cannot publish empty query", 2);
        }
    };

    const successPublish = () => {
        messageApi
            .open({
                type: "loading",
                content: "Publishing..",
                duration: 1.5,
            })
            .then(() => message.success("Published!", 2.5));
    };

    const handleRun = () => {
        setActiveKey(activeKey);
    };

    useEffect(() => {
        const selectedQuery = [...publishedQueryList, ...queries].find(
            (i) => i.key === activeKey
        );
        setSelected(selectedQuery);
    }, [activeKey, queries, publishedQueryList]);

    const handleTabChange = (key) => {
        setSelectedTab(key);
    };

    const operations = (
        <Space wrap>
            <Button onClick={handlePublish} disabled={!selectedQuery?.value}>
                Publish
            </Button>
            <Button
                type="primary"
                icon={<PlayCircleTwoTone />}
                onClick={handleRun}
                disabled={!selectedQuery?.value}
            >
                Run
            </Button>
        </Space>
    );

    const getControlItems = React.useMemo(() => {
        return [
            {
                key: "1",
                label: "Query Results",
                children: (
                    <div className="queryResultContainer">
                        <ResultTable activeKey={activeKey} />
                    </div>
                ),
            },
            {
                key: "2",
                label: "Schedule",
                children: <div className="scheduleContainer">Schedule</div>,
            },
            {
                key: "3",
                label: "Documentation",
                children: (
                    <div className="documentationContainer">Documentation</div>
                ),
            },
        ];
    }, [activeKey]);

    return (
        <div className="controllerContainer">
            {contextHolder}
            <Tabs
                defaultActiveKey={1}
                activeKey={selectedTab}
                items={getControlItems}
                onChange={handleTabChange}
                destroyInactiveTabPane={true}
                tabBarExtraContent={operations}
            />
        </div>
    );
};

export default React.memo(EditorControls);
