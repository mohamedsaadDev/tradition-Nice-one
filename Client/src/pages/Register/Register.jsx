import { useTranslation } from 'react-i18next';
import { registerUser } from '../../Redux/slice/registerSlice';
import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
const registersSchema =Yup.object().shape({
  firstName: Yup
    .string()
    .min(3, 'The name is short!')
    .max(10, 'The name is long!')
    .required('Required'),
    LastName: Yup.string()
    .min(3, 'The name is short!')
    .max(10, 'The name is long!')
    .required('Required'),
    email: Yup
    .string()
    .min(8, 'The email is short!')
    .max(40, 'The email is long!')
    .email('Enter a valid email address')
    .required('Email is Required'),
    password: Yup
    .string()
    .min(8, 'The password is short!')
    .max(25, 'The password is long!')
    .required('password is Required'),
});
const Registers = ()=> {
  const { t } = useTranslation();
  const dispatch = useDispatch()
  const navigate = useNavigate()
        const formik = useFormik({
          initialValues:{
            firstName: '',
            LastName: '',
            email: '',
            password: ''
          },
          validationSchema:registersSchema,
          onSubmit:(values) => {
            try{
              dispatch(registerUser(values));
              navigate('/')
          }catch(err){
              console.log(err);
          }
          }
        })
    return (
        <div>
          <h5 className='address-Registers'>{t('Createandaccount')}</h5>
          <form className='continer-form-Registers' onSubmit={formik.handleSubmit}>
            <div>
              <input
              type="text"
              className="form-control input-form border-input"
              id="firstName"
              placeholder={t("firstName")}
              name='firstName'
              value={formik.values.firstName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              />
            </div>
            
              {formik.touched.firstName && 
              formik.errors.firstName?
              <div id="username-error" className="alert alert-danger">{formik.errors.firstName}</div>
              :null}
            <div >
              <input
              type="text"
              className="form-control input-form border-input"
              id="lastname"
              placeholder={t("LastName")}
              name='LastName'
              value={formik.values.LastName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              />
            </div>
            {formik.touched.LastName && 
              formik.errors.LastName?
              <div id="username-error" className="alert alert-danger">{formik.errors.LastName}</div>
              :null}
            <div>
              <input
              type="text"
              className="form-control input-form border-input"
              id="email"
              placeholder={t('email')}
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              name='email'
              />
            </div>
            {formik.touched.email && 
              formik.errors.email?
              <div id="username-error" className="alert alert-danger">{formik.errors.email}</div>
              :null}
            <div >
              <input
              type="password"
              className="form-control input-form"
              id="password"
              placeholder={t('Password')}
              value={formik.values.password}
              name='password'
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}  
              />
            </div>
            {formik.touched.password && 
              formik.errors.password?
              <div id="username-error" className="alert alert-danger">{formik.errors.password}</div>
              :null}
            <p className='bg-light'>{t('Byregisteringyouacceptour')} <span className='privacy-terms-Registers'>{t('termsandconditions')}</span></p>
            <button type="submit" className="btn btn-submitform">{t('Register')} </button>
          </form>
        </div>
    )
}
export default Registers