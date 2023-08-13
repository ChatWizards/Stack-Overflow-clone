import React,{useState} from "react";
import "./auth.css";
import icon from "../../images/icon.png";

function Auth(){
    const [isSignup,setisSignup] = useState(false);
    function check(){
        setisSignup(!isSignup);
    }
    return <section className="auth-components">
        {isSignup && (
        <div class="flex--item fs-body2 mr48 mb128 wmx4 md:d-none">
    <h1 class="fs-headline1 mb32 lh-xs">Join the Stack Overflow community</h1>
    <div class="d-flex mb24">
        <div class="flex--item fc-blue-500 mr8">
            <svg width="26" height="26" class="svg-icon mtn2"><path opacity=".5" d="M4.2 4H22a2 2 0 012 2v11.8a3 3 0 002-2.8V5a3 3 0 00-3-3H7a3 3 0 00-2.8 2z"/><path d="M1 7c0-1.1.9-2 2-2h18a2 2 0 012 2v12a2 2 0 01-2 2h-2v5l-5-5H3a2 2 0 01-2-2V7zm10.6 11.3c.7 0 1.2-.5 1.2-1.2s-.5-1.2-1.2-1.2c-.6 0-1.2.4-1.2 1.2 0 .7.5 1.1 1.2 1.2zm2.2-5.4l1-.9c.3-.4.4-.9.4-1.4 0-1-.3-1.7-1-2.2-.6-.5-1.4-.7-2.4-.7-.8 0-1.4.2-2 .5-.7.5-1 1.4-1 2.8h1.9v-.1c0-.4 0-.7.2-1 .2-.4.5-.6 1-.6s.8.1 1 .4a1.3 1.3 0 010 1.8l-.4.3-1.4 1.3c-.3.4-.4 1-.4 1.6 0 0 0 .2.2.2h1.5c.2 0 .2-.1.2-.2l.1-.7.5-.7.6-.4z"/></svg>
        </div>
        <div class="flex--item">Get unstuck &#x2014; ask a question</div>
    </div>
    <div class="d-flex mb24">
        <div class="flex--item fc-blue-500 mr8">
            <svg width="26" height="26" class="svg-icon mtn2"><path d="M12 .7a2 2 0 013 0l8.5 9.6a1 1 0 01-.7 1.7H4.2a1 1 0 01-.7-1.7L12 .7z"/><path opacity=".5" d="M20.6 16H6.4l7.1 8 7-8zM15 25.3a2 2 0 01-3 0l-8.5-9.6a1 1 0 01.7-1.7h18.6a1 1 0 01.7 1.7L15 25.3z"/></svg>
        </div>
        <div class="flex--item">Unlock new privileges like voting and commenting</div>
    </div>
    <div class="d-flex mb24">
        <div class="flex--item fc-blue-500 mr8">
            <svg width="26" height="26" class="svg-icon mtn2"><path d="M14.8 3a2 2 0 00-1.4.6l-10 10a2 2 0 000 2.8l8.2 8.2c.8.8 2 .8 2.8 0l10-10c.4-.4.6-.9.6-1.4V5a2 2 0 00-2-2h-8.2zm5.2 7a2 2 0 110-4 2 2 0 010 4z"/><path opacity=".5" d="M13 0a2 2 0 00-1.4.6l-10 10a2 2 0 000 2.8c.1-.2.3-.6.6-.8l10-10a2 2 0 011.4-.6h9.6a2 2 0 00-2-2H13z"/></svg>
        </div>
        <div class="flex--item">Save your favorite tags, filters, and jobs</div>
    </div>
    <div class="d-flex mb24">
        <div class="flex--item fc-blue-500 mr8">
            <svg width="26" height="26" class="svg-icon mtn2"><path d="M21 4V2H5v2H1v5c0 2 2 4 4 4v1c0 2.5 3 4 7 4v3H7s-1.2 2.3-1.2 3h14.4c0-.6-1.2-3-1.2-3h-5v-3c4 0 7-1.5 7-4v-1c2 0 4-2 4-4V4h-4zM5 11c-1 0-2-1-2-2V6h2v5zm11.5 2.7l-3.5-2-3.5 1.9L11 9.8 7.2 7.5h4.4L13 3.8l1.4 3.7h4L15.3 10l1.4 3.7h-.1zM23 9c0 1-1 2-2 2V6h2v3z"/></svg>
        </div>
        <div class="flex--item">Earn reputation and badges</div>
    </div>
    <div style={{marginLeft:"10px"}}>
        <small>Collaborate and share knowledge with a private group for FREE.<br/>
        <span style={{color:"#0a95ff"}}>Get Stack Overflow for Teams free for up to 50 users.</span></small>
    </div>
</div>
        )}
        <div className="auth-container">
        {!isSignup && <img src={icon} alt="icon" style={{marginBottom: "16px"}}></img>}
            <form>
                {isSignup && (
                    <label htmlFor="name">
                        <h4>Display name</h4>
                        <input type="name" name="name" id="name" />
                    </label>
                )}
                <label htmlFor="email">
                    <h4>Email</h4>
                    <input type="email" name="email" id="email" />
                </label>
                <label htmlFor="password">
                    <div style={{display:"flex", justifyContent: "space-between", alignItems:"center"}}>
                        <h4 style={{marginTop: "16px"}}>password</h4>
                        {!isSignup && <h4 style={{marginTop: "16px"}} id="forgot">Forgot password?</h4>}
                    </div>
                    <input type="password" name="password" id="password" />
                    {isSignup && <p style={{fontSize:"small",color:"#6a737c",marginTop:"0px"}}>Passwords must contain at least eight characters, including at least 1 letter and 1 number.</p>}
                </label>
                {isSignup && (
                    <label style={{display:"flex",position:"relative"}}>
                        <input type="checkbox" style={{fontSize:"16px",width:"16px",position:"absolute",top:"14px"}}></input>
                        <p style={{fontSize:"small",position:"relative",left:"30px"}}>Opt-in to receive occasional product<br/> updates, user research invitations, company announcements, and digests.</p>
                    </label>
                )}
                <button className="auth-submit-btn" type="submit">{ isSignup ? "Sign up" : "Login"}</button>
                {isSignup && <p style={{color:"#6a73a6", fontSize:"small",marginLeft:"10%",marginBottom:"30px"}}>By clicking “Sign up”, you agree to our <span style={{color : "#0074cc"}}> terms of service, privacy policy</span> and <span style={{color : "#0074cc"}}>cookie policy</span></p>}
            </form>
            <p className="checking-account">
                {isSignup ? "already have an account?" : "Don't have an account?"}
                <button type="submit" className="auth-check" onClick={check}>{isSignup? "Login" : "Sign up"}</button>
            </p>
        </div>
    </section>
}

export default Auth