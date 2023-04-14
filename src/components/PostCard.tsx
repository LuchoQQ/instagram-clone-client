import { Divider, Flex, Icon, Image, Text } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { BsSend, BsBookmark } from "react-icons/bs";
import { FaRegCommentAlt } from "react-icons/fa";
import { GrLike } from "react-icons/gr";
import { Post, User } from "types";

type Props = {
    post: Post;
};

const PostCard: React.FC<Props> = (props) => {
    const { post } = props;
    const [user, setUser] = useState<User>();

    useEffect(() => {
        axios
            .get(`http://localhost:3001/users/${post.post_owner}`)
            .then((res) => {
                setUser(res.data);
            });
    }, []);
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
                        src={
                            user?.avatar === null
                                ? "https://res.cloudinary.com/diylksocz/image/upload/v1681427636/149071_oev2gy.png"
                                : user?.avatar
                        }
                    />
                    <Text ml="1rem">{user?.username}</Text>
                    <Text
                        ml="1rem"
                        color="#8b8b8b"
                        fontSize="sm"
                        fontWeight="400"
                    >
                        • 2 h
                    </Text>
                </Flex>
                <Image
                    w="100%"
                    h="585px"
                    fit="cover"
                    src={post.image}
                    rounded="5px"
                />
                <Flex gap="1rem" py="1rem">
                    <Icon as={GrLike} fontSize="3xl" />
                    <Icon as={FaRegCommentAlt} fontSize="3xl" />
                    <Icon as={BsSend} fontSize="3xl" />
                    <Icon as={BsBookmark} fontSize="3xl" ml="auto" />
                </Flex>
                <Text fontWeight="600" pb=".5rem" fontSize="sm">
                    {post.likes.length} Likes
                </Text>
                <Flex>
                    <Text fontWeight="600" fontSize="sm">
                        luciano.snchz
                        <span
                            style={{
                                fontWeight: "500",
                                marginLeft: ".5rem",
                                fontSize: "sm",
                            }}
                        >
                            {post.description}
                        </span>
                    </Text>
                </Flex>
            </Flex>
            <Divider />
        </>
    );
};

export default PostCard;
