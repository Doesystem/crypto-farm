import '../globals.css'
import Content from "@/app/Layout/content";
import Navbar from "@/app/Layout/navbar";

export default function Layout({children}) {
    return (
        <>
            <Navbar/>
            <Content>{children}</Content>
        </>
    )
}
