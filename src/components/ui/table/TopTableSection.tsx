import { TableCell, TableHead, TableRow } from '@mui/material'


export function TopTableSection()
{
    // В дальнейшем можно будет переиспользовать это для других таблиц
    // TableCell уже будет принимать массив данных и позицию align
    return (
        <TableHead>
            <TableRow>
                <TableCell align='center'>Фотография</TableCell>
                <TableCell align='left'>Имя</TableCell>
                <TableCell align='left'>Название родной планеты</TableCell>
                <TableCell align='center'>Количество</TableCell>
            </TableRow>
        </TableHead>
    )
}