

type Props = {
    children: any;
}

export default function Layout({children}: Props) {


    return(<>
    
        <div className="flex w-[100%]  bg-green-300 border-2 border-yellow-400 h-screen mx-auto mt-8">

            <div className="w-[100%] lg:w-[65%] bg-blue-200 border-2 border-blue-600 h-screen" >
                {children?.[0]}
            </div>


            {/* ONLY DISPLAY TO LG SCREENS!*/}
            <div className="bg-red-100 lg:w-[35%] border-2 border-green-600 h-screen" >
                {children?.[1]}
            </div>

        </div>

    </>)
}