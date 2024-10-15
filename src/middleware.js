import { NextResponse } from 'next/server'
export function middleware(request) {

    const isLogin = request.cookies.get("isLogin")?.value;

    if (request.nextUrl.pathname.startsWith('/create-category') && isLogin !== 'true') {
        return NextResponse.redirect(new URL('/sign-in', request.url));
    }

    if (request.nextUrl.pathname.startsWith('/view-categories') && isLogin !== 'true') {
        return NextResponse.redirect(new URL('/sign-in', request.url));
    }

    if (request.nextUrl.pathname.startsWith('/create-subcategory') && isLogin !== 'true') {
        return NextResponse.redirect(new URL('/sign-in', request.url));
    }

    if (request.nextUrl.pathname.startsWith('/view-subcategory') && isLogin !== 'true') {
        return NextResponse.redirect(new URL('/sign-in', request.url));
    }

    if (request.nextUrl.pathname.startsWith('/add-tour') && isLogin !== 'true') {
        return NextResponse.redirect(new URL('/sign-in', request.url));
    }

    if (request.nextUrl.pathname.startsWith('/view-tours') && isLogin !== 'true') {
        return NextResponse.redirect(new URL('/sign-in', request.url));
    }

    if (request.nextUrl.pathname.startsWith('/view-discount-tours') && isLogin !== 'true') {
        return NextResponse.redirect(new URL('/sign-in', request.url));
    }

    if (request.nextUrl.pathname.startsWith('/create-popular-tour') && isLogin !== 'true') {
        return NextResponse.redirect(new URL('/sign-in', request.url));
    }

    if (request.nextUrl.pathname.startsWith('/view-popular-tour') && isLogin !== 'true') {
        return NextResponse.redirect(new URL('/sign-in', request.url));
    }

    if (request.nextUrl.pathname.startsWith('/create-selling-tour') && isLogin !== 'true') {
        return NextResponse.redirect(new URL('/sign-in', request.url));
    }

    if (request.nextUrl.pathname.startsWith('/view-selling-tour') && isLogin !== 'true') {
        return NextResponse.redirect(new URL('/sign-in', request.url));
    }

    if (request.nextUrl.pathname.startsWith('/view-pending-tours') && isLogin !== 'true') {
        return NextResponse.redirect(new URL('/sign-in', request.url));
    }

    if (request.nextUrl.pathname.startsWith('/view-confirmed-tours') && isLogin !== 'true') {
        return NextResponse.redirect(new URL('/sign-in', request.url));
    }

    if (request.nextUrl.pathname.startsWith('/view-cancelled-tours') && isLogin !== 'true') {
        return NextResponse.redirect(new URL('/sign-in', request.url));
    }

    if (request.nextUrl.pathname.startsWith('/create-category-metadata') && isLogin !== 'true') {
        return NextResponse.redirect(new URL('/sign-in', request.url));
    }

    if (request.nextUrl.pathname.startsWith('/view-category-metaData') && isLogin !== 'true') {
        return NextResponse.redirect(new URL('/sign-in', request.url));
    }

    if (request.nextUrl.pathname.startsWith('/create-subcategory-metadata') && isLogin !== 'true') {
        return NextResponse.redirect(new URL('/sign-in', request.url));
    }

    if (request.nextUrl.pathname.startsWith('/view-subcategory-metaData') && isLogin !== 'true') {
        return NextResponse.redirect(new URL('/sign-in', request.url));
    }

    if (request.nextUrl.pathname.startsWith('/create-tour-metadata') && isLogin !== 'true') {
        return NextResponse.redirect(new URL('/sign-in', request.url));
    }

    if (request.nextUrl.pathname.startsWith('/view-tour-metadata') && isLogin !== 'true') {
        return NextResponse.redirect(new URL('/sign-in', request.url));
    }

    if (request.nextUrl.pathname.startsWith('/view-pending-reviews') && isLogin !== 'true') {
        return NextResponse.redirect(new URL('/sign-in', request.url));
    }

    if (request.nextUrl.pathname.startsWith('/view-approved-reviews') && isLogin !== 'true') {
        return NextResponse.redirect(new URL('/sign-in', request.url));
    }

    if (request.nextUrl.pathname.startsWith('/view-rejected-reviews') && isLogin !== 'true') {
        return NextResponse.redirect(new URL('/sign-in', request.url));
    }

    if (request.nextUrl.pathname.startsWith('/view-contacts') && isLogin !== 'true') {
        return NextResponse.redirect(new URL('/sign-in', request.url));
    }

    if (request.nextUrl.pathname.startsWith('/view-subscribers') && isLogin !== 'true') {
        return NextResponse.redirect(new URL('/sign-in', request.url));
    }

    if (request.nextUrl.pathname.startsWith('/add-user') && isLogin !== 'true') {
        return NextResponse.redirect(new URL('/sign-in', request.url));
    }

    if (request.nextUrl.pathname.startsWith('/view-user') && isLogin !== 'true') {
        return NextResponse.redirect(new URL('/sign-in', request.url));
    }

}