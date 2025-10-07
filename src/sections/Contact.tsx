export default function Contact({ ref, isVisible }: { ref: React.RefObject<HTMLDivElement | null>, isVisible: boolean }) {
    return (
        <div ref={ref} className={`transition-opacity ease-in duration-400 delay-100 ${isVisible ? "opacity-100" : "opacity-0"} flex flex-col mb-12`}>
            {/* Section Title */}
            <div className="grid mb-4">
                <p className="font-black text-6xl text-red-300 col-start-1 row-start-1">con</p>
                <p className="font-black text-6xl text-red-400 col-start-1 row-start-1 pl-22 pt-8">tact <span className="text-rose-500">me</span></p>
            </div>
            {/* Content */}
            <div className="self-center w-9/10">
                <div className="flex mb-12 justify-between">
                    <p className="w-1/2 text-2xl font-bold tracking-tight">so that's me. if you like any of the stuff i do, i have my socials linked on the right side. pls don't hesitate to contact me :)</p>
                    <div className="">
                        <a className="" href="mailto:rene.aquitania120@gmail.com">
                            <div className="flex p-3.5 mb-2.5 border-1 border-white rounded-xl w-fit group hover:border-orange-600 hover:border-1.5 duration-100">
                                <svg className=" group-hover:fill-orange-600 duration-100 mr-2 w-4" xmlns="http://www.w3.org/2000/svg" fill="#fff" viewBox="0 -2.5 20 20"><path fill-rule="evenodd" d="M10 12.474 0 3.649V15h20V3.649l-10 8.825Zm.001-2.662L0 .981V0h20v.981l-9.999 8.831Z"/></svg>
                                <p className="text-white group-hover:font-bold group-hover:text-orange-600 duration-50">email meee</p>
                            </div>
                        </a>
                        <div className="flex flex-row justify-end">
                            <a className="self-center" href="https://www.linkedin.com/in/rltaquitania/">
                                <svg className="w-12 mr-2 fill-white hover:fill-orange-600 duration-200" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><path d="M18.72 4H5.37A1.31 1.31 0 0 0 4 5.25v13.38A1.41 1.41 0 0 0 5.37 20h13.35A1.34 1.34 0 0 0 20 18.63V5.25A1.23 1.23 0 0 0 18.72 4ZM9 17.34H6.67v-7.13H9v7.13ZM7.89 9.13A1.18 1.18 0 0 1 6.67 7.9a1.18 1.18 0 0 1 1.24-1.23A1.18 1.18 0 0 1 9.13 7.9a1.18 1.18 0 0 1-1.24 1.23Zm9.45 8.21H15v-3.9c0-.93-.33-1.57-1.16-1.57a1.25 1.25 0 0 0-1.17.84 1.431 1.431 0 0 0-.08.57v4.06h-2.3v-7.13h2.3v1a2.32 2.32 0 0 1 2.1-1.21c1.51 0 2.65 1 2.65 3.13v4.21Z"/></svg>
                            </a>
                            <a className="self-center" href="https://github.com/ReneAquitania">
                                <svg className="w-8 mr-2 fill-white hover:fill-orange-600 duration-200" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 0c5.523 0 10 4.59 10 10.253 0 4.529-2.862 8.371-6.833 9.728-.507.101-.687-.219-.687-.492 0-.338.012-1.442.012-2.814 0-.956-.32-1.58-.679-1.898 2.227-.254 4.567-1.121 4.567-5.059 0-1.12-.388-2.034-1.03-2.752.104-.259.447-1.302-.098-2.714 0 0-.838-.275-2.747 1.051A9.396 9.396 0 0 0 10 4.958a9.375 9.375 0 0 0-2.503.345C5.586 3.977 4.746 4.252 4.746 4.252c-.543 1.412-.2 2.455-.097 2.714-.639.718-1.03 1.632-1.03 2.752 0 3.928 2.335 4.808 4.556 5.067-.286.256-.545.708-.635 1.371-.57.262-2.018.715-2.91-.852 0 0-.529-.985-1.533-1.057 0 0-.975-.013-.068.623 0 0 .655.315 1.11 1.5 0 0 .587 1.83 3.369 1.21.005.857.014 1.665.014 1.909 0 .271-.184.588-.683.493C2.865 18.627 0 14.783 0 10.253 0 4.59 4.478 0 10 0"/></svg>
                            </a>
                            <a className="self-center" href="https://facebook.com/ReneAquitania">
                                <svg className="w-12 fill-white hover:fill-orange-600 duration-200" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><path d="M20 12.05a8 8 0 1 0-9.25 8v-5.67h-2v-2.33h2v-1.77a2.83 2.83 0 0 1 3-3.14c.6.008 1.198.062 1.79.16v2h-1a1.16 1.16 0 0 0-1.3 1.26v1.51h2.22l-.36 2.33h-1.85V20A8 8 0 0 0 20 12.05Z"/></svg>
                            </a>
                        </div>
                    </div>
                </div>
                <p className="opacity-50 text-sm tracking-tighter text-center">made with &lt;3 by rene 🤠</p>
            </div>
        </div>
    );
}