import React, { useCallback } from "react";
import { Tabs } from "antd";

import Editor from "../Editor";
import "./EditorTabs.css";

const EditorTabs = ({ setItems, setActiveKey, activeKey, tabs }) => {
    const onChange = (newActiveKey) => {
        setActiveKey(newActiveKey);
    };

    const add = useCallback(() => {
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
    }, [setItems, setActiveKey, tabs]);

    const remove = useCallback(
        (targetKey) => {
            const newPanes = tabs.filter((item) => item.key !== targetKey);
            let newActiveKey = activeKey;
            const lastIndex = newPanes.findIndex(
                (item) => item.key === targetKey
            );
            if (lastIndex >= 0) {
                newActiveKey = newPanes[lastIndex - 1]?.key || newPanes[0]?.key;
            }
            setItems(newPanes);
            setActiveKey(newActiveKey);
        },
        [activeKey, setActiveKey, setItems, tabs]
    );

    const onEdit = (targetKey, action) => {
        const isNotLastTab = action === "remove" && tabs.length >= 1;
        if (action === "add") {
            add();
        } else if (isNotLastTab) {
            remove(targetKey);
        }
    };

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
