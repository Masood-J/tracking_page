import React, { useState, useEffect } from "react";
import { GetCountries, GetState, GetCity } from "react-country-state-city";
import Select from "react-select";
import { Field, ErrorMessage } from "formik";

export default function LocationSelect({ countryName, stateName, cityName }) {
    const [country, setCountry] = useState(null);
    const [currentState, setCurrentState] = useState(null);
    const [countriesList, setCountriesList] = useState([]);
    const [stateList, setStateList] = useState([]);
    const [citiesList, setCitiesList] = useState([]);

    useEffect(() => {
        GetCountries().then(setCountriesList);
    }, []);

    useEffect(() => {
        if (country) {
            GetState(parseInt(country)).then(setStateList);
            setCurrentState(null);
            setCitiesList([]); // reset state & cities
        }
    }, [country]);

    useEffect(() => {
        if (country && currentState) {
            GetCity(parseInt(country), parseInt(currentState)).then(setCitiesList);
        }
    }, [country, currentState]);

    return (
        <div className="flex flex-col gap-4">
            {/* Country */}
            <Field name={countryName}>
                {({ field, form }) => (
                    <Select
                        options={countriesList.map((_country) => ({
                            value: _country.id,
                            label: _country.name,
                        }))}
                        value={countriesList.find((c) => c.id === parseInt(field.value)) || null}
                        onChange={(option) => {
                            form.setFieldValue(field.name, option.value);
                            setCountry(option.value);
                        }}
                    />
                )}
            </Field>
            <ErrorMessage name={countryName} component="span" className="text-red-700" />

            {/* State */}
            <Field name={stateName}>
                {({ field, form }) => (
                    <Select
                        options={stateList.map((_state) => ({
                            value: _state.id,
                            label: _state.name,
                        }))}
                        value={stateList.find((s) => s.id === parseInt(field.value)) || null}
                        onChange={(option) => {
                            form.setFieldValue(field.name, option.value);
                            setCurrentState(option.value);
                        }}
                        isDisabled={!country}
                    />
                )}
            </Field>
            <ErrorMessage name={stateName} component="span" className="text-red-700" />

            {/* City */}
            <Field name={cityName}>
                {({ field, form }) => (
                    <Select
                        options={citiesList.map((_city) => ({
                            value: _city.id,
                            label: _city.name,
                        }))}
                        value={citiesList.find((c) => c.id === parseInt(field.value)) || null}
                        onChange={(option) => form.setFieldValue(field.name, option.value)}
                        isDisabled={!currentState}
                    />
                )}
            </Field>
            <ErrorMessage name={cityName} component="span" className="text-red-700" />
        </div>
    );
}
