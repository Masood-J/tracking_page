import {User} from "lucide-react";
import FormCard from "@/components/DriverUi/ui/FormCard";
import {Briefcase} from "lucide-react";
import {ErrorMessage, Field} from "formik";
import DateSelect from "@/components/DriverUi/ui/DateSelect";
import PhoneInput from "react-phone-input-2";
import DateSingleSelect from "@/components/DriverUi/ui/DateSingleSelect";
import ShowError from "@/components/DriverUi/ui/ShowError";
import {useFormikContext} from "formik";

export default function StepThree(){
const {errors} = useFormikContext();
    return(
        <div>
        <FormCard title={`Employement Details`} desc={`Work-related information and position`} icon={<Briefcase className={`text-white`}></Briefcase>}></FormCard>
            <div className={`flex flex-col items-center mt-6 gap-5 p-8`}>
                <div className={`flex flex-row flex-wrap gap-2 justify-between w-full text-black`}>
                    <div className={`flex-1`}>
                        <label htmlFor="EmployeeID" className={`block`}>Employee ID<span className="text-red-500 ml-1">*</span></label>
                        <Field name="EmployeeID" type="text" className={`border min-w-30 border-gray-300 p-2 w-full rounded-xl ${errors.EmployeeID?"border-red-500":""}`}></Field>
                     <ShowError name={`EmployeeID`}></ShowError>
                    </div>
                    <div className={`flex-1`}>
                        <label htmlFor="HireDate" className={`block`}>Hire Date<span className="text-red-500 ml-1">*</span></label>
                        <Field name="HireDate" type="date" className="border min-w-30 border-gray-300 p-2 w-full rounded-xl">
                            {({field,form})=>(
                                <DateSingleSelect
                                    value={field.value}
                                    onChange={(date) => form.setFieldValue(field.name, date)}
                                    FieldName={`HireDate`}></DateSingleSelect>
                            )}
                        </Field>
                       <ShowError name={`HireDate`}></ShowError>
                    </div>
                </div>
                <div className={`flex flex-row flex-wrap gap-2 justify-between w-full text-black`}>
                    <div className={`flex-1`}>
                        <label htmlFor="EmploymentType" className={`block`}>Employment Type<span className="text-red-500 ml-1">*</span></label>
                        <Field name="EmploymentType" type="text" className={`border min-w-30 border-gray-300 p-2 w-full rounded-xl ${errors.EmploymentType?"border-red-500":""}`}></Field>
                       <ShowError name={`EmploymentType`}></ShowError>
                    </div>
                    <div className={`flex-1`}>
                        <label htmlFor="Department" className={`block`}>Department<span className="text-red-500 ml-1">*</span></label>
                        <Field name="Department" type="text" className={`border min-w-30 border-gray-300 p-2 w-full rounded-xl ${errors.Department?"border-red-500":""}`}></Field>
                       <ShowError name={`Department`}></ShowError>
                    </div>
                </div>
                <div className={`flex flex-row flex-wrap gap-2 justify-between w-full text-black`}>
                    <div className={`flex-1`}>
                        <label htmlFor="Location" className={`block`}>Work Location:</label>
                        <Field name="Location" type="text" className="border min-w-30 border-gray-300 p-2 w-full rounded-xl"></Field>
                        <ShowError name={`Location`}></ShowError>
                    </div>
                    <div className={`flex-1`}>
                        <label htmlFor="ShiftPattern" className={`block`}>Phone Number:</label>
                        <Field name="ShiftPattern" className={`min-w-30`} >
                            {({ field, form }) => (
                                <PhoneInput
                                    country={"us"}                     // default country
                                    value={field.value || ""}          // bind Formik state
                                    onChange={(val) => form.setFieldValue(field.name, val)}
                                    inputClass="!w-full p-5 !rounded-xl "
                                    buttonClass="!border-gray-300 !border-r-1 !border-l-0 !rounded-l-md !bg-white"
                                    containerClass="!w-full !border-1 !rounded-l-md !border-gray-300 !rounded-r-xl !border-[#e2e8f0] focus-within:!border-red-500"
                                />
                            )}
                        </Field>
                        <ShowError name={`ShiftPattern`}></ShowError>
                    </div>
                </div>
                <div className={`flex flex-row flex-wrap gap-2 justify-between w-full text-black`}>
                    <div className={`flex-1`}>
                        <label htmlFor="Salary" className={`block`}>Base Salary (Annual):</label>
                        <Field name="Salary" type="text" className="border min-w-30 border-gray-300 p-2 w-full rounded-xl"></Field>
                        <ShowError name={`Salary`}></ShowError>
                    </div>
                    <div className={`sm:flex-1`}>
                    </div>
                </div>
            </div>
    </div>)
}