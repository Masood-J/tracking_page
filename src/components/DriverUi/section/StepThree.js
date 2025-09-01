import {User} from "lucide-react";
import FormCard from "@/components/DriverUi/ui/FormCard";
import {Briefcase} from "lucide-react";
import {ErrorMessage, Field} from "formik";
export default function StepThree(){

    return(
        <div>
        <FormCard title={`Employement Details`} desc={`Work-related information and position`} icon={<Briefcase className={`text-white`}></Briefcase>}></FormCard>
            <div className={`flex flex-col items-center mt-6 gap-5 p-8`}>
                <div className={`flex flex-row gap-2 justify-between w-full text-black`}>
                    <div className={`flex-1`}>
                        <label htmlFor="EmployeeID" className={`block`}>Employee ID:</label>
                        <Field name="EmployeeID" type="text" className="border border-gray-300 p-2 w-full rounded-xl"></Field>
                        <ErrorMessage name="EmployeeID" component="span" className={`text-red-700`}></ErrorMessage>
                    </div>
                    <div className={`flex-1`}>
                        <label htmlFor="HireDate" className={`block`}>Hire Date:</label>
                        <Field name="HireDate" type="date" className="border border-gray-300 p-2 w-full rounded-xl"></Field>
                        <ErrorMessage name="HireDate" component="span"></ErrorMessage>
                    </div>
                </div>
                <div className={`flex flex-row gap-2 justify-between w-full text-black`}>
                    <div className={`flex-1`}>
                        <label htmlFor="EmploymentType" className={`block`}>Employment Type:</label>
                        <Field name="EmploymentType" type="text" className="border border-gray-300 p-2 w-full rounded-xl"></Field>
                        <ErrorMessage name="EmploymentType" component="span" className={`text-red-700`}></ErrorMessage>
                    </div>
                    <div className={`flex-1`}>
                        <label htmlFor="Department" className={`block`}>Department:</label>
                        <Field name="Department" type="text" className="border border-gray-300 p-2 w-full rounded-xl"></Field>
                        <ErrorMessage name="Department" component="span"></ErrorMessage>
                    </div>
                </div>
                <div className={`flex flex-row gap-2 justify-between w-full text-black`}>
                    <div className={`flex-1`}>
                        <label htmlFor="Location" className={`block`}>Work Location:</label>
                        <Field name="Location" type="text" className="border border-gray-300 p-2 w-full rounded-xl"></Field>
                        <ErrorMessage name="Location" component="span" className={`text-red-700`}></ErrorMessage>
                    </div>
                    <div className={`flex-1`}>
                        <label htmlFor="ShiftPattern" className={`block`}>Phone Number:</label>
                        <Field name="ShiftPattern" type="text" className="border border-gray-300 p-2 w-full rounded-xl"></Field>
                        <ErrorMessage name="ShiftPattern" component="span"></ErrorMessage>
                    </div>
                </div>
                <div className={`flex flex-row gap-2 justify-between w-full text-black`}>
                    <div className={`flex-1`}>
                        <label htmlFor="Salary" className={`block`}>Base Salary (Annual):</label>
                        <Field name="Salary" type="text" className="border border-gray-300 p-2 w-full rounded-xl"></Field>
                        <ErrorMessage name="Salary" component="span" className={`text-red-700`}></ErrorMessage>
                    </div>
                    <div className={`flex-1`}>
                    </div>
                </div>
            </div>
    </div>)
}