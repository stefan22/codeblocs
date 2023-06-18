import React from 'react'
import Link from 'next/link'

const Form = ({type, post, setPost, loading, handleSubmit}) => {

    return (
        <div className='w-full max-w-full flex-start flex-col'>
            <h1 className='head_text mb-3 sm:text-left'>
                <span className='blue_gradient'>{type}{' '}
                    Codebloc</span>
            </h1>
            <p className='desc text-left max-w-2xl'>
                Slechts een proeftekst uit het zejwezen.
                Lorem Ipsum is de standaard sinds de te maken.
            </p>

            <form
                onSubmit={(post) => handleSubmit(post)}
                className='mt-10 w-full max-w-2xl flex flex-col gap-7'
            >
                <label>
                  <span className='text-lg text-neutral-600 backdrop-opacity-50'>
                    Codebloc:
                  </span>

                    <textarea
                        value={post.codebloc}
                        onChange={(e) => setPost({ ...post, codebloc: e.target.value })}
                        placeholder='Enter your code snippets pieces here.'
                        required
                        className='form_textarea'
                    />
                </label>

                <label>
                  <span className='text-lg text-neutral-600 backdrop-opacity-50'>
                    Tags: <br />
                      <span className='text-sm font-mono text-red-600 font-normal'>
                      [#javaScript, #reactComponent, #pageTransition, #configSettings etc]<br />
                    </span>
                  </span>
                    <input
                        value={post.tag}
                        onChange={(e) => setPost({ ...post, tag: e.target.value })}
                        type='text'
                        placeholder='Enter your tags as shown here above.'
                        required
                        className='form_input'
                    />
                </label>

                <div className='mx-3 my-10 gap-4 text-center sm:text-left'>
                    <Link href='/'
                          className='outline py-1.5 px-5 rounded-full outline-width-1 mr-5'>
                        Cancel
                    </Link>

                    <button
                        type='submit'
                        className='px-10 py-2 bg-blue rounded-full text-white'
                    >
                        {loading ? `Snippets Pieces...` : type}
                    </button>
                </div>
            </form>
        </div>
    )
}

export default Form
