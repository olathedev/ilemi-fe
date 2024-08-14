import { Users } from 'lucide-react'
import React from 'react'

type Props = {
    balanceHidden: boolean,
    setBalanceHidden: React.Dispatch<React.SetStateAction<boolean>>,
    transactions: any[]
}

const StatsCard = ({ balanceHidden, setBalanceHidden, transactions }: Props) => {
    return (

        <div className="w-full flex gap-4 mt-4">

            <div className='w-[55%] border-grey-200 rounded-md py-10 px-6 bg-white'>
                <h4 className="font-semibold text-grey-800">Overview</h4>
                <p className="text-grey-600 text-sm">Heres a quick overview of whats Happening with your house</p>
                <div className="mt-3 w-full flex gap-2">
                    <div className="w-56 border rounded-md flex flex-col justify-center space-y-3 px-6 py-4">
                        <span className="h-12 w-12 flex items-center justify-center rounded-full bg-[#00A45D]">
                            <Users color='white' />

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

            <div className='flex-1 bg-white py-3 px-4 rounded-md flex flex-col'>
                <div className="">
                    <h3 className="font-semibold">Rent Wallet</h3>
                    <div className="mt-1 w-full py-2 rounded-md">
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

                    <div className="mt-4 flex flex-col space-y-3">

                        {transactions.slice(0, 4).map((transaction, index) => (
                            <div className="flex w-full justify-between items-center text-sm" key={index}>

                                <p className='inline-flex flex-col text-sm w-1/3 text-gray-600'>
                                    {transaction.name}
                                    <span className='text-gray-500 text-xs'>2/4/2024</span>
                                </p>

                                <div className='w-1/3 flex justify-center'>
                                    <span className={`${transaction.payment === 'rent' ? 'trans-rent' : 'trans-maintance'}`}>{transaction.payment}</span>
                                </div>


                                <div className='w-1/3 flex justify-end text-sm'>
                                    NGN 200,000
                                </div>

                            </div>

                        ))}
                        <p className="text-sm text-primary-600 cursor-pointer">See All</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StatsCard