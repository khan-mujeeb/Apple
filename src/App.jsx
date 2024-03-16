import "./App.css";
import toast, { Toaster } from 'react-hot-toast';

function App() {

    const OnButtonClick = () => {
            toast.success('🦄 Wow so easy!')
    }

    return (
        <div className="flex justify-center items-center h-screen bg-yellow-50">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => {OnButtonClick()}}
            >
            Click Here
            </button>
            <Toaster />

        </div>
    );
}

export default App;
