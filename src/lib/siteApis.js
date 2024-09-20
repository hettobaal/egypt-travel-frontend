
const SERVER_URL = process?.env?.NEXT_PUBLIC_SERVER_URL


// Category
export const createCategory = async (data) => {
    const Url = SERVER_URL + 'admin/category/add-category';
    const formData = new FormData();
    formData?.append('categoryName', data?.categoryName);
    formData?.append('categoryImage', data?.categoryImage[0]);

    return fetch(Url, {
        method: 'POST',
        body: formData,
        mode: 'cors',
    },
    )
        .then((response) => response?.json())
        .then((data) => {
            return data
        })
        .catch((error) => {
            return error
        });
};

export const getCategories = async () => {

    const Url = SERVER_URL + 'api/public/get-all-categories';

    return fetch(Url, {
        method: 'GET',
        mode: 'cors',
        cache: 'no-cache'
    })
        .then((response) => response?.json())
        .then((data) => {
            return data;
        })
        .catch((error) => {
            return error;
        });
};

export const getSingleCategory = async (id) => {

    const Url = SERVER_URL + `api/public/get-category/${id}`;

    return fetch(Url, {
        method: 'GET',
        mode: 'cors',
        cache: 'no-cache'
    })
        .then((response) => response?.json())
        .then((data) => {
            return data;
        })
        .catch((error) => {
            return error;
        });
};

export const DeleteCategory = async (id) => {

    const url = SERVER_URL + `admin/category/delete-category/${id}`;

    return fetch(url, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        },
    })
        .then(response => response?.json())
        .then(data => {
            console.log("Response from server:", data);
            return data;
        })
        .catch(error => {
            console.error("Fetch error:", error);
            return error;
        });
}

export const updateCategoryById = async (data, id) => {

    const Url = SERVER_URL + `admin/category/update-category/${id}`;
    const formData = new FormData();
    if (data?.categoryImage?.length > 0) {
        formData.append('categoryImage', data?.categoryImage[0]);
    }
    formData?.append('categoryName', data?.categoryName);

    return fetch(Url, {
        method: 'PUT',
        body: formData,
        mode: 'cors',
    },
    )
        .then((response) => response?.json())
        .then((data) => {
            return data
        })
        .catch((error) => {
            return error
        });
};


// sub Category
export const createSubCategory = async (data) => {
    const Url = SERVER_URL + 'admin/subCategory/add-subcategory';
    const formData = new FormData();
    formData?.append('categoryId', data?.categoryId);
    formData?.append('subCategoryName', data?.subCategoryName);
    formData?.append('subCategoryImage', data?.subCategoryImage[0]);

    return fetch(Url, {
        method: 'POST',
        body: formData,
        mode: 'cors',
    },
    )
        .then((response) => response?.json())
        .then((data) => {
            return data
        })
        .catch((error) => {
            return error
        });
};

export const getSubCategories = async () => {

    const Url = SERVER_URL + 'api/public/get-all-subcategories';

    return fetch(Url, {
        method: 'GET',
        mode: 'cors',
        cache: 'no-store'
    })
        .then((response) => response?.json())
        .then((data) => {
            return data;
        })
        .catch((error) => {
            return error;
        });
};

export const DeleteSubCategory = async (id) => {

    const url = SERVER_URL + `admin/subcategory/delete-subcategory/${id}`;

    return fetch(url, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        },
    })
        .then(response => response?.json())
        .then(data => {
            console.log("Response from server:", data);
            return data;
        })
        .catch(error => {
            console.error("Fetch error:", error);
            return error;
        });
}

export const updateSubCategoryById = async (data, id) => {


    const Url = SERVER_URL + `admin/subcategory/update-subcategory/${id}`;
    const formData = new FormData();

    if (data?.subCategoryImage) {
        formData.append('subCategoryImage', data?.subCategoryImage);
    }
    formData?.append('subCategoryName', data?.subCategoryName);


    return fetch(Url, {
        method: 'PUT',
        body: formData,
        mode: 'cors',
        cache: "no-store"
    },
    )
        .then((response) => response?.json())
        .then((data) => {
            return data
        })
        .catch((error) => {
            return error
        });
};


