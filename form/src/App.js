import './App.css';
import {useFormik} from "formik";
import {signUpSchema} from "./schemas";

const initialValues = {
  name: " ",
  email: " ",
  password: " ",
};

function App() {
  const {values, errors,touched, handleBlur, handleChange, handleSubmit} = useFormik ({
    initialValues : initialValues,
    validationSchema : signUpSchema,
    onSubmit : (values)=>{
         console.log(values);
    }
  })

 
  return (
    <div className="App">
       <form action="" onSubmit={handleSubmit} >
           <div>
               <label htmlFor="">Name</label>
               <input type="text" name='name' placeholder='name' value={values.name} onChange={handleChange} onBlur={handleBlur} />
               { errors.name && touched.name ? (<p className='form-error' > {errors.name} </p>) : null}
           </div>
           <div>
               <label htmlFor="">Email</label>
               <input type="email" name='email' placeholder='email' value={values.email} onChange={handleChange} onBlur={handleBlur} />
               { errors.email && touched.email ? (<p className='form-error' > {errors.email} </p>) : null}
           </div>
           <div>
               <label htmlFor="">password</label>
               <input type="password" name='password' placeholder='password' value={values.password} onChange={handleChange} onBlur={handleBlur} />
               { errors.password && touched.password ? (<p className='form-error' > {errors.password} </p>) : null}
           </div>

           <button>Submit</button>
       </form>
    </div>
  );
}

export default App;




