import React, {Fragment, useEffect, useState} from 'react';
import {BACKEND_URL} from "../src/Constant";

const App =  ({ Component, pageProps }) => {

    const [user, setUser] = useState(null)
    const [token, setToken] = useState("")

    const [type, setType] = useState("User")

    useEffect(() => {console.log(user, token)})

    const getUser = async () => {
        try {
            const res = await fetch(BACKEND_URL+"/user/data", {
                method: "GET",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
                credentials: "include",
            });
            console.log(res);
            const data = await res.json();

            if (res.status !== 200) {
                // throw new Error(res.error);
            }
        } catch (err) {
            //console.log(err);
            // window.open("/login");
        }
    };

  return (
    <Fragment>
      <Component user={user} token={token} type={type} setType={setType} setUser={setUser} setToken={setToken} {...pageProps} />
    </Fragment>
  );
};


export default App;
