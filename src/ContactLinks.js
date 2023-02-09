import { ReactComponent as GithubLogo } from './images/github.svg';
import { ReactComponent as LinkedinLogo } from './images/linkedin.svg';
import { ReactComponent as MailLogo } from './images/mail.svg';

const ContactLinks = () => {
    const logos = [
        {
            Logo: GithubLogo,
            link: "https://github.com/ReneAquitania"
        }, 
        {
            Logo: LinkedinLogo,
            link: "https://linkedin.com/in/rltaquitania"
        }, 
        {
            Logo: MailLogo,
            link: "mailto:rene.aquitania120@gmail.com"
        }
    ];

    return (
        <div className="flex py-5 fill-myblue justify-center items-end">
            { logos.map((logo, index) => ( 
                <a
                    href={logo.link}
                    target="_blank"
                    rel="noreferrer"
                    className='w-6 h-6 mx-3 hover:fill-white hover:scale-90 transition-all shrink-0' 
                    key={index}
                    onClick={logo.clickhandler}>          
                    <logo.Logo />
                </a> 
            )) }
        </div>
    );
}
 
export default ContactLinks;