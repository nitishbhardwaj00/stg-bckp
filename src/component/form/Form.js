import React , {useState} from 'react';

const Form = () => {

const [user , setUser] = useState({
    name:"",
    phone:"",
    email:"",
    message:"",

});

const [select , setSelect] = useState("");

let name , value;
const userData = (e) => {
    name = e.target.name;
    value = e.target.value;
    setUser({...user , [name]: value,});
}



const postData = async(e) =>{
    e.preventDefault();


const { name , phone , email , message} = user;

    if(name && phone && email && message){
        const res = await fetch("https://frontendexpert-4c73a-default-rtdb.firebaseio.com/frontendexpert.json",
    {
        method: "POST",
        headers: {
            "Content-Type": "application/JSON",
        },

        body: JSON.stringify({
            name,
            phone,
            email,
            message,
            select
        })
    }
    );

    if (res) {
        setUser({
            name:"",
            phone:"",
            email:"",
            message:"",
            select:""
        });
        alert('Data has been sent successfully');
    }
    } else{
            alert('All feilds are manadatory');
    }
};

    return (
        
        <form className="form" method="POST">
            <h1 className="lightheadline mb-30">In which courses are you interested in?</h1>
            <label>
                <p className="label-title mt-15"> Full Name</p>
                <input 
                type="text"
                className="form-input" 
                name="name" 
                value={user.name}
                autoComplete="off"
                placeholder="Write your full name"
                onChange={userData}
                />
            </label>


            <label>
                <p className="label-title mt-15">Phone Number</p>
                <input 
                type="phone"
                className="form-input" 
                name="phone" 
                value={user.phone}
                autoComplete="off"
                placeholder="Write your phone number"
                onChange={userData}
                />
            </label>
            <label>
                <p className="label-title mt-15">Email</p>
                <input 
                type="email"
                className="form-input" 
                name="email" 
                value={user.email}
                autoComplete="off"
                placeholder="Write your e-mail address"
                onChange={userData}
                />
            </label>
            <label>
                <p className="label-title mt-15">Select your courses</p>
                
            <select 
            name="Select your courses"
            onChange={(e) => setSelect(e.target.value)}
            >
                
                <option className="form-input" value="Begineer Course ( ₹ 499/-)">Begineer Course ( ₹ 499/-) </option>
                <option className="form-input" value="Intermediate Course ( ₹ 4999/-)">Intermediate Course ( ₹ 4999/-)</option>
                <option className="form-input" value="Expert Course ( ₹ 5999/-)">Expert Course ( ₹ 5999/-)</option>
                
            </select>
            </label>
            

            <label>
                <p className="label-title mt-15">Write any suggestion or Query</p>
                <textarea 
                type="text"
                className="form-input" 
                name="message" 
                value={user.message}
                autoComplete="off"
                placeholder="Write your interest here..."
                onChange={userData}
                />
            </label>

            <label>
                <input 
                type="submit"
                className="primary-btn btn submit-btn mt-15" 
                name="submit" 
                value="Submit"
                onClick = {postData}
                />
            </label>
        </form>
    )
}

export default Form
