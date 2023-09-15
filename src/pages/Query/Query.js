import React, { useState, useContext, useEffect, lazy, Suspense } from "react";
import { Skeleton } from "antd";

import { QueryContext } from "../../context/queryContext";

import "./Query.css";

const MemoizedEditorControls = lazy(() =>
    import("../../components/EditorControls")
);
const MemoizedEditorTabs = lazy(() => import("../../components/EditorTabs"));

function Query() {
    const { queries, setQueries, activeKey, setActiveKey } =
        useContext(QueryContext);

    return (
        <div className="queryContainer">
            <Suspense fallback={<Skeleton paragraph={8} />}>
                <MemoizedEditorTabs
                    tabs={queries}
                    setActiveKey={setActiveKey}
                    setItems={setQueries}
                    activeKey={activeKey}
                />
            </Suspense>
            <Suspense fallback={<Skeleton paragraph={5} />}>
                <MemoizedEditorControls />
            </Suspense>
        </div>
    );
}

export default Query;
