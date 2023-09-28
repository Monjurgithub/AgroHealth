import { FcGoogle } from 'react-icons/fc';
import { FaFacebook } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className=''>

            <footer className="bg-white rounded-lg shadow m-4 dark:bg-gray-800">
                <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
                    <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="https://flowbite.com/" className="hover:underline">Agro-Health</a> CopyRight by Monjur.
                    </span>
                    <ul className="flex flex-wrap mt-28 sm:mt-6">
                        <li>
                            <a href="#" className="mr-4  md:mr-6 "><FcGoogle></FcGoogle></a>
                        </li>
                        <li>
                            <a href="#" className="mr-4 md:mr-6"><FaFacebook></FaFacebook></a>
                        </li>
                        <li>
                            <a href="#" className="mr-4  md:mr-6  "><FcGoogle></FcGoogle></a>
                        </li>
                        <li>
                            <a href="#" className="mr-4 md:mr-6"><FaFacebook></FaFacebook></a>
                        </li>
                    </ul>
                </div>
            </footer>

        </div>
    );
};

export default Footer;