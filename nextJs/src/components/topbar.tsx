"use client"
import { Dispatch, SetStateAction, useRef, useState } from 'react';
import styles from './topbar.module.css';
import { Button } from 'primereact/button';
import { useDocereeLogin, useDocereeLogout } from '@/hooks/docereeHooks';
import { Toast } from 'primereact/toast';
import Image from 'next/image';
const TopBar = ({ setSideBar }: { setSideBar: Dispatch<SetStateAction<boolean>> }) => {
    const [showHideButtons,setShowHideButtons] = useState(false);
    const toast:any = useRef(null);
    const showInfo = (msg:string) => {
        toast.current.show({severity:'info', summary: 'Info Message', detail:msg, life: 3000});
    }

    const LogIn = ()=>{
        // US user details -
        // docereeLogIn({
        //   hashedNPI: '126b68f7863008f0d19a387284a5d9df5518343ae3903b4a4a0a4773fe75e309',
        //   hashedEmail: '7000e00356101e5b6294bd47de3f903005b619e5e4b66f0f4b5971e86b67cc42',
        // })
        useDocereeLogin({
            firstName: "Akhileshcomp",
            lastName: "Guptacomp",
            specialization: "Pediatrics",
            gender: "Male",
            email: "guptacomp@gmail.com",
            city: "gurugram",
            zipCode: "122001",
        },
        ()=>{setShowHideButtons(true);showInfo('_docereeContext Cookie is set')});
    }
    const LogOut = ()=>{
        useDocereeLogout(()=>{setShowHideButtons(false);showInfo('_docereeContext Cookie removed')});
    }

    return <div className={styles.topbar}>
        <Toast ref={toast} />
        {!showHideButtons && <Button icon='pi pi-user' onClick={() => {LogIn();}} style={{ 'fontSize': '16px' }} className={styles.customPrimeSignupButton} label='Sign in' />}
        {showHideButtons && <Button icon='pi pi-user' onClick={() => {LogOut();}} style={{ 'fontSize': '16px' }} className={styles.customPrimeSignupButton} label='Logout' />}
            <img style={{ marginLeft: 'auto', marginRight: 'auto' }} src={'next.svg'} alt="Sample App" width={150} />
        <Button onClick={() => setSideBar(true)} icon="pi pi-bars" style={{ 'fontSize': '2em' }} className={styles.customPrimeButton} />
    </div>;
}

export default TopBar