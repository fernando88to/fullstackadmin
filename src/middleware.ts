import {NextFetchEvent, NextRequest, NextResponse} from 'next/server'
import { unstable_getServerSession } from "next-auth/next"
import { authOptions } from "./pages/api/auth/[...nextauth]";
import {getSession, GetSessionParams, useSession} from "next-auth/react";
import {getToken} from "next-auth/jwt";
import {getSsoSessionData} from "@aws-sdk/shared-ini-file-loader/dist-types/getSsoSessionData";
//somente para as paginas /dashboard/*
export const config = {
    matcher: '/dashboard/:function*',
}
export default async function middleware(request: NextRequest,response: NextResponse ,event: NextFetchEvent) {
    const requestForNextAuth = {
        headers: {
            cookie: request.headers.get('cookie'),
        },
    };
    const params = { req: requestForNextAuth } as GetSessionParams ;
    const session = await getSession(params);

    if (!session) {
        const url = request.nextUrl.clone();
        url.pathname = '/login';
        return NextResponse.rewrite(url);
    }
    // const { data } = useSession();
    // const session = await unstable_getServerSession(request, response, authOptions);
    // const session = await unstable_getServerSession(authOptions);
  // console.log(session?.user);


/*    console.log(pathname);
    if (pathname === '/dashboard/segmentos') {
        const url = request.nextUrl.clone();
        url.pathname = '/login';
        return NextResponse.rewrite(url);
    }*/
    return NextResponse.next();

}