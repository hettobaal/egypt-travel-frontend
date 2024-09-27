
const SERVER_URL = process?.env?.NEXT_PUBLIC_SERVER_URL


// Category
export const createCategory = async (data) => {

    const Url = SERVER_URL + 'admin/category/add-category';
    const formData = new FormData();
    formData?.append('categoryName', data?.categoryName);
    formData?.append('categoryImage', data?.categoryImage[0]);
    formData?.append('categoryMobImage', data?.categoryMobImage[0]);
    formData?.append('bannerText', data?.bannerText);
    formData?.append('bannerSlogan', data?.bannerSlogan);

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
            return data;
        })
        .catch(error => {
            return error;
        });
}

export const updateCategoryById = async (data, id) => {

    const Url = SERVER_URL + `admin/category/update-category/${id}`;
    const formData = new FormData();
    if (data?.categoryImage?.length > 0) {
        formData.append('categoryImage', data?.categoryImage[0]);
    }
    if (data?.categoryMobImage?.length > 0) {
        formData.append('categoryMobImage', data?.categoryMobImage[0]);
    }
    formData?.append('categoryName', data?.categoryName);
    formData?.append('bannerText', data?.bannerText);
    formData?.append('bannerSlogan', data?.bannerSlogan);

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

export const getSingleSubCategory = async (id) => {

    const Url = SERVER_URL + `api/public/get-subcategories/${id}`;

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
            return data;
        })
        .catch(error => {
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
    formData?.append('cardImage', data?.cardImage[0]);
    formData?.append('subCategoryId', data?.subCategoryId);
    formData?.append('title', data?.title);
    formData?.append('tag', data?.tag);
    formData?.append('description', data?.description);
    formData?.append('strikePrice', data?.strikePrice);
    formData?.append('priceAdult', data?.priceAdult);
    formData?.append('priceChild', data?.priceChild);
    formData?.append('duration', data?.Duration);
    data.tourImages.forEach((image, index) => {
        formData.append(`tourImages`, image);
    });

    formData?.append('highlights', JSON?.stringify(data?.HighlightPoint));
    formData?.append('fullDescription', data?.fullDescription);
    formData?.append('includes', JSON?.stringify(data?.includes));
    formData?.append('heading', data?.ImportantInformationHeading);
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
    if (data?.cardImage) {
        formData.append('cardImage', data?.cardImage[0]);
    }
    formData?.append('title', data?.title);
    formData?.append('tag', data?.tag);
    formData?.append('heading', data?.heading);
    formData?.append('description', data?.description);
    formData?.append('fullDescription', data?.fullDescription);
    formData?.append('strikePrice', data?.strikePrice);
    formData?.append('priceAdult', data?.priceAdult);
    formData?.append('priceChild', data?.priceChild);
    formData?.append('duration', data?.duration);

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

export const updateTourPoint = async (data, id, pointId) => {

    const Url = SERVER_URL + `admin/tour/update-tour/${id}`;
    const formData = new FormData();
    formData?.append('highlightPoint', data?.highlightPoint);
    formData?.append('highlightId', pointId);

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

export const updateTourIncludePoint = async (data, id, pointId) => {

    const Url = SERVER_URL + `admin/tour/update-tour/${id}`;
    const formData = new FormData();
    formData?.append('includePoint', data?.includePoint);
    formData?.append('includePointId', pointId);

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

export const updateTourImage = async (data, id, TourData) => {

    const Url = SERVER_URL + `admin/tour/update-tour/${id}`;
    const formData = new FormData();
    formData?.append('tourImage', data?.tourImage);
    formData?.append('tourImageId', TourData);

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
            return data;
        })
        .catch(error => {
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

export const DeleteDiscountTour = async (id) => {

    const url = SERVER_URL + `admin/discountedtour/delete-discountedtour/${id}`;

    return fetch(url, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        },
    })
        .then(response => response?.json())
        .then(data => {
            return data;
        })
        .catch(error => {
            return error;
        });
}


// Popular tour

export const addPopularTour = async (data) => {

    const Url = SERVER_URL + 'admin/populartour/add-populartour';

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

export const getPopularTours = async () => {

    const Url = SERVER_URL + 'api/public/get-popular-tours';

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

export const DeletePopularTour = async (id) => {

    const url = SERVER_URL + `admin/populartour/delete-populartour/${id}`;

    return fetch(url, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        },
    })
        .then(response => response?.json())
        .then(data => {
            return data;
        })
        .catch(error => {
            return error;
        });
}


// Selling tour

export const addSellingTour = async (data) => {

    const Url = SERVER_URL + 'admin/besttour/add-besttour';

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

export const getSellingTours = async () => {

    const Url = SERVER_URL + 'api/public/get-besttours';

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

export const DeleteSellingTour = async (id) => {

    const url = SERVER_URL + `admin/besttour/delete-besttour/${id}`;

    return fetch(url, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        },
    })
        .then(response => response?.json())
        .then(data => {
            return data;
        })
        .catch(error => {
            return error;
        });
}
