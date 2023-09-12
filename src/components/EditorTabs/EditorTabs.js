import React, { useRef, useState, useEffect, useCallback } from "react";
import { Tabs } from "antd";

import Editor from "../Editor";
import "./EditorTabs.css";

const EditorTabs = ({ setItems, setActiveKey, activeKey, tabs }) => {
    const onChange = (newActiveKey) => {
        setActiveKey(newActiveKey);
    };

    const add = () => {
        const newActiveKey = tabs[tabs.length - 1]?.key + 1;
        const newPanes = [...tabs];
        newPanes.push({
            label: "Untitled",
            children: (
                <div>
                    <Editor />
                </div>
            ),
            key: newActiveKey,
            id: newActiveKey,
            value: "",
        });
        setItems(newPanes);
        setActiveKey(newActiveKey);
    };

    const remove = useCallback((targetKey) => {
        let newActiveKey = activeKey;
        let lastIndex = -1;
        tabs.forEach((item, i) => {
            if (item.key === targetKey) {
                lastIndex = i - 1;
            }
        });
        const newPanes = tabs.filter((item) => item.key !== targetKey);
        if (newPanes.length && newActiveKey === targetKey) {
            if (lastIndex >= 0) {
                newActiveKey = newPanes[lastIndex].key;
            } else {
                newActiveKey = newPanes[0].key;
            }
        }
        setItems(newPanes);
        setActiveKey(newActiveKey);
    }, []);

    const onEdit = useCallback((targetKey, action) => {
        const isNotLastTab = action === "remove" && tabs.length > 1;
        if (action === "add") {
            add();
        } else if (isNotLastTab) {
            remove(targetKey);
        }
    }, []);

    return (
        <Tabs
            type="editable-card"
            onChange={onChange}
            activeKey={activeKey}
            onEdit={onEdit}
            items={tabs}
            className="editorTabs"
        />
    );
};
export default React.memo(EditorTabs);
