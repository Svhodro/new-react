import react from "react";
function Banner() {
    return (
        <>
            <div className="hero h-[500px] rounded-xl mt-8" style={{ backgroundImage: 'url(https://img.freepik.com/premium-photo/chef-cooking-food-kitchen-modern-designed-commercial-restaurant-generative-ai_1423-8430.jpg?w=740)' }}>
                <div className="hero-overlay bg-opacity-60 rounded-xl"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="">
                        <h1 className="mb-5 text-5xl font-bold">Discover an exceptional cooking
                            <br />   class tailored for you!</h1>
                        <p className="mb-5">Learn and Master Basic Programming, Data Structures, Algorithm, OOP, Database and solve 500+ coding <br />
                            problems to become an exceptionally well world-class Programmer.</p>
                        <div className="flex gap-4 justify-center">
                            <button className="btn btn-accent">Explore Now</button>
                            <button className="btn btn-ghost border-white">Our Feedback</button>
                        </div>
                      
                    </div>
                </div>
            </div>
        </>
    )
}
export default Banner