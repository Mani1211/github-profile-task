import React from "react";
import styles from "./RepoCard.module.css";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import { formatDate } from "../../../utils/utils";
import { truncate } from "lodash";

const RepoCard = (props) => {
  const { repo } = props;
  const handleClick = () => {
    window.open(repo.html_url, "_blank");
  };

  const colors = ["#d92d20", "#93370d", "#0e9384", "#6941c6", "#b2ddff"]
  return (
    <Box className={styles["repo--card"]} onClick={handleClick}>
      <Box>
        <Typography className={styles["repo--name"]}>{repo.name}</Typography>
        <Typography className={styles["metadata"]}>
          {truncate(repo.description, {
            length: 120,
          })}
        </Typography>
      </Box>
      <Box display={"flex"} gap={"12px"} mt={"2px"} paddingBottom={"24px"} alignItems={'center'} >
        {repo.language && (
            <>
            <Box backgroundColor={`${colors[Math.round(Math.random() * 4)]} !important`} className={styles['language--color']}></Box>
          <Typography className={styles["metadata"]}>
            {repo.language}
          </Typography>
            </>
        )}
        <Typography className={styles["metadata"]}>
          Updated at {formatDate(repo.pushed_at)}
        </Typography>
      </Box>
    </Box>
  );
};

export default RepoCard;
