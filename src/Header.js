import mypic from './images/me.png'

const Header = () => {
    return (
        <div className="grid justify-items-center min-h-fit">
            <h1 className='text-5xl pt-16 text-myblue font-sapiens'>Hello!</h1>
            <h2 className="pt-8 font-bold text-4xl text-white text-center">
                I'm Rene Aquitania <br></br>
                and I make <span className='text-myblue underline'>stuff</span> :)
            </h2>
            <img 
                className='py-4 w-48'
                src={mypic}
                alt="Rene Aquitania" />
        </div>
    );
}
 
export default Header;