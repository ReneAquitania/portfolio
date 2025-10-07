interface IWork {
    company: string;
    position: string;
    start: string;
    end: string;
    skillsLearned: string[];
    remarks: string[];
    logoLink: string;
}

export default function Experience({ ref, isVisible }: { ref: React.RefObject<HTMLDivElement | null>, isVisible: boolean }) {
    const workExperience: IWork[] = [
        {
            company: "Asia United Bank",
            position: "mobile app developer",
            start: "april 2024",
            end: "present",
            skillsLearned: ["android Development", "iOS Development", "mobile app systems", "UI/UX design principles", "API integration", "version control", "database management"],
            remarks: [
                "designed, implemented, and released new enhancements on AUB's mobile banking and e-wallet mobile apps (HelloMoney and AUB App) used by millions of users across platforms",
                "debugged and provided production support to hundreds of users in need of help regarding app features"
            ],
            logoLink: "./src/assets/experience/aub_logo.png"
        },
        {
            company: "Samsung Research & Development Institute Philippines",
            position: "devOps intern",
            start: "july 2023",
            end: "september 2023",
            skillsLearned: ["containerization & orchestration", "resource monitoring & logging", "shell scripting"],
            remarks: [
                "monitored and logged metrics in Samsung's internal projects using prometheus and grafana, notifying the team of anomalies in the resources being utilized",
                "automated certain tasks required to maintain infrastructure using shell scripts and python, reducing manual human work by over an hour each day. The tool was also integrated into their system using docker & kubernetes."
            ],
            logoLink: "./src/assets/experience/samsung_logo.jpeg"
        },
        {
            company: "Asia United Bank",
            position: "mobile app intern",
            start: "june 2022",
            end: "august 2022",
            skillsLearned: ["flutter", "dart", "google firebase", "MVC software architectural pattern", "version control", "object-oriented programming"],
            remarks: [
                "Designed and implemented a cross-platform mobile app prototype for Asia United Bank's heavily utilized safety deposit box application form using Flutter and Google Firebase."
            ],
            logoLink: "./src/assets/experience/aub_logo.png"
        }
    ]

    return (
        <div ref={ref} className={`transition-opacity ease-in duration-400 delay-100 ${isVisible ? "opacity-100" : "opacity-0"} flex flex-col mb-20`}>
            {/* Section Title */}
            <div className="grid overflow-hidden">
                <p className="font-black text-5xl md:text-6xl text-lime-600 col-start-1 row-start-1 pr-116 md:pr-140 lg:pl-180 pt-1 rotate-180">experience</p>
                <p className="font-black text-5xl md:text-6xl text-lime-400 col-start-1 row-start-1 pl-58 md:pl-72 pt-3">experience</p>
                <p className="font-black text-5xl md:text-6xl text-lime-200 col-start-1 row-start-1">experience</p>
            </div>
            {/* Content */}
            <div className="mt-8 w-4/5 md:w-9/10 self-center">
                {
                    workExperience.map((experience, index) =>
                        <div key={index} className="flex">
                            <div className="flex-none mt-1.5">
                                <img className="h-12 md:h-18 rounded-full object-cover mr-3 md:mr-5" src={experience.logoLink} />
                            </div>
                            <div className={index != workExperience.length - 1 ? "mb-12" : ""}>
                                <p className="font-black text-3xl text-white">{ experience.company }</p>
                                <div className="flex mt-1">
                                    <p className="font-bold mr-2 text-white">{ experience.position }</p>
                                    <p className="font-extralight text-white">({experience.start} - {experience.end})</p>
                                </div>
                                <p className="mt-6 text-sm text-white">skills learned: 
                                    { 
                                        experience.skillsLearned.map((skill, skillIndex) => 
                                            <span key={skillIndex} className="font-extralight">{ (skillIndex ? ', ' : ' ') + skill }</span>
                                        )
                                    }
                                </p>
                                <ul className="mt-2 pl-6 list-disc">
                                    {
                                        experience.remarks.map((remark, remarkIndex) =>
                                            <li key={remarkIndex} className="font-extralight tracking-tight">{ remark }</li>
                                        )
                                    }
                                </ul>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
}