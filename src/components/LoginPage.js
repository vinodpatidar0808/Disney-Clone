import React from 'react'


const LoginPage = ({changePage}) => {

  return (
    <div className="login-container">
        <div id="landing-page">
            <img src="../assets/images/cta-logo-one.svg" alt="Call to action logo" />
            <button onClick={()=> changePage()} id="cta-btn">Get all there</button>
            <p>Get Premier Access to Raya and the Last Dragon for an additional fee with a Disney+ subscription. As of 07/11/22, the price of Disney+ and The Disney Bundle will increase by $1.</p>
            <img src="../assets/images/cta-logo-two.png" alt="" />
        </div>
    </div>
  )
}

export default LoginPage