// Reviews
export const addReview = async (data) => {
    const Url = SERVER_URL + 'admin/subCategory/add-subcategory';
    const formData = new FormData();
    formData?.append('categoryId', data?.categoryId);
    formData?.append('subCategoryName', data?.subCategoryName);
    formData?.append('subCategoryImage', data?.subCategoryImage[0]);

    return fetch(Url, {
        method: 'POST',
        body: formData,
        mode: 'cors',
        cache: "no-store"
    },
    )
        .then((response) => response?.json())
        .then((data) => {
            return data
        })
        .catch((error) => {
            return error
        });
};


export const getReviews = async () => {

    const Url = SERVER_URL + 'api/public/get-reviews';

    return fetch(Url, {
        method: 'GET',
        mode: 'cors',
        cache: 'no-cache'
    })
        .then((response) => response?.json())
        .then((data) => {
            return data;
        })
        .catch((error) => {
            return error;
        });
};


// tours 
export const addTour = async (data) => {

    const Url = SERVER_URL + 'admin/tour/add-tour';
    const formData = new FormData();
    formData?.append('subCategoryId', data?.subCategoryId);
    formData?.append('title', data?.title);
    formData?.append('tags', data?.tag);
    formData?.append('description', data?.description);
    formData?.append('strikePrice', data?.strikePrice);
    formData?.append('priceAdult', data?.priceAdult);
    formData?.append('priceChild', data?.priceChild);
    formData?.append('duration', data?.Duration);
    formData?.append('cardImage', data?.cardImage[0]);
    formData?.append('tourImages', data?.tourImages);
    // formData?.append('highlights', data?.HighlightPoint);
    formData?.append('highlights', JSON?.stringify(data?.HighlightPoint));
    formData?.append('fulDescription', data?.fulDescription);
    formData?.append('includes', JSON?.stringify(data?.includes));
    formData?.append('heading', data?.ImportantInformationHeading);
    // formData?.append('importantInformation', data?.ImportantInformationPoint);
    formData?.append('importantInformation', JSON?.stringify(data?.ImportantInformationPoint));

    return fetch(Url, {
        method: 'POST',
        body: formData,
        mode: 'cors',
    },
    )
        .then((response) => response?.json())
        .then((data) => {
            return data
        })
        .catch((error) => {
            return error
        });
};

export const getTours = async () => {

    const Url = SERVER_URL + 'api/public/get-all-tours';

    return fetch(Url, {
        method: 'GET',
        mode: 'cors',
        cache: 'no-store'
    })
        .then((response) => response?.json())
        .then((data) => {
            return data;
        })
        .catch((error) => {
            return error;
        });
};

export const getSingleTour = async (id) => {

    const Url = SERVER_URL + `api/public/get-tour/${id}`;

    return fetch(Url, {
        method: 'GET',
        mode: 'cors',
        cache: 'no-cache'
    })
        .then((response) => response?.json())
        .then((data) => {
            return data;
        })
        .catch((error) => {
            return error;
        });
};

export const updateTourById = async (data, id) => {

    const Url = SERVER_URL + `admin/tour/update-tour/${id}`;
    const formData = new FormData();
    formData?.append('highlights', JSON?.stringify(data?.HighlightPoint));
    formData?.append('includes', JSON?.stringify(data?.HighlightPoint));

    return fetch(Url, {
        method: 'PUT',
        body: formData,
        mode: 'cors',
        cache: "no-store"
    },
    )
        .then((response) => response?.json())
        .then((data) => {
            return data
        })
        .catch((error) => {
            return error
        });
};


export const DeleteTour = async (id) => {

    const url = SERVER_URL + `admin/tour/delete-tour/${id}`;

    return fetch(url, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        },
    })
        .then(response => response?.json())
        .then(data => {
            console.log("Response from server:", data);
            return data;
        })
        .catch(error => {
            console.error("Fetch error:", error);
            return error;
        });
}


// discount tour
export const addDiscountTour = async (data) => {

    const Url = SERVER_URL + 'admin/discountedtour/add-discountedtour';

    const json = {
        tourId: data?.tourId
    }

    return fetch(Url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON?.stringify(json),
        mode: 'cors',
    })
        .then((response) => response?.json())
        .then((data) => {
            return data;
        })
        .catch((error) => {
            return error;
        });
};

export const getDiscountTours = async () => {

    const Url = SERVER_URL + 'api/public/get-discountedtours';

    return fetch(Url, {
        method: 'GET',
        mode: 'cors',
        cache: 'no-store'
    })
        .then((response) => response?.json())
        .then((data) => {
            return data;
        })
        .catch((error) => {
            return error;
        });
};

