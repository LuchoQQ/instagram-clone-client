import { Button, Flex, Image, Input, Text, useToast } from "@chakra-ui/react";
import { useFormik } from "formik";

import { signIn } from "next-auth/react";
import { useRouter } from "next/router";
import SmartphoneView from "../SmartphoneView";
import FormLogin from "../FormLogin";

const LoginRegister: React.FC = () => {
    const toast = useToast();
    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
        },
        onSubmit: async (values) => {
            const res = await signIn("credentials", {
                email: values.email,
                password: values.password,
                redirect: false,
            });

            if (res?.ok) {
                router.push("/");
            } else {
                toast({
                    title: "Bad Credentials",
                    status: "error",
                    duration: 3000,
                    isClosable: false,
                });
            }
        },
    });
    const router = useRouter();
    return (
        <>
            <Flex
                w="100vw"
                h="100vh"
                justifyContent="center"
                alignItems="center"
                gap="1rem"
            >
                {/* <SmartphoneView /> */}
                <Flex w="20rem" h="30rem" flexDir="column" gap="1rem">
                    <FormLogin />
                    <Flex
                        w="100%"
                        h="100%"
                        alignItems="center"
                        justifyContent="center"
                        border="1px solid #dedede"
                    >
                        <Text textAlign="center" fontSize="sm">
                            ¿No tienes una cuenta?{" "}
                        </Text>
                        <Text
                            fontWeight="600"
                            color="blue.900"
                            cursor="pointer"
                            onClick={() => {
                                router.push("/register");
                            }}
                        >
                            Registrarse.
                        </Text>
                    </Flex>
                </Flex>
            </Flex>
        </>
    );
};

export default LoginRegister;
