"use client";

import { useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

import Form from "@components/Form";

const CreateCodebloc = () => {
    const router = useRouter()
    const { data: session } = useSession()

    const [ loading, setLoading ] = useState(false)
    const [ post, setPost ] = useState({
        codebloc: '',
        tag: ''
    })

    const handleSubmit =  async (e) => {
        e.preventDefault()
        setLoading(true)
        console.log('show post ',post)


        try {
            const response = await fetch("/api/codebloc/new", {
                method: "POST",
                body: JSON.stringify({
                    codebloc: post.codebloc,
                    userId: session?.user.id,
                    tag: post.tag,
                }),
            });

            if (response.ok) {
                router.push("/");
            }
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    }

    return (
        <div>
            <Form
                type='Create'
                post={post}
                setPost={setPost}
                loading={loading}
                handleSubmit={handleSubmit}
            />
        </div>
    )
};

export default CreateCodebloc;
