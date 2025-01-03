"use client"
import React, { useMemo } from "react";
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, ScrollShadow, Pagination, Input } from "@nextui-org/react";
import ImageModal from "@/components/reuseable/ImageModal";
import { SearchIcon } from "lucide-react";
import { DeleteSubCategory } from "@/lib/siteApis";
import toast from "react-hot-toast";
import UpdateSubCategory from "./UpdateSubCategory";
import MobileImageModal from "@/components/reuseable/MobileImageModal";
import { Button } from "@/components/ui/button";


const columns = [
    { name: "BANNER MOBILE IMAGE", uid: "subCategoryMobHeroImage" },
    { name: "BANNER  IMAGE", uid: "subCategoryHeroImage" },
    { name: "CARD IMAGE", uid: "subCategoryImage" },
    { name: "SUBCATEGORY NAME", uid: "subCategoryName" },
    { name: "BANNER TITLE", uid: "subCategoryTitle" },
    { name: "BANNER TEXT", uid: "subCategoryText" },
    { name: "Actions", uid: "actions" },
];


function ViewSubCategories({ SubCategoryData }) {
    const sortedData = useMemo(() => {
        return [...SubCategoryData]?.sort((a, b) => {
            if (a?._id > b?._id) return -1;
            if (a?._id < b?._id) return 1;
            return 0;
        });
    }, [SubCategoryData]);


    const [data, setData] = React?.useState(sortedData || []);
    const [filterValue, setFilterValue] = React?.useState("");
    const [page, setPage] = React.useState(1);



    // Search bar
    const hasSearchFilter = Boolean(filterValue);
    const filteredItems = React?.useMemo(() => {
        let filteredUsers = [...data];
        if (hasSearchFilter) {
            filteredUsers = filteredUsers?.filter((data) =>
                data?.subCategoryName?.toLowerCase()?.includes(filterValue?.toLowerCase()),
            );
        }
        return filteredUsers;
    }, [data, filterValue, hasSearchFilter]);

    const onSearchChange = React.useCallback((value) => {
        if (value) {
            setFilterValue(value);
            setPage(1);
        } else {
            setFilterValue("");
        }
    }, [setFilterValue, setPage]);

    const onClear = React.useCallback(() => {
        setFilterValue("")
        setPage(1)
    }, [setFilterValue, setPage])

    const topContent = React.useMemo(() => {
        return (
            <Input
                isClearable
                removeWrapper
                classNames={{
                    input: 'dark:bg-darkModeSecondary',
                    inputWrapper: 'dark:bg-darkModeSecondary  group-data-[focus=true]:dark:bg-darkModeSecondary '
                }}
                className="w-full sm:max-w-[44%] mb-4 mt-4"
                placeholder="Search by name..."
                startContent={< SearchIcon size={20} className="dark:bg-darkModeSecondary" />}
                value={filterValue}
                onClear={() => onClear()}
                onValueChange={onSearchChange}
            />
        );
    }, [
        filterValue,
        onSearchChange,
        onClear,
    ]);


    // pagination
    const rowsPerPage = 4;
    const pages = Math?.ceil(filteredItems?.length / rowsPerPage);
    const items = React.useMemo(() => {
        const start = (page - 1) * rowsPerPage;
        const end = start + rowsPerPage;

        return filteredItems?.slice(start, end);
    }, [page, filteredItems]);


    const renderCell = React.useCallback((categoryData, columnKey) => {
        const cellValue = categoryData[columnKey];

        switch (columnKey) {
            case "subCategoryMobHeroImage":
                return (
                    <div className="cursor-pointer">
                        <MobileImageModal folder={"subCategory"} id={categoryData?.subCategoryMobHeroImage} />
                    </div>
                );
            case "subCategoryHeroImage":
                return (
                    <div className="cursor-pointer">
                        <ImageModal folder={"subCategory"} id={categoryData?.subCategoryHeroImage} />
                    </div>
                );
            case "subCategoryImage":
                return (
                    <div className="cursor-pointer">
                        <ImageModal folder={"subCategory"} id={categoryData?.subCategoryImage} />
                    </div>
                );
            case "actions":
                return (
                    <div className="relative flex flex-col items-start gap-2">
                        <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                            <UpdateSubCategory data={categoryData} setData={setData} id={categoryData?._id} />
                        </span>
                        <span className="text-lg text-danger cursor-pointer active:opacity-50">
                            <Button
                                className="w-32  text-white bg-blue hover:bg-darkBlue"
                                onClick={() => Delete(categoryData?._id)}
                            >
                                Delete
                            </Button>
                        </span>
                    </div>
                );
            default:
                return cellValue;
        }
    }, []);

    // Actions
    const Delete = React.useCallback(
        async (id) => {
            const res = await DeleteSubCategory(id);
            if (res?.status === "Success") {
                toast?.success(res?.message);
                setData((prev) => prev?.filter((data) => data?._id !== id));
            } else {
                toast?.error(res?.message);
            }
        },
        [setData]
    );




    return (
        <>
            <section className="mt-10 pb-4 h-full bg-white dark:bg-darkMode px-4 py-2  rounded-xl shadow-lg ">
                <ScrollShadow
                    offset={100}
                    orientation="vertical"
                    className="w-full relative h-full mt-2 ">

                    <Table
                        aria-label="Example table with dynamic content"
                        removeWrapper
                        topContent={topContent}
                        bottomContent={
                            data?.length > 4 && <div className="flex w-full justify-center mt-2">
                                <div className="flex w-full justify-center dark:bg-darkModeSecondary bg-[#f4f4f5] rounded-lg max-w-max">
                                    <Pagination
                                        isCompact
                                        key='light'
                                        variant='light'
                                        showControls
                                        showShadow
                                        page={page}
                                        total={pages}
                                        onChange={(page) => setPage(page)}
                                    />
                                </div>
                            </div>
                        }
                    >
                        <TableHeader>
                            {columns?.map((column) =>
                                <TableColumn
                                    className="dark:bg-darkModeSecondary text-center dark:text-white text-[15px]"
                                    key={column?.uid}>
                                    {column?.name}
                                </TableColumn>
                            )}
                        </TableHeader>
                        <TableBody items={items}>
                            {items?.map((row) =>
                                <TableRow key={row?._id}>
                                    {columns?.map((column) => (
                                        <TableCell
                                            key={column?.uid}
                                            className="border-b-1 border-gray dark:border-white pb-3 pt-5 text-base">
                                            {renderCell(row, column?.uid)}
                                        </TableCell>
                                    ))}
                                </TableRow>
                            )}
                        </TableBody>
                    </Table>
                </ScrollShadow>
            </section>
        </>
    )
}

export default ViewSubCategories;
