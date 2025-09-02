import {User} from "lucide-react";
import FormCard from "@/components/DriverUi/ui/FormCard";
import {FileText} from "lucide-react";
import {ErrorMessage, Field} from "formik";
import {Upload} from "lucide-react";
import DateSelect from "@/components/DriverUi/ui/DateSelect";
import PhoneInput from "react-phone-input-2";
export default function StepFour(){

    return(
        <div>
        <FormCard title={`License & Medical`} desc={`Driving credentials and health records`} icon={<FileText className={`text-white`}></FileText>}></FormCard>

            <div className={`flex flex-col  mt-6 gap-5 pl-8 pr-8 pb-8`}>
                <div className={`flex flex-row items-center gap-2 `}>
                    <FileText className={`h-5 w-5 text-blue-500`}></FileText>
                    <h3 className={`text-black font-medium text-xl`}>Driver License Information</h3>
                </div>
                <div className={`flex flex-row gap-2 justify-between w-full text-black`}>
                    <div className={`flex-1`}>
                        <label htmlFor="License" className={`block`}>License Number<span className="text-red-500 ml-1">*</span></label>
                        <Field name="License" type="text" className="border border-gray-300 p-2 w-full rounded-xl"></Field>
                        <ErrorMessage name="License" component="span" className={`text-red-700`}></ErrorMessage>
                    </div>
                    <div className={`flex-1`}>
                        <label htmlFor="IssueCountry" className={`block`}>Issuing Country<span className="text-red-500 ml-1">*</span></label>
                        <Field name="IssueCountry" as="select" className="border border-gray-300 p-2 w-full rounded-xl">
                            <option value="pk">Pakistan</option>
                            <option value="afg">Afghanistan</option>
                            <option value="kwt">Kuwait</option>
                            <option value="uae">UAE</option>
                        </Field>
                        <ErrorMessage name="IssueCountry" component="span"></ErrorMessage>
                    </div>
                </div>
                <div className={`flex flex-row gap-2 justify-between w-full text-black`}>
                    <div className={`flex-1`}>
                        <label htmlFor="IssueState" className={`block`}>State/Province<span className="text-red-500 ml-1">*</span></label>
                        <Field name="IssueState" as="select" className="border border-gray-300 p-2 w-full rounded-xl">
                            <option value="punjab">Punjab</option>
                            <option value="kpk">KPK</option>
                            <option value="Sindh">Sindh</option>
                            <option value="Balochistan">Balochistan</option>
                        </Field>
                        <ErrorMessage name="IssueState" component="span" className={`text-red-700`}></ErrorMessage>
                    </div>
                    <div className={`flex-1`}>
                        <label htmlFor="IssueDate" className={`block`}>Issue Date<span className="text-red-500 ml-1">*</span></label>
                        <Field name="IssueDate" className="border border-gray-300 p-2 w-full rounded-xl">
                            {(field)=>(
                                <DateSelect/>
                            )}
                        </Field>
                        <ErrorMessage name="IssueDate" component="span"></ErrorMessage>
                    </div>
                </div>
                <div className={`flex flex-row gap-2 justify-between w-full text-black`}>
                    <div className={`flex-1`}>
                        <label htmlFor="Expiry" className={`block`}>Expiry Date<span className="text-red-500 ml-1">*</span></label>
                        <Field name="Expiry" className="border border-gray-300 p-2 w-full rounded-xl">
                            {(field)=>(
                                <DateSelect/>
                            )}
                        </Field>
                        <ErrorMessage name="Expiry" component="span"></ErrorMessage>
                    </div>
                    <div className={`flex-1`}>
                    </div>
                </div>
                <div className={`flex flex-col gap-2 justify-between w-full text-black`}>
                    <h3 >License Image:</h3>
                    <div className={`flex-1 border-[#e2e8f0] rounded-xl border-2 p-4`}>
                        <label htmlFor="LicenseImg" className={`block`}>
                        <div className={`flex flex-col items-center gap-2`}>
                            <Upload className={`h-16 w-16 text-gray-400`}></Upload>
                            <h3 className={`text-black font-bold`}>Upload License Image</h3>
                            <p className={`text-gray-400`}>PNG, JPG up to 10MB</p>
                        </div></label>
                        <input
                            id="LicenseImg"
                            name="LicenseImg"
                            type="file"
                            className={`hidden`}
                            onChange={(event) => {
                                setFieldValue("LicenseImg", event.currentTarget.files[0]);
                            }}
                        />
                        <ErrorMessage name="LicenseImg" component="span"></ErrorMessage>
                    </div>
                </div>
                <hr/>
                <div className={`flex flex-row items-center gap-2 `}>
                    <FileText className={`h-5 w-5 text-blue-500`}></FileText>
                    <h3 className={`text-black font-medium text-xl`}>Visa Info</h3>
                </div>
                <div className={`flex flex-row gap-2 justify-between w-full text-black`}>
                    <div className={`flex-1`}>
                        <label htmlFor="VisaType" className={`block`}>Visa Type<span className="text-red-500 ml-1">*</span></label>
                        <Field name="VisaType" as="select" className="border border-gray-300 p-2 w-full rounded-xl">
                            <option value="work">Work</option>
                            <option value="Home">Travel</option>
                        </Field>
                        <ErrorMessage name="VisaType" component="span" className={`text-red-700`}></ErrorMessage>
                    </div>
                    <div className={`flex-1`}>
                        <label htmlFor="Status" className={`block`}>Status<span className="text-red-500 ml-1">*</span></label>
                        <Field name="Status" as="select" className="border border-gray-300 p-2 w-full rounded-xl">
                            <option value="exp">Expired</option>
                            <option value="act">Active</option>
                        </Field>
                        <ErrorMessage name="IssueCountry" component="span"></ErrorMessage>
                    </div>
                </div>
                <div className={`flex flex-row gap-2 justify-between w-full text-black`}>
                    <div className={`flex-1`}>
                        <label htmlFor="VisaIssueCountry" className={`block`}>Issuing Country<span className="text-red-500 ml-1">*</span></label>
                        <Field name="VisaIssueCountry" as="select" className="border border-gray-300 p-2 w-full rounded-xl">
                            <option value="pkr">Pakistan</option>
                            <option value="afg">Afghanistan</option>
                        </Field>
                        <ErrorMessage name="VisaType" component="span" className={`text-red-700`}></ErrorMessage>
                    </div>
                    <div className={`flex-1`}>
                        <label htmlFor="VisaDate" className={`block`}>Issue Date<span className="text-red-500 ml-1">*</span></label>
                        <Field name="VisaDate" className="border border-gray-300 p-2 w-full rounded-xl">
                            {(field)=>(
                                <DateSelect></DateSelect>
                            )}
                        </Field>
                        <ErrorMessage name="VisaDate" component="span"></ErrorMessage>
                    </div>
                </div>
                <div className={`flex flex-row gap-2 justify-between w-full text-black`}>
                    <div className={`flex-1`}>
                        <label htmlFor="VisaIssueCountry" className={`block`}>Expiry Date<span className="text-red-500 ml-1">*</span></label>
                        <Field name="VisaIssueCountry"  className="border border-gray-300 p-2 w-full rounded-xl">
                            {(field)=>(
                                <DateSelect></DateSelect>
                            )}
                        </Field>
                        <ErrorMessage name="VisaType" component="span" className={`text-red-700`}></ErrorMessage>
                    </div>
                    <div className={`flex-1`}>
                            </div>

                </div>
                <div className={`flex flex-col gap-2 justify-between w-full text-black`}>
                    <h3 >Visa Image:</h3>
                    <div className={`flex-1 border-[#e2e8f0] rounded-xl border-2 p-4`}>
                        <label htmlFor="VisaIMG" className={`block`}>
                            <div className={`flex flex-col items-center gap-2`}>
                                <Upload className={`h-16 w-16 text-gray-400`}></Upload>
                                <h3 className={`text-black font-bold`}>Upload Visa Image</h3>
                                <p className={`text-gray-400`}>PNG, JPG up to 10MB</p>
                            </div></label>
                        <input
                            id="VisaIMG"
                            name="VisaIMG"
                            type="file"
                            className={`hidden`}
                            onChange={(event) => {
                                setFieldValue("VisaIMG", event.currentTarget.files[0]);
                            }}
                        />
                        <ErrorMessage name="VisaIMG" component="span"></ErrorMessage>
                    </div>
                </div>
                <hr/>
                <div className={`flex flex-row items-center gap-2`}>
                    <FileText className={`h-5 w-5 text-green-600`}></FileText>
                    <h3 className={`text-black font-medium text-xl`}>Medical Information</h3>
                </div>
                <div className={`flex flex-row gap-2 justify-between w-full text-black`}>
                    <div className={`flex-1`}>
                        <label htmlFor="MedicalCertExpiry" className={`block`}>Medical Certificate Expiry<span className="text-red-500 ml-1">*</span></label>
                        <Field name="MedicalCertExpiry" type="date" className="border border-gray-300 p-2 w-full rounded-xl">
                            {(field)=>(
                                <DateSelect></DateSelect>
                            )}
                        </Field>
                        <ErrorMessage name="MedicalCertExpiry" component="span" className={`text-red-700`}></ErrorMessage>
                    </div>
                    <div className={`flex-1`}>
                        <label htmlFor="BloodType" className={`block`}>Blood Type:</label>
                        <Field name="BloodType" as="select" className="border border-gray-300 p-2 pb-3 w-full rounded-xl">
                            <option value="a+">A+</option>
                            <option value="b+">B+</option>
                            <option value="O-">O-</option>
                            <option value="O+"></option>
                        </Field>
                        <ErrorMessage name="BloodType" component="span"></ErrorMessage>
                    </div>
                </div>
                <div className={`flex flex-col gap-2 justify-between w-full text-black`}>
                    <h3 >Medical Certificate</h3>
                    <div className={`flex-1 border-[#e2e8f0] rounded-xl border-2 p-4`}>
                        <label htmlFor="LicenseImg" className={`block`}>
                            <div className={`flex flex-col items-center gap-2`}>
                                <Upload className={`h-16 w-16 text-gray-400`}></Upload>
                                <h3 className={`text-black font-bold`}>Upload Medical Certificate</h3>
                                <p className={`text-gray-400`}>PNG, JPG up to 10MB</p>
                            </div></label>
                        <input
                            id="MedicalCertIMG"
                            name="MedicalCertIMG"
                            type="file"
                            className={`hidden`}
                            onChange={(event,setFieldValue) => {
                                setFieldValue("MedicalCertIMG", event.currentTarget.files[0]);
                            }}
                        />
                        <ErrorMessage name="MedicalCertIMG" component="span"></ErrorMessage>
                    </div>
                </div>
                <hr/>
                <div className={`flex flex-row items-center gap-2`}>
                    <User className={`h-5 w-5 text-red-600`}></User>
                    <h3 className={`text-black font-medium text-xl`}>Emergency Contact</h3>
                </div>
                <div className={`flex flex-row gap-2 justify-between w-full text-black`}>
                    <div className={`flex-1`}>
                        <label htmlFor="ContactName" className={`block`}>Contact Name<span className="text-red-500 ml-1">*</span></label>
                        <Field name="ContactName" type="text" className="border border-gray-300 p-2 w-full rounded-xl"></Field>
                        <ErrorMessage name="ContactName" component="span" className={`text-red-700`}></ErrorMessage>
                    </div>
                    <div className={`flex-1`}>
                        <label htmlFor="Relationship" className={`block`}>Relationship<span className="text-red-500 ml-1">*</span></label>
                        <Field name="Relationship" type="text" className="border border-gray-300 p-2 w-full rounded-xl"></Field>
                        <ErrorMessage name="Relationship" component="span"></ErrorMessage>
                    </div>
                </div>
                <div className={`flex flex-row gap-2 justify-between w-full text-black`}>
                    <div className={`flex-1`}>
                        <label htmlFor="Phone" className={`block`}>Contact Phone<span className="text-red-500 ml-1">*</span></label>
                        <Field name="Phone" >
                            {({ field, form }) => (
                                <PhoneInput
                                    country={"us"}                     // default country
                                    value={field.value || ""}          // bind Formik state
                                    onChange={(val) => form.setFieldValue(field.name, val)}
                                    inputClass="!w-full !border !border-gray-300 p-5 !rounded-xl "
                                    buttonClass="!border !border-gray-300 !rounded-xl !bg-white" // style the flag button
                                    containerClass="w-full"
                                />
                            )}
                        </Field>
                        <ErrorMessage name="Phone" component="span" className={`text-red-700`}></ErrorMessage>
                    </div>
                    <div className={`flex-1`}>
                      </div>
                </div>
            </div>
   </div> )
}