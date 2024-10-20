import { CiGrid41 } from "react-icons/ci";
import { MdTour } from "react-icons/md";
import { MdCategory } from "react-icons/md";
import { MdDiscount } from "react-icons/md";
import { MdOutlineReviews } from "react-icons/md";
import { TbBrandBooking } from "react-icons/tb";
import { FaBattleNet } from "react-icons/fa";
import { FaSellsy } from "react-icons/fa";
import { FaMeta } from "react-icons/fa6";
import { IoMdContact } from "react-icons/io";
import { MdUnsubscribe } from "react-icons/md";
import { FaUser } from "react-icons/fa";
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
        title: 'Discounted Tours',
        subMenu: [
            {
                subTitle: 'View Discounted Tours',
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

    {
        Icon: TbBrandBooking,
        title: 'Tours Booking',
        subMenu: [
            {
                subTitle: 'Pending Booking',
                url: '/view-pending-tours'
            },
            {
                subTitle: 'Confirmed Booking',
                url: '/view-confirmed-tours'
            },
            {
                subTitle: 'Canceled Booking',
                url: '/view-cancelled-tours'
            },
        ]
    },

    {
        Icon: FaMeta,
        title: 'Meta Data',
        subMenu: [
            {
                subTitle: 'Create Category MetaData',
                url: '/create-category-metadata'
            },
            {
                subTitle: 'View Category MetaData',
                url: '/view-category-metaData'
            },
            {
                subTitle: 'Create SubCategory MetaData',
                url: '/create-subcategory-metadata'
            },
            {
                subTitle: 'View SubCategory MetaData',
                url: '/view-subcategory-metaData'
            },

            {
                subTitle: 'Create Tour MetaData',
                url: '/create-tour-metadata'
            },
            {
                subTitle: 'View Tour MetaData',
                url: '/view-tour-metadata'
            },

            {
                subTitle: 'Create Blog MetaData',
                url: '/create-blog-metadata'
            },
            {
                subTitle: 'View Blog MetaData',
                url: '/view-blog-metadata'
            },
        ]
    },

    {
        Icon: MdOutlineReviews,
        title: 'Reviews',
        subMenu: [
            {
                subTitle: 'Pending Reviews',
                url: '/view-pending-reviews'
            },
            {
                subTitle: 'Approved Reviews',
                url: '/view-approved-reviews'
            },
            {
                subTitle: 'Rejected Reviews',
                url: '/view-rejected-reviews'
            },
        ]
    },


    {
        Icon: IoMdContact,
        title: 'Blogs',
        subMenu: [
            {
                subTitle: 'Create Blogs',
                url: '/create-blog'
            },
            {
                subTitle: 'View Blogs',
                url: '/view-blogs'
            },
        ]
    },


    {
        Icon: IoMdContact,
        title: 'Contacts',
        subMenu: [
            {
                subTitle: 'View Contacts',
                url: '/view-contacts'
            },
        ]
    },

    {
        Icon: MdUnsubscribe,
        title: 'Subscribers',
        subMenu: [
            {
                subTitle: 'View Subscribers',
                url: '/view-subscribers'
            },
        ]
    },

    {
        Icon: FaUser,
        title: 'Users',
        subMenu: [
            {
                subTitle: 'Add User',
                url: '/add-user'
            },
            {
                subTitle: 'View User',
                url: '/view-user'
            },
        ]
    },
]