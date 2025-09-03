import {User} from "lucide-react";
import FormCard from "@/components/DriverUi/ui/FormCard";
import {Formik,Form,Field,ErrorMessage} from "formik";
import * as Yup from "yup";
import {Upload} from "lucide-react";
import {CircleUser} from "lucide-react";
import Image from "next/image";
import {useState} from "react";
import DateSelect from "@/components/DriverUi/ui/DateSelect";
export default function StepOne({setFieldValue}){
    const [preview, setPreview] = useState(false);
    return(
        <div className={``}>
        <FormCard title={`Personal Information`} desc={`Basic personal details and identification`} icon={<User className={`text-white`}></User>}></FormCard>
<div className={`flex flex-col items-center mt-6 gap-5 p-8`}>
    <div className={`rounded-full bg-[#f3f4f6] p-5 border-4 border-[#fefefe] shadow-md shadow-gray-300`}>
        {preview?(<Image src={preview}
                         alt="Profile Preview"
                         width={128}
                         height={128}
                         className="rounded-full object-cover"></Image>):(<CircleUser className={`w-20 h-20 text-gray-400`}></CircleUser>)}

    </div>
    <div className={`flex flex-col items-center gap-2  text-black`}>
        <h3>Profile Photo<span className="text-red-500 ml-1">*</span></h3>
        <div className={`border-2 border-[#e2e8f0] p-1 rounded-xl`}>
        <label htmlFor="profilePic">
            <div className={`flex flex-row gap-2 items-center`}>
                <Upload className={`w-4 h-4 text-black`}></Upload>
                <h3>Upload Photo</h3>
            </div>
        </label>
        <input
            id="profilePic"
            name="profilePic"
            type="file"
            className={`hidden`}
            onChange={(event) => {
                const file = event.currentTarget.files[0];
                setFieldValue("profilePic", event.currentTarget.files[0]);
                if(file){
              setPreview(URL.createObjectURL(file));
            }}}
        />
        </div>
        <p className={`text-gray-400`}>JPG,PNG up to 5MB</p>
        <ErrorMessage name="profilePic" component="div" className="text-red-500" />
    </div>
    <div className={`flex flex-row flex-wrap gap-2 justify-between w-full text-black`}>
<div className={`flex-1`}>
    <label htmlFor="firstName" className={`block`}>First Name<span className="text-red-500 ml-1">*</span></label>
    <Field name="firstName" type="text" className="min-w-30 border border-gray-300 p-2 w-full rounded-xl"></Field>
    <ErrorMessage name="firstName" component="span" className={`text-red-700`}></ErrorMessage>
</div>
    <div className={`flex-1`}>
        <label htmlFor="lastName" className={`block`}>Last Name<span className="text-red-500 ml-1">*</span></label>
        <Field name="lastName" type="text" className="border min-w-30 border-gray-300 p-2 w-full rounded-xl"></Field>
        <ErrorMessage name="lastName" component="span"></ErrorMessage>
    </div>
</div>
    <div className={`flex flex-row flex-wrap gap-2 justify-between w-full text-black`}>
        <div className={`flex-1`}>
            <label htmlFor="middleName" className={`block`}>Middle Name:</label>
            <Field name="middleName" type="text" className="min-w-30 border border-gray-300 p-2 w-full rounded-xl"></Field>
            <ErrorMessage name="middleName" component="span"></ErrorMessage>
        </div>
        <div className={`flex-1`}>
            <label htmlFor="DOB" className={`block`}>Date of Birth<span className="text-red-500 ml-1">*</span></label>
            <Field name="DOB" >
                {(field)=>(
                    <DateSelect/>
                )}
            </Field>
            <ErrorMessage name="DOB" component="span"></ErrorMessage>
        </div>
    </div>
    <div className={`flex flex-row flex-wrap gap-2 justify-between w-full text-black`}>
        <div className={`flex-1`}>
            <label htmlFor="status" className={`block`}>Status:</label>
            <Field name="status" as="select" className="border border-gray-300 p-2 w-full rounded-xl">
                <option value="active">Active</option>
                <option value="inactive">InActive</option>
            </Field>
            <ErrorMessage name="status" component="span"></ErrorMessage>
        </div>
        <div className={`flex-1`}>
            <label htmlFor="gender" className={`block`}>Gender</label>
            <Field name="gender" as="select" className="border border-gray-300 p-2 w-full rounded-xl">
                <option value="male">Male</option>
                <option value="female">Female</option>
            </Field>
            <ErrorMessage name="gender" component="span"></ErrorMessage>
        </div>
    </div>
    <div className={`flex flex-row flex-wrap gap-2 justify-between w-full text-black`}>
        <div className={`flex-1`}>
            <label htmlFor="National" className={`block`}>Nationality<span className="text-red-500 ml-1">*</span></label>
            <Field name="National" as="select" className="min-w-30 border border-gray-300 p-2 w-full rounded-xl" placeholder="Select nationality">
                <option value="pakistan">Pakistani</option>
                <option value="Kuwait">Kuwaitian</option>
            </Field>
            <ErrorMessage name="National" component="span"></ErrorMessage>
        </div>
        <div className={`flex-1`}>
        </div>
    </div>
</div>
    </div>
    )
}