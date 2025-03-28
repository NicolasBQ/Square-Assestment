import language from '../../assets/language.svg';
import twitter from '../../assets/twitter.svg';
import facebook from '../../assets/facebook.svg';
import instagram from '../../assets/instagram.svg';


const SocialMedia = () => {
    return (
        <section className='py-4 mt-14 border-y-2 border-[#808080] flex w-full justify-between items-center'>
            <div className='flex items-center gap-2'>
                <img src={language} alt="Language Icon" />
                <p className='text-white text-base font-medium'>United Stated (English)</p>
            </div>

            <div className='flex items-center gap-2'>
                <img src={twitter} alt="Twitter icon" className='cursor-pointer'/>
                <img src={facebook} alt="Facebook icon" className='cursor-pointer'/>
                <img src={instagram} alt="Instagram icon" className='cursor-pointer'/>
            </div>
        </section>
    )
}

export {
    SocialMedia
}