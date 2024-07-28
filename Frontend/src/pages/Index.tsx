const Index = () => {
    return (
        <>
            <div>
                <h2 className="text-center text-3xl font-semibold uppercase">Services</h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3">
                    <div>
                        <h3>Development</h3>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m6.75 7.5 3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0 0 21 18V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v12a2.25 2.25 0 0 0 2.25 2.25Z" />
                            </svg>
                        </div>
                        <p>We develop software to create innovative and efficient solutions, we can provide different plans tailored to specifications for your business.</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Index