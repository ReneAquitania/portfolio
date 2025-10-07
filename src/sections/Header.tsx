type ForwardedRef = React.RefObject<HTMLDivElement | null>

export default function Header({ aboutMeRef, experienceRef, projectsRef, contactRef } :
    { aboutMeRef: ForwardedRef, experienceRef: ForwardedRef, projectsRef: ForwardedRef, contactRef: ForwardedRef }) {
    const navOnClick = (ref: ForwardedRef) => {
        console.log(ref.current)
        setTimeout(() => ref.current?.scrollIntoView({ behavior: "smooth" }), 0)
    }

    return (
        <div className="grid">
            <img className="col-start-1 row-start-1" src="./src/assets/banner.png" />
            <div className="col-start-1 row-start-1">
                {/* Nav Bar */}
                <div className="h-1/3 flex flex-col lg:gap-3 pt-[2%]">
                    <div className="flex justify-end">
                        <p className="font-extrabold text-base md:text-xl lg:text-3xl xl:text-4xl hover:cursor-pointer hover:drop-shadow-lg/20 duration-200 text-blue-900"
                        onClick={ function() { navOnClick(aboutMeRef) } }>me!</p>
                        <p className="font-extrabold text-base md:text-xl lg:text-3xl xl:text-4xl text-end hover:cursor-pointer hover:drop-shadow-lg/20 duration-200 text-blue-900 w-1/4 pr-[5%]"
                        onClick={ function() { navOnClick(experienceRef) } }>experience</p>
                    </div>
                    <p className="font-extrabold text-base md:text-xl lg:text-3xl xl:text-4xl text-end hover:cursor-pointer hover:drop-shadow-lg/20 duration-200 text-blue-900 pr-[15%]"
                    onClick={ function() { navOnClick(projectsRef) } }>projects</p>
                    <p className="font-extrabold text-base md:text-xl lg:text-3xl xl:text-4xl text-end hover:cursor-pointer hover:drop-shadow-lg/20 duration-200 text-blue-900 pr-[2%]"
                    onClick={ function() { navOnClick(contactRef) } }>contact</p>
                </div>

                {/* Header text */}
                <div className="flex flex-col">
                    <p className="font-black text-lg md:text-3xl lg:text-6xl w-1/2 self-center">hey i'm rene :)</p>
                    <br />
                    <br className="hidden md:block"/>
                    <p className="font-black text-lg md:text-xl lg:text-4xl text-nowrap w-1/4 self-center">mobile developer by day<br />brainrot expert by night</p>
                    <br />
                    <br className="hidden md:block"/>
                    <br className="hidden md:block"/>
                    <p className="font-black text-lg md:text-2xl lg:text-6xl text-lime-200 w-1/3 self-center">welcome to my site !</p>
                </div>
            </div>
        </div>
    );
}