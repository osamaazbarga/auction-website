import React, { useState, useEffect, StrictMode } from 'react'
import { Field, Form, Formik, FormikProps, useField } from 'formik';
import { SingleUploader, MultiUploader, Dropzone } from './Uploader/Uploaders';
import * as serviceWorker from './serviceWorker'
import { render } from 'react-dom';
import Api from '../Api/MainAPI';
import './Addproduct.css'
import yup from "yup";
// import Dropzone from "react-dropzone";
import Thumb from "./Thumb";
import Fileuploadscreen from './Uploader/Fileuploadscreen';
import { useHistory } from 'react-router'
import { Link } from 'react-router-dom'

export default function Addproduct() {
  const history = useHistory()
  const [categoryList, setCategoryList] = useState([])
  const user = JSON.parse(localStorage.getItem('user'))
  // const [singleFile,setSingleFile]=useState('')
  const [productInfo, setProductInfo] = useState([])
  useEffect(() => {
    if (!user) {
      history.push("/register")
    }

    getCategoriesApi()
  }, [])

  const postProductApi = async (values) => {
    let formData = new FormData();
    //   for ( var key in values.file ) {
    //     formData.append(key, values.file[key]);
    //     console.log(values.file[key]);

    // }

    for (let i = 0; i < values.file.length; i++) {
      const file = values.file[i];
      formData.append('images', file);
      // console.log(file);
    }
    console.log(values);
    for (const key in values) {
      console.log(key);
      formData.append('images', { key: values[key] });
    }

    // for (let i = 0; i < values.length; i++) {
    //   console.log("aaaa"+values.title);

    // }

    console.log(formData);
    // formData.append('images',values.title);
    // let options = { content: formData };

    const config = {
      headers: {
        'content-type': 'multipart/form-data'
      }
    };
    // console.log(formData.getAll('myfile').toString());

    const productinputs = {
      // username:String(values.username),
      title: String(values.title),
      country: String(values.country),
      category: String(values.category),
      condition: String(values.condition),
      // pic:values.file,
      meta_data: formData.getAll('images'),
      discription: String(values.description),
      price: Number(values.price),
      auctiondays: Number(values.auctiondays),

    }
    formData.append('images', productinputs);
    console.log(formData.getAll('images'));
    const req = await Api.post('api/products/addproduct', {
      // body: JSON.stringify(productinputs),
      customerID: String(user.user.customerID),
      title: String(values.title),
      category: String(values.category),
      condition: String(values.condition),
      // pic:values.file,
      // meta_data:formData.getAll('images'),
      discription: String(values.description),
      price: Number(values.price),
      auctiondays: Number(values.auctiondays),
      country: String(values.country),
      shippingprice:String(values.shippingprice),
      shippingwith:String(values.shippingwith)

    })
    console.log(req);
    console.log(req.data.productID);
    setProductInfo(req.data)
    const addpic = await Api.put(`api/products/addproduct/${req.data.productID}`, formData, config)

  }

  const getCategoriesApi = async () => {
    const req = await Api.get('api/categories')
    console.log(req.data);
    setCategoryList(req.data)
  }


  



  const MyTextArea = ({ label, ...props }) => {
    // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
    // which we can spread on <input> and alse replace ErrorMessage entirely.
    const [field, meta] = useField(props);
    return (
      <>
        <label className="uptitle" htmlFor={props.id || props.name}>{label}</label>
        <textarea className="inputarea" {...field} {...props} />
        {meta.touched && meta.error ? (
          <div className="error">{meta.error}</div>
        ) : null}
      </>
    );
  };
  return (
    <div className="container">
      <Formik
        initialValues={{ username: localStorage.getItem("user"), title: "", category: "", condition: "", description: "", file: null, auctiondays: 0, price: 0, shippingprice: 0, shippingwith: "", country: "" }}

        onSubmit={async values => {
          console.log(values.country);
          postProductApi(values)
        }}
      >
        {({ errors, touched, setFieldValue }) => (
          <Form>
            <form>
              <div className="form-group mt-3">
                <div className="uptitle">Title</div>
                <Field className="input" name="title" type="text" />
              </div>
              <div className="form-group">
                <div className="uptitle">Category</div>
                <Field className="input" name="category" as="select">
                  <option value={101}> ---Choose tutorial--- </option>
                  {
                    categoryList.map((cat) => {
                      return (<option value={cat.categoryID}>{cat.title}</option>)
                    })
                  }
                </Field>
              </div>

              <MyTextArea
                label="Description"
                name="description"
                rows="6"
                cols="90" />
              <div className="d-flex justify-content-between w-100">

                <div className="form-group">
                  <div className="uptitle">Condition</div>
                  <Field className="form-control" name="condition" as="select">
                    <option value="0"> - </option>
                    <option value="new"> New </option>
                    <option value="used"> Used </option>
                  </Field>
                </div>

                <div className="form-group">
                  <div className="uptitle">Upload File</div>
                  <from action="/products/addproduct" enctype="multipart/from-data" method="POST">
                    <input type="file" className="form-control-file" name="images" id="fromFile" multiple onChange={(event) => { setFieldValue("file", event.currentTarget.files) }} />
                  </from>
                </div>


              </div>





              {/* <Dropzone className="dropzone" accept="image/*" onDrop={(acceptedFiles) => {
                  // do nothing if no files
                  if (acceptedFiles.length === 0) { return; }
    
                  // on drop we add to the existing files
                  setFieldValue("files", values.files.concat(acceptedFiles));
                }}>
                  {({ isDragActive, isDragReject, acceptedFiles, rejectedFiles }) => {
                    if (isDragActive) {
                      return "This file is authorized";
                    }
    
                    if (isDragReject) {
                      return "This file is not authorized";
                    }
    
                    if (values.files.length === 0) { 
                      return <p>Try dragging a file here!</p>
                    }
    
                    return values.files.map((file, i) => (<Thumb key={i} file={file} />));
                  }}
                </Dropzone> */}

              {/* <Field className="input" name="password" type="password" placeholder="Password"/>
              <Field className="input" name="passwwordconf" type="password" placeholder="Confirm Password"/> */}
              <div className="row">
                <div className="col-6">
                  <div className="uptitle">Price</div>
                  <Field className="input" name="price" type="number" />
                </div>
                <div className="col-6">
                  <div className="uptitle">Action Days</div>
                  <Field className="input" name="auctiondays" type="number" />
                </div>



                {/* <div className="row">
                <div className="col-6">
                  <div className="uptitle">Action Days</div>
                  <Field className="input" name="auctiondays" type="number"/>
                </div> */}
                {/* <div className="uptitle">Auction Days</div>
              <Field className="input drop" name="auctiondays" as="select">
              <option value="none"> - </option>
              <option value="3"> 3 Days </option>
              <option value="5"> 5 Days </option>
              <option value="7"selected> 7 Days </option>
              <option value="10"> 10 Days </option>

              </Field>               */}
              </div>
              <div className="row">
                <div className="col">
                  <div className="form-group">

                    <div className="uptitle">Shipping Price</div>
                    <Field className="form-control" name="shippingprice" type="number" />

                  </div>

                </div>

                <div className="col">
                  <div className="form-group">

                    <div className="uptitle">Shipping With</div>
                    <Field className="input" name="shippingwith" type="text" />

                  </div>
                </div>

              </div>

              
              <div className="uptitle">Country</div>
              {/* <Field className="input" name="country" type="text"/> */}
              {/* <select class="selectpicker country" data-flag="true" ></select> */}
              <Field id="country" name="country" as="select" className="form-control">
                <option>select country</option>
                <option value="Afghanistan">Afghanistan</option>
                <option value="Aland Islands">Aland Islands</option>
                <option value="Albania">Albania</option>
                <option value="Algeria">Algeria</option>
                <option value="American Samoa">American Samoa</option>
                <option value="Andorra">Andorra</option>
                <option value="Angola">Angola</option>
                <option value="Anguilla">Anguilla</option>
                <option value="Antarctica">Antarctica</option>
                <option value="Antigua and Barbuda">Antigua and Barbuda</option>
                <option value="Argentina">Argentina</option>
                <option value="Armenia">Armenia</option>
                <option value="Aruba">Aruba</option>
                <option value="Australia">Australia</option>
                <option value="Austria">Austria</option>
                <option value="Azerbaijan">Azerbaijan</option>
                <option value="Bahamas">Bahamas</option>
                <option value="Bahrain">Bahrain</option>
                <option value="Bangladesh">Bangladesh</option>
                <option value="Barbados">Barbados</option>
                <option value="Belarus">Belarus</option>
                <option value="Belgium">Belgium</option>
                <option value="Belize">Belize</option>
                <option value="Benin">Benin</option>
                <option value="Bermuda">Bermuda</option>
                <option value="Bhutan">Bhutan</option>
                <option value="Bolivia">Bolivia</option>
                <option value="Bonaire, Sint Eustatius and Saba">Bonaire, Sint Eustatius and Saba</option>
                <option value="Bosnia and Herzegovina">Bosnia and Herzegovina</option>
                <option value="Botswana">Botswana</option>
                <option value="Bouvet Island">Bouvet Island</option>
                <option value="Brazil">Brazil</option>
                <option value="British Indian Ocean Territory">British Indian Ocean Territory</option>
                <option value="Brunei Darussalam">Brunei Darussalam</option>
                <option value="Bulgaria">Bulgaria</option>
                <option value="Burkina Faso">Burkina Faso</option>
                <option value="Burundi">Burundi</option>
                <option value="Cambodia">Cambodia</option>
                <option value="Cameroon">Cameroon</option>
                <option value="Canada">Canada</option>
                <option value="Cape Verde">Cape Verde</option>
                <option value="Cayman Islands">Cayman Islands</option>
                <option value="Central African Republic">Central African Republic</option>
                <option value="Chad">Chad</option>
                <option value="Chile">Chile</option>
                <option value="China">China</option>
                <option value="Christmas Island">Christmas Island</option>
                <option value="Cocos (Keeling) Islands">Cocos (Keeling) Islands</option>
                <option value="Colombia">Colombia</option>
                <option value="Comoros">Comoros</option>
                <option value="Congo">Congo</option>
                <option value="Congo, Democratic Republic of the Congo">Congo, Democratic Republic of the Congo</option>
                <option value="Cook Islands">Cook Islands</option>
                <option value="Costa Rica">Costa Rica</option>
                <option value="Cote D'Ivoire">Cote D'Ivoire</option>
                <option value="Croatia">Croatia</option>
                <option value="Cuba">Cuba</option>
                <option value="Curacao">Curacao</option>
                <option value="Cyprus">Cyprus</option>
                <option value="Czech Republic">Czech Republic</option>
                <option value="Denmark">Denmark</option>
                <option value="Djibouti">Djibouti</option>
                <option value="Dominica">Dominica</option>
                <option value="Dominican Republic">Dominican Republic</option>
                <option value="Ecuador">Ecuador</option>
                <option value="Egypt">Egypt</option>
                <option value="El Salvador">El Salvador</option>
                <option value="Equatorial Guinea">Equatorial Guinea</option>
                <option value="Eritrea">Eritrea</option>
                <option value="Estonia">Estonia</option>
                <option value="Ethiopia">Ethiopia</option>
                <option value="Falkland Islands (Malvinas)">Falkland Islands (Malvinas)</option>
                <option value="Faroe Islands">Faroe Islands</option>
                <option value="Fiji">Fiji</option>
                <option value="Finland">Finland</option>
                <option value="France">France</option>
                <option value="French Guiana">French Guiana</option>
                <option value="French Polynesia">French Polynesia</option>
                <option value="French Southern Territories">French Southern Territories</option>
                <option value="Gabon">Gabon</option>
                <option value="Gambia">Gambia</option>
                <option value="Georgia">Georgia</option>
                <option value="Germany">Germany</option>
                <option value="Ghana">Ghana</option>
                <option value="Gibraltar">Gibraltar</option>
                <option value="Greece">Greece</option>
                <option value="Greenland">Greenland</option>
                <option value="Grenada">Grenada</option>
                <option value="Guadeloupe">Guadeloupe</option>
                <option value="Guam">Guam</option>
                <option value="Guatemala">Guatemala</option>
                <option value="Guernsey">Guernsey</option>
                <option value="Guinea">Guinea</option>
                <option value="Guinea-Bissau">Guinea-Bissau</option>
                <option value="Guyana">Guyana</option>
                <option value="Haiti">Haiti</option>
                <option value="Heard Island and Mcdonald Islands">Heard Island and Mcdonald Islands</option>
                <option value="Holy See (Vatican City State)">Holy See (Vatican City State)</option>
                <option value="Honduras">Honduras</option>
                <option value="Hong Kong">Hong Kong</option>
                <option value="Hungary">Hungary</option>
                <option value="Iceland">Iceland</option>
                <option value="India">India</option>
                <option value="Indonesia">Indonesia</option>
                <option value="Iran, Islamic Republic of">Iran, Islamic Republic of</option>
                <option value="Iraq">Iraq</option>
                <option value="Ireland">Ireland</option>
                <option value="Isle of Man">Isle of Man</option>
                <option value="Israel">Israel</option>
                <option value="Italy">Italy</option>
                <option value="Jamaica">Jamaica</option>
                <option value="Japan">Japan</option>
                <option value="Jersey">Jersey</option>
                <option value="Jordan">Jordan</option>
                <option value="Kazakhstan">Kazakhstan</option>
                <option value="Kenya">Kenya</option>
                <option value="Kiribati">Kiribati</option>
                <option value="Korea, Democratic People's Republic of">Korea, Democratic People's Republic of</option>
                <option value="Korea, Republic of">Korea, Republic of</option>
                <option value="Kosovo">Kosovo</option>
                <option value="Kuwait">Kuwait</option>
                <option value="Kyrgyzstan">Kyrgyzstan</option>
                <option value="Lao People's Democratic Republic">Lao People's Democratic Republic</option>
                <option value="Latvia">Latvia</option>
                <option value="Lebanon">Lebanon</option>
                <option value="Lesotho">Lesotho</option>
                <option value="Liberia">Liberia</option>
                <option value="Libyan Arab Jamahiriya">Libyan Arab Jamahiriya</option>
                <option value="Liechtenstein">Liechtenstein</option>
                <option value="Lithuania">Lithuania</option>
                <option value="Luxembourg">Luxembourg</option>
                <option value="Macao">Macao</option>
                <option value="Macedonia, the Former Yugoslav Republic of">Macedonia, the Former Yugoslav Republic of</option>
                <option value="Madagascar">Madagascar</option>
                <option value="Malawi">Malawi</option>
                <option value="Malaysia">Malaysia</option>
                <option value="Maldives">Maldives</option>
                <option value="Mali">Mali</option>
                <option value="Malta">Malta</option>
                <option value="Marshall Islands">Marshall Islands</option>
                <option value="Martinique">Martinique</option>
                <option value="Mauritania">Mauritania</option>
                <option value="Mauritius">Mauritius</option>
                <option value="Mayotte">Mayotte</option>
                <option value="Mexico">Mexico</option>
                <option value="Micronesia, Federated States of">Micronesia, Federated States of</option>
                <option value="Moldova, Republic of">Moldova, Republic of</option>
                <option value="Monaco">Monaco</option>
                <option value="Mongolia">Mongolia</option>
                <option value="Montenegro">Montenegro</option>
                <option value="Montserrat">Montserrat</option>
                <option value="Morocco">Morocco</option>
                <option value="Mozambique">Mozambique</option>
                <option value="Myanmar">Myanmar</option>
                <option value="Namibia">Namibia</option>
                <option value="Nauru">Nauru</option>
                <option value="Nepal">Nepal</option>
                <option value="Netherlands">Netherlands</option>
                <option value="Netherlands Antilles">Netherlands Antilles</option>
                <option value="New Caledonia">New Caledonia</option>
                <option value="New Zealand">New Zealand</option>
                <option value="Nicaragua">Nicaragua</option>
                <option value="Niger">Niger</option>
                <option value="Nigeria">Nigeria</option>
                <option value="Niue">Niue</option>
                <option value="Norfolk Island">Norfolk Island</option>
                <option value="Northern Mariana Islands">Northern Mariana Islands</option>
                <option value="Norway">Norway</option>
                <option value="Oman">Oman</option>
                <option value="Pakistan">Pakistan</option>
                <option value="Palau">Palau</option>
                <option value="Palestinian Territory, Occupied">Palestinian Territory, Occupied</option>
                <option value="Panama">Panama</option>
                <option value="Papua New Guinea">Papua New Guinea</option>
                <option value="Paraguay">Paraguay</option>
                <option value="Peru">Peru</option>
                <option value="Philippines">Philippines</option>
                <option value="Pitcairn">Pitcairn</option>
                <option value="Poland">Poland</option>
                <option value="Portugal">Portugal</option>
                <option value="Puerto Rico">Puerto Rico</option>
                <option value="Qatar">Qatar</option>
                <option value="Reunion">Reunion</option>
                <option value="Romania">Romania</option>
                <option value="Russian Federation">Russian Federation</option>
                <option value="Rwanda">Rwanda</option>
                <option value="Saint Barthelemy">Saint Barthelemy</option>
                <option value="Saint Helena">Saint Helena</option>
                <option value="Saint Kitts and Nevis">Saint Kitts and Nevis</option>
                <option value="Saint Lucia">Saint Lucia</option>
                <option value="Saint Martin">Saint Martin</option>
                <option value="Saint Pierre and Miquelon">Saint Pierre and Miquelon</option>
                <option value="Saint Vincent and the Grenadines">Saint Vincent and the Grenadines</option>
                <option value="Samoa">Samoa</option>
                <option value="San Marino">San Marino</option>
                <option value="Sao Tome and Principe">Sao Tome and Principe</option>
                <option value="Saudi Arabia">Saudi Arabia</option>
                <option value="Senegal">Senegal</option>
                <option value="Serbia">Serbia</option>
                <option value="Serbia and Montenegro">Serbia and Montenegro</option>
                <option value="Seychelles">Seychelles</option>
                <option value="Sierra Leone">Sierra Leone</option>
                <option value="Singapore">Singapore</option>
                <option value="Sint Maarten">Sint Maarten</option>
                <option value="Slovakia">Slovakia</option>
                <option value="Slovenia">Slovenia</option>
                <option value="Solomon Islands">Solomon Islands</option>
                <option value="Somalia">Somalia</option>
                <option value="South Africa">South Africa</option>
                <option value="South Georgia and the South Sandwich Islands">South Georgia and the South Sandwich Islands</option>
                <option value="South Sudan">South Sudan</option>
                <option value="Spain">Spain</option>
                <option value="Sri Lanka">Sri Lanka</option>
                <option value="Sudan">Sudan</option>
                <option value="Suriname">Suriname</option>
                <option value="Svalbard and Jan Mayen">Svalbard and Jan Mayen</option>
                <option value="Swaziland">Swaziland</option>
                <option value="Sweden">Sweden</option>
                <option value="Switzerland">Switzerland</option>
                <option value="Syrian Arab Republic">Syrian Arab Republic</option>
                <option value="Taiwan, Province of China">Taiwan, Province of China</option>
                <option value="Tajikistan">Tajikistan</option>
                <option value="Tanzania, United Republic of">Tanzania, United Republic of</option>
                <option value="Thailand">Thailand</option>
                <option value="Timor-Leste">Timor-Leste</option>
                <option value="Togo">Togo</option>
                <option value="Tokelau">Tokelau</option>
                <option value="Tonga">Tonga</option>
                <option value="Trinidad and Tobago">Trinidad and Tobago</option>
                <option value="Tunisia">Tunisia</option>
                <option value="Turkey">Turkey</option>
                <option value="Turkmenistan">Turkmenistan</option>
                <option value="Turks and Caicos Islands">Turks and Caicos Islands</option>
                <option value="Tuvalu">Tuvalu</option>
                <option value="Uganda">Uganda</option>
                <option value="Ukraine">Ukraine</option>
                <option value="United Arab Emirates">United Arab Emirates</option>
                <option value="United Kingdom">United Kingdom</option>
                <option value="United States">United States</option>
                <option value="United States Minor Outlying Islands">United States Minor Outlying Islands</option>
                <option value="Uruguay">Uruguay</option>
                <option value="Uzbekistan">Uzbekistan</option>
                <option value="Vanuatu">Vanuatu</option>
                <option value="Venezuela">Venezuela</option>
                <option value="Viet Nam">Viet Nam</option>
                <option value="Virgin Islands, British">Virgin Islands, British</option>
                <option value="Virgin Islands, U.s.">Virgin Islands, U.s.</option>
                <option value="Wallis and Futuna">Wallis and Futuna</option>
                <option value="Western Sahara">Western Sahara</option>
                <option value="Yemen">Yemen</option>
                <option value="Zambia">Zambia</option>
                <option value="Zimbabwe">Zimbabwe</option>
              </Field>



            </form>
            {/* <button className="submitbutton" type="submit">Signup</button> */}
            <button className="submitbutton" type="submit"> <Link to={`/product/${productInfo.productID}`}>Add Product</Link></button>
            {/* <a className="mutedlink" href="#">Already have an account? <a className="boldlink" href="#" onClick={switchToSignin}>Signin</a></a>
              <div className="mutedlink" style={{color:"red"}} href="#">{signupError}</div> */}
          </Form>
        )}

      </Formik>
    </div>
  )
}
