import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import '../CreateEvents/CreateEvent.css';

function EditEvent({profile, setProfile}) {

  const { currentUser } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  return (
    <div className='top'>
      {profile && profile._delegate.displayName}
    </div>
  )
}

export default EditEvent;