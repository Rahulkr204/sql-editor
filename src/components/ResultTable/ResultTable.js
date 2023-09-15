import React, { useContext, useState, useCallback } from "react";
import { Button, Space, Table, Select } from "antd";
import { DownloadOutlined } from "@ant-design/icons";

import { QueryContext } from "../../context/queryContext";
import { customers, orders, products } from "../../data/dataSources";

import { getColumns } from "../../utils/getColumns";
import { flattenObject } from "../../utils";
import "./ResultTable.css";

const dataToActiveKey = {
    1: "orders",
    2: "customers",
    3: "products",
};

const tableIdToActiveKey = {
    1: "orderID",
    2: "customerID",
    3: "productID",
};

const limitItems = [
    {
        value: "10",
        label: "10",
    },
    {
        value: "50",
        label: "50",
    },
    {
        value: "100",
        label: "100",
    },
    {
        value: "All",
        label: "All",
    },
];

const ResultTable = ({ activeKey }) => {
    const [selectedEntries, setSelectedEntries] = useState("10");

    const getData = useCallback(() => {
        let source = null;
        console.log(activeKey);
        switch (dataToActiveKey[activeKey]) {
            case "orders":
                source = orders;
                break;
            case "customers":
                source = customers;
                break;
            case "products":
                source = products;
                break;
            default:
                source = [];
                break;
        }
        const data = source ? source.map((item) => flattenObject(item)) : [];
        const dataSource =
            selectedEntries !== "All" ? data?.slice(0, selectedEntries) : data;
        console.log(source, dataSource);
        return dataSource;
    }, [activeKey, selectedEntries]);

    const handleEntries = (value) => {
        setSelectedEntries(value);
    };

    console.log("Here", activeKey);
    return (
        <div className="resultComponent">
            <ResultHeader
                selectedEntries={selectedEntries}
                handleEntries={handleEntries}
            />
            <Table
                bordered={true}
                virtual={selectedEntries === "All"}
                columns={getColumns(dataToActiveKey[activeKey])}
                scroll={{
                    x: 2000,
                    y: 400,
                }}
                rowKey={tableIdToActiveKey[activeKey]}
                dataSource={getData()}
                pagination={false}
            />
        </div>
    );
};

const ResultHeader = ({ selectedEntries, handleEntries }) => {
    return (
        <div className="resultHeader">
            <Space wrap>
                <div>Unsaved draft</div>
                <div>
                    {`(${selectedEntries} rows returned in ${Math.random(
                        2,
                        4
                    ).toFixed(2)} secs)`}
                </div>
            </Space>
            <Space wrap>
                <span>Limit Entries</span>
                <Select
                    defaultValue={"10"}
                    value={selectedEntries}
                    style={{
                        width: 120,
                    }}
                    onChange={handleEntries}
                    options={limitItems}
                />
                <Button type="text">
                    Export <DownloadOutlined />{" "}
                </Button>
            </Space>
        </div>
    );
};

export default React.memo(ResultTable);
