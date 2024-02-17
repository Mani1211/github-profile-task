import { useNavigate, useParams } from "react-router-dom";
import styles from "./UserDetails.module.css";
import { useEffect, useState } from "react";
import userService from "../../services/user.service";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { Typography } from "@mui/material";
import Overview from "../Overview/Overview";
import Repositories from "../Repositories/Repositories";
import UserFollowers from "../UserFollowers/UserFollowers";
import GitHubIcon from "@mui/icons-material/GitHub";
const UserDetails = () => {
  const { username } = useParams();
  const navigate = useNavigate();
  const [userDetails, setUserDetails] = useState({});
  const [repos, setRepos] = useState([]);
  const [starredRepos, setStarredRepos] = useState([]);
  const [followers, setFollowers] = useState([]);
  const [followings, setFollowings] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const getUserData = async () => {
    try {
      setLoading(true);
      const [
        userResponse,
        followersResponse,
        followingResponse,
        userReposResponse,
        userStarredReposResponse,
      ] = await Promise.all([
        userService.getUserByName(username),
        userService.getUserFollowers(username),
        userService.getUserFollwing(username),
        userService.getUserRepos(username),
        userService.getUserstarredRepos(username),
      ]);
      setUserDetails(userResponse);
      setRepos(userReposResponse);
      setStarredRepos(userStarredReposResponse);
      setFollowers(followersResponse);
      setFollowings(followingResponse);
      setLoading(false);
    } catch (error) {
      setError(true);
    }
  };
  useEffect(() => {
    getUserData();
  }, [username]);

  function CustomTabPanel() {
    switch (value) {
      case 0:
        return <Overview userDetails={userDetails} repos={repos} />;
        break;
      case 1:
        return <UserFollowers userDetails={userDetails} data={followers} />;
        break;
      case 2:
        return <UserFollowers userDetails={userDetails} data={followings} />;
        break;
      case 3:
        return <Repositories userDetails={userDetails} repos={repos} />;
        break;
      case 4:
        return <Repositories userDetails={userDetails} repos={starredRepos} />;
        break;
      default:
        return <Overview userDetails={userDetails} repos={repos} />;
        break;
    }
  }

  const tabs = [
    "Overview",
    "Followers",
    "Following",
    "Repositories",
    "Starred Repos",
  ];

  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box className={styles["userdetails--container"]}>
      <Box className={styles["userdetails--header"]}>
        <ArrowBackIcon
          cursor={"pointer"}
          onClick={() => {
            navigate("/");
          }}
        />

        <GitHubIcon />
        <Typography>{username}</Typography>
      </Box>
      <Box className={styles["userdetails--content"]}>
        <Tabs value={value} onChange={handleChange}>
          {tabs.map((tab, index) => {
            return <Tab label={tab} key={index} className={styles["tab--label"]} />;
          })}
        </Tabs>

        {error ? (
          <Box
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
            height={"90vh"}
            width={"100%"}
          >
            <Typography>
              Something went wrong please try agian later...
            </Typography>
          </Box>
        ) : (
          <>
            {loading ? (
              <Box
                display={"flex"}
                alignItems={"center"}
                justifyContent={"center"}
                height={"90vh"}
                width={"100%"}
              >
                <Typography>Loading...</Typography>
              </Box>
            ) : (
              <CustomTabPanel></CustomTabPanel>
            )}
          </>
        )}
      </Box>
    </Box>
  );
};

export default UserDetails;
