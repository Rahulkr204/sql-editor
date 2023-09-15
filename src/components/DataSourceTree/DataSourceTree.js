import React, { lazy, Suspense } from "react";
import { DownOutlined } from "@ant-design/icons";
import { Tree, Input, Skeleton } from "antd";

import SubHeader from "../SubHeader";
import PublishedQueries from "../PublishedQueries";

import { customerSchema, ordersSchema, productSchema } from "../../data/schema";
import "./DataSourceTree.css";

const { Search } = Input;

const MemoizedPublishedQueries = lazy(() => import("../PublishedQueries"));

const DataSourceTree = () => {
    const onSearch = (value, _e, info) => console.log(info?.source, value);
    return (
        <div className="sourceTreeContainer">
            <SubHeader text="Published" />
            <Suspense fallback={<Skeleton paragraph={4} />}>
                <MemoizedPublishedQueries />
            </Suspense>

            <SubHeader text="Data Sources" />

            <Suspense fallback={<Skeleton paragraph={10} />}>
                <Search
                    placeholder="Search source..."
                    onSearch={onSearch}
                    className="dataSourceSearch"
                />
                {renderTree(ordersSchema)}
                {renderTree(customerSchema)}
                {renderTree(productSchema)}
            </Suspense>
        </div>
    );
};

const renderTree = (treeData) => {
    return (
        <Tree
            showLine
            defaultExpandAll
            switcherIcon={<DownOutlined />}
            treeData={treeData}
            titleRender={(item) => (
                <MemoizedTitleRenderer title={item?.title} type={item?.type} />
            )}
        />
    );
};

const MemoizedTitleRenderer = React.memo(({ title, type }) => {
    return (
        <div className="titleRenderer">
            {title} <span className="titleType">{type}</span>
        </div>
    );
});

export default React.memo(DataSourceTree);
