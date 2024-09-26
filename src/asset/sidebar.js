import { CiGrid41 } from "react-icons/ci";
import { MdTour } from "react-icons/md";
import { MdCategory } from "react-icons/md";
import { MdDiscount } from "react-icons/md";
import { MdOutlineReviews } from "react-icons/md";
import { FaBattleNet } from "react-icons/fa";
import { FaSellsy } from "react-icons/fa";
export const Menu = [
    { heading: 'Main Menu' },

    {
        Icon: CiGrid41,
        title: 'Categories',
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
        title: 'Subcategories',
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
        title: 'Discount Tours',
        subMenu: [
            {
                subTitle: 'Add Discount Tour',
                url: '/create-discount-tour'
            },
            {
                subTitle: 'View Discount Tours',
                url: '/view-discount-tours'
            },
        ]
    },

    {
        Icon: FaBattleNet,
        title: 'Popular Tours',
        subMenu: [
            {
                subTitle: 'Add Popular Tour',
                url: '/create-popular-tour'
            },
            {
                subTitle: 'View Popular Tours',
                url: '/view-popular-tour'
            },
        ]
    },

    {
        Icon: FaSellsy,
        title: 'Best Selling Tours',
        subMenu: [
            {
                subTitle: 'Add Best Selling Tour',
                url: '/create-selling-tour'
            },
            {
                subTitle: 'View Best Selling Tours',
                url: '/view-selling-tour'
            },
        ]
    },

    // {
    //     Icon: MdOutlineReviews,
    //     title: 'Reviews',
    //     subMenu: [
    //         {
    //             subTitle: 'Add Review',
    //             url: '/add-review'
    //         },
    //         {
    //             subTitle: 'View Reviews',
    //             url: '/view-reviews'
    //         },
    //     ]
    // },
]