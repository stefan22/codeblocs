"use client";

import { useState, useEffect } from "react";
import CodeCards from "./CodeCards";

const SnippetsPieces = () => {
    const [allPosts, setAllPosts] = useState([]);

    const fetchPosts = async () => {
        const response = await fetch("/api/codebloc");
        const data = await response.json();
        setAllPosts(data);
    };

    useEffect(() => {
        fetchPosts();
    }, []);

    return (
        <section className='snippets_pieces'>
            <CodeCards data={allPosts} />
        </section>
    );
};

export default SnippetsPieces;
