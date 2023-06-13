import '@styles/global.css'
import Nav from '@components/Nav'
import Provider from "@components/AuthProvider";

export const metadata = {
  title: 'Code Blocs',
  description: `Contrary to popular belief, Lorem Ipsum is not simply random text.
      It has roots in a piece of classical Latin literature from 45 BC, making 
      it over 2000 years old`
}

const Layout = ({children}) => (
    <html lang='en-UK'>
    <body>
    <Provider>
    <div className='main'>
      <div className='gradient' />
    </div>

    <header className='app'>
        <Nav />
      {children}
    </header>
    </Provider>
    </body>
    </html>
)

export default Layout
