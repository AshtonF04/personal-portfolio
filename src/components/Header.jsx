function Header(){
    return (
    <>
    <div className='flex justify-between'>
        <h2 className='text-3xl'>Ashton Franklin</h2>
        <div className='flex gap-5'>
            <a className='hidden text-xl sm:inline'>About</a>
            <a className='hidden text-xl sm:inline'>Skills</a>
            <a className='hidden text-xl sm:inline'>Experience</a>
        </div>
    </div>
    </>
    )
}

export default Header