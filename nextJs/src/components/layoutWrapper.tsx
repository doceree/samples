import TopBar from "./topbar"
import Footer from "./footer";
import { Sidebar } from "primereact/sidebar";
import { useState } from "react";
import { scriptTag_160X600, scriptTag_160X600_DOCId } from '@/constants/constant';
import Tag from './tag';
import { Dialog } from 'primereact/dialog';

interface Props {
    children: React.ReactNode
}
export default function LayoutWrapper({ children }: Props) {
    const [sideBar, setSideBar] = useState(false);
    return (
        <>
            <TopBar setSideBar={setSideBar} />
                <div className={`sidebar ${sideBar?'open':''}`}>
                            <h3>Sample Ad</h3>
                            <div style={{minWidth:'160px',minHeight:'600px'}}>
                                <Tag docId={scriptTag_160X600_DOCId} script={scriptTag_160X600} />
                            </div>
                    </div>
                <div className={`overlay_cs ${sideBar?'open':''}`} onClick={()=>{setSideBar(!sideBar)}}></div>
            <main>{children}</main>
            <Footer />
        </>
    )
}