"use client";

import { useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

import Form from "@components/Form";

const CreateCodeBlock = () => {
    const router = useRouter()
    const { data: session } = useSession()

    const [ loading, setLoading ] = useState(false)
    const [ post, setPost ] = useState({
        bloc: '',
        tag: ''
    })

    const handleSubmit =  async (e) => {
        e.preventDefault()
        setLoading(true)
    }

    return (
        <div>
            <Form
                type='Create'
                post={post}
                loading={loading}
                handleSubmit={handleSubmit}
            />
        </div>
    )
};

export default CreateCodeBlock;
