import React, { useState, useEffect } from "react";
import { Spinner } from "react-bootstrap";
import { useHistory } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import LoginInput from "src/components/common/input";
import {
  userDetailsRequest,
  updateProfileRequest,
} from "src/modules/profile/redux/action";
import { isAccessToken, getData } from "src/Utils/localStorageUtil";
import { PATH } from "src/constants/path";
import "./index.scss";

function UpdateProfile(props) {
  const [updateProfile, setUpdateProfile] = useState({
    firstName: "",
    lastName: "",
    imageUrl: "",
    imagePreviewUrl: "",
    file: "",
  });
  const dispatch = useDispatch();
  const router = useHistory();
  const UpdateProfileStatus = useSelector((state) => state.UpdateProfile);
  const userDetailsStatus = useSelector((state) => state.UserDetails);

  useEffect(() => {
    if (!isAccessToken()) {
      props.history.push(PATH.HOME);
    } else {
      dispatch(
        userDetailsRequest({
          userId: getData("userid"),
        })
      );
    }
  }, []);

  useEffect(() => {
    if (UpdateProfileStatus?.data?.error == 0) {
      router.push(PATH.PROFILE);
    }
  }, [UpdateProfileStatus]);

  useEffect(() => {
    if (userDetailsStatus?.data) {
      const firstName = userDetailsStatus?.data?.name?.first || "";
      const lastName = userDetailsStatus?.data?.name?.last || "";
      setUpdateProfile({
        ...updateProfile,
        firstName,
        lastName,
      });
    }
  }, [userDetailsStatus.data]);

  const _handleImageChange = (e) => {
    e.preventDefault();
    let reader = new FileReader();
    let file = e.target.files[0];
    let imageUrl = window.URL.createObjectURL(file);
    setUpdateProfile({ ...updateProfile, imageUrl: file });

    reader.onloadend = () => {
      setUpdateProfile({
        ...updateProfile,
        file: file,
        imagePreviewUrl: reader.result,
      });
    };
    reader.readAsDataURL(file);
  };

  const _handleSubmit = (e) => {
    e.preventDefault();
  };

  let $imagePreview = null;
  if (updateProfile.imagePreviewUrl) {
    $imagePreview = (
      <img src={updateProfile.imagePreviewUrl} alt='updateProfile' />
    );
  } else {
    $imagePreview = (
      <div className='previewText'>Please select an Image for Preview</div>
    );
  }
  const formData = new FormData();
  formData.append("image", updateProfile.file);
  formData.append("userId", getData("userid"));
  formData.append("firstName", updateProfile.firstName);
  formData.append("lastName", updateProfile.lastName);

  const handleSubmit = () => {
    dispatch(updateProfileRequest(formData));
  };

  return (
    <div>
      <div className='edit-profile'>
        <div className='update-user-img container'>
          <div className='imgPreview'>{$imagePreview}</div>
          <form onSubmit={(e) => _handleSubmit(e)}>
            <input
              className='fileInput'
              type='file'
              onChange={(e) => _handleImageChange(e)}
            />
          </form>
        </div>
        <div className='edit-user-detail mt-5 container'>
          <LoginInput
            currentValue={updateProfile.firstName}
            placeholder='First Name'
            type='text'
            handleOnChange={(e) => {
              setUpdateProfile({ ...updateProfile, firstName: e.target.value });
            }}
          />
          <br />
          <LoginInput
            placeholder='Last Name'
            currentValue={updateProfile.lastName}
            type='text'
            handleOnChange={(e) => {
              setUpdateProfile({ ...updateProfile, lastName: e.target.value });
            }}
          />
          <br />
        </div>
        <div className='d-flex justify-content-center'>
          <button
            type='submit'
            className='updateProfile'
            onClick={handleSubmit}
          >
            {UpdateProfileStatus?.isLoading ? (
              <Spinner animation='border' role='status'>
                <span className='sr-only'>Loading...</span>
              </Spinner>
            ) : (
              "Update Profile"
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
export default UpdateProfile;
