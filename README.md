# Next js protected route

## First

Create a file name ProtectedRoute

## Second

Copy paste the code inside ProtectedRoute

`"use client";`

`import { useRouter } from "next/navigation";`
<br>
`import { useAuthState } from "react-firebase-hooks/auth";`
<br>
`import auth from "@/firebase.init";`
<br>
`import Loading from "../UI/Loading";`

`const ProtectedRoute = ({ children }: any) => {`
<br>
`const router = useRouter();`
<br>
`const [user, loading] = useAuthState(auth);`
<br>
`if (loading) {`
<br>
`return <Loading />;`
<br>
`}`

`if (!user) {`
<br>
`// Redirect to the signin page`
<br>
`router.push("/");`
<br>
`return null; // Return null temporarily or Loading component while redirecting`
<br>
`}`
<br>
<br>
`return children;`
<br>
`};`

`export default ProtectedRoute;`

## Third

Wrap the ProtectedRoute component ( Example:
`<ProtectedRoute>
    <Home />
</ProtectedRoute>`
)
around the route you want to protect
