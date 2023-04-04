import { getServerSession } from "next-auth";
import { signOut } from "next-auth/react";
import { authOptions } from "./api/auth/[...nextauth]";
import LoginRegister from "@/components/views/LoginRegister";
import { Button } from "@chakra-ui/react";

export default function Home(props: any) {
    return (
        <>
            <Button
                onClick={() => {
                    signOut();
                }}
            ></Button>
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
