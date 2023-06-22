import React, { useRef } from 'react'

function Ref() {

    const lastSec = useRef()

    const moveDown = () =>{
        lastSec.current.scrollIntoView({
            behavior: 'smooth',
        })
    }


    return (
        <>


            <h1 className='mb-8'>Sections</h1>

            <button className="btn btn-lg mb-6" onClick={moveDown} >Go to Down</button>

            <div className='mb-5 flex flex-col items-center text-center content-center '>

                <section className='' >
                    <div className="card   lg:card-side bg-base-200 shadow-xl  ">
                        
                        <figure><img src="https://th.bing.com/th/id/OIP.avb9nDfw3kq7NOoP0grM4wHaEK?w=280&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="Album" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">New album is released!</h2>
                            <p>Click the button to listen on Spotiwhy app.</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary">Listen</button>
                            </div>
                        </div>
                    </div>

                    <div className="divider"></div> 
                </section>

                <section>
                    <div className="card lg:card-side bg-base-200 shadow-xl">
                        <figure><img src="https://th.bing.com/th/id/OIP.avb9nDfw3kq7NOoP0grM4wHaEK?w=280&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="Album" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">New album is released!</h2>
                            <p>Click the button to listen on Spotiwhy app.</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary">Listen</button>
                            </div>
                        </div>
                    </div>

                    <div className="divider"></div> 
                </section>

                <section>
                    <div className="card lg:card-side bg-base-200 shadow-xl">
                        <figure><img src="https://th.bing.com/th/id/OIP.avb9nDfw3kq7NOoP0grM4wHaEK?w=280&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="Album" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">New album is released!</h2>
                            <p>Click the button to listen on Spotiwhy app.</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary">Listen</button>
                            </div>
                        </div>
                    </div>

                    <div className="divider"></div> 
                </section>

                <section>
                    <div className="card lg:card-side bg-base-200 shadow-xl">
                        <figure><img src="https://th.bing.com/th/id/OIP.avb9nDfw3kq7NOoP0grM4wHaEK?w=280&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="Album" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">New album is released!</h2>
                            <p>Click the button to listen on Spotiwhy app.</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary">Listen</button>
                            </div>
                        </div>
                    </div>

                    <div className="divider"></div> 
                </section>

                <section>
                    <div ref={lastSec} className="card lg:card-side bg-base-200 shadow-xl">
                        <figure><img src="https://th.bing.com/th/id/OIP.avb9nDfw3kq7NOoP0grM4wHaEK?w=280&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="Album" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">New album is released!</h2>
                            <p>Click the button to listen on Spotiwhy app.</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary">Listen</button>
                            </div>
                        </div>
                    </div>

                    <div className="divider"></div> 
                </section>


            </div>


        </>
    )
}

export default Ref
