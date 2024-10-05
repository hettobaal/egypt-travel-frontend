"use client"
import React, { useMemo, useState } from "react";
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, ScrollShadow, Pagination, Input, Chip } from "@nextui-org/react";
import ImageModal from "@/components/reuseable/ImageModal";
import { Loader2, SearchIcon } from "lucide-react";
import { approveBooking, cancelBooking, deleteBooking, DeleteTour } from "@/lib/siteApis";
import toast from "react-hot-toast";
import Link from "next/link";
import { Button } from "@/components/ui/button";


const columns = [
    { name: "TOUR NAME", uid: "tourName" },
    { name: "NAME", uid: "name" },
    { name: "PHONE NUMBER", uid: "phoneNumber" },
    { name: "EMAIL", uid: "email" },
    { name: "LANGUAGE", uid: "language" },
    { name: "BOOKING DATE", uid: "bookingDate" },
    { name: "DATE", uid: "date" },
    { name: "PARTICIPANTS", uid: "participant" },
    { name: "STATUS", uid: "status" },
    { name: "ADULT PRICE", uid: "totalAdultPrice" },
    { name: "DISCOUNTED ADULT PRICE", uid: "discountAdultPrice" },
    { name: "CHILDREN PRICE", uid: "totalChildrenPrice" },
    { name: "DISCOUNTED CHILDREN PRICE", uid: "discountChildPrice" },
    { name: "INFANT PRICE", uid: "totalInfantPrice" },
    { name: "DISCOUNTED AMOUNT", uid: "discountAmount" },
    { name: "FINAL PRICE", uid: "totalPrice" },
    { name: "FINAL PRICE AFTER DISCOUNT", uid: "totalPriceAfterDiscount" },
    { name: "ACTIONS", uid: "actions" },
];


function ViewPending({ TourData }) {
  
    const sortedData = useMemo(() => {
        return [...TourData]?.sort((a, b) => {
            if (a?._id > b?._id) return -1;
            if (a?._id < b?._id) return 1;
            return 0;
        });
    }, [TourData]);


    const [data, setData] = React?.useState(sortedData || []);
    const [confirmLoader, setConfirmLoader] = useState(false);
    const [cancelLoader, setCancelLoader] = useState(false);
    const [deleteLoader, setDeleteLoader] = useState(false);

    const [filterValue, setFilterValue] = React?.useState("");
    const [page, setPage] = React.useState(1);

    // Search bar
    const hasSearchFilter = Boolean(filterValue);
    const filteredItems = React?.useMemo(() => {
        let filteredUsers = [...data];
        if (hasSearchFilter) {
            filteredUsers = filteredUsers?.filter((data) =>
                data?.name?.toLowerCase()?.includes(filterValue?.toLowerCase()),
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

    const renderCell = React.useCallback((TourData, columnKey) => {

        const cellValue = TourData[columnKey];
        const date = TourData?.date;
        const dateOnly = date?.split("T")[0];

        const bookingDate = TourData?.bookingDate;
        const bookingDateOnly = bookingDate?.split("T")[0];


        // participants
        const adultCount = TourData?.participants?.adults
        const childCount = TourData?.participants?.children
        const infantCount = TourData?.participants?.infant

        switch (columnKey) {
            case "bookingDate":
                return (
                    <div className="whitespace-nowrap">
                        {bookingDateOnly}
                    </div>
                );
            case "date":
                return (
                    <div className="whitespace-nowrap">
                        {dateOnly}
                    </div>
                );
            case "status":
                return (
                    <div className="whitespace-nowrap">
                        <Chip className="capitalize" color={'warning'} size="sm" variant="flat">
                            {TourData?.status}
                        </Chip>
                    </div>
                );
            case "participant":
                return (
                    <div className="flex flex-col gap-y-2 whitespace-nowrap">
                        <p>
                            Adult x {adultCount}
                        </p>
                        <p>
                            Child x {childCount}
                        </p>
                        <p>
                            Adult x {infantCount}
                        </p>
                    </div>
                );
            case "actions":
                return (
                    <div className="relative flex flex-col items-start gap-2">
                        <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                            <Button
                                onClick={() => approved(TourData?._id)}
                                className="w-32  text-white bg-blue hover:bg-darkBlue"
                            >
                                {confirmLoader ? <Loader2 className="h-4 w-4 animate-spin" /> : 'Confirm'}

                            </Button>
                        </span>
                        <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                            <Button
                                onClick={() => cancel(TourData?._id)}
                                className="w-32  text-white bg-blue hover:bg-darkBlue"
                            >
                                {cancelLoader ? <Loader2 className="h-4 w-4 animate-spin" /> : 'Cancel'}
                            </Button>
                        </span>

                        <span className="text-lg text-danger cursor-pointer active:opacity-50">
                            <Button
                                onClick={() => Delete(TourData?._id)}
                                className="w-32  text-white bg-blue hover:bg-darkBlue"
                            >
                                {deleteLoader ? <Loader2 className="h-4 w-4 animate-spin" /> : 'Delete'}
                            </Button>
                        </span>
                    </div>
                );
            default:
                return cellValue;
        }
    }, []);



    // approved
    const approved = React.useCallback(
        async (id) => {
            setConfirmLoader(true)
            const res = await approveBooking(id);
            if (res?.status === "Success") {
                setConfirmLoader(false)
                toast?.success(res?.message);
                setData((prev) => prev?.filter((data) => data?._id !== id));
            } else {
                toast?.error(res?.message);
                setConfirmLoader(false)
            }
        },
        [setData]
    );

    // cancel
    const cancel = React.useCallback(
        async (id) => {
            setCancelLoader(true)
            const res = await cancelBooking(id);
            if (res?.status === "Success") {
                setCancelLoader(false)
                toast?.success(res?.message);
                setData((prev) => prev?.filter((data) => data?._id !== id));
            } else {
                toast?.error(res?.message);
                setCancelLoader(false)
            }
        },
        [setData]
    );

    // Delete
    const Delete = React.useCallback(
        async (id) => {
            setDeleteLoader(true)
            const res = await deleteBooking(id);
            if (res?.status === "Success") {
                setDeleteLoader(false)
                toast?.success(res?.message);
                setData((prev) => prev?.filter((data) => data?._id !== id));
            } else {
                toast?.error(res?.message);
                setDeleteLoader(false)
            }
        },
        [setData]
    );



    return (
        <section className="mt-10 pb-4 h-full bg-white dark:bg-darkMode px-4 py-2  rounded-xl shadow-lg ">
            <ScrollShadow
                hideScrollBar
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

export default ViewPending;
