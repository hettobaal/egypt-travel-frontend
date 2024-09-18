import { CiGrid41 } from "react-icons/ci";
import { MdTour } from "react-icons/md";
import { MdCategory } from "react-icons/md";
import { MdDiscount } from "react-icons/md";
import { MdOutlineReviews } from "react-icons/md";
export const Menu = [
    { heading: 'Main Menu' },
    {
        Icon: CiGrid41,
        title: 'Category',
        subMenu: [
            {
                subTitle: 'Create Category',
                url: '/create-category'
            },
            {
                subTitle: 'View Categories',
                url: '/view-categories'
            },
        ]
    },
    {
        Icon: MdCategory,
        title: 'Sub Category',
        subMenu: [
            {
                subTitle: 'Create SubCategory',
                url: '/create-subcategory'
            },
            {
                subTitle: 'View SubCategory',
                url: '/view-subcategory'
            },
        ]
    },

    {
        Icon: MdTour,
        title: 'Tours',
        subMenu: [
            {
                subTitle: 'Add Tour',
                url: '/add-tour'
            },
            {
                subTitle: 'View Tours',
                url: '/view-tours'
            },
        ]
    },

    {
        Icon: MdDiscount,
        title: 'Discounted Tour',
        subMenu: [
            {
                subTitle: 'Create Discounted Tour',
                url: 'create-discounted-tour'
            },
            {
                subTitle: 'View Discounted Tour',
                url: 'view-discounted-tour'
            },
        ]
    },
    {
        Icon: MdOutlineReviews,
        title: 'Reviews',
        subMenu: [
            {
                subTitle: 'Add Review',
                url: '/add-review'
            },
            {
                subTitle: 'View Reviews',
                url: 'view-reviews'
            },
        ]
    },
]