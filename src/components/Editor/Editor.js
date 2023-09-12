import React, { useState, useContext, useEffect } from "react";
import CodeMirror from "@uiw/react-codemirror";
import { sql } from "@codemirror/lang-sql";
import { createTheme } from "@uiw/codemirror-themes";
import { tags as t } from "@lezer/highlight";

import { QueryContext } from "../../context/queryContext";
import "./Editor.css";

const myTheme = createTheme({
    theme: "light",
    settings: {
        background: "#ffffff",
        foreground: "#75baff",
        caret: "#5d00ff",
        selection: "#036dd626",
        selectionMatch: "#036dd626",
        lineHighlight: "#8a91991a",
        gutterBackground: "#fff",
        gutterForeground: "#8a919966",
    },
    styles: [
        { tag: t.comment, color: "#787b8099" },
        { tag: t.variableName, color: "#0080ff" },
        { tag: [t.string, t.special(t.brace)], color: "#5c6166" },
        { tag: t.number, color: "#5c6166" },
        { tag: t.bool, color: "#5c6166" },
        { tag: t.null, color: "#5c6166" },
        { tag: t.keyword, color: "#5c6166" },
        { tag: t.operator, color: "#5c6166" },
        { tag: t.className, color: "#5c6166" },
        { tag: t.definition(t.typeName), color: "#5c6166" },
        { tag: t.typeName, color: "#5c6166" },
        { tag: t.angleBracket, color: "#5c6166" },
        { tag: t.tagName, color: "#5c6166" },
        { tag: t.attributeName, color: "#5c6166" },
    ],
});

function Editor() {
    const { queries, setQueries, activeKey, setActiveKey, publishedQueryList } =
        useContext(QueryContext);

    const [editorValue, setEditorValue] = useState("");

    const onChange = React.useCallback((value, viewUpdate) => {
        setEditorValue(value);
        const newQueries = queries.map((i) => {
            if (i.id === activeKey) {
                return Object.assign({}, i, { value: value });
            }
            return i;
        });
        setQueries(newQueries);
    }, []);

    useEffect(() => {
        const selectedQuery = [...publishedQueryList, ...queries].find(
            (i) => i.key === activeKey
        );
        setEditorValue(selectedQuery?.value);
    }, [activeKey, setActiveKey]);

    return (
        <div className="editorContainer">
            <CodeMirror
                value={editorValue}
                theme={myTheme}
                minHeight={"45vh"}
                extensions={[sql()]}
                onChange={onChange}
                autoFocus
                basicSetup={{
                    lineNumbers: true,
                }}
            />
        </div>
    );
}
export default React.memo(Editor);
