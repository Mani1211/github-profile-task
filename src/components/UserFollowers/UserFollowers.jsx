import React from 'react'
import styles from './UserFollowers.module.css'
import Users from '../atoms/Users/Users'
import Box  from '@mui/material/Box';
import Profile from '../atoms/Profile/Profile';

const UserFollowers = (props) => {
  const {data} = props
  return (
    <Box className={styles["container"]}>
    <Box className={styles["profile"]}>
      <Profile userDetails={props.userDetails} />
    </Box>
    <Box className={styles["users--container"]}>
    {data.map((user, index)=>(
        <Users user={user} key={index}/>
    ))}
  </Box>
  </Box>
  )
}

export default UserFollowers