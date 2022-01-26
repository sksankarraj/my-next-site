import Header from './Header'
import Footer from './Footer'

export default function Layout({ children }) {
    return (
        <>
            <Header />
                <main className='container p-2 mx-auto' style={{maxWidth: '1024px'}}>{children}</main>
            <Footer />
        </>
    )
}