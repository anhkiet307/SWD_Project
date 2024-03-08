import * as React from 'react';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/DeleteOutlined';
import SaveIcon from '@mui/icons-material/Save';
import CancelIcon from '@mui/icons-material/Close';
import {
    GridRowModes,
    DataGridPro,
    GridToolbarContainer,
    GridActionsCellItem,
    GridRowEditStopReasons,
} from '@mui/x-data-grid-pro';

import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { Alert, Grid } from '@mui/material';
// import Snackbar from '@mui/material/Snackbar';
import { addCard, removeCard, setCards, updateCard } from '../redux/cards';

function EditToolbar(props) {
    const { setRowModesModel, dispatch, state } = props;

    const handleClick = () => {
        console.log(state.cards.length)
        const id = (state.cards.length == 0) ? 1 : Number(state.cards[state.cards.length - 1].id) + 1

        dispatch(addCard({ card:{
            id: id,
            name: '',
            category: '',
            description: '',
            nation: '',
            director: '',
            actor: '',
            duration: '',
            releaseDate: '',
            image: '',
            trailer: '',
            isNew: true
        }}))
        setRowModesModel((oldModel) => ({
            ...oldModel,
            [id]: { mode: GridRowModes.Edit, fieldToFocus: 'name' },
        }));
    };

    return (
        <GridToolbarContainer>
            <Button variant="contained" color="primary" bgcolor='warning' startIcon={<AddIcon />} onClick={handleClick}>
                Add Card
            </Button>
        </GridToolbarContainer>
    );
}

export default function Dashboard() {
    const [snackbar, setSnackbar] = React.useState(null);

    const dispatch = useDispatch()

    const state = useSelector(state => state.movies)

    const [rowModesModel, setRowModesModel] = React.useState({});

    React.useEffect(() => {
        fetch("https://65e56986d7f0758a76e64915.mockapi.io/Projects/card")
            .then((res) => res.json())
            .then((data) => dispatch(setCards({ card: data })));
    }, [dispatch]);

    const handleRowEditStop = (params, event) => {
        if (params.reason === GridRowEditStopReasons.rowFocusOut) {
            event.defaultMuiPrevented = true;
        }
    };

    const handleEditClick = (id) => () => {
        setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.Edit } });
    };

    const handleSaveClick = (id) => () => {
        setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.View } });
    };

    const handleDeleteClick = (id) => () => {
        fetch(`https://65e56986d7f0758a76e64915.mockapi.io/Projects/card/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.length != 0) {
                    dispatch(removeCard({ id: id }))
                    toast('Delete success')
                }
            })
    };

    const handleCancelClick = (id) => () => {
        setRowModesModel({
            ...rowModesModel,
            [id]: { mode: GridRowModes.View, ignoreModifications: true },
        });

        const editedRow = state?.cards.find((row) => row.id === id);
        if (editedRow.isNew) {
            console.log(editedRow)
        }
    };

    const handleProcessRowUpdateError = React.useCallback((error) => {
        setSnackbar({ children: error.message, severity: 'error' });
    }, []);

    const processRowUpdate = (newRow) => {
        const updatedRow = { ...newRow, isNew: false };
        console.log(newRow)
        if (newRow.isNew) {
            const updateData = {
                id: Number(newRow.id),
                name: newRow.name,
                category: newRow.category,
                description: newRow.description,
                nation: newRow.nation,
                director: newRow.director,
                actor: newRow.actor,
                duration: newRow.duration,
                releaseDate: newRow.releaseDate,
                image: newRow.image,
                trailer: newRow.trailer,
                actor: ''
            }

            fetch(`https://65e56986d7f0758a76e64915.mockapi.io/Projects/card/`, {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
                body: JSON.stringify(updateData)
            })
                .then(res => res.json())
                .then(() => {
                    toast(`Add Successful!`)
                    dispatch(updateCard({ card: updateData }))
                })
            

        } else {

            const updateData = {
                id: Number(newRow.id),
                name: newRow.name,
                category: newRow.category,
                description: newRow.description,
                nation: newRow.nation,
                director: newRow.director,
                actor: newRow.actor,
                duration: newRow.duration,
                releaseDate: newRow.releaseDate,
                image: newRow.image,
                trailer: newRow.trailer
            }


            fetch(`https://65e56986d7f0758a76e64915.mockapi.io/Projects/card/${newRow.id}`, {
                method: 'PUT',
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
                body: JSON.stringify(updateData)
            })
                .then(res => res.json())
                .then(() => {
                    toast(`Update Successful!`)
                    dispatch(updateCard({ card: updateData }))
                })
            
        }

        console.log(updatedRow)

        return updatedRow;
    };

    const handleRowModesModelChange = (newRowModesModel) => {
        setRowModesModel(newRowModesModel);
    };

    const columns = [
        { field: 'id', headerName: 'ID', type: 'number', width: 80, align: 'left', headerAlign: 'left', editable: true, },
        { field: 'name', headerName: 'Name', width: 300, editable: true },
        { field: 'category', headerName: 'Category', editable: true },
        { field: 'nation', headerName: 'Nation', editable: true },
        { field: 'director', headerName: 'Director', editable: true },
        { field: 'duration', headerName: 'Duration', editable: true },
        { field: 'releaseDate', headerName: 'ReleaseDate', editable: true },
        { field: 'image', headerName: 'Image', editable: true },
        { field: 'trailer', headerName: 'Trailer', editable: true },
        { field: 'description', headerName: 'Description', width: 300, editable: true },
        { field: 'actor', headerName: 'Actor', editable: true },


        {
            field: 'actions',
            type: 'actions',
            headerName: 'Actions',
            width: 100,
            cellClassName: 'actions',
            getActions: ({ id }) => {
                const isInEditMode = rowModesModel[id]?.mode === GridRowModes.Edit;
                if (isInEditMode) {
                    return [
                        <GridActionsCellItem
                            icon={<SaveIcon />}
                            label="Save"
                            sx={{
                                color: 'primary.main',
                            }}
                            onClick={handleSaveClick(id)}
                        />,
                        <GridActionsCellItem
                            icon={<CancelIcon />}
                            label="Cancel"
                            className="textPrimary"
                            onClick={handleCancelClick(id)}
                            color="inherit"
                        />,
                    ];
                }

                return [
                    <GridActionsCellItem
                        icon={<EditIcon />}
                        label="Edit"
                        className="textPrimary"
                        onClick={handleEditClick(id)}
                        color="inherit"
                    />,
                    <GridActionsCellItem
                        icon={<DeleteIcon />}
                        label="Delete"
                        onClick={handleDeleteClick(id)}
                        color="inherit"
                    />,
                ];
            },
        },
    ];

    return (
        <Grid
            container
            direction={'row'}
            justifyContent={'center'}
            alignItems={'center'}
        >
            <Grid
                container
                bgcolor={'yellow'}
            >
                <DataGridPro
                    rows={state?.cards}
                    columns={columns}
                    editMode="row"
                    rowModesModel={rowModesModel}
                    onRowModesModelChange={handleRowModesModelChange}
                    onRowEditStop={handleRowEditStop}
                    processRowUpdate={processRowUpdate}
                    slots={{
                        toolbar: EditToolbar,
                    }}
                    slotProps={{
                        toolbar: { dispatch, state, setRowModesModel }, /*setRows */
                    }}
                    onProcessRowUpdateError={handleProcessRowUpdateError}
                />
                
            </Grid>

        </Grid>
    );
}