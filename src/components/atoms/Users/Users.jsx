import styles from "./Users.module.css";
import { Typography, Avatar, Button } from "@mui/material";
import Visibility from '@mui/icons-material/Visibility'
import Box from '@mui/material/Box';
import userService from "../../../services/user.service";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Users = (props) => {
  const navigate = useNavigate()
  const {user} = props
  const handleClick = () => {
    navigate(`/user-details/${user.login}`)
  };
  return (
    <Box className={styles["user--card"]} onClick={handleClick}> 
        <Avatar alt="profile-image" src={user.avatar_url}/>
        <Typography className={styles["user--name"]}>{user.login}</Typography>
    </Box>
  );
};

export default Users;
