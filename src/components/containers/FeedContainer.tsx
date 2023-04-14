import React, { useEffect, useState } from "react";
import PostCard from "../PostCard";
import { Flex, Icon, Image, Input, Text } from "@chakra-ui/react";
import CreatePost from "../CreatePost";
import { Post, Session } from "types";
import axios from "axios";
type Props = {
    session: Session;
};

const FeedContainer: React.FC<Props> = ({ session }) => {
    const [posts, setPosts] = useState<Post[]>([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        (async () => {
            await axios.get("http://localhost:3001/posts").then((res) => {
                setPosts(res.data.reverse());
            });
        })();
    }, []);

    useEffect(() => {
        console.log(loading);
        (async () => {
            await axios.get("http://localhost:3001/posts").then((res) => {
                setPosts(res.data.reverse());
            });
        })();
    }, [loading]);
    return (
        <>
            <Flex w="468px" h="auto" minH="100vh" flexDir="column" gap="1rem">
                <CreatePost
                    session={session}
                    setLoading={setLoading}
                    loading={loading}
                />
                {posts?.map((post, index) => {
                    return (
                        <div key={index}>
                            <PostCard post={post} />
                        </div>
                    );
                })}
            </Flex>
        </>
    );
};

export default FeedContainer;
