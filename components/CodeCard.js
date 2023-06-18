"use client";

import { useState } from "react";
import Image from "next/image";
import { useSession } from "next-auth/react";
import { usePathname, useRouter } from "next/navigation";

const CodeCard = ({ post }) => {
    const { data: session } = useSession();
    const pathName = usePathname();
    const router = useRouter();

    const [copied, setCopied] = useState("");

    const handleCopy = () => {
        setCopied(post.codebloc);
        navigator.clipboard.writeText(post.codebloc);
        setTimeout(() => setCopied(false), 3000);
    };

    return (
        <div className='code_card border-cyan-700'>
            <div className='flex justify-between items-start gap-5'>
                <div
                    className='flex-1 flex justify-start items-center gap-3 cursor-pointer'
                >
                    <Image
                        src={post?.createdBy.image}
                        alt='user_image'
                        width={40}
                        height={40}
                        className='rounded-full object-contain'
                    />

                    <div className='flex flex-col'>
                        <h3 className='font-normal text-2xl text-gray-dark'>
                            {post?.createdBy.username}
                        </h3>
                        <p className='text-sm text-neutral-400'>
                            {post?.createdBy.email}
                        </p>
                    </div>
                </div>

                <div className='copy_btn' onClick={handleCopy}>
                    <Image
                        src={
                            copied === post?.codebloc
                                ? "/static/icons/checked.svg"
                                : "/static/icons/copy.svg"
                        }
                        alt={copied === post?.codebloc ? "code copied to clipboard" : "click to copy code"}
                        width={15}
                        height={15}
                    />
                </div>
            </div>

            <p className='my-7 border-l-amber-200 border-2 border-neutral-200 p-3 rounded text-sm font-mono'>
                {post?.codebloc}</p>
            <p
                className='text-sm cursor-pointer text-red-500'
            >
                #{post?.tag}
            </p>

            {session?.user.id === post?.createdBy._id && (
                <div className='mt-5 flex-center gap-4 border-t border-gray-100 pt-3'>
                    <p className='mt-5 px-8 py-2 bg-blue text-sm rounded-full text-white'>
                        Edit
                    </p>
                    <p className='mt-5 outline text-sm py-1 px-5 rounded-full mr-5'>
                        Delete
                    </p>
                </div>
            )}
        </div>
    );
};

export default CodeCard;
