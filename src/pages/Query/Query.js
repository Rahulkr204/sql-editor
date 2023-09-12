import React, { useState, useContext, useEffect } from "react";
import { Button, Space, Tabs, message } from "antd";
import { PlayCircleTwoTone } from "@ant-design/icons";

import ResultTable from "../../components/ResultTable";
import EditorTabs from "../../components/EditorTabs";
import Editor from "../../components/Editor";

import { QueryContext } from "../../context/queryContext";

import "./Query.css";

function Query() {
    const { queries, setQueries, activeKey, setActiveKey, publishedQueryList } =
        useContext(QueryContext);
    const [selectedTab, setSelectedTab] = useState("1");

    console.log(queries);
    return (
        <div className="queryContainer">
            <EditorTabs
                tabs={[...queries]}
                setActiveKey={setActiveKey}
                setItems={setQueries}
                activeKey={activeKey}
            />
            <EditorControls
                setControlTab={setSelectedTab}
                selectedTab={selectedTab}
                activeKey={activeKey}
            />
        </div>
    );
}

const EditorControls = ({ setControlTab, selectedTab, activeKey }) => {
    const {
        queries,
        publishedQueryList,
        setPublishedQueriesList,
        setActiveKey,
    } = useContext(QueryContext);
    const [messageApi, contextHolder] = message.useMessage();

    const [selectedQuery, setSelected] = useState(
        queries.find((i) => i.key === activeKey)
    );

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
        const data = [...publishedQueryList, ...queries];
        const temp = data.find((i) => i.key === activeKey);
        setSelected(temp);
    }, [queries, publishedQueryList]);

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

    const getControlItems = React.useCallback(() => {
        return [
            {
                key: "1",
                label: "Query Results",
                children: (
                    <div className="queryResultContainer">
                        {" "}
                        <ResultTable />{" "}
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
        <>
            {contextHolder}
            <Tabs
                defaultActiveKey={1}
                activeKey={selectedTab}
                items={getControlItems()}
                onChange={setControlTab}
                destroyInactiveTabPane={true}
                tabBarExtraContent={operations}
            />
        </>
    );
};

export default Query;
