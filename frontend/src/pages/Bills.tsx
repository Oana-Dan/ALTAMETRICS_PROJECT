import * as React from 'react';
import Table from '../components/Table';
import { GridColDef, GridRowParams, MuiEvent } from '@mui/x-data-grid';
import { getBills } from '../store/bill/actionCreators';
import { useAppDispatch, useAppSelector } from '../store/hook';
import { RootState } from '../store/store';
import { IUser } from '../storeTypes/user.store.types';
import { IBill } from '../storeTypes/bills.store.types';
import { Dialog, DialogTitle } from '@mui/material';

type BillsProps = {

}

const BillsPage: React.FC<BillsProps> = () => {
    const dispatch = useAppDispatch();
    const { bills } = useAppSelector((state: RootState) => state.bills);
    const { loginData } = useAppSelector((state: RootState) => state.login);

    const [rows, setRows] = React.useState<[]>();

    const columns: GridColDef[] = [
        { field: 'due_date', headerName: 'Date', width: 200 },
        { field: 'details', headerName: 'Details', width: 300 },
        { field: 'payee', headerName: 'Payee', width: 150 },
        { field: 'amount', headerName: 'Amount', type: 'number', width: 150,},
    ];

    const [ openDialogVar, setOpenDialogVar ] = React.useState(false);
    const [ clickedBill, setClickedBill ] = React.useState<IBill>({
      id: '',
      amount: 0,
      details: '',
      userId: '',
      due_date: '',
      payee: ''
    });

    React.useEffect(() => {
        dispatch(getBills());
    }, [])

    React.useEffect(() => {
      if(bills) {
          (bills as IBill[]).forEach((bill: IBill) => {
              const user: IUser = Object(loginData).hasOwnProperty('user') ? Object(loginData).user : {};
              const userName: string = Object(user).hasOwnProperty('name') ? Object(user).name : '';
              bill.payee = userName;
          });
          setRows(bills)
        }
    }, [bills, loginData])

    const openDialog = (params: GridRowParams, event: MuiEvent) => {
      setClickedBill({...params.row})
      setOpenDialogVar(true);     
    }

    const closeDialog = () => {
      setOpenDialogVar(false);
    }

    return(
        <div className='bills'>
            {rows && rows.length !== 0 ? 
            <>
                <Table rows={rows} columns={columns} openDialog={openDialog}/>
                <Dialog onClose={closeDialog} open={openDialogVar}>
                  <DialogTitle>Bill details</DialogTitle>
                  <div>Bill description: {clickedBill.details ? clickedBill.details : ''}</div>
                  <div>Bill amount: {clickedBill.amount ? clickedBill.amount : 0}</div>
                  <div>Bill due_date: {clickedBill.due_date ? clickedBill.due_date : ''}</div>
                  <div>Bill payee: {clickedBill.payee ? clickedBill.payee : ''}</div>
                </Dialog>
              </>
            :
              <div>loading... </div>
            }
        </div>
    )
}

export default BillsPage;