import {FileText, Upload, User} from "lucide-react";
import FormCard from "@/components/DriverUi/ui/FormCard";
import {Award} from "lucide-react";
import {ErrorMessage, Field} from "formik";
import {Plus} from "lucide-react";
import DateSelect from "@/components/DriverUi/ui/DateSelect";
export default function StepFive(){

    return(
        <div>
        <FormCard title={`Training & Certifications`} desc={`Professional development and qualifications`} icon={<Award className={`text-white`}></Award>}></FormCard>
            <div className={`flex flex-col  mt-6 gap-5 pl-8 pr-8 pb-8`}>
                <div className={`flex flex-row items-center justify-between`}>
                    <div className={`flex flex-row gap-2 items-center`}>
                    <Award className={`h-5 w-5 text-[#c0a462]`}></Award>
                    <h3 className={`text-black font-medium text-xl`}>Training & Certifications</h3>
                </div>
                    <button className={`flex flex-row gap-2 items-center border-[#e2e8f0] rounded-xl p-1 pl-2 pr-2 border-1 font-semibold text-black`}>
                        <Plus className={`w-4 h-4`}></Plus>
                        <h3>Add Training</h3>
                    </button>
                </div>
                <div className={`flex flex-col gap-5 p-3 border-l-4 border-l-blue-600 border-2 rounded-xl border-[] rounded-l-xl`}>

<h3 className={`text-black`}>Training Record #1</h3>


                    <div className={`flex flex-row gap-2 justify-between w-full text-black`}>
                        <div className={`flex-1`}>
                            <label htmlFor="trainingName" className={`block`}>Training Name<span className="text-red-500 ml-1">*</span></label>
                            <Field name="trainingName" type="text" className="border border-gray-300 p-2 w-full rounded-xl"></Field>
                            <ErrorMessage name="trainingName" component="span" className={`text-red-700`}></ErrorMessage>
                        </div>
                        <div className={`flex-1`}>
                            <label htmlFor="TrainingProvider" className={`block`}>Training Provider<span className="text-red-500 ml-1">*</span></label>
                            <Field name="TrainingProvider" type="text" className="border border-gray-300 p-2 w-full rounded-xl"></Field>
                            <ErrorMessage name="TrainingProvider" component="span"></ErrorMessage>
                        </div>
                    </div>
                    <div className={`flex flex-row gap-2 justify-between w-full text-black`}>
                        <div className={`flex-1`}>
                            <label htmlFor="License" className={`block`}>Completion Date<span className="text-red-500 ml-1">*</span></label>
                            <Field name="License" className="border border-gray-300 p-2 w-full rounded-xl">
                                {(field)=>(<DateSelect></DateSelect>)}
                            </Field>
                            <ErrorMessage name="License" component="span" className={`text-red-700`}></ErrorMessage>
                        </div>
                        <div className={`flex-1`}>
                            <label htmlFor="IssueCountry" className={`block`}>Expiry Date:</label>
                            <Field name="IssueCountry" as="select" className="border border-gray-300 p-2 w-full rounded-xl">
                                {(field)=>(<DateSelect></DateSelect>)}
                            </Field>
                            <ErrorMessage name="IssueCountry" component="span"></ErrorMessage>
                        </div>
                    </div>
                    <div className={`flex-1 border-[#e2e8f0] rounded-xl border-2 p-4`}>
                        <label htmlFor="TrainingCertImg" className={`block`}>
                            <div className={`flex flex-col items-center gap-2`}>
                                <Upload className={`h-10 w-10 text-gray-400`}></Upload>
                                <h3 className={`text-black font-bold`}>Click to upload certificate</h3>
                                <p className={`text-gray-400`}>PNG, JPG up to 10MB</p>
                            </div></label>
                        <input
                            id="TrainingCertImg"
                            name="TrainingCertImg"
                            type="file"
                            className={`hidden`}
                            onChange={(event) => {
                                setFieldValue("TrainingCertImg", event.currentTarget.files[0]);
                            }}
                        />
                        <ErrorMessage name="TrainingCertImg" component="span"></ErrorMessage>
                    </div>
                    <div className={`flex flex-row gap-2 justify-between w-full text-black`}>
                        <div className={`flex-1`}>
                            <label htmlFor="AddNotes" className={`block`}>Additional Notes:</label>
                            <Field placeholder={`Enter any additional notes or special requirments...`} name="AddNotes" type="text" className="border border-gray-300 p-2 w-full rounded-xl pb-15"></Field>
                            <ErrorMessage name="AddNotes" component="span" className={`text-red-700`}></ErrorMessage>
                        </div>

                    </div>
                </div>
            </div>
        </div> )
}