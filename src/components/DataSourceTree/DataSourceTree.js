import React from "react";
import { DownOutlined } from "@ant-design/icons";
import { Tree, Input, Divider } from "antd";

import SubHeader from "../SubHeader";
import PublishedQueries from "../PublishedQueries";

import { customerSchema, ordersSchema, productSchema } from "../../data/schema";
import "./DataSourceTree.css";

const { Search } = Input;

const DataSourceTree = () => {
    const onSearch = (value, _e, info) => console.log(info?.source, value);
    return (
        <div className="sourceTreeContainer">
            <SubHeader text="Published" />
            <PublishedQueries />

            <SubHeader text="Data Sources" />
            <Search
                placeholder="Search source..."
                onSearch={onSearch}
                className="dataSourceSearch"
            />
            <Tree
                showLine
                switcherIcon={<DownOutlined />}
                defaultExpandAll
                treeData={customerSchema}
                titleRender={(item) => (
                    <TitleRenderer title={item?.title} type={item?.type} />
                )}
            />
            <Tree
                showLine
                switcherIcon={<DownOutlined />}
                treeData={ordersSchema}
                titleRender={(item) => (
                    <TitleRenderer title={item?.title} type={item?.type} />
                )}
            />
            <Tree
                showLine
                switcherIcon={<DownOutlined />}
                treeData={productSchema}
                titleRender={(item) => (
                    <TitleRenderer title={item?.title} type={item?.type} />
                )}
            />
        </div>
    );
};

const TitleRenderer = ({ title, type }) => {
    return (
        <div className="titleRenderer">
            {title} <span className="titleType">{type}</span>
        </div>
    );
};

export default DataSourceTree;
