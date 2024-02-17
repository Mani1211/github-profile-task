import React from "react";
import styles from "./Repositories.module.css";
import RepoCard from "../atoms/RepoCard/RepoCard";
import Profile from "../atoms/Profile/Profile";
import Box from "@mui/material/Box";

const Repositories = (props) => {
  return (
    <Box className={styles["container"]}>
      <Box className={styles["profile"]}>
        <Profile userDetails={props.userDetails} />
      </Box>
        <Box className={styles["repos--container"]}>
          {props.repos.map((repo, index) => (
            <RepoCard repo={repo} key={index}/>
          ))}
        </Box>
    </Box>
  );
};

export default Repositories;
