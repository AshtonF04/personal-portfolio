function Skills(){
    return (
        <>
        <div className='flex flex-col gap-3'>
            <h2 className="text-4xl text-center">Skills</h2>

            <div className="flex flex-col gap-2">
                <h3 className='text-2xl'>Front-End</h3>
                <div className="flex gap-2">
                    <div className="card text-2xl px-4 py-2 rounded shadow-lg">
                        HTML
                    </div>
                    <div className="card text-2xl px-4 py-2 rounded shadow-lg">
                        CSS
                    </div>
                    <div className="card text-2xl px-4 py-2 rounded shadow-lg">
                        React
                    </div>
                    <div className="card text-2xl px-4 py-2 rounded shadow-lg">
                        JavaScript
                    </div>
                    <div className="card text-2xl px-4 py-2 rounded shadow-lg">
                        TypeScript
                    </div>
                    <div className="card text-2xl px-4 py-2 rounded shadow-lg">
                        Tailwindcss
                    </div>
                    <div className="card text-2xl px-4 py-2 rounded shadow-lg">
                        Bootstrap
                    </div>
                </div>
            </div>

            <div className="flex flex-col gap-2">
                <h3 className='text-2xl'>Back-End</h3>
                <div className="flex gap-2">
                    <div className="card text-2xl px-4 py-2 rounded shadow-lg">
                        Node.js
                    </div>
                    <div className="card text-2xl px-4 py-2 rounded shadow-lg">
                        Express
                    </div>
                    <div className="card text-2xl px-4 py-2 rounded shadow-lg">
                        Python
                    </div>
                    <div className="card text-2xl px-4 py-2 rounded shadow-lg">
                        Java
                    </div>
                </div>
            </div>

            <div className="flex flex-col gap-2">
                <h3 className='text-2xl'>Tech</h3>
                <div className="flex gap-2">
                    <div className="card text-2xl px-4 py-2 rounded shadow-lg">
                        Git
                    </div>
                    <div className="card text-2xl px-4 py-2 rounded shadow-lg">
                        SQL
                    </div>
                    <div className="card text-2xl px-4 py-2 rounded shadow-lg">
                        MongoDB
                    </div>
                </div>
            </div>
        </div>
        </>
    )   
}

export default Skills