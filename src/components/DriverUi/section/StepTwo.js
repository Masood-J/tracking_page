import {User} from "lucide-react";
import FormCard from "@/components/DriverUi/ui/FormCard";
import {Formik,Form,Field,ErrorMessage} from "formik";
import * as Yup from "yup";
import {MapPin} from "lucide-react";
export default function StepTwo(){

    return(
        <div>
        <FormCard title={`Address & Contact`} desc={`Location and Communication Information`} icon={<MapPin className={`text-white`}></MapPin>}></FormCard>
            <div className={`flex flex-col items-center mt-6 gap-5 p-8`}>
                <div className={`flex flex-row gap-2 justify-between w-full text-black`}>
                    <div className={`flex-1`}>
                        <label htmlFor="email" className={`block`}>Email Address:</label>
                        <Field name="email" type="text" className="border border-gray-300 p-2 w-full rounded-xl"></Field>
                        <ErrorMessage name="email" component="span" className={`text-red-700`}></ErrorMessage>
                    </div>
                    <div className={`flex-1`}>
                        <label htmlFor="phone" className={`block`}>Phone Number:</label>
                        <Field name="phone" type="text" className="border border-gray-300 p-2 w-full rounded-xl"></Field>
                        <ErrorMessage name="phone" component="span"></ErrorMessage>
                    </div>
                </div>
                <div className={`flex flex-row gap-2 justify-between w-full text-black`}>
                    <div className={`flex-1`}>
                        <label htmlFor="alt_phone" className={`block`}>Alternate Phone:</label>
                        <Field name="alt_phone" type="text" className="border border-gray-300 p-2 w-full rounded-xl"></Field>
                        <ErrorMessage name="alt_phone" component="span" className={`text-red-700`}></ErrorMessage>
                    </div>
                    <div className={`flex-1`}>

                    </div>
                </div>
                <div className={`flex flex-row gap-2 justify-between w-full text-black`}>
                    <div className={`flex-1`}>
                        <label htmlFor="Address" className={`block`}>Street Address:</label>
                        <Field name="Address" type="text" className="border border-gray-300 p-2 w-full rounded-xl"></Field>
                        <ErrorMessage name="Address" component="span" className={`text-red-700`}></ErrorMessage>
                    </div>
                </div>
                <div className={`flex flex-row gap-2 justify-between w-full text-black`}>
                    <div className={`flex-1`}>
                        <label htmlFor="Country" className={`block`}>Country:</label>
                        <Field name="Country" as="select" className="border border-gray-300 p-2 w-full rounded-xl">
                            <option value="pk">Pakistan</option>
                            <option value="Kw">Kuwait</option>
                            <option value="UAE">UAE</option>
                        </Field>
                        <ErrorMessage name="Country" component="span" className={`text-red-700`}></ErrorMessage>
                    </div>
                    <div className={`flex-1`}>
                        <label htmlFor="State" className={`block`}>State:</label>
                        <Field name="State" as="select" className="border border-gray-300 p-2 w-full rounded-xl">
                            <option value="punjab">Punjab</option>
                            <option value="KPK">KPK</option>
                            <option value="Sindh">Sindh</option>
                        </Field>
                        <ErrorMessage name="State" component="span"></ErrorMessage>
                    </div>
                </div>
                <div className={`flex flex-row gap-2 justify-between w-full text-black`}>
                    <div className={`flex-1`}>
                        <label htmlFor="City" className={`block`}>City:</label>
                        <Field name="City" as="select" className="border border-gray-300 p-2 w-full rounded-xl">
                            <option value="lhr">Lahore</option>
                            <option value="bwp">Bahawalpur</option>
                            <option value="fsl">Faislabad</option>
                            <option value="bwn">Bahawalnagr</option>
                        </Field>
                        <ErrorMessage name="City" component="span" className={`text-red-700`}></ErrorMessage>
                    </div>
                    <div className={`flex-1`}>
                        <label htmlFor="ZIP" className={`block`}>ZIP/Postal Code:</label>
                        <Field name="ZIP" type="text" className="border border-gray-300 p-2 w-full rounded-xl"></Field>
                        <ErrorMessage name="ZIP" component="span"></ErrorMessage>
                    </div>
                </div>
            </div>
    </div>

    )
}