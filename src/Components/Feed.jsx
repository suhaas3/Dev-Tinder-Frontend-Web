import axios from 'axios'
import React, { useEffect } from 'react';
import {BASE_URL} from "../uitils/constants";
import { useDispatch, useSelector } from 'react-redux';
import { addFeed } from '../uitils/feedSlice';
import UserCard from './UserCard';


const Feed = () => {

  const feed = useSelector(store => store.feed);

  const dispatch = useDispatch();

  const getFeed = async () => {
    if (feed) return;
    try {
      const res = await axios.get(BASE_URL + "/user/feed", {
        withCredentials:true
      });
      dispatch(addFeed(res?.data.data));
    }
    catch (err) {
      console.error(err.message);
    }
  }

  useEffect(() => {
    getFeed();
  }, [])

  return feed && (
    <>

  <UserCard user={feed[0]}/>

    </>
  )
}

export default Feed
