import React from "react";
import {
    Button,
    Flex,
    FormControl,
    Input,
    Text,
    useToast,
} from "@chakra-ui/react";
import { useFormik } from "formik";
import { createUser } from "@/utils/API";
import SmartphoneView from "@/components/SmartphoneView";
const Register: React.FC = () => {
    const toast = useToast();
    const formik = useFormik({
        initialValues: {
            username: "",
            firstName: "",
            lastName: "",
            email: "",
            password: "",
        },
        onSubmit: (values) => {
            createUser(values)
                .then((res) => {
                    toast({
                        title: "Account created sucessfull.",
                        status: "success",
                        duration: 3000,
                        isClosable: false,
                    });
                })
                .catch((res) => {
                    toast({
                        title: "Account not created",
                        description: `${res.response.data.errors[0].param} ${res.response.data.errors[0].msg}`,
                        status: "error",
                        duration: 3000,
                        isClosable: false
                    });
                });
        },
    });
    return (
        <>
            <Flex
                w="100vw"
                h="100vh"
                justifyContent="center"
                alignItems="center"
                gap="1rem"
            >
                <SmartphoneView />
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
                                    placeholder="Nombre de usuario"
                                    _placeholder={{ fontSize: "xs" }}
                                    id="username"
                                    name="username"
                                    type="text"
                                    onChange={formik.handleChange}
                                    value={formik.values.username}
                                    fontSize="sm"
                                ></Input>
                                <Input
                                    placeholder="Correo electrónico"
                                    _placeholder={{ fontSize: "xs" }}
                                    id="email"
                                    name="email"
                                    type="email"
                                    onChange={formik.handleChange}
                                    value={formik.values.email}
                                    fontSize="sm"
                                ></Input>
                                <Input
                                    placeholder="Nombre"
                                    _placeholder={{ fontSize: "xs" }}
                                    id="firstName"
                                    name="firstName"
                                    type="text"
                                    onChange={formik.handleChange}
                                    value={formik.values.firstName}
                                    fontSize="sm"
                                ></Input>
                                <Input
                                    placeholder="Apellido"
                                    _placeholder={{ fontSize: "xs" }}
                                    id="lastName"
                                    name="lastName"
                                    type="text"
                                    onChange={formik.handleChange}
                                    value={formik.values.lastName}
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
                                    Registrarse
                                </Button>
                            </Flex>
                        </form>
                    </Flex>
                </Flex>
            </Flex>
        </>
    );
};

export default Register;
