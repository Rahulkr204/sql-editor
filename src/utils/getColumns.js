import { customerSchema, ordersSchema, productSchema } from "../data/schema";

const modifiedColumns = (params) => {
    const result = [];
    params[0].children.forEach((i) => {
        if (i.children?.length) {
            i.children.forEach((j) => {
                result.push({
                    title: j.title,
                    dataIndex: j.key,
                    width: 100,
                });
            });
        } else {
            result.push({
                title: i.title,
                dataIndex: i.key,
                width: 100,
            });
        }
    });
    return result;
};

export const getColumns = (key) => {
    switch (key) {
        case "orders":
            return modifiedColumns(ordersSchema);
            break;
        case "customers":
            return modifiedColumns(customerSchema);
            break;
        case "products":
            return modifiedColumns(productSchema);
            break;
        default:
            break;
    }
};
