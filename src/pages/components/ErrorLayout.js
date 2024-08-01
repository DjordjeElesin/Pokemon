import Navbar from "./Navbar"
export default function ErrorLayout({children}){
    return (
        <>
            <Navbar/>
            <main>{children}</main>
        </>
    )
}