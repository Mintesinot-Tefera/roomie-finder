import { NextResponse } from "next/server";
import { getToken } from "next-auth/jwt"; // or your JWT solution

export async function middleware(req) {
  const token = await getToken({ req });
  const { pathname } = req.nextUrl;

  // Unauthenticated users redirected to /signin
  if (
    pathname.startsWith("/seeker") ||
    pathname.startsWith("/admin") ||
    pathname.startsWith("/landlord")
  ) {
    if (!token) {
      return NextResponse.redirect(new URL("/signin", req.url));
    }
  }

  // Role-based access
  if (pathname.startsWith("/admin") && token?.role !== "admin") {
    return NextResponse.redirect(new URL("/signin", req.url));
  }

  if (pathname.startsWith("/landlord") && token?.role !== "landlord") {
    return NextResponse.redirect(new URL("/signin", req.url));
  }

  return NextResponse.next();
}
