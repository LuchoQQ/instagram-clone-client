import { Button, Flex, Icon, Image, Text } from "@chakra-ui/react";
import { signOut } from "next-auth/react";
import React from "react";
import { BiExit } from "react-icons/bi";
import { Sesssion } from "types";

type Props = {
    session: Sesssion;
};

const RightBar: React.FC<Props> = ({ session }) => {
    return (
        <>
            <Flex
                w="320px"
                h="auto"
                minH="100vh"
                bg="#fff"
                p="1rem"
                flexDir="column"
            >
                <Flex>
                    <Image
                        src="https://res.cloudinary.com/diylksocz/image/upload/ar_1:1,b_rgb:ffffff,bo_3px_solid_rgb:000000,c_fill,g_auto,r_max,w_1000/v1664479701/luchin.jpg"
                        w="60px"
                    />
                    <Flex flexDir="column" ml="1rem">
                        <Text
                            fontWeight="bold"
                            fontSize="md"
                        >{`${session.username}`}</Text>
                        <Text
                            fontSize="md"
                            color="#6c6c6c"
                        >{`${session.firstName}`}</Text>
                    </Flex>
                    <Icon
                        fontSize='2xl'
                        as={BiExit}
                        ml="auto"
                        cursor='pointer'
                        onClick={() => {
                            signOut();
                        }}
                    />
                </Flex>
                <Text mt="1rem" color="#828282">
                    Sugerencias para ti
                </Text>
            </Flex>
        </>
    );
};

export default RightBar;
