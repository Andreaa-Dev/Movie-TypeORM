import React from "react";

function GoogleLogIn() {
  const dataGoogle = async (response: any) => {
    let res = await axios.post(
      "/user/google-authenticate,{id_token:response?.token}"
    );
  };
  return <div></div>;
}

export default GoogleLogIn;
