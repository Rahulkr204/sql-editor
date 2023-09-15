function flattenObject(obj, parentKey = "") {
    const flattened = {};
    for (const key in obj) {
        const value = obj[key];
        if (typeof value === "object" || Array.isArray(value)) {
            const nested = flattenObject(value, key);
            Object.assign(flattened, nested);
        } else {
            flattened[key] = value;
        }
    }
    return flattened;
}

function getMenuItem(label, key, icon, children) {
    return {
        key,
        icon,
        children,
        label,
    };
}

export { flattenObject, getMenuItem };

