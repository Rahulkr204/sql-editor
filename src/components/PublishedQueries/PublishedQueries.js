import React, { useContext } from "react";
import { List } from "antd";

import Editor from "../Editor";
import { QueryContext } from "../../context/queryContext";

function PublishedQueries() {
    const { publishedQueryList, setActiveKey, queries, setQueries, activeKey } =
        useContext(QueryContext);

    const showQuery = (item) => {
        const { id, name, value } = item;
        const isQueryOpen = queries.find((i) => i.key === id);
        if (!isQueryOpen) {
            const newQueries = [
                ...queries,
                {
                    id,
                    key: id,
                    label: name,
                    value,
                    children: (
                        <div>
                            <Editor />
                        </div>
                    ),
                },
            ];
            setQueries(newQueries);
            setActiveKey(id);
        } else {
            setActiveKey(id);
        }
    };

    return (
        <div className="publishedQueries">
            <List
                size="small"
                bordered
                dataSource={publishedQueryList}
                renderItem={(item) => (
                    <List.Item onClick={() => showQuery(item)}>
                        {item.name}
                    </List.Item>
                )}
            />
        </div>
    );
}

export default React.memo(PublishedQueries);
