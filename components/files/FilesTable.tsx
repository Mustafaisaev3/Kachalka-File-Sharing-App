import React from 'react'
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import Image from 'next/image'
import { ExternalLink, Maximize } from 'lucide-react'
import Link from 'next/link'

const FilesTable = ({ files }: any) => {
  return (
    <div className='border rounded-md py-2'>
        <Table>
            {/* `<TableCaption>A list of your recent invoices.</TableCaption> */}
            <TableHeader>
                <TableRow>
                    <TableHead className='font-semibold text-primary'>id</TableHead>
                    <TableHead className='font-semibold text-primary'>Файл</TableHead>
                    <TableHead className='font-semibold text-primary'>Название</TableHead>
                    <TableHead className='font-semibold text-primary'>Размер</TableHead>
                    <TableHead className='font-semibold text-primary'>Тип</TableHead>
                    <TableHead className='font-semibold text-primary'>URL</TableHead>
                    <TableHead className='font-semibold text-primary'>Пароль</TableHead>
                    <TableHead className='font-semibold text-primary'>Дествия</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {files.map((file) => (
                <TableRow key={file.id}>
                    <TableCell className="font-medium">{file.id}</TableCell>
                    <TableCell>
                        <Image src={file.fileUrl} width={100} height={100} alt='file-image' className='max-h-[100px] object-contain' />
                    </TableCell>
                    <TableCell>{file.fileName}</TableCell>
                    <TableCell>{Number(file.fileSize / 1024 / 1024).toFixed(2)}MB</TableCell>
                    <TableCell>{file.fileType}</TableCell>
                    <TableCell className='max-w-[200px] overflow-hidden'>{file.fileUrl}</TableCell>
                    <TableCell className='text-center'>{file.filePassword ? file.filePassword : '-'}</TableCell>
                    <TableCell>
                        <div className='w-6'>
                            <Link href={`/f/${file.id}`} className='hover:text-blue-600'>
                                <ExternalLink className='cursor-pointer' />
                            </Link>
                        </div>
                    </TableCell>
                </TableRow>
                ))}
            </TableBody>
            <TableFooter>
                <TableRow>
                <TableCell colSpan={7}>Всего Файлов</TableCell>
                <TableCell className="text-right">{files.length}</TableCell>
                </TableRow>
            </TableFooter>`
        </Table>
    </div>
  )
}

export default FilesTable