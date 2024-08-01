import { NextResponse } from 'next/server'
 
// This function can be marked `async` if using `await` inside
export async function middleware(request) {
    const refreshToken = request.cookies.get('refreshToken')
    const isToken = request.cookies.get('isAuthToken')

    const origin = request.nextUrl.origin
    const fullPrevURL = request.headers.get('referer')
    const prevURLPath = fullPrevURL?.replace(origin, "")
    const url = "https://rrucc6gtnvp7ldakroqqedhcae0hguqh.lambda-url.ap-south-1.on.aws/devstag/v1/api/user/auth/route-protector"
    const url2 = "http://[::1]:3300/devstag/v1/api/user/auth/route-protector"
    
    

    if(!isToken || isToken.value !== "true"){
        if(fullPrevURL === `${origin}/` || fullPrevURL === null || request.url === fullPrevURL){
            return NextResponse.redirect(new URL('/', request.url))
        }
        return NextResponse.redirect(new URL(prevURLPath, request.url))
    }
    
    if(!refreshToken || !refreshToken.value){
        if(fullPrevURL === `${origin}/` || fullPrevURL === null || request.url === fullPrevURL){
            return NextResponse.redirect(new URL('/', request.url))
        }
        return NextResponse.redirect(new URL(prevURLPath, request.url))
    }

    let data

    try {
        data = await fetch(url, {
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json',
                'referer': 'https://www.beyondoceans.in/'
            },
            body: JSON.stringify({cookie: refreshToken}) 
          });

    } catch (error) {
        if(fullPrevURL === `${origin}/` || fullPrevURL === null || request.url === fullPrevURL){
            return NextResponse.redirect(new URL('/', request.url))
        }
        return NextResponse.redirect(new URL(prevURLPath, request.url))
    }

    const isAuth = await data.json()

    //   if(!true){ change true to isAuth

    if(!isAuth){
        if(fullPrevURL === `${origin}/` || fullPrevURL === null || request.url === fullPrevURL){
            return NextResponse.redirect(new URL('/', request.url))
        }
        return NextResponse.redirect(new URL(prevURLPath, request.url))
    }

}
 
// See "Matching Paths" below to learn more
export const config = {
    matcher: ['/user/profile'],
}