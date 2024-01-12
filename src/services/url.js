const url = {
    BASE_URL: "https://localhost:7220/api/",

    CONTACT: {
        CREATE: "feedback/create",
    },

    SHOP: {
        LIST: "shop/get-all",
        DETAIL: "shop/detail/{}",
        RELATEDS: "shop/relateds/{}",
        GETBYFLOOR: "shop/get-all-by-floor/{}",
        GETBYCATEGORY: "shop/get-all-by-category/{}",
    },

    FLOOR: {
        LIST: "floor/get-all",
    },

    CATEGORY: {
        LIST: "category/get-all",
    },

    GALLERY: {
        LIST: "/gallery/get-all",
    },
};

export default url;
