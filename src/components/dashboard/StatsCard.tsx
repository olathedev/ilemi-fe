import React from 'react'

type Props = {
    balanceHidden: boolean,
    setBalanceHidden:  React.Dispatch<React.SetStateAction<boolean>>
}

const StatsCard = ({balanceHidden, setBalanceHidden}: Props) => {
  return (

    <div className="w-full flex gap-4 mt-4">

    <div className='w-[55%] border-grey-200 rounded-md py-10 px-6 bg-white'>
                    <h4 className="font-semibold text-grey-800">Overview</h4>
                    <p className="text-grey-600 text-sm">Heres a quick overview of whats Happening with your house</p>
                    <div className="mt-3 w-full flex gap-2">
                        <div className="w-56 border rounded-md flex flex-col justify-center space-y-3 px-6 py-4">
                            <span className="h-12 w-12 flex items-center justify-center rounded-full bg-[#00A45D]">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="size-6">
                                    <path fillRule="evenodd" d="M8.25 6.75a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0ZM15.75 9.75a3 3 0 1 1 6 0 3 3 0 0 1-6 0ZM2.25 9.75a3 3 0 1 1 6 0 3 3 0 0 1-6 0ZM6.31 15.117A6.745 6.745 0 0 1 12 12a6.745 6.745 0 0 1 6.709 7.498.75.75 0 0 1-.372.568A12.696 12.696 0 0 1 12 21.75c-2.305 0-4.47-.612-6.337-1.684a.75.75 0 0 1-.372-.568 6.787 6.787 0 0 1 1.019-4.38Z" clipRule="evenodd" />
                                    <path d="M5.082 14.254a8.287 8.287 0 0 0-1.308 5.135 9.687 9.687 0 0 1-1.764-.44l-.115-.04a.563.563 0 0 1-.373-.487l-.01-.121a3.75 3.75 0 0 1 3.57-4.047ZM20.226 19.389a8.287 8.287 0 0 0-1.308-5.135 3.75 3.75 0 0 1 3.57 4.047l-.01.121a.563.563 0 0 1-.373.486l-.115.04c-.567.2-1.156.349-1.764.441Z" />
                                </svg>

                            </span>

                            <p className="text-sm text-grey-700"> Number of tenants </p>
                            <p className="text-3xl font-bold">0</p>

                            <p className="relative top-6 text-[15px] text-primary-600 cursor-pointer">See All</p>

                        </div>

                        <div className="flex-1 flex-col">
                            <div className="border rounded-md w-full">
                                <div className="p-3 border-b flex flex-col space-y-2">
                                    <p className="text-sm text-grey-700">Maintance requests</p>
                                    <p className="text-3xl font-bold">0</p>

                                    <p className="text-[15px] text-primary-600 cursor-pointer">See All</p>
                                </div>
                                <div className="w-full p-3 flex flex-col space-y-2">
                                    <p className="text-sm text-grey-700"> Number of tenants </p>
                                    <p className="text-3xl font-bold">0</p>

                                    <p className="text-[15px] text-primary-600 cursor-pointer">See All</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='flex-1 bg-white p-4 rounded-md flex flex-col'>
                    <div className="">
                        <h3 className="font-semibold">Rent Wallet</h3>
                        <div className="mt-1 w-full py-4 rounded-md">
                            <p className='text-sm text-grey-600 flex items-center gap-2'>
                                Total Balance
                                <span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 cursor-pointer">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88" />
                                </svg>
                                </span>
                            </p>
                            <p className={`text-2xl font-bold`}>{balanceHidden ? "$******" : "$0.00"} </p>
                        </div>

                        <hr />
                    </div>
                </div>
                </div>
  )
}

export default StatsCard