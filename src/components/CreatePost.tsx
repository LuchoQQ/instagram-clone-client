import {
    Box,
    Divider,
    Flex,
    FormLabel,
    Icon,
    Image,
    Input,
    Text,
} from "@chakra-ui/react";
import { BiImageAdd, BiPoll, BiMapPin } from "react-icons/bi";

import React, { useEffect, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { Session } from "types";
import axios from "axios";

interface FileEvent extends React.ChangeEvent<HTMLInputElement> {
    target: HTMLInputElement & EventTarget;
}

interface Post {
    post_owner: string;
    description: string | null;
    image: File | null;
}

type Props = {
    session: Session;
    loading: boolean;
    setLoading: React.Dispatch<React.SetStateAction<boolean>>;
};

const CreatePost: React.FC<Props> = ({ session, loading, setLoading }) => {
    const [preview, setPreview] = useState("");
    const [post, setPost] = useState<Post>({
        post_owner: session.id,
        description: "",
        image: null,
    });

    const onSelectFile = (event: FileEvent): void => {
        const file: File | undefined = event.target.files?.[0];

        if (file) {
            setPost({
                ...post,
                image: file,
            });
            setPreview(URL.createObjectURL(file));
        }
    };

    const onDeleteFile = () => {
        setPost({
            ...post,
            image: null,
        });
        setPreview("");
    };

    const onChangeDescription = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        setPost({
            ...post,
            description: event.target.value,
        });
    };

    const onSubmit = async (post: any) => {
        const formData = new FormData();
        formData.append("image", post.image);
        formData.append("post_owner", post.post_owner);
        formData.append("description", post.description);

        axios.post("http://localhost:3001/posts", formData);
        setPost({
            post_owner: "",
            description: "",
            image: null,
        });
        setLoading(!loading);
        setPreview("");
    };

    return (
        <>
            <Flex py="1rem" w="433px">
                <Flex w="100%" flexDir="column">
                    <Flex alignItems="center" py=".5rem">
                        <Image
                            mt=".5rem"
                            w="32px"
                            h="32px"
                            src="https://res.cloudinary.com/diylksocz/image/upload/ar_1:1,b_rgb:ffffff,bo_3px_solid_rgb:000000,c_fill,g_auto,r_max,w_1000/v1664479701/luchin.jpg"
                        />
                        <Text ml="1rem">luciano.snchz</Text>
                    </Flex>

                    <Flex flexDir="column" w="100%">
                        <Icon
                            as={AiOutlineClose}
                            ml="auto"
                            fontSize="3xl"
                            onClick={onDeleteFile}
                            position="absolute"
                            m=".5rem"
                            fill="#fff"
                            display={preview !== "" ? "block" : "none"}
                        />
                        <Image src={preview} />
                        <Input
                            mt="1rem"
                            variant="flushed"
                            onChange={onChangeDescription}
                            placeholder="Escribe una descripción"
                            _placeholder={{
                                fontSize: "sm",
                                fontWeight: "400",
                                px: "1rem",
                            }}
                        />
                        <Flex alignItems="center" mt=".5rem" gap=".5rem">
                            <Icon
                                as={BiImageAdd}
                                fontSize="2xl"
                                color="#0a7ac5"
                                cursor="pointer"
                            />
                            <Input
                                type="file"
                                accept="image/png, image/jpeg, image/webp"
                                position="absolute"
                                w="10px"
                                opacity="0"
                                onChange={(e) => onSelectFile(e)}
                            />
                            <Icon
                                as={BiPoll}
                                fontSize="2xl"
                                color="#0a7ac5"
                                cursor="pointer"
                            />
                            <Icon
                                as={BiMapPin}
                                fontSize="2xl"
                                color="#0a7ac5"
                                cursor="pointer"
                            />
                            <Flex
                                ml="auto"
                                justifyContent="center"
                                alignItems="center"
                                py=".5rem"
                                px="1.5rem"
                                rounded="50px"
                                bg="#0a7ac5"
                                cursor="pointer"
                                onClick={() => onSubmit(post)}
                            >
                                <Text color="#fff">Enviar</Text>
                            </Flex>
                        </Flex>
                    </Flex>
                </Flex>
            </Flex>
            <Divider />
        </>
    );
};

export default CreatePost;
