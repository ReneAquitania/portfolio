export default function AboutMe({ ref, isVisible }: { ref: React.RefObject<HTMLDivElement | null>, isVisible: boolean }) {
    return (
        <div ref={ref} className={`transition-opacity ease-in duration-800 delay-100 ${isVisible ? "opacity-100" : "opacity-0"} flex flex-col mb-20`}>
            {/* Section Title */}
            <div className="grid mb-2">
                <p className="font-black text-5xl md:text-6xl text-cyan-400 col-start-1 row-start-1"><span className="text-sky-600">about</span> me</p>
                <p className="font-black text-5xl md:text-6xl text-cyan-400 col-start-1 row-start-1 pl-16 md:pl-20 pt-6 md:pt-7">about <span className="text-cyan-200">me</span></p>
            </div>
            {/* Content */}
            <p className="text-xl tracking-tight self-center w-4/5 md:w-9/10">
                ok i said i was a brainrot expert in the banner but i don't think it'll look good if i bring my tiktok for you page to my portfolio so we gotta be serious rn 😔😭😭<br /><br /> 
                
                ANYWAYS... i'm rene aquitania, a web and mobile developer. i also combine my graphic design skills with my front-end expertise to create fun and user-friendly experiences. <br /><br />when i don't work, i doomscroll (chronically online 😔). i also usually listen to music and podcasts, play video games and crosswords, or <span className="italic">gather some magic</span>.
            </p>
        </div>
    );
}