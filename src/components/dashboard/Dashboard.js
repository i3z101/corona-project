import  React, { useState } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import './dashboard.css'
import { TableContainer, Table, TableBody, TableCell, withStyles, TableRow, Button, Menu, MenuItem, Popover } from '@material-ui/core';
import clsx from 'clsx'
import { BsFillCircleFill, BsArrowDownShort } from "react-icons/bs";
const styles= {
    root:{
        display: 'flex',
        borderBottomStyle:'none'
    },
    label:{
        fontSize:'16px',
        fontWeight:'bold',
        textAlign:'center'
    },
    labelDetails:{
        textAlign:'center',
        fontSize:'16px',
        fontWeight:'500'
    },
    btnRoot:{
        marginLeft:'200%',
        width:'100%'
    },
    menuContainerPosition:{
        position:'absolute',
        left:'57%'
    }
}

const colors={
    notCommitted: '#ff4b5c',
    committed: '#0c9463',
    moderate: '#ffd31d'
}

const Dashboard= (props) => {

    const {classes}=props
    
    const [storesDetails, setStoreDetails]= useState([
        {storeName:'naif store', status: 1, sort: 'sport'},
        {storeName:'aziz store', status: 2, sort: 'clothes'},
        {storeName:'ahmed store', status: 3, sort: 'pharmacy'},
        {storeName:'faisal store', status: 3, sort: 'restaurant'},
        {storeName:'esam store', status: 1, sort: 'clothes'},
        {storeName:'ahmdi store', status: 2, sort: 'restaurant'}
    ])

    const [dropDown, setDropDown]=useState(false)
    const [anchorEl, setAnchorEl]= useState(null)
    
    const handleOpenDropDown= (e)=>{
        setDropDown(true)
        setAnchorEl(e.currentTarget)
    }

    const handleCloseDropDown= ()=>{
        setDropDown(false)
        setAnchorEl(null)
    }
    
    return( <div className='container'>
        <Card> 
            <CardHeader title="Welcome to the administration" className='title'/>
            <CardContent className='title'>STORES INFORMATION</CardContent>
        
        </Card>

        <Card className='storeClass' variant='outlined'> 
        <div className='storesStyle'>
        <CardHeader title="Stores details" className='title'/>
        <div className='btn-style'>
        <Button className={clsx(classes.btnRoot)} onClick={handleOpenDropDown}>SORT BY <BsArrowDownShort size={22}/></Button>
    
        <Menu
        anchorEl={anchorEl}
       
        keepMounted
        open={dropDown}
        onClose={()=>handleCloseDropDown()}
        className={clsx(classes.menuContainerPosition)}
        >

        <MenuItem onClick={()=>handleCloseDropDown()}>sport</MenuItem>
        <MenuItem onClick={()=>handleCloseDropDown()}>clothes</MenuItem>
        <MenuItem onClick={()=>handleCloseDropDown()}>pharmacy</MenuItem>
        <MenuItem onClick={()=>handleCloseDropDown()}>restaurant</MenuItem>
        
        </Menu>
        </div>
        
        </div>
        

        
       <TableContainer>
        <Table>
        <TableBody>
            <TableRow>
                <TableCell className={clsx(classes.label)}>STORES NAME</TableCell>
                <TableCell className={clsx(classes.label)}>COMMITTED STATUS</TableCell>
                <TableCell className={clsx(classes.label)}>SORT</TableCell>
            </TableRow>
            {storesDetails.map((store,index)=>{
                return <TableRow key={index}>
                    <TableCell className={clsx(classes.labelDetails)}>{store.storeName.toUpperCase()}</TableCell>
                    <TableCell className={clsx(classes.labelDetails)}><BsFillCircleFill size={15} color={store.status===1?colors.committed:store.status===2?colors.moderate:store.status===3?colors.notCommitted:'black'}/></TableCell>
                    <TableCell className={clsx(classes.labelDetails)}>{store.sort}</TableCell>
                </TableRow>
            })}
        </TableBody>
        </Table>
       </TableContainer>
            
       
       
        </Card>

    </div>
    )
}

export default withStyles(styles)(Dashboard)


