"use client";
import { useEffect, useState } from 'react'
import Link from "next/link";
import Image from "next/image";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";


const Nav = () => {
    const isUserLoggedIn = true;
    const [providers, setProviders] = useState(null);

    useEffect(() => {
        (async () => {
            const res = await getProviders();
            setProviders(res);
        })();
    }, []);

    return (
        <nav className='flex place-content-between w-full mb-16 pt-3'>
            <Link href='/' className='flex gap-2 flex-center'>
                <Image
                    src='/static/images/codeblock.svg'
                    alt='logo'
                    width={30}
                    height={30}
                    className='object-contain'
                />
                <p className='logo_text'>CodeBlocs</p>
            </Link>

            {/* Desktop Navigation */}
            <div className='sm:flex hidden'>
                {isUserLoggedIn ? (
                    <div className='flex gap-3 md:gap-5'>
                        <Link href='/' className='black_btn'>
                            Create Post
                        </Link>

                        <button type='button' onClick={signOut} className='outline_btn'>
                            Sign Out
                        </button>

                        <Link className='flex flex-col justify-center' href='/profile'>
                            <Image
                                src={'/static/images/profile.svg'}
                                width={27}
                                height={27}
                                className='rounded-full'
                                alt='profile'
                            />
                        </Link>
                    </div>
                ) : (
                    <>
                        {providers &&
                            Object.values(providers).map((provider) => (
                                <button
                                    type='button'
                                    key={provider.name}
                                    onClick={() => {
                                        //signIn();
                                    }}
                                    className='black_btn'
                                >
                                    Sign in
                                </button>
                            ))}
                    </>
                )}
            </div>

            {/* Mobile Navigation */}
            <div className='sm:hidden flex relative'>
                {isUserLoggedIn ? (
                    <div className='flex'>
                        <Image
                            src={'/static/images/profile.svg'}
                            width={31}
                            height={31}
                            className='rounded-full'
                            alt='profile'
                            onClick={() => setToggleDropdown(!toggleDropdown)}
                        />
xs


                    </div>
                ) : (
                    <>
                        {providers &&
                            Object.values(providers).map((provider) => (
                                <button
                                    type='button'
                                    key={provider.name}
                                    onClick={() => {
                                        //signIn();
                                    }}
                                    className='black_btn'
                                >
                                    Sign in
                                </button>
                            ))}
                    </>
                )}
            </div>

        </nav>
    );
};

export default Nav;
