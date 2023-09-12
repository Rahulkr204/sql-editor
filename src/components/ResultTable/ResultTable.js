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

const ResultTable = () => {
    const { activeKey } = useContext(QueryContext);
    const [selectedEntries, setSelectedEntries] = useState("10");

    const getData = useCallback(() => {
        let source = null;
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
        return dataSource;
    }, [activeKey, selectedEntries]);

    const handleEntries = (params) => {
        const { value } = params;
        setSelectedEntries(value);
    };

    return (
        <div className="resultContainer">
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
                        options={[
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
                        ]}
                    />
                    <Button type="text">
                        Export <DownloadOutlined />{" "}
                    </Button>
                </Space>
            </div>
            <Table
                bordered={true}
                virtual={selectedEntries === "All"}
                columns={getColumns(dataToActiveKey[activeKey])}
                scroll={{
                    x: 2000,
                    y: 400,
                }}
                rowKey={tableIdToActiveKey[activeKey]}
                dataSource={getData(dataToActiveKey[activeKey])}
                pagination={false}
            />
        </div>
    );
};

export default React.memo(ResultTable);
