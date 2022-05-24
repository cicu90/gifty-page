import React, { useEffect, useState } from "react";
import { useAuth, upload } from "../../Firebase/Firebase";
import './user.scss';


const User = () => {
  const currentUser = useAuth();
  const [fieldPhoto, setFieldPhoto] = useState(null);
  const [loading, setLoading] = useState(false);
  const [photoURL, setPhotoURL] = useState(
    "https://thumbs.dreamstime.com/b/signo-de-ne%C3%B3n-usuario-ilustraci%C3%B3n-vectorial-la-promoci%C3%B3n-interfaz-166209321.jpg"
  );

  function handleChange(e) {
      if (e.target.files[0]) {
        setFieldPhoto(e.target.files[0])
      }
  }
  function handleClick() {
      upload(fieldPhoto, currentUser, setLoading);
  }
  useEffect(() => {
    if (currentUser?.photoURL) {
      setPhotoURL(currentUser.photoURL);
    }
  }, [currentUser]);

  return (
    <div className="UserPhoto">
      <input type="file" onChange={handleChange} />
      <button disable={loading || !fieldPhoto} onClick={handleClick}>Upload</button>
      <img src={photoURL} alt="User" className="User-Avatar" />
    </div>
  );
};

export default User;
