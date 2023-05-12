import './Profile.scss';
import { useState, useEffect } from 'react';
import axios from 'axios';
import {useParams} from 'react-router';
import Menubar from '../menubar/Menubar';

export default function Profile() {
    const [user,setUser] = useState({});
    const userName = useParams().username;
    /* const PF = process.env.REACT_APP_IMAGE_URL;
     */
    useEffect(() => {
        /*  console.log('feed rendered'); */
        const fetchUser = async () => {
         
         const res = await axios.get(`/users/?username=${userName}`);
         setUser(res.data);
        }
         fetchUser();
       }, [userName])
  return (
    <>
    <Menubar />
    {/* <div className={styles.profile}>
        <Sidebar />
        <div className={styles.profileRight}>
            <div className={styles.profileRightTop}>
                <div className={styles.profileCover}>
                    <img className={styles.profileCoverImg} src={user.coverPicture ? PF + user.coverPicture : PF + "post/noCover.png"} alt='Profile cover image'/>
                    <img className={styles.profileUserImg} src={user.profilePicture ? PF + user.profilePicture : PF + "person/noAvatar.png"} alt='Profile user image'/>
                </div>
            </div>
            <div className={styles.profileInfo}>
                <h4 className={styles.profileInfoName}>{user.username}</h4>
                <span className={styles.profileInfoDesc}>{user.desc}</span>
            </div>
        <div className={styles.profileRightBottom}>
            <Feed username={userName}/>
            <Rightbar user={user} />
        </div>
        </div>
    </div> */}
    </>
  )
}
