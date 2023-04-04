import { Button, Flex, Image, Input, Text, useToast } from "@chakra-ui/react";
import { useFormik } from "formik";

import { signIn } from "next-auth/react";
import { useRouter } from "next/router";

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
                <Flex w="20rem" h="30rem" bg="">
                    <Image
                        src="/assets/mobile.png"
                        fit="contain"
                        position="relative"
                        zIndex="10"
                    />
                    <Image
                        p="1rem"
                        src="/assets/screenshot1.png"
                        fit="contain"
                        position="relative"
                        left="-73%"
                    />
                </Flex>
                <Flex w="20rem" h="30rem" flexDir="column" gap="1rem">
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
                                <Button
                                    bg="blue.400"
                                    color="#fff"
                                    type="submit"
                                >
                                    Ingresar
                                </Button>
                            </Flex>
                        </form>
                        <Text textAlign="center" fontSize="sm" mt="1rem">
                            ¿Has olvidado la contraseña?
                        </Text>
                    </Flex>
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
