"use client"
import React, { useMemo } from "react";
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, ScrollShadow, Pagination, Input, Chip } from "@nextui-org/react";
import { SearchIcon } from "lucide-react";
import { DeleteReview, rejectReview } from "@/lib/siteApis";
import toast from "react-hot-toast";
import { Button } from "@/components/ui/button";


const columns = [
    { name: "TOUR NAME", uid: "tourName" },
    { name: "EMAIL", uid: "email" },
    { name: "FIRST NAME", uid: "firstName" },
    { name: "LAST NAME", uid: "lastName" },
    { name: "PHONE", uid: "phone" },
    { name: "RATING", uid: "rating" },
    { name: "DATE", uid: "reviewDate" },
    { name: "REVIEW", uid: "reviewText" },
    { name: "STATUS", uid: "status" },
    { name: "ACTIONS", uid: "actions" },
];


function ViewApprovedReviews({ reviewData }) {

    const sortedData = useMemo(() => {
        return [...reviewData]?.sort((a, b) => {
            if (a?._id > b?._id) return -1;
            if (a?._id < b?._id) return 1;
            return 0;
        });
    }, [reviewData]);


    const [data, setData] = React?.useState(sortedData || []);

    const [filterValue, setFilterValue] = React?.useState("");
    const [page, setPage] = React.useState(1);

    // Search bar
    const hasSearchFilter = Boolean(filterValue);
    const filteredItems = React?.useMemo(() => {
        let filteredUsers = [...data];
        if (hasSearchFilter) {
            filteredUsers = filteredUsers?.filter((data) =>
                data?.firstName?.toLowerCase()?.includes(filterValue?.toLowerCase()),
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


    const renderCell = React.useCallback((reviewData, columnKey) => {
        const cellValue = reviewData[columnKey];
        const date = reviewData?.reviewDate;
        const dateOnly = date?.split("T")[0];
        switch (columnKey) {
            case "reviewDate":
                return (
                    <div className="whitespace-nowrap">
                        {dateOnly}
                    </div>
                );
            case "status":
                return (
                    <div className="whitespace-nowrap">
                        <Chip className="capitalize" color={'success'} size="sm" variant="flat">
                            {reviewData?.status}
                        </Chip>
                    </div>
                );
            case "actions":
                return (
                    <div className="relative flex flex-col  items-start gap-2">
                        <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                            <Button
                                className="w-32  text-white bg-blue hover:bg-darkBlue"
                                onClick={() => Reject(reviewData?._id)}
                            >
                                Reject
                            </Button>
                        </span>
                        <span className="text-lg text-danger cursor-pointer active:opacity-50">
                            <Button
                                className="w-32  text-white bg-blue hover:bg-darkBlue"
                                onClick={() => Delete(reviewData?._id)}
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
            const res = await DeleteReview(id);

            if (res?.status === "Success") {
                toast?.success(res?.message);
                setData((prev) => prev?.filter((data) => data?._id !== id));
            } else {
                toast?.error(res?.message);
            }
        },
        [setData]
    );


    const Reject = React.useCallback(
        async (id) => {
            const res = await rejectReview(id);
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
    )
}

export default ViewApprovedReviews;
