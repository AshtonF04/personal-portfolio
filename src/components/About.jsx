function About(){
    return(
        <>
        <div className='flex flex-col gap-14 justify-between md:flex-row'>
            {/*About text div*/}
            <div className="flex-1 flex flex-col gap-5 text-2xl">

                <div className="flex flex-col gap-2">
                    <p>Hello! I am</p>
                    <p>Ashton Franklin</p>
                    <p className="text-blue-500">Software Developer • Student</p>
                    <p>
                        I'm a Computer Science student at the Univerisity of Western Ontario, currently studying Computer Science.
                        I have a passion for coding and development and like to work on projects like this portfolio between my studies.
                        I am comitted to learning more about Front-End and Back-End development to improve my skills.
                    </p>
                </div>

                <div className="relative w-70">
                    <div className="blur absolute -inset-0.5 bg-blue-500 rounded-lg"></div>
                    <button className="relative w-full">Get My Resume</button>
                </div>

            </div>

            {/*About image div */}
            <div className="flex-1 flex justify-center items-center">
                <div className="relative -rotate-6">
                    <div className="blur absolute -inset-0.5 bg-blue-500 rounded-lg"></div>
                    <img className='relative rounded-lg' src='../../public/hero-image.jpg'></img>
                </div>
            </div>
        </div>
        </>
    )
}

export default About