import { Divider, Flex, Icon, Image, Input, Text } from "@chakra-ui/react";
import { BiImageAdd, BiPoll, BiMapPin } from "react-icons/bi";

import React from "react";

const CreatePost: React.FC = () => {
    return (
        <>
            <Flex py="1rem" w="433px">
                <Image
                    mt=".5rem"
                    w="32px"
                    h="32px"
                    src="https://res.cloudinary.com/diylksocz/image/upload/ar_1:1,b_rgb:ffffff,bo_3px_solid_rgb:000000,c_fill,g_auto,r_max,w_1000/v1664479701/luchin.jpg"
                />
                <Flex flexDir="column" ml="2rem" w="100%">
                    <Input
                        variant="flushed"
                        placeholder="¿En qué estas pensando?"
                        _placeholder={{
                            fontSize: "sm",
                            fontWeight: "400",
                            px: "1rem",
                        }}
                    />
                    <Flex alignItems="center" mt=".5rem" gap=".5rem">
                        <Icon as={BiImageAdd} fontSize="2xl" color="#0a7ac5" />
                        <Icon as={BiPoll} fontSize="2xl" color="#0a7ac5" />
                        <Icon as={BiMapPin} fontSize="2xl" color="#0a7ac5" />
                        <Flex
                            ml="auto"
                            justifyContent="center"
                            alignItems="center"
                            py=".5rem"
                            px="1.5rem"
                            rounded="50px"
                            bg="#0a7ac5"
                        >
                            <Text color="#fff">Enviar</Text>
                        </Flex>
                    </Flex>
                </Flex>
            </Flex>
            <Divider />
        </>
    );
};

export default CreatePost;
