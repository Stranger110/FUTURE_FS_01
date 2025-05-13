import React from 'react';
import { ArrowDownTrayIcon } from '@heroicons/react/24/solid';

const DownloadButton = () => {
    return (
        <div className="flex items-center justify-center mt-6">
          <a href="../../public/Resume.pdf" className='flex group'>
                <div className='px-6 py-3 flex flex-row gap-3 rounded-lg bg-white text-black group-hover:bg-zinc-900 transition-colors duration-300'>
                <ArrowDownTrayIcon className="w-5 h-5 text-black group-hover:text-white transition-colors duration-300"/>
                    <span className='group-hover:text-white transition-colors duration-300'>Download Resume</span>
                </div>
            </a>
        </div>
      );
}

export default DownloadButton;
