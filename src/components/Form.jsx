import React from "react";

export default function Form ( { setIsReady, setTargetInfo }) {

    //Error Handling and Submit

    const [error, setError ] = React.useState({
        fileInput: true,
        nameInput: true,
        emailInput : true,
        gitnameInput: true,
    })
    
    const handleSubmit = (e) => {
        e.preventDefault()

        const formElements = e.target.elements


        const inputs = {
            fileInput: formElements.file,
            nameInput: formElements.name,
            emailInput: formElements.email,
            gitnameInput: formElements.gitname

        }

        let noErrors = true

        for(let input in inputs){
            if(!inputs[input].validity.valid){
                setError(prevErrors => ({...prevErrors, [input]: false}))
                noErrors = false
            }else{
                setError(prevErrors => ({...prevErrors, [input]: true}))
            }
        }
        
        if(noErrors){
            setIsReady(true)
            setTargetInfo({
                file : URL.createObjectURL(inputs.fileInput.files[0]),
                name: inputs.nameInput.value,
                email: inputs.emailInput.value,
                gitname: inputs.gitnameInput.value,
            })
        }

    }

    //Avatar handling

    const [picture, setPicture] = React.useState()
    const [fileSize, setFileSize] = React.useState(true)
    const fileInputRef = React.useRef(null);
    
    
    const handleChange = (e) => {
        
        const file = e.target?.files[0]
        if(file && file.size<500001){
            const imageURL =URL.createObjectURL(file)
            setPicture(imageURL)
            setFileSize(true)
            setError(prevErr => ({...prevErr, fileInput: true})) 
        }if(file && file.size>500000){
            setFileSize(false)
            fileInputRef.current.value = ""
        }
        
    }

    const handleClick = () => {
        setPicture(undefined)
        setFileSize(true)
        if(fileInputRef.current){
            fileInputRef.current.value = "" 
        }
 

    }

    //fileInputText

    const fileInputText = () => {
        if(!fileSize){
            return(
                <div className="error-div">
                    <img src={"Error Icon.png"} className="error-icon"/>
                    <p className="text-preset-7 ">File too large. Please upload a photo under 500KB.</p>
                </div>
            )
        }else if(!error.fileInput){
            return(
                <div className="error-div">
                    <img src={"Error Icon.png"} className="error-icon"/>
                    <p className="text-preset-7 ">Please upload a valid photo.</p>
                </div>
            )
        }else if(!picture){
            return(
                <div className="info-text">
                    <img src={"Info Icon.png"}/>
                    <p className="text-preset-7 info">Upload your photo (JPG or PNG, max size: 5MB).</p>
                </div>
            )
        }else{
            return null
        }
    }

    //Get values


    return(
        <div id="form">
            <form onSubmit={handleSubmit} noValidate>

                <div className="file-div">

                    <p className="text-preset-5 file-label">Upload Avatar</p>

                    {!picture? 
                    <label htmlFor="file" className="text-preset-5 file-input file-input-hover">
                        <div className="cloud-icon">
                            <img src={"Cloud Icon.svg"}/>
                        </div>
                        <p className="text-preset-6">Drag and drop or click to upload</p>                       
                    </label>
                    :
                    <div className="file-input avatar-input">
                        <img src={picture} className="avatar" alt="avatar-picture"/>
                        <div className="avatar-labels">
                            <button className="avatar-options text-preset-7" onClick={handleClick}>Remove image</button>
                            <label htmlFor="file" className="avatar-options text-preset-7">Change image</label>
                        </div>
                    </div>
                    }

                    <input
                    ref={fileInputRef}
                    onChange={handleChange}
                    id="file" 
                    className="text-preset-6" 
                    type="file" 
                    name="file"
                    accept="image/png, image/jpeg"
                    required
                    />

                    {fileInputText()}
                  
                </div>

                <div>
                    <label htmlFor="name"className="text-preset-5">Full Name</label>
                    <input
                    id="name"
                    className= {`text-preset-6 ${!error.nameInput? "invalid":""}`} 
                    type="text" 
                    name="name"
                    required
                    />
                    {!error.nameInput? 
                    <div className="error-div">
                        <img src={"Error Icon.png"} className="error-icon"/>
                        <p className="text-preset-7">Please enter your name.</p>
                    </div>
                    :null
                    }
                </div>

                <div>
                    <label className="text-preset-5">Email Address</label>
                    <input 
                    className={`text-preset-6 ${!error.emailInput? "invalid":""}`} 
                    type="email" 
                    placeholder="example@email.com"
                    name="email"
                    required
                    />
                    {!error.emailInput? 
                    <div className="error-div">
                        <img src={"Error Icon.png"} className="error-icon"/>
                        <p className="text-preset-7">Please enter a valid email address.</p>
                    </div>
                    :null
                    }
                </div>

                <div>
                    <label className="text-preset-5">GitHub Username</label>
                    <input 
                    className={`text-preset-6 ${!error.gitnameInput? "invalid":""}`} 
                    type="text" 
                    placeholder="@yourusername"
                    name="gitname" 
                    required
                    />
                    {!error.gitnameInput? 
                    <div className="error-div">
                        <img src={"Error Icon.png"} className="error-icon"/>
                        <p className="text-preset-7">Please enter your github username.</p>
                    </div>
                    :null
                    }
                </div>

                <button className="text-preset-5-extrabold" type="submit" >Generate My ticket</button>
            
            </form>
        </div>
    )
}