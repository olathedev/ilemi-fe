import React from 'react'
import ElipsisIcon from '../common/icons/ElipsisIcon'
import Image from 'next/image';
import empty from '@/assets/empty.svg'
interface info {
    field: string,
    key: string
}
type Props = {
    tableInfo: info[];
    data?: any;
    emptyState?: string;
    loading?: boolean
}

const AppTable = ({ tableInfo, data, emptyState = "No record available", loading = false }: Props) => {
    return (
        <table className='w-full min-w-full overflow-auto rounded-md text-[15px]'>
            <thead className='rounded'>
                <tr className="bg-primary-100 rounded-md w-full">
                    {tableInfo.map((header, index) => (
                        <th key={index} className="py-2 px-4 border-b text-left font-[500]">{header.field}</th>
                    ))}
                    <th className="py-2 px-4 border-b text-left">Actions</th>
                </tr>
            </thead>
            <tbody className='w-full text-gray-500'>
                {loading && (
                    <tr className=''>
                        <td colSpan={tableInfo.length + 1} className="py-20">
                            <div className="flex flex-col gap-4 justify-center items-center text-center">

                                loading...

                            </div>
                        </td>
                    </tr>
                )}
                {!loading && data?.length >= 1 ? data.map((field: any, index: number) => (
                    <tr
                        key={index}
                        className='w-full py-2 cursor-pointer'
                    >
                        {tableInfo.map((data, index) => (
                            <td key={index} className='py-3 px-4 border-b'>{field[data.key] || 'Not set'}</td>
                        ))}

                        <td className='py-3 px-4 border-b text-center'> <ElipsisIcon /></td>
                    </tr>
                )) :

                    <tr className=''>
                        <td colSpan={tableInfo.length + 1} className="py-20">
                            <div className="flex flex-col gap-4 justify-center items-center text-center">

                                <Image src={empty} alt='' width={150} height={150} />
                                <p className='text-lg w-1/2'>{emptyState}</p>

                            </div>
                        </td>
                    </tr>

                }

            </tbody>


        </table>
    )
}

export default AppTable