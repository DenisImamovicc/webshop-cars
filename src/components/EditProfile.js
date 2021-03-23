import { useContext, useState } from 'react';
import { UserContext } from '../contexts/UserContext';
import style from '../css/EditProfile.module.css';


const EditProfile = () => {
    const { setIsClicked, loggedInUser } = useContext(UserContext)

    const [emailMismatch, setEmailMismatch] = useState(false);
    const [passwordMismatch, setPasswordMismatch] = useState(false);

    const backButton = (e) => {
        e.preventDefault();
        setIsClicked(false)
    }

    const editHandler = (e) => {
        e.preventDefault();
        const editProfileInputList = document.querySelectorAll("input");
        let error = false;

        if (editProfileInputList[4].value !== editProfileInputList[5].value) {
            editProfileInputList[5].classList.add(`${style.errorBorder}`);
            setEmailMismatch(true);
            error = true;
        }
        if (editProfileInputList[6].value !== editProfileInputList[7].value) {
            editProfileInputList[7].classList.add(`${style.errorBorder}`);
            setPasswordMismatch(true);
            error = true;
        }
        if (error) return

        editProfileInputList.forEach(element => {
            loggedInUser[element.name] = element.value;
        })
        setIsClicked(false);
    }

    const removeError = (e, setter) => {
        e.target.classList.remove(`${style.errorBorder}`)
        setter(false);
    }

    return (
        <div>
            <h1 className={style.changeHeading}>Edit Profile</h1>
            <form onSubmit={editHandler}>
                <div className={`row ${style.changeForm}`}>
                    <div className={`col-12 col-sm-6 ${style.changeContainer}`}>
                        <label htmlFor="changeFullName" className={style.changeText}>Full Name:</label>
                        <input className="form-control" type="text" id="changeFullName" name="fullName" defaultValue={loggedInUser.fullName} />

                        <label htmlFor="changeSocialSecurityNumber" className={style.changeText}>Social Security Number:</label>
                        <input className="form-control" type="text" id="changeSocialSecurityNumber" name="socialSecurityNumber" defaultValue={loggedInUser.socialSecurityNumber} />

                        <label htmlFor="changeUserName" className={style.changeText}>Username:</label>
                        <input className="form-control" type="text" id="changeUsername" name="userName" defaultValue={loggedInUser.userName} />

                        <label htmlFor="changePhoneNumber" className={style.changeText}>Phone Number:</label>
                        <input className="form-control" type="text" id="changePhoneNumber" name="phoneNumber" defaultValue={loggedInUser.phoneNumber} />
                    </div>

                    <div className={`col-12 col-sm-6 ${style.changeContainer}`}>
                        <label htmlFor="changeEmail" className={style.changeText}>Email:</label>
                        <input className="form-control" type="text" id="changeEmail" name="email" defaultValue={loggedInUser.email} />

                        <div className={style.inputDiv}>
                            <label htmlFor="changeConfirmEmail" className={style.changeText}>Confirm Email Address:</label>
                            <input className="form-control" type="text" id="changeConfirmEmail" name="confirmEmail" defaultValue={loggedInUser.email} onChange={(e) => removeError(e, setEmailMismatch)}/>
                            {emailMismatch && <p className={style.errorText}>E-mail does not match</p>}
                        </div>

                        <label htmlFor="changePasssword" className={style.changeText}>Password:</label>
                        <input className="form-control" type="text" id="changePassword" name="password" defaultValue={loggedInUser.password} />

                        <div className={style.inputDiv}>
                            <label htmlFor="changeConfirmPassword" className={style.changeText}>Confirm Password:</label>
                            <input className="form-control" type="text" id="changeConfirmPassword" name="confirmPassword" defaultValue={loggedInUser.password} onChange={(e) => removeError(e, setPasswordMismatch)}/>
                            {passwordMismatch && <p className={style.errorText}>Password does not match</p>}
                        </div>
                    </div>
                </div>

                <div className={style.changeButtons}>
                    <button type="submit" className={`btn ${style.changeSubmitBtn}`}>Submit</button>
                    <button type="button" className={`btn ${style.changeBackBtn}`} onClick={backButton}>Back</button>
                </div>
            </form>
        </div>
    );
}

export default EditProfile;