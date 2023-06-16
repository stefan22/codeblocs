"use client";
import { useEffect, useState } from 'react'
import Link from "next/link";
import Image from "next/image";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";

const Nav = () => {
    const { data: session } = useSession()
    console.log('what is session ', session)

    const [providers, setProviders] = useState(null);
    const [ toggleDropdown, setToggleDropdown ] = useState(false)

    useEffect(() => {
        (async () => {
            const res = await getProviders();
            setProviders(res);
        })();
    }, []);

    console.log('providers ', providers)
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
                {session?.user ? (
                    <div className='flex gap-3 md:gap-5'>
                        <Link href='/codebloc' className='black_btn'>
                            Deskbloc
                        </Link>

                        <button type='button' onClick={signOut} className='outline_btn'>
                            Sign Out
                        </button>

                        <Link className='flex flex-col justify-center'
                              href='/profile'>
                            <Image
                                src={session?.user.image}
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
                                        signIn(provider?.id);
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
            <div className='sm:hidden flex flex-col'>
                {session?.user ? (
                    <div className='flex flex-col items-end relative'>
                        <Image
                            src={'/static/images/profile.svg'}
                            width={30}
                            height={31}
                            className='rounded-full h-31 w-31'
                            alt='profile'
                            onClick={() => setToggleDropdown((prevState) => !prevState)}
                        />

                        {toggleDropdown && (
                            <div className='dropdown flex h-full flex-col items-end'>
                                <Link
                                    href='/profile'
                                    className='dropdown_link'
                                    onClick={() => setToggleDropdown(false)}
                                >
                                    Profile
                                </Link>
                                <Link
                                    href='/codebloc'
                                    className='dropdown_link'
                                    onClick={() => setToggleDropdown(false)}
                                >
                                    Codebloc
                                </Link>
                                <button
                                    type='button'
                                    onClick={() => {
                                        setToggleDropdown(false);
                                        signOut();
                                    }}
                                    className='mt-5 w-full black_btn'
                                >
                                    Sign Out
                                </button>
                            </div>
                        )}


                    </div>
                ) : (
                    <>
                        {providers &&
                            Object.values(providers).map((provider) => (
                                <button
                                    type='button'
                                    key={provider.name}
                                    onClick={() => {
                                        signIn(provider?.id);
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
