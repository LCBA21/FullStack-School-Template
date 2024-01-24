import { Paper,Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import '../styles/UserDetailsStyle.css'
import EditUser from './EditUser';

// npm install @mui/material @emotion/react @emotion/styled for table


function UserDetails() {

    const [userData,setData] = useState([]);
    const [userName,setName] = useState('');
    const [currentPage, setCurrentPage] = useState(0);
    const [totalPages, setTotalPages] = useState(0);
    const pageSize = 1;
    
  

    useEffect(()=>{

      result();
  
  },[currentPage,totalPages]);


  const result = async ()=>{

    try {
      const response = await axios.get(`http://localhost:8080/user/pagination/${currentPage}/${pageSize}`);
      if (Array.isArray(response.data.content)) {
        setData(response.data.content);
        setTotalPages(response.data.totalPages);
      } else {
        console.error("API response is not an array:", response.data);
      }
    } catch (error) {
        console.error(error);
    }

};

const getUserNmae = (userNane,e)=>{
    e.preventDefault();
    setName(userNane)
}





  return (
    <div className='container-table'>
      <Link className='back-arrow' to={'/admin'}>&#8592;</Link>
        <h3 className='title'>List of userData</h3>
        <div className=' px-4'>

        <TableContainer >
            <Table>
                
                <TableHead>
                <TableRow>
                    <TableCell>Username</TableCell>
                    <TableCell>First name</TableCell>
                    <TableCell>Last name</TableCell>
                    {/* <TableCell>Password</TableCell> */}
                    <TableCell>Image</TableCell>
                    <TableCell>Edit</TableCell>
                    <TableCell>Delete</TableCell>
                </TableRow>
                </TableHead>

                <TableBody>
                {userData.map((row) => (
                    <TableRow key={row.userName}>
                    <TableCell>{row.userName}</TableCell>
                    <TableCell>{row.firstName}</TableCell>
                    <TableCell>{row.lastName}</TableCell>
                    {/* <TableCell>Password</TableCell> */}
                    <TableCell><img className='photo' src={`data:image/jpeg;base64,${row.photo}`}/></TableCell>
                 
                    <TableCell>
                        <Button variant="contained" color="primary" onClick={(e)=>getUserNmae(row.userName,e)}>
                        Edit
                        </Button>
                    </TableCell>
                    <TableCell>
                        <Button variant="contained" color="secondary" >
                        Delete
                        </Button>
                    </TableCell>
                    </TableRow>
                ))}
                </TableBody>
            </Table>
        </TableContainer>
        <EditUser userName={userName} />
        {/* {console.log(userName)} */}
        </div>

        <div className='pagingButtonResult'>
                    <button className='leftResult' onClick={()=>setCurrentPage(currentPage - 1)} disabled={currentPage === 0}/>
                    <p>page: {currentPage + 1} of {totalPages}</p>
                    <button className='rightResult' onClick={()=>setCurrentPage(currentPage + 1)} disabled={currentPage === totalPages - 1}/>
                </div>
    </div>
  )
}

export default UserDetails
