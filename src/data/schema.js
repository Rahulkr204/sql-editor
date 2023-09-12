const customerSchema = [
    {
        title: "customers",
        key: "customers",
        selectable: false,
        children: [
            {
                title: "customerID",
                key: "customerID",
                type: "string",
                selectable: false,
            },
            {
                title: "companyName",
                key: "companyName",
                type: "string",
                selectable: false,
            },
            {
                title: "contactName",
                key: "contactName",
                type: "string",
                selectable: false,
            },
            {
                title: "contactTitle",
                key: "contactTitle",
                type: "string",
                selectable: false,
            },
            {
                title: "address",
                key: "address",
                type: "object",
                selectable: false,
                children: [
                    {
                        title: "street",
                        key: "street",
                        type: "string",
                        selectable: false,
                    },
                    {
                        title: "city",
                        key: "city",
                        type: "string",
                        selectable: false,
                    },
                    {
                        title: "region",
                        key: "region",
                        type: "string",
                        selectable: false,
                    },
                    {
                        title: "postalCode",
                        key: "postalCode",
                        type: "string",
                        selectable: false,
                    },
                    {
                        title: "country",
                        key: "country",
                        type: "string",
                        selectable: false,
                    },
                    {
                        title: "phone",
                        key: "phone",
                        type: "string",
                        selectable: false,
                    },
                ],
            },
        ],
    },
];

const ordersSchema = [
    {
        title: "orders",
        key: "orders",
        selectable: false,
        children: [
            {
                title: "orderID",
                key: "orderID",
                type: "number",
                selectable: false,
            },
            {
                title: "customerID",
                key: "customerID",
                type: "string",
                selectable: false,
            },
            {
                title: "employeeID",
                key: "employeeID",
                type: "number",
                selectable: false,
            },
            {
                title: "orderDate",
                key: "orderDate",
                type: "string",
                selectable: false,
            },
            {
                title: "requiredDate",
                key: "requiredDate",
                type: "string",
                selectable: false,
            },
            {
                title: "shippedDate",
                key: "shippedDate",
                type: "string",
                selectable: false,
            },
            {
                title: "shipVia",
                key: "shipVia",
                type: "number",
                selectable: false,
            },
            {
                title: "freight",
                key: "freight",
                type: "number",
                selectable: false,
            },
            {
                title: "shipName",
                key: "shipName",
                type: "string",
                selectable: false,
            },
            {
                title: "street",
                key: "street",
                type: "string",
                selectable: false,
            },
            {
                title: "city",
                key: "city",
                type: "string",
                selectable: false,
            },
            {
                title: "region",
                key: "region",
                type: "string",
                selectable: false,
            },
            {
                title: "postalCode",
                key: "postalCode",
                type: "number",
                selectable: false,
            },
            {
                title: "country",
                key: "country",
                type: "string",
                selectable: false,
            },
            {
                title: "productID",
                key: "productID",
                type: "number",
                selectable: false,
            },
            {
                title: "unitPrice",
                key: "unitPrice",
                type: "number",
                selectable: false,
            },
            {
                title: "quantity",
                key: "quantity",
                type: "number",
                selectable: false,
            },
            {
                title: "discount",
                key: "discount",
                type: "number",
                selectable: false,
            },
        ],
    },
];

const productSchema = [
    {
        title: "products",
        key: "products",
        children: [
            {
                title: "productID",
                key: "productID",
                type: "number",
            },
            {
                title: "supplierID",
                key: "supplierID",
                type: "number",
            },
            {
                title: "categoryID",
                key: "categoryID",
                type: "number",
            },
            {
                title: "unitPrice",
                key: "unitPrice",
                type: "number",
            },
            {
                title: "unitsInStock",
                key: "unitsInStock",
                type: "number",
            },
            {
                title: "unitsOnOrder",
                key: "unitsOnOrder",
                type: "number",
            },
            {
                title: "reorderLevel",
                key: "reorderLevel",
                type: "number",
            },
            {
                title: "discontinued",
                key: "discontinued",
                type: "boolean",
            },
            {
                title: "name",
                key: "name",
                type: "string",
            },
        ],
    },
];

export { customerSchema, ordersSchema, productSchema };
