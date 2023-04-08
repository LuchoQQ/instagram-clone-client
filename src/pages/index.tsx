import { getServerSession } from "next-auth";
import { signOut } from "next-auth/react";
import { authOptions } from "./api/auth/[...nextauth]";
import LoginRegister from "@/components/views/LoginRegister";
import { Button } from "@chakra-ui/react";
import MainContainer from "@/components/views/MainContainer";
import React, { useEffect, useState } from "react";
import axios from "axios";
export default function Home(props: any) {
    const [user, setUser] = useState(props.session);
    console.log(props.session)

    return (
        <>
            
            <MainContainer session={props.session} />
        </>
    );
}

export async function getServerSideProps(context: any) {
    const session = await getServerSession(
        context.req,
        context.res,
        authOptions
    );

    if (session === null) {
        return {
            redirect: {
                destination: "/sign",
                permanent: false,
            },
        };
    }

    return {
        props: {
            session,
        },
    };
}
