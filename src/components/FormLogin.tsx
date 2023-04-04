import React from "react";
import { Button, Flex, Input, Text, useToast,  } from "@chakra-ui/react";
import { useFormik } from "formik";
import { signIn } from "next-auth/react";
import { useRouter } from "next/router";

const FormLogin: React.FC = () => {
    const router = useRouter();
    const toast = useToast()

    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
        },
        onSubmit: async (values: any) => {
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
    return (
        <>
            <Flex
                rounded="10px"
                border="1px solid #dedede"
                flexDir="column"
                p="2rem"
            >
                <Text fontSize="4xl" textAlign="center" py="2rem">
                    Instagram
                </Text>
                <form onSubmit={formik.handleSubmit}>
                    <Flex flexDirection="column" gap="1rem">
                        <Input
                            placeholder="Telefono, usuario o correo electrónico"
                            _placeholder={{ fontSize: "xs" }}
                            id="email"
                            name="email"
                            type="email"
                            onChange={formik.handleChange}
                            value={formik.values.email}
                            fontSize="sm"
                        ></Input>
                        <Input
                            placeholder="Contraseña"
                            _placeholder={{ fontSize: "xs" }}
                            id="password"
                            name="password"
                            type="password"
                            onChange={formik.handleChange}
                            value={formik.values.password}
                            fontSize="sm"
                        ></Input>
                        <Button bg="blue.400" color="#fff" type="submit">
                            Ingresar
                        </Button>
                    </Flex>
                </form>
                <Text textAlign="center" fontSize="sm" mt="1rem">
                    ¿Has olvidado la contraseña?
                </Text>
            </Flex>
        </>
    );
};

export default FormLogin;
