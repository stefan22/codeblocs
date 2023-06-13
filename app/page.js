import CodeCard from '@components/CodeCard'
import CodeCards from '@components/CodeCards'
import Form from '@components/Form'
import Profile from '@components/Profile'

const Home = () => (
    <section className='w-full flex-center flex-col'>
      <h1 className='head_text text-center'>
        CodeBlocs
        <br />
        <span className='orange_gradient text-center text-6xl'>Snippets Pieces</span>
      </h1>
      <p className='desc text-center'>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
          doloremque veritatis et quasi architecto dicta.
      </p>
        <div className='flex items-center flex-col my-10'>
            <CodeCard />
            <CodeCards />
            <Form />
            <Profile />
        </div>

    </section>
);

export default Home;
