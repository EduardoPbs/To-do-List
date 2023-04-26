import { Suspense } from "react";
import Header from "./Components/Header";
import Input from "./Components/Input";
import List from "./Components/List";

function App() {
    return (
        <Suspense fallback={<p className="text-3xl font-extralight h-full">Loading...</p>}>
            <div className='flex flex-col h-screen bg-slate-200 md:px-10 xl:px-36 sm:py-10 items-center'>
                <Header />

                <Input />
                
                <List />
            </div>
        </Suspense>
    );
}

export default App;
