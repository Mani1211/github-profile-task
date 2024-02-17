import styles from "./UserList.module.css";
import { Typography, Avatar, Button } from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import Box from "@mui/material/Box";
import userService from "../../services/user.service";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const UsersList = () => {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  const viewProfile = (user) => {
    navigate(`/user-details/${user}`);
  };

  useEffect(() => {
    userService
      .getUsers()
      .then((data) => {
        setUsers(data);
      })
      .catch((err) => {
        console.log("err", err);
      });
  }, []);




  return (
    <div>
      <Box className={styles['header']}>
        <Typography variant="h4">
          Cloudbees Frontend Task
        </Typography>
      </Box>

       {/* Firstname and lastname is not present in api so only displaying username and profile picturegit  */}
      <Box className={styles["user--list"]}>
        <Box className={styles["list--details--header"]}>
          <Box className={styles["table--header"]} flexBasis={"5% !important"}>
            <Box className={styles["header__title"]}>
              <Box className={styles["wrapper"]}>Id</Box>
            </Box>
          </Box>
          <Box className={styles["table--header"]} flexBasis={"40% !important"}>
            <Box className={styles["header__title"]}>
              <Box className={styles["wrapper"]}>Login Name</Box>
            </Box>
          </Box>
          <Box className={styles["table--header"]}>
            <Box className={styles["user--data"]}>
              <Box className={styles["wrapper"]}>Profile Picture</Box>
            </Box>
          </Box>
          <Box className={styles["table--header"]}>
            <Box className={styles["user--data"]}>
              <Box className={styles["wrapper"]}>Profile Type</Box>
            </Box>
          </Box>
          <Box className={styles["table--header"]}>
            <Box className={styles["user--data"]}>
              <Box className={styles["wrapper"]}>Actions</Box>
            </Box>
          </Box>
        </Box>
        {users.map((user, index) => (
          <Box className={styles["single--list"]} key={index}>
            <Box className={styles["list--details"]}>
              <Box
                className={styles["table--value"]}
                flexBasis={"5% !important"}
              >
                <Typography className={styles["header__title"]}>
                  {user.id}
                </Typography>
              </Box>
              <Box
                className={styles["table--value"]}
                flexBasis={"40% !important"}
              >
                <Typography
                  className={`
                    ${styles["header__title"]} 
                  `}
                >
                  {user.login}
                </Typography>
              </Box>
              <Box className={styles["table--value"]}>
                <Avatar alt={user.login} src={user.avatar_url} />
              </Box>
              <Box className={styles["table--value"]}>
                <Typography className={styles["header__title"]}>
                  User
                </Typography>
              </Box>
              <Box className={styles["table--value"]}>
                <Button
                  variant={"outlined"}
                  className={styles["button"]}
                  onClick={() => {
                    viewProfile(user.login);
                  }}
                  startIcon={<Visibility />}
                >
                  View
                </Button>
              </Box>
            </Box>
          </Box>
        ))}
      </Box>
    </div>
  );
};

export default UsersList;
