import Login from "../components/Login";
import airGateLogo from "../assets/logo-air-gate.png"


export default function LoginPage() {

    return (
        <div className="flex items-center justify-center h-screen bg-[url('/Bg.png')] bg-cover bg-center max-md:px-4">
            <div className="flex flex-col gap-6 w-full max-w-[544px] items-center justify-center">
                <h1 className="">            
                    <img src={airGateLogo} alt="AirGate Logo" className="max-w-[211.11px] w-full mx-auto" />
                </h1>
                <Login />
            </div>
        </div>
    );
}
