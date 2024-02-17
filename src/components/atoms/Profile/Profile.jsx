import React from "react";
import styles from "./Profile.module.css";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import PeopleIcon from "@mui/icons-material/People";
import CorporateFareIcon from "@mui/icons-material/CorporateFare";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import InsertLinkIcon from "@mui/icons-material/InsertLink";
import DateRangeIcon from "@mui/icons-material/DateRange";
import { formatDate } from "../../../utils/utils";

const Profile = (props) => {
  const { userDetails } = props;

  const profileInfo = [
    {
      label: userDetails?.company,
      icon: <CorporateFareIcon fontSize="14px" />,
    },
    {
      label: userDetails?.location,
      icon: <LocationOnIcon fontSize="14px"/>,
    },
    {
      label: userDetails?.blog,
      icon: <InsertLinkIcon fontSize="14px"/>,
    },
    {
      label: `Joined in ${formatDate(userDetails?.created_at)}`,
      icon: <DateRangeIcon fontSize="14px"/>,
    },
  ];
  return (
    <Box className={styles["profile--container"]}>
      <img
        className={styles["profile--image"]}
        alt={userDetails?.login}
        src={userDetails?.avatar_url}
      />

      <Typography variant={"h4"}>{userDetails?.name}</Typography>
      <Typography variant="h5" mb={"16px"}>
        {userDetails?.login}
      </Typography>
      <Box display={"flex"} gap={"4px"}>
        <PeopleIcon />
        <Typography>{userDetails?.followers} followers</Typography>.
        <Typography>{userDetails?.following} following</Typography>
      </Box>
      {profileInfo.map((info) => {
        if (info.label) {
          return (
            <Typography className={styles["metadata"]} key={info.label}>
              {info.icon}
              {info.label}
            </Typography>
          );
        }
      })}
    </Box>
  );
};

export default Profile;
