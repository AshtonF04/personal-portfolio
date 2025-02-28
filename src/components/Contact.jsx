function Contact(){
    return(
        <>
        <div className="flex flex-col gap-5">
            <h3 className="text-4xl text-center">Contact</h3>
            <div className='flex gap-2 justify-center'>
                <a target="_blank" href='mailto:ashtonfranklin772@gmail.com' className="contact-card py-2 px-4 rounded text-2xl">Email</a>
                <a target="_blank" href="https://www.linkedin.com/in/ashton-franklin-5a6345288/" className="contact-card py-2 px-4 rounded text-2xl">LinkedIn</a>
                <a target="_blank" href="https://github.com/AshtonF04" className="contact-card py-2 px-4 rounded text-2xl">GitHub</a>
            </div>
        </div>
        </>
    )
}

export default Contact