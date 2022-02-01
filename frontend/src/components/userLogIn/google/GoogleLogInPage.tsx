import React from "react";
import axios from "axios";
import GoogleLogIn from "react-google-login";
import GoogleIcon from "@mui/icons-material/Google";

import { ButtonStyle } from "../../style";

const clientId =
  "1052223541956-dhv3nmo7tc3rbmusl92subblp9oc30hs.apps.googleusercontent.com";
function GoogleLogInPage() {
  const dataGoogle = async (response: any) => {
    let res = await axios.post("/user/google-authenticate", {
      id_token: response?.tokenObj?.id_token,
    });
    const userId = res.data.userGoogleData._id;
    if (res.status === 200) {
      const userToken = res.data.token;
      localStorage.setItem("userToken", userToken);
    }
  };

  return (
    <div>
      <GoogleLogIn
        clientId={clientId}
        render={(renderProps) => (
          <ButtonStyle
            onClick={renderProps.onClick}
            disabled={renderProps.disabled}
          >
            <GoogleIcon />
          </ButtonStyle>
        )}
        buttonText=""
        onSuccess={dataGoogle}
        onFailure={dataGoogle}
        cookiePolicy={"single_host_origin"}
      />
    </div>
  );
}

export default GoogleLogInPage;
