// import { NextResponse } from "next/server";
// import { getToken } from "next-auth/jwt"; // or your JWT solution

// export async function middleware(req) {
//   const token = await getToken({ req });
//   const { pathname } = req.nextUrl;

//   // Unauthenticated users redirected to /signin
//   if (
//     pathname.startsWith("/seeker") ||
//     pathname.startsWith("/admin") ||
//     pathname.startsWith("/landlord")
//   ) {
//     if (!token) {
//       return NextResponse.redirect(new URL("/signin", req.url));
//     }
//   }

//   // Role-based access
//   if (pathname.startsWith("/admin") && token?.role !== "admin") {
//     return NextResponse.redirect(new URL("/signin", req.url));
//   }

//   if (pathname.startsWith("/landlord") && token?.role !== "landlord") {
//     return NextResponse.redirect(new URL("/signin", req.url));
//   }

//   return NextResponse.next();
// }





// import { NextResponse } from "next/server";
// import { getToken } from "next-auth/jwt"; // or your JWT solution

// export async function middleware(req) {
//   const token = await getToken({ req });
//   const { pathname } = req.nextUrl;

//   // Unauthenticated users redirected to /signin
//   if (
//     pathname.startsWith("/seeker") ||
//     pathname.startsWith("/admin") ||
//     pathname.startsWith("/landlord")
//   ) {
//     if (!token) {
//       return NextResponse.redirect(new URL("/signin", req.url));
//     }
//   }

//   // Role-based access control
//   if (pathname.startsWith("/admin") && token?.role !== "admin") {
//     return NextResponse.redirect(new URL("/signin", req.url));
//   }

//   if (pathname.startsWith("/landlord") && token?.role !== "landlord") {
//     return NextResponse.redirect(new URL("/signin", req.url));
//   }

//   return NextResponse.next();
// }

// // ✅ Ensure middleware applies to sub-routes
// export const config = {
//   matcher: [
//     "/seeker/:path*",
//     "/admin/:path*",
//     "/landlord/:path*",
//   ],
// };






// import { NextResponse } from "next/server";
// import jwt from "jsonwebtoken";

// export async function middleware(req) {
//   const token = req.cookies.get("token")?.value;
//   const { pathname } = req.nextUrl;

//   if (
//     pathname.startsWith("/seeker") ||
//     pathname.startsWith("/admin") ||
//     pathname.startsWith("/landlord")
//   ) {
//     if (!token) {
//       return NextResponse.redirect(new URL("/signin", req.url));
//     }

//     try {
//       const decoded = jwt.verify(token, process.env.JWT_SECRET);

//       if (pathname.startsWith("/admin") && decoded.role !== "admin") {
//         return NextResponse.redirect(new URL("/signin", req.url));
//       }

//       if (pathname.startsWith("/landlord") && decoded.role !== "landlord") {
//         return NextResponse.redirect(new URL("/signin", req.url));
//       }

//     } catch (err) {
//       return NextResponse.redirect(new URL("/signin", req.url));
//     }
//   }

//   return NextResponse.next();
// }

// export const config = {
//   matcher: [
//     "/seeker/:path*",
//     "/admin/:path*",
//     "/landlord/:path*",
//   ],
// };



import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";

export async function middleware(req) {
  const token = req.cookies.get("token")?.value;
  const { pathname } = req.nextUrl;

  if (
    pathname.startsWith("/seeker") ||
    pathname.startsWith("/admin") ||
    pathname.startsWith("/landlord")
  ) {
    if (!token) {
      return NextResponse.redirect(new URL("/signin", req.url));
    }

    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      if (pathname.startsWith("/admin") && decoded.role !== "admin") {
        return NextResponse.redirect(new URL("/signin", req.url));
      }

      if (pathname.startsWith("/landlord") && decoded.role !== "landlord") {
        return NextResponse.redirect(new URL("/signin", req.url));
      }
        if (pathname.startsWith("/seeker") && decoded.role !== "seeker") {
        return NextResponse.redirect(new URL("/signin", req.url));
      }

    } catch (err) {
      return NextResponse.redirect(new URL("/signin", req.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/seeker/:path*",
    "/admin/:path*",
    "/landlord/:path*",
  ],
};
