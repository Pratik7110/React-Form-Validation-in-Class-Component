import React from "react";

class MainFormValidationClass extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  
            name:'',
            email:'',
            mobile:'',
            semester:'',
            gender:'',
            message:'',
            password:'',
            Cpassword:'',
            checkbox:'',
            errors:{}
         };
    }

    handleChange(e){
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    formValidation(){
        const {name,email,mobile,semester,gender,message,password,Cpassword,checkbox}=this.state;
        let isValid=true;
        const errors={};

        if(!name){
            errors.name='Name is Required';
            isValid=false;
        }
        // else if(name.length<5){
        //     errors.name='Name must be greater than 3 Characters ';
        //     isValid=false;
        // }
        if(!email){
            errors.email='Enter Email';
            isValid=false;
        }
        if(!mobile){
            errors.mobile='Enter Mobile';
            isValid=false;
        }
        else if(mobile.length<10 || mobile.length>10){
            errors.mobile='Mobile Number must be 10 Characters';
            isValid=false;
        }
        if(!semester){
            errors.semester='Enter Semester';
            isValid=false;
        }
        if(!gender){
            errors.gender='Enter Gender';
            isValid=false;
        }
        if(!message){
            errors.message='Enter Message';
            isValid=false;
        }
        if(!password){
            errors.password='Enter Password';
            isValid=false;
        }
        if(!Cpassword){
            errors.Cpassword='Confirm Password';
            isValid=false;
        }
        if(Cpassword!==password){
            errors.Cpassword='Password does not match';
            isValid=false;
        }
        if(!checkbox){
            errors.checkbox='Please Select Checkbox';
            isValid=false;
        }
        this.setState({errors});
        return isValid;

    }

    handleSubmit(e){
        
        const isValid = this.formValidation();
        if(isValid){
            this.setState({
                name:'',
                email:'',
                mobile:'',
                semester:'',
                gender:'',
                message:'',
                password:'',
                Cpassword:'',
                checkbox:'',
                errors:{}
            })
        } 
        else{
            e.preventDefault();
        }
    }
    render() {
        const {name,email,mobile,message,password,Cpassword,errors,semester}=this.state;
        
        return (
            <React.Fragment>
                <h2>Form Validation</h2>
                <form onSubmit={this.handleSubmit.bind(this)}>
                    {/* {
                        Object.keys(errors).map(key=>
                            <div key={key} style={{color:'red'}}>
                                {errors[key]}
                            </div>)
                    } */}
                    Name:
                    <input
                    type='text'
                    name='name'
                    onChange={this.handleChange.bind(this)}
                    value={name}
                    pattern="[A-Za-z]{3,10}"    />
                    <span>Name must be between 3 to 10 characters and should only contain Alphabets</span>
                    <span style={{color:'red'}}>{errors.name}</span>
                    <br/>
                    Email:
                    <input type='email' name='email' onChange={this.handleChange.bind(this)} value={email}/>
                    <span style={{color:'red'}}>{errors.email}</span>
                    <br/>
                    Mobile:
                    <input type='number' name='mobile' onChange={this.handleChange.bind(this)} value={mobile}/>
                    <span style={{color:'red'}}>{errors.mobile}</span>
                    <br/>
                    Semester:
                        <select name="semester" onChange={this.handleChange.bind(this)} value={semester}>
                            <option value={0} defaultValue>select</option>
                            <option value={1}>1</option>
                            <option value={2}>2</option>
                            <option value={3}>3</option>
                            <option value={4}>4</option>
                            <option value={5}>5</option>
                            <option value={6}>6</option>
                        </select> 
                        <span style={{color:'red'}}>{errors.semester}</span>
                        <br/>
                    Gender:
                        <input type='radio' name='gender' onChange={this.handleChange.bind(this)} value='male'/>Male
                        <input type='radio' name='gender' onChange={this.handleChange.bind(this)} value='female'/>Female
                        <span style={{color:'red'}}>{errors.gender}</span>
                    <br/>
                    Message:
                    <textarea name='message' onChange={this.handleChange.bind(this)} value={message}></textarea>
                    <span style={{color:'red'}}>{errors.message}</span>
                    <br/>
                    Password:
                    <input type='password' name='password' onChange={this.handleChange.bind(this)} value={password}/>
                    <span style={{color:'red'}}>{errors.password}</span>
                    <br/>
                    Confirm Password:
                    <input type='password' name='Cpassword' onChange={this.handleChange.bind(this)} value={Cpassword}/>
                    <span style={{color:'red'}}>{errors.Cpassword}</span>
                    <br/>
                    <input type='checkbox' name='checkbox' onChange={this.handleChange.bind(this)}/>
                    I agree to the terms and conditions
                    <span style={{color:'red'}}>{errors.checkbox}</span>
                    <br/>
                    <input type='submit' value='Register'/>

                </form>
            </React.Fragment>
        );
    }
}

export default MainFormValidationClass;