import React from 'react'

const Form = ({type, post, loading, handleSubmit}) => {

    return (
        <div className='w-full max-w-full flex-start flex-col'>
            <h1 className='head_text text-left'>
                <span className='blue_gradient'>{type} Post</span>
            </h1>
        </div>
    )
}

export default Form
