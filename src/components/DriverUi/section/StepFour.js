import {User} from "lucide-react";
import FormCard from "@/components/DriverUi/ui/FormCard";
import {FileText} from "lucide-react";
import {ErrorMessage, Field} from "formik";
import {Upload} from "lucide-react";
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
                        <label htmlFor="License" className={`block`}>License Number:</label>
                        <Field name="License" type="text" className="border border-gray-300 p-2 w-full rounded-xl"></Field>
                        <ErrorMessage name="License" component="span" className={`text-red-700`}></ErrorMessage>
                    </div>
                    <div className={`flex-1`}>
                        <label htmlFor="IssueCountry" className={`block`}>Issuing Country:</label>
                        <Field name="IssueCountry" type="date" className="border border-gray-300 p-2 w-full rounded-xl"></Field>
                        <ErrorMessage name="IssueCountry" component="span"></ErrorMessage>
                    </div>
                </div>
                <div className={`flex flex-row gap-2 justify-between w-full text-black`}>
                    <div className={`flex-1`}>
                        <label htmlFor="IssueState" className={`block`}>State/Province:</label>
                        <Field name="IssueState" type="text" className="border border-gray-300 p-2 w-full rounded-xl"></Field>
                        <ErrorMessage name="IssueState" component="span" className={`text-red-700`}></ErrorMessage>
                    </div>
                    <div className={`flex-1`}>
                          </div>
                </div>
                <div className={`flex flex-row gap-2 justify-between w-full text-black`}>
                    <div className={`flex-1`}>
                        <label htmlFor="Expiry" className={`block`}>Expiry Date:</label>
                        <Field name="Expiry" type="date" className="border border-gray-300 p-2 w-full rounded-xl"></Field>
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
                <div className={`flex flex-row items-center gap-2`}>
                    <FileText className={`h-5 w-5 text-green-600`}></FileText>
                    <h3 className={`text-black font-medium text-xl`}>Medical Information</h3>
                </div>
                <div className={`flex flex-row gap-2 justify-between w-full text-black`}>
                    <div className={`flex-1`}>
                        <label htmlFor="MedicalCertExpiry" className={`block`}>Medical Information:</label>
                        <Field name="MedicalCertExpiry" type="date" className="border border-gray-300 p-2 w-full rounded-xl"></Field>
                        <ErrorMessage name="MedicalCertExpiry" component="span" className={`text-red-700`}></ErrorMessage>
                    </div>
                    <div className={`flex-1`}>
                        <label htmlFor="BloodType" className={`block`}>Blood Type:</label>
                        <Field name="BloodType" type="date" className="border border-gray-300 p-2 w-full rounded-xl"></Field>
                        <ErrorMessage name="BloodType" component="span"></ErrorMessage>
                    </div>
                </div>
                <div className={`flex flex-col gap-2 justify-between w-full text-black`}>
                    <h3 >License Image:</h3>
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
                            onChange={(event) => {
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
                        <label htmlFor="ContactName" className={`block`}>Contact Name:</label>
                        <Field name="ContactName" type="date" className="border border-gray-300 p-2 w-full rounded-xl"></Field>
                        <ErrorMessage name="ContactName" component="span" className={`text-red-700`}></ErrorMessage>
                    </div>
                    <div className={`flex-1`}>
                        <label htmlFor="Relationship" className={`block`}>Relationship:</label>
                        <Field name="Relationship" type="date" className="border border-gray-300 p-2 w-full rounded-xl"></Field>
                        <ErrorMessage name="Relationship" component="span"></ErrorMessage>
                    </div>
                </div>
                <div className={`flex flex-row gap-2 justify-between w-full text-black`}>
                    <div className={`flex-1`}>
                        <label htmlFor="Phone" className={`block`}>Contact Phone:</label>
                        <Field name="Phone" type="number" className="border border-gray-300 p-2 w-full rounded-xl"></Field>
                        <ErrorMessage name="Phone" component="span" className={`text-red-700`}></ErrorMessage>
                    </div>
                    <div className={`flex-1`}>
                      </div>
                </div>
            </div>
   </div> )
}