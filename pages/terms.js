import Link from 'next/link';
import React from 'react';

const terms = () => {
    return (
        <div className='bg-[#C2C2C3] p-5'>
            <div className='p-10 mx-auto w-4/5 2xl:w-[94rem] bg-white mt-10'>
                <div className='px-20'>
                <h1 className='text-[35px] font-bold mt-5'>Terms and Conditions</h1>
                <p className='text-[15px] font-semibold'>By accessing this Application, you are agreeing to be bound by these Terms of Use, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws. If you do not agree with any of these terms, you are prohibited from using or accessing this site. The materials contained in this Application are protected by applicable copyright and trademark law.</p>
             
                <h1 className='font-bold mt-5'>Terms</h1>
                <p className='mt-3'>Permission is granted to temporarily download one copy of any downloadable materials on the Application&apos;s website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not: modify or copy the materials; <br /><br /> a) Modify or copy the materials. <br /><br />b) Use the materials for any commercial purpose, or for any public display (commercial or non-commercial).<br /><br /> c) Attempt to decompile or reverse engineer any software contained on Companies web site.<br /><br /> d) Remove any copyright or other proprietary notations from the materials.<br /><br /> e) Transfer the materials to another person or &apos;mirror&apos; the materials on any other server. <br /><br /> This license shall automatically terminate if you violate any of these restrictions and may be terminated by Company at any time. Upon terminating your viewing of these materials or upon the termination of this license, you must destroy any copied/downloaded materials in your possession whether in electronic or printed format.</p>
                <h1 className='font-bold mt-5'>Disclaimer</h1>
                <p className='mt-3'>The materials on Companies web site are provided &apos;as is&apos;. Company makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties, including without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights. Further, Company does not warrant or make any representations concerning the accuracy, likely results, or reliability of the use of the materials on its Internet web site or otherwise relating to such materials or on any sites linked to this site.</p>
                <h1 className='font-bold mt-5'>Limitations</h1>
                <p className='mt-3'>In no event shall Company or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption,) arising out of the use or inability to use the materials on Companies Internet site, even if Company or a Company authorized representative has been notified orally or in writing of the possibility of such damage. Because some jurisdictions do not allow limitations on implied warranties, or limitations of liability for consequential or incidental damages, these limitations may not apply to you.</p>
                <h1 className='font-bold mt-5'>Revisions and errata</h1>
                <p className='mt-3'>The materials appearing on Companies web site could include technical, typographical, or photographic errors. Company does not warrant that any of the materials on its web site are accurate, complete, or current. Company may make changes to the materials contained on its web site at any time without notice. Company does not, however, make any commitment to update the materials.</p>
                <h1 className='font-bold mt-5'>Links</h1>
                <p className='mt-3'>Company has not reviewed all of the sites linked to its Internet web site and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by Company of the site. Use of any such linked web site is at the user&apos;s own risk. </p>
                <h1 className='font-bold mt-5'>Site Terms of Use Modifications</h1>
                <p className='mt-3'>Company may revise these terms of use for its web site at any time without notice. By using this web site you are agreeing to be bound by the then current version of these Terms and Conditions of Use.</p>
                <h1 className='font-bold mt-5'>Governing Law</h1>
                <p className='mt-3'>Governing Law Any claim relating to the Application&apos;s website shall be governed by the laws of the Application Owner&apos;s home jurisdiction without regard to its conflict of law provisions. <br /><br /> As an Instructor, You represent, warrant, and covenant that: No Submitted Content shall infringe or misappropriate any intellectual property right of a third party. But, if instructor use HEVC compression, it&apos;s the instructor&apos;s responsibility to pay the royalties to the MPEG-LA, the owner of HEVC patents as appropriate. </p>
                <h1 className='font-bold mt-5'>Privacy Policy</h1>
                <p className='mt-3'>Read more on Privacy Policy <Link href="">here</Link></p>
                <h1 className='font-bold mt-5'>Cookie Policy</h1>
                <p className='mt-3'>Read more on Cookie Policy <Link href="">here</Link></p>
                </div>
            </div>
        </div>
    );
};

export default terms;