function Projects(){
    return(
        <>
        <div className='flex flex-col gap-5'>
            <p className='text-4xl text-center'>Projects</p>
            <div className='flex gap-5'>
                <div className="flex-1">
                    <a target="_blank" href='https://ashtonf04.github.io/ecobloom/'>
                    <img className="w-175 rounded shadow-xl" src='ecobloom-screenshot.png'></img>
                    </a>
                </div>
                <div className="flex-1">
                    <a target='_blank' href='https://ashtonf04.github.io/ecobloom/' className='text-3xl'>EcoBloom Essentials</a>
                    <p className="text-xl">Made With: HTML, CSS, JavaScript, Bootstrap</p>
                    <p className="text-xl">Website designed and developed by myself using HTML, CSS and bootstrap for a course project. 
                        Features a landing page, team section, and products section for a fictional business on a one pager website.
                    </p>
                </div>
            </div>
        </div>
        </>
    )
}

export default Projects