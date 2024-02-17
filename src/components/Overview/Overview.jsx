import { useNavigate, useParams } from "react-router-dom";
import styles from "./Overview.module.css";
import { useEffect, useState } from "react";
import userService from "../../services/user.service";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { Typography } from "@mui/material";
import Profile from "../atoms/Profile/Profile";
import Repositories from "../Repositories/Repositories";
import RepoCard from "../atoms/RepoCard/RepoCard";
const Overview = (props) => {
  return (
    <Box className={styles["container"]}>
      <Box className={styles["profile"]}>
        <Profile userDetails={props.userDetails} />
      </Box>
      <Box>
        <Typography m={'24px 0px'}>Pinned Repos</Typography>
        <Box className={styles["repos--container"]}>
          {props?.repos.slice(0,5).map((repo, index) => {
            return <RepoCard repo={repo} key={index} />;
          })}
        </Box>
      </Box>
    </Box>
  );
};

export default Overview;
