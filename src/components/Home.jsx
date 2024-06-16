import { useState } from "react";

const Home = () => {
    const [count, setCount] = useState(0);
    return (
        <div className="flex justify-center min-h-screen items-center">
            <div>
            <h2 className='text-5xl'>Count: {count}</h2> 
            <button className="p-2 border rounded-lg" onClick={()=> setCount(count+1)}>Increase</button>
            </div>
        </div>
    );
};

export default Home;