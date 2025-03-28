import { FooterTerms } from "./FooterTerms";
import { FooterMenuMobile } from "./FooterMenuMobile";
import { FooterMenuDesktop } from "./FooterMenuDesktop";
import { SocialMedia } from "./SocialMedia";
import { FinalFooter } from "./FinalFooter";

const Footer = () => {
    return (
        <footer className="pt-16 bg-primary px-6 lg:px-20 xl:px-24 2xl:px-48">
            <FooterTerms />
            <FooterMenuMobile />
            <FooterMenuDesktop />
            <SocialMedia />
            <FinalFooter />

            <div className="mt-7 py-4 text-center">
                <p className="text-base text-dark-grey">Developed by <a href="https://github.com/NicolasBQ/Square-Assestment" target='_blank' className="text-white font-medium underline">NicolasBQ</a></p>
            </div>
        </footer>
    )
}

export {
    Footer
}