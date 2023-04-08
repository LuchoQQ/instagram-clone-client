import { Divider, Flex, Icon, Image, Text } from "@chakra-ui/react";
import React from "react";
import { BsSend, BsBookmark } from "react-icons/bs";
import { FaRegCommentAlt } from "react-icons/fa";
import { GrLike } from "react-icons/gr";

const PostCard: React.FC = () => {
    return (
        <>
            <Flex flexDir="column">
                <Flex
                    w="100%"
                    bg="#fff"
                    alignItems="center"
                    py=".5rem"
                    px=".2rem"
                >
                    <Image
                        w="32px"
                        src="https://res.cloudinary.com/diylksocz/image/upload/ar_1:1,b_rgb:ffffff,bo_3px_solid_rgb:000000,c_fill,g_auto,r_max,w_1000/v1664479701/luchin.jpg"
                    />
                    <Text ml="1rem">luciano.snchz</Text>
                    <Text ml="1rem" color="#8b8b8b" fontSize='sm' fontWeight='400'>
                        • 2 h
                    </Text>
                </Flex>
                <Image
                    w="100%"
                    h='585px'
                    fit='cover'
                    src="https://res.cloudinary.com/diylksocz/image/upload/v1663179911/279140078_1780149818982718_5146374659619253410_n_fxdjiq.jpg"
                    rounded="5px"
                />
                <Flex gap="1rem" py="1rem">
                    <Icon as={GrLike} fontSize="3xl" />
                    <Icon as={FaRegCommentAlt} fontSize="3xl" />
                    <Icon as={BsSend} fontSize="3xl" />
                    <Icon as={BsBookmark} fontSize="3xl" ml="auto" />
                </Flex>
                <Text fontWeight='600' pb='.5rem' fontSize='sm'>525 Me gusta</Text>
                <Flex>
                    <Text fontWeight="600" fontSize='sm'>
                        luciano.snchz
                        <span style={{ fontWeight: "500", marginLeft: '.5rem', fontSize: 'sm' }}>
                            Laborum eiusmod duis aliqua et ea sint incididunt
                            Lorem aliqua et nulla nisi.
                        </span>
                    </Text>
                </Flex>
            </Flex>
            <Divider />
        </>
    );
};

export default PostCard;
