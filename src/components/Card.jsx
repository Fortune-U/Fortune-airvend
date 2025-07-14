const Card = ({user, onLogout, isLoading}) => {

    return (
        <div className="flex flex-col gap-6 items-start bg-white rounded-lg py-[78px] px-[95px] max-md:px-4 max-w-[426px] w-full font-rubik">
            <h2 className="text-[24px] font-medium leading-[132%]">Hi, {user?.name} </h2>
            <p className="text-[#444444] leading-[132%]">Thank you for using our service.</p>

            <button onClick={onLogout} className="bg-none text-[#4834D4] leading-[132%] font-medium cursor-pointer"> {isLoading ? 'Logging out...' : 'Logout'}</button>
        </div>
    );
}


export default Card;