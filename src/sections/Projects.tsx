import type React from "react"

export default function Projects({ ref, isVisible } : {ref: React.RefObject<HTMLDivElement| null>, isVisible: boolean}) {
    const hmTechStack: string[] = ["java", "kotlin", "objective-c", "swift", "gitlab"]
    const myWebsiteTechStack: string[] = ["tailwind", "typescript", "react"]
    const localsimTechStack: string[] = ["scipy", "numpy", "pyside", "python"]

    const TechStackLogo: React.FC<{ name: string }> = ({ name }) => {
        return (
            <img className= { `w-10 mr-3 p-2 border-1 rounded-lg hover:drop-shadow-xl/100 duration-300 peer/${name.replace(/\W/g, '')}logo` } 
            src={ `./src/assets/projects/tech_stack_logos/${name.replace(/\W/g, '')}.svg` }/>
        )
    }


    return (
        <div ref={ref} className={`transition-opacity ease-in duration-400 delay-100 ${isVisible ? "opacity-100" : "opacity-0"} flex flex-col mb-20`}>
            {/* Section Title */}
            <div className="grid">
                <p className="font-black text-5xl md:text-6xl text-yellow-700 col-start-1 row-start-1">projects</p>
                <p className="font-black text-5xl md:text-6xl text-amber-500 col-start-1 row-start-1 pt-3">projects worked</p>
                <p className="font-black text-5xl md:text-6xl text-amber-300 col-start-1 row-start-1 pt-7">projects worked on</p>
            </div>
            {/* Content */}
            <div className="flex flex-col self-center mt-8 w-4/5 md:w-9/10">
                {/* HM & HP */}
                <div className="flex flex-col md:flex-row mb-24">
                    <div className="flex flex-none self-center">
                       <a className="w-32 lg:w-48 hover:scale-105 duration-200 mr-6" href="https://www.aub.com.ph/hellomoney"><img className="rounded-lg shadow-lg/60" src="./src/assets/projects/hellomoney/hellomoney.png"/></a>
                       <a className="w-32 lg:w-48 hover:scale-105 duration-200" href="https://www.aub.com.ph/hellomoney"><img className="rounded-lg shadow-lg/60" src="./src/assets/projects/hellomoney/hellopagibig.png"/></a>
                    </div>
                    <div className="md:ml-16 mt-6 md:mt-0 h-fit self-center">
                        <div className="flex md:-ml-4">
                            { hmTechStack.map( (name, index) => <TechStackLogo key={ index } name={ name } />) }
                            <p className={ "italic font-black text-xl opacity-0 self-center duration-300 " + 
                                hmTechStack.map( name => 
                                    "peer-hover/" + name.replace(/\W/g, '') + "logo:opacity-100 peer-hover/" + name.replace(/\W/g, '') + "logo:before:content-['" + name + "']"
                                ).join(" ")
                            }></p>
                        </div>
                        <p className="mt-4 text-lg tracking-tight">as an employee of AUB, i developed and maintained Asia United Bank's ewallet apps (collective 2M+ users). the app focuses on allowing transferring funds, secure transactions through QR and non-QR InstaPay methods, and prepaid load and bills payments.<br /><br /> HelloPag-IBIG also allows for easier payments of Pag-IBIG fund loans and savings accounts, and managing of the Pag-IBIG Loyalty Card Plus.</p>
                    </div>
                </div>

                {/* My Website */}
                <div className="flex flex-col mb-16 md:flex-row-reverse">
                    <div className="grid md:w-2/5 shadow-xl/70 self-center">
                        <img className="col-start-1 row-start-1" src="./src/assets/projects/my_website/browser.png" />
                        <p className="p-4 col-start-1 row-start-1 self-center justify-self-center font-black text-8xl md:text-6xl xl:text-8xl 2xl:text-9xl">this<br/>website!</p>
                    </div>
                    <div className="self-center mr-8">
                        <div className="flex flex-row-reverse mt-6 md:mt-0">
                            { myWebsiteTechStack.map( (name, index) => <TechStackLogo key={ index } name={ name } />) }
                            <p className={ "italic font-black text-xl opacity-0 self-center duration-300 mr-3 " + 
                                myWebsiteTechStack.map( name => 
                                    "peer-hover/" + name.replace(/\W/g, '') + "logo:opacity-100 peer-hover/" + name.replace(/\W/g, '') + "logo:before:content-['" + name + "']"
                                ).join(" ")
                            }></p>
                        </div>
                        <p className="mt-4 max-w-fit text-lg tracking-tight">
                            i made this website to showcase the projects i've done both in school and as a professional. <br /> <br /> i also made this website to exercise the html, css, javascript, and react knowledge i picked up. aside from exercising the technical skills, i also wanted to flex my creative muscles and design the website myself.
                        </p>
                    </div>
                </div>

                {/* Localsim */}
                <div className="flex flex-col">
                    <div className="flex flex-col-reverse lg:flex-row lg:w-4/5 xl:w-7/10  justify-end">
                        <div className="flex flex-row-reverse h-min w-2/3 lg:w-full lg:self-end">
                            { localsimTechStack.map( (name, index) => <TechStackLogo key={ index } name={ name } />) }
                            <p className={ "italic font-black text-xl opacity-0 self-center duration-300 mr-3 " + 
                                localsimTechStack.map( name => 
                                    "peer-hover/" + name.replace(/\W/g, '') + "logo:opacity-100 peer-hover/" + name.replace(/\W/g, '') + "logo:before:content-['" + name + "']"
                                ).join(" ")
                            }></p>
                        </div>
                        <div className="flex-none lg:w-1/2 xl:w-3/5">
                            <img className="drop-shadow-md/40" src="./src/assets/projects/localsim/localsim.png" />
                        </div>
                    </div>
                    <p className="mt-4 text-lg tracking-tight">
                        this was my undergraduate thesis!<br /><br />
                        we improved upon the microscopic traffic simulation software (Localsim) developed by the University of the Philippines - National Center for Transportation Studies by adding pedestrian and sidewalk features using human behavioral movement models.<br /><br />The software serves as a support system for local government unit (LGU) traffic management, and traffic engineers all around the Philippines.
                    </p>
                </div>
            </div>
        </div>
    );
}
