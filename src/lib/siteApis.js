import Cookies from "js-cookie";

const SERVER_URL = process?.env?.NEXT_PUBLIC_SERVER_URL
const token = Cookies?.get("authToken");

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
        headers: {
            authorization: `Bearer ${token}`
        }
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
            authorization: `Bearer ${token}`,
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
        headers: {
            authorization: `Bearer ${token}`
        }
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
    formData?.append('subCategoryHeroImage', data?.subCategoryHeroImage[0]);
    formData?.append('subCategoryMobHeroImage', data?.subCategoryMobHeroImage[0]);
    formData?.append('subCategoryTitle', data?.subCategoryTitle);
    formData?.append('subCategoryText', data?.subCategoryText);

    return fetch(Url, {
        method: 'POST',
        body: formData,
        mode: 'cors',
        headers: {
            authorization: `Bearer ${token}`
        }
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
            authorization: `Bearer ${token}`,
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
        formData.append('subCategoryImage', data?.subCategoryImage[0]);
    }
    if (data?.subCategoryHeroImage) {
        formData.append('subCategoryHeroImage', data?.subCategoryHeroImage[0]);
    }
    if (data?.subCategoryMobHeroImage) {
        formData.append('subCategoryMobHeroImage', data?.subCategoryMobHeroImage[0]);
    }
    formData?.append('subCategoryName', data?.subCategoryName);
    formData?.append('subCategoryTitle', data?.subCategoryTitle);
    formData?.append('subCategoryText', data?.subCategoryText);


    return fetch(Url, {
        method: 'PUT',
        body: formData,
        mode: 'cors',
        cache: "no-store",
        headers: {
            authorization: `Bearer ${token}`
        },
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



// tours 
export const addTour = async (data) => {

    const Url = SERVER_URL + 'admin/tour/add-tour';
    const formData = new FormData();
    formData?.append('cardImage', data?.cardImage[0]);
    formData?.append('subCategoryId', data?.subCategoryId);
    formData?.append('title', data?.title);
    formData?.append('tag', data?.tag);
    formData?.append('description', data?.description);
    formData?.append('priceAdult', data?.priceAdult);
    formData?.append('priceChild', data?.priceChild);
    formData?.append('priceInfant', data?.priceInfant);
    formData?.append('discountAmount', data?.discountAmount);
    formData?.append('duration', data?.Duration);
    data?.tourImages?.forEach((image) => {
        formData.append(`tourImages`, image);
    });
    formData?.append('highlights', JSON?.stringify(data?.HighlightPoint));
    formData?.append('fullDescription', data?.fullDescription);
    formData?.append('includes', JSON?.stringify(data?.includes));
    // formData?.append('heading', data?.ImportantInformationHeading);
    formData?.append('importantInformation', JSON?.stringify(data?.ImportantInformation));

    return fetch(Url, {
        method: 'POST',
        body: formData,
        mode: 'cors',
        headers: {
            authorization: `Bearer ${token}`
        },
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
    formData?.append('description', data?.description);
    formData?.append('fullDescription', data?.fullDescription);
    formData?.append('priceAdult', data?.priceAdult);
    formData?.append('priceChild', data?.priceChild);
    formData?.append('discountAmount', data?.discountAmount);
    formData?.append('duration', data?.duration);

    return fetch(Url, {
        method: 'PUT',
        body: formData,
        mode: 'cors',
        cache: "no-store",
        headers: {
            authorization: `Bearer ${token}`
        },
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
        cache: "no-store",
        headers: {
            authorization: `Bearer ${token}`
        },
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
        cache: "no-store",
        headers: {
            authorization: `Bearer ${token}`
        },
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


export const updateInfo = async (data, id, pointId) => {

    const Url = SERVER_URL + `admin/tour/update-tour/${id}`;
    const formData = new FormData();
    formData?.append('importantInfoHeading', data?.importantInfoHeading);
    formData?.append('importantInfoPoint', data?.importantInfoPoint);
    formData?.append('importantInfoId', pointId);

    return fetch(Url, {
        method: 'PUT',
        body: formData,
        mode: 'cors',
        cache: "no-store",
        headers: {
            authorization: `Bearer ${token}`
        },
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



export const addIncludePoint = async (data, id) => {

    const Url = SERVER_URL + `admin/tour/add-include/${id}`;

    return fetch(Url, {
        method: 'PUT',
        body: JSON?.stringify(data),
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json',
            authorization: `Bearer ${token}`,
        },
    })
        .then((response) => response.json())
        .then((data) => {
            return data;
        })
        .catch((error) => {
            return error;
        });
};

export const DeleteInclude = async (id) => {
    const url = SERVER_URL + `admin/tour/delete-include`;



    return fetch(url, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            authorization: `Bearer ${token}`, // Ensure token is correctly set
        },
        body: JSON.stringify({ includePointId: id }), // Send ID in the request body
    })
        .then(response => response.json())
        .then(data => {
            return data;
        })
        .catch(error => {
            console.error("Error:", error);
            return error;
        });
};


export const addHighlightsPoint = async (data, id) => {
    
    const Url = SERVER_URL + `admin/tour/add-highlight/${id}`;

    return fetch(Url, {
        method: 'PUT',
        body: JSON?.stringify(data), // Send JSON directly
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json', // Set the content type to JSON
            authorization: `Bearer ${token}`,  // Authorization header
        },
    })
        .then((response) => response.json())
        .then((data) => {
            return data;
        })
        .catch((error) => {
            return error;
        });
};

export const DeleteHighlights = async (id) => {

    const url = SERVER_URL + `admin/tour/delete-highlight`;

    return fetch(url, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            authorization: `Bearer ${token}`, // Ensure token is correctly set
        },
        body: JSON.stringify({ highlightPointId: id }), // Send ID in the request body
    })
        .then(response => response.json())
        .then(data => {
            return data;
        })
        .catch(error => {
            console.error("Error:", error);
            return error;
        });
};


export const addMoreImages = async (tourId, data) => {

    const Url = SERVER_URL + `admin/tour/update-tour/${tourId}`;
    const formData = new FormData();
    if (data.newtourImages && data.newtourImages.length > 0) {
        data.newtourImages.forEach((image) => {
            formData.append(`newtourImages`, image);
        });
    }

    return fetch(Url, {
        method: 'PUT',
        body: formData,
        mode: 'cors',
        cache: "no-store",
        headers: {
            authorization: `Bearer ${token}`
        },
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


export const addImportantInfo = async (data, id) => {
  
    const updatedData = data?.ImportantInformation[0]
    const Url = SERVER_URL + `admin/tour/add-importantInfo/${id}`;
    const transformedData = {

        heading: updatedData.heading,
        points: updatedData.points,

    };
   
    return fetch(Url, {
        method: 'PUT',
        body: JSON?.stringify(transformedData), // Send JSON directly
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json', // Set the content type to JSON
            authorization: `Bearer ${token}`,  // Authorization header
        },
    })
        .then((response) => response.json())
        .then((data) => {
            return data;
        })
        .catch((error) => {
            return error;
        });
};


export const DeleteInfo = async (id) => {

    const url = SERVER_URL + `admin/tour/delete-highlight`;

    return fetch(url, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            authorization: `Bearer ${token}`, // Ensure token is correctly set
        },
        body: JSON.stringify({ highlightPointId: id }), // Send ID in the request body
    })
        .then(response => response.json())
        .then(data => {
            return data;
        })
        .catch(error => {
            console.error("Error:", error);
            return error;
        });
};


// deleteImage( tourId , ImageId

export const deleteImage = async (tourId, ImageId) => {

    const Url = SERVER_URL + `admin/tour/update-tour/${tourId}`;


    const data = {
        deleteImageId: ImageId
    }

    return fetch(Url, {
        method: 'PUT',
        body: JSON.stringify(data), // Convert `data` to JSON string

        mode: 'cors',
        cache: "no-store",
        headers: {
            'Content-Type': 'application/json',

            authorization: `Bearer ${token}`
        },
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
        cache: "no-store",
        headers: {
            authorization: `Bearer ${token}`
        },
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
            authorization: `Bearer ${token}`,
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


export const getRelatedTours = async (id) => {

    const Url = SERVER_URL + `/api/public/get-related-tours`;

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


// discount tour


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




// Popular tour
export const addPopularTour = async (data) => {

    const Url = SERVER_URL + 'admin/populartour/add-populartour';

    const json = {
        popularTourId: data?.tourId
    }

    return fetch(Url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            authorization: `Bearer ${token}`,
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
            authorization: `Bearer ${token}`,
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
        bestTourId: data?.tourId
    }

    return fetch(Url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            authorization: `Bearer ${token}`,
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
            authorization: `Bearer ${token}`,
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


// Booking Apis
export const booking = async (data) => {

    const Url = SERVER_URL + 'api/public/add-booking';


    const jsonData = {
        tourId: data?.tourId,
        name: data?.name,
        email: data?.email,
        phoneNumber: data?.phoneNumber,
        language: data?.language,
        participants: data?.participants,
        date: data?.date
    };

    return fetch(Url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON?.stringify(jsonData),
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


export const getBookingTours = async () => {

    const Url = SERVER_URL + 'admin/booking/get-bookings';

    return fetch(Url, {
        method: 'GET',
        mode: 'cors',
        cache: 'no-store',
        headers: {
            authorization: `Bearer ${token}`
        },

    })
        .then((response) => response?.json())
        .then((data) => {
            return data;
        })
        .catch((error) => {
            return error;
        });
};

export const approveBooking = async (id) => {

    const Url = SERVER_URL + `admin/booking/update-booking/${id}`;

    const jsonData = {
        status: "Confirmed"
    }

    return fetch(Url, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            authorization: `Bearer ${token}`,
        },
        body: JSON?.stringify(jsonData),
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


export const cancelBooking = async (id) => {

    const Url = SERVER_URL + `admin/booking/update-booking/${id}`;

    const jsonData = {
        status: "Cancelled"
    }

    return fetch(Url, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            authorization: `Bearer ${token}`,
        },
        body: JSON?.stringify(jsonData),
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


export const deleteBooking = async (id) => {

    const url = SERVER_URL + `admin/booking/delete-booking/${id}`;

    return fetch(url, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            authorization: `Bearer ${token}`,
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


// MetaData Apis
export const addCategoryMetaData = async (data) => {

    const Url = SERVER_URL + 'admin/metadata/add-metadata';
    const formData = new FormData();

    formData?.append('entityType', "category");
    formData?.append('entityId', data?.entityId);
    formData?.append('title', data?.title);
    formData?.append('description', data?.description);
    formData?.append('canonical', data?.canonical);
    formData?.append('ogSitename', data?.ogSitename);
    formData?.append('ogTitle', data?.ogTitle);
    formData?.append('ogDescription', data?.ogDescription);
    formData?.append('ogURL', data?.ogURL);
    formData?.append('ogImageAlt', data?.ogImageAlt);
    formData?.append('ogImage', data?.ogImage[0]);

    return fetch(Url, {
        method: 'POST',
        body: formData,
        mode: 'cors',
        headers: {
            authorization: `Bearer ${token}`,
        },
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

export const getCategoryMetaData = async () => {

    const Url = SERVER_URL + 'admin/metadata/get-all-metadata?entityType=category';

    return fetch(Url, {
        method: 'GET',
        mode: 'cors',
        cache: 'no-store',
        headers: {
            authorization: `Bearer ${token}`,
        },
    })
        .then((response) => response?.json())
        .then((data) => {
            return data;
        })
        .catch((error) => {
            return error;
        });
};

export const addSubCategoryMetaData = async (data) => {

    const Url = SERVER_URL + 'admin/metadata/add-metadata';
    const formData = new FormData();

    formData?.append('entityType', "subcategory");
    formData?.append('entityId', data?.entityId);
    formData?.append('title', data?.title);
    formData?.append('description', data?.description);
    formData?.append('canonical', data?.canonical);
    formData?.append('ogSitename', data?.ogSitename);
    formData?.append('ogTitle', data?.ogTitle);
    formData?.append('ogDescription', data?.ogDescription);
    formData?.append('ogURL', data?.ogURL);
    formData?.append('ogImageAlt', data?.ogImageAlt);
    formData?.append('ogImage', data?.ogImage[0]);

    return fetch(Url, {
        method: 'POST',
        body: formData,
        mode: 'cors',
        headers: {
            authorization: `Bearer ${token}`,
        },

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

export const getSingleMetaData = async (id) => {


    const Url = SERVER_URL + `api/public/get-metadata/${id}`;

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

export const getSubCategoryMetaData = async () => {

    const Url = SERVER_URL + 'admin/metadata/get-all-metadata?entityType=subcategory';

    return fetch(Url, {
        method: 'GET',
        mode: 'cors',
        cache: 'no-store',
        headers: {
            authorization: `Bearer ${token}`,
        },
    })
        .then((response) => response?.json())
        .then((data) => {
            return data;
        })
        .catch((error) => {
            return error;
        });
};

export const addTourMetaData = async (data) => {

    const Url = SERVER_URL + 'admin/metadata/add-metadata';
    const formData = new FormData();

    formData?.append('entityType', "tour");
    formData?.append('entityId', data?.entityId);
    formData?.append('title', data?.title);
    formData?.append('description', data?.description);
    formData?.append('canonical', data?.canonical);
    formData?.append('ogSitename', data?.ogSitename);
    formData?.append('ogTitle', data?.ogTitle);
    formData?.append('ogDescription', data?.ogDescription);
    formData?.append('ogURL', data?.ogURL);
    formData?.append('ogImageAlt', data?.ogImageAlt);
    formData?.append('ogImage', data?.ogImage[0]);

    return fetch(Url, {
        method: 'POST',
        body: formData,
        mode: 'cors',
        headers: {
            authorization: `Bearer ${token}`,
        },
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

export const getTourMetaData = async () => {

    const Url = SERVER_URL + 'admin/metadata/get-all-metadata?entityType=tour';

    return fetch(Url, {
        method: 'GET',
        mode: 'cors',
        cache: 'no-store',
        headers: {
            authorization: `Bearer ${token}`,
        },
    })
        .then((response) => response?.json())
        .then((data) => {
            return data;
        })
        .catch((error) => {
            return error;
        });
};

export const deleteMetaData = async (id) => {

    const url = SERVER_URL + `admin/metadata/delete-metadata/${id}`;

    return fetch(url, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            authorization: `Bearer ${token}`,
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

export const updateMetaDataById = async (data, id) => {



    const Url = SERVER_URL + `admin/metadata/update-metadata/${id}`;
    const formData = new FormData();
    if (data?.ogImage?.length > 0) {
        formData?.append('ogImage', data?.ogImage[0]);
    }
    formData?.append('title', data?.title);
    formData?.append('description', data?.description);
    formData?.append('canonical', data?.canonical);
    formData?.append('ogSitename', data?.ogSitename);
    formData?.append('ogTitle', data?.ogTitle);
    formData?.append('ogDescription', data?.ogDescription);
    formData?.append('ogURL', data?.ogURL);
    formData?.append('ogImageAlt', data?.ogImageAlt);

    return fetch(Url, {
        method: 'PUT',
        body: formData,
        mode: 'cors',
        headers: {
            authorization: `Bearer ${token}`,
        },
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


export const addBlogMetaData = async (data) => {

    const Url = SERVER_URL + 'admin/metadata/add-metadata';
    const formData = new FormData();

    formData?.append('entityType', "blog");
    formData?.append('entityId', data?.entityId);
    formData?.append('title', data?.title);
    formData?.append('description', data?.description);
    formData?.append('canonical', data?.canonical);
    formData?.append('ogSitename', data?.ogSitename);
    formData?.append('ogTitle', data?.ogTitle);
    formData?.append('ogDescription', data?.ogDescription);
    formData?.append('ogURL', data?.ogURL);
    formData?.append('ogImageAlt', data?.ogImageAlt);
    formData?.append('ogImage', data?.ogImage[0]);

    return fetch(Url, {
        method: 'POST',
        body: formData,
        mode: 'cors',
        headers: {
            authorization: `Bearer ${token}`,
        },

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

export const getBlogMetaData = async () => {

    const Url = SERVER_URL + 'admin/metadata/get-all-metadata?entityType=blog';

    return fetch(Url, {
        method: 'GET',
        mode: 'cors',
        cache: 'no-store',
        headers: {
            authorization: `Bearer ${token}`,
        },
    })
        .then((response) => response?.json())
        .then((data) => {
            return data;
        })
        .catch((error) => {
            return error;
        });
};



// Reviews
export const writeReview = async (data, tourName) => {

    const Url = SERVER_URL + 'api/public/add-review';

    const jsonData = {
        tourId: data?.tourId,
        tourName: tourName,
        firstName: data?.firstName,
        lastName: data?.lastName,
        phone: data?.phoneNumber,
        email: data?.email,
        rating: data?.rating,
        reviewText: data?.review
    };

    return fetch(Url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(jsonData),
        mode: 'cors',
        cache: "no-store"
    })
        .then((response) => response?.json())
        .then((data) => {
            return data;
        })
        .catch((error) => {
            return error;
        });
};


export const DeleteReview = async (id) => {

    const url = SERVER_URL + `admin/review/delete-review/${id}`;

    return fetch(url, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            authorization: `Bearer ${token}`,
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


export const approveReview = async (id) => {

    const Url = SERVER_URL + `admin/review/update-review/${id}`;

    const jsonData = {
        status: "Approved"
    }

    return fetch(Url, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            authorization: `Bearer ${token}`,
        },
        body: JSON?.stringify(jsonData),
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

export const rejectReview = async (id) => {

    const Url = SERVER_URL + `admin/review/update-review/${id}`;

    const jsonData = {
        status: "Rejected"
    }

    return fetch(Url, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            authorization: `Bearer ${token}`,
        },
        body: JSON?.stringify(jsonData),
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


export const getPendingReviewsByStatus = async () => {

    const Url = SERVER_URL + 'admin/review/get-reviews-status?status=Pending';

    return fetch(Url, {
        method: 'GET',
        mode: 'cors',
        cache: 'no-store',
        headers: {
            authorization: `Bearer ${token}`,
        },

    })
        .then((response) => response?.json())
        .then((data) => {
            return data;
        })
        .catch((error) => {
            return error;
        });
};



export const getApprovedReviewsByStatus = async () => {

    const Url = SERVER_URL + 'admin/review/get-reviews-status?status=Approved';

    return fetch(Url, {
        method: 'GET',
        mode: 'cors',
        cache: 'no-store',
        headers: {
            authorization: `Bearer ${token}`,
        },
    })
        .then((response) => response?.json())
        .then((data) => {
            return data;
        })
        .catch((error) => {
            return error;
        });
};

export const getRejectedReviewsByStatus = async () => {

    const Url = SERVER_URL + 'admin/review/get-reviews-status?status=Rejected';

    return fetch(Url, {
        method: 'GET',
        mode: 'cors',
        cache: 'no-store',
        headers: {
            authorization: `Bearer ${token}`,
        },
    })
        .then((response) => response?.json())
        .then((data) => {
            return data;
        })
        .catch((error) => {
            return error;
        });
};


// Contact 
export const ContactMessage = async (data) => {

    const Url = SERVER_URL + 'api/public/send-message';

    const json = {
        name: data?.name,
        email: data?.email,
        message: data?.message,
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


export const GetContactMessage = async () => {

    const Url = SERVER_URL + 'admin/message/get-messages';

    return fetch(Url, {
        method: 'GET',
        mode: 'cors',
        cache: 'no-store',
        headers: {
            authorization: `Bearer ${token}`,
        },
    })
        .then((response) => response?.json())
        .then((data) => {
            return data;
        })
        .catch((error) => {
            return error;
        });
};


export const DeleteContactMessage = async (id) => {

    const url = SERVER_URL + `admin/message/delete-message/${id}`;

    return fetch(url, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            authorization: `Bearer ${token}`,
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


// subscribe
export const addSubscribe = async (data) => {

    const Url = SERVER_URL + "api/public/add-subscriber";

    const jsonData = {
        email: data?.email
    }

    return fetch(Url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            authorization: `Bearer ${token}`,
        },
        body: JSON?.stringify(jsonData),
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


export const getSubscribers = async () => {

    const Url = SERVER_URL + "admin/subscribe/get-subscribers";

    return fetch(Url, {
        method: 'GET',
        mode: 'cors',
        cache: 'no-store',
        headers: {
            authorization: `Bearer ${token}`,
        },
    })
        .then((response) => response?.json())
        .then((data) => {
            return data;
        })
        .catch((error) => {
            return error;
        });
};


export const DeleteSubscriber = async (id) => {

    const url = SERVER_URL + `admin/subscribe/delete-subscriber/${id}`;

    return fetch(url, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            authorization: `Bearer ${token}`,
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


// user 
export const addUser = async (data) => {

    const Url = SERVER_URL + "admin/user/add-user";

    const jsonData = {
        name: data?.name,
        email: data?.email,
        password: data?.password,
    }

    return fetch(Url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            authorization: `Bearer ${token}`,
        },
        body: JSON?.stringify(jsonData),
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

export const getUsers = async () => {

    const Url = SERVER_URL + "admin/user/get-users";

    return fetch(Url, {
        method: 'GET',
        mode: 'cors',
        cache: 'no-store',
        headers: {
            authorization: `Bearer ${token}`,
        },
    })
        .then((response) => response?.json())
        .then((data) => {
            return data;
        })
        .catch((error) => {
            return error;
        });
};

export const DeleteUser = async (id) => {

    const url = SERVER_URL + `admin/user/delete-user/${id}`;

    return fetch(url, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            authorization: `Bearer ${token}`,
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

export const userLogin = async (data) => {

    const Url = SERVER_URL + "api/public/admin-login";

    const jsonData = {
        email: data?.email,
        password: data?.password,
    }

    return fetch(Url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON?.stringify(jsonData),
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


// Blogs

export const getSingleBlog = async (slug) => {

    const Url = SERVER_URL + `api/public/get-single-blog/${slug}`;

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


export const addBlog = async (data) => {

    const Url = SERVER_URL + "admin/blog/add-blog";

    const formData = new FormData();

    formData.append('title', data?.title);
    formData.append('cardImage', data?.cardImage[0]);
    formData.append('mainImage', data?.mainImage[0]);
    formData.append('category', data?.category);
    formData.append('shortdesc', data?.shortDesc);
    formData.append('date', data?.date);
    formData.append('content', JSON.stringify(data.content));
    // let formData = data.content

    return fetch(Url, {
        method: 'POST',
        headers: {
            authorization: `Bearer ${token}`,
        },
        body: formData,
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


export const getBlogs = async () => {

    const Url = SERVER_URL + "api/public/get-blogs";

    return fetch(Url, {
        method: 'GET',
        mode: 'cors',
        cache: 'no-store',
    })
        .then((response) => response?.json())
        .then((data) => {
            return data;
        })
        .catch((error) => {
            return error;
        });
};

export const DeleteBlog = async (id) => {

    const url = SERVER_URL + `admin/blog/delete-blog/${id}`;

    return fetch(url, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            authorization: `Bearer ${token}`,
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