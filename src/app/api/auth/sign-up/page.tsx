'use client';

import {Formik} from 'formik';
import {UserType} from '@/types/common';
import axios from "@/utils/axios";
import {useRouter} from "next/navigation";


const SignUp = () => {
    const router = useRouter();

    const initialValues: UserType = {
        userLoginId: '',
        userPassword: '',
        userName: '',
        userEmail: '',
        userPhoneNo: '',
        userBirthday: '',
    };

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center">
            <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
                <h2 className="text-2xl font-bold text-center text-gray-700 mb-6">
                    회원가입
                </h2>
                <Formik
                    initialValues={initialValues}
                    onSubmit={async (values, {setSubmitting,}) => {
                        const response = await axios.post('/user/sign-up', values, {})
                        if(response.status === 200 || response.status === 201) {
                            setSubmitting(false);
                            router.push('/');
                        }
                    }}
                    validate={(values) => {
                        const errors: Partial<UserType> = {};
                        if (!values.userLoginId) {
                            errors.userLoginId = '아이디는 필수 항목입니다.';
                        }
                        if (!values.userName) {
                            errors.userName = '이름은 필수 항목입니다.';
                        }
                        if (!values.userPassword) {
                            errors.userPassword = '비밀번호는 필수 항목입니다.';
                        }
                        return errors;
                    }}
                >
                    {({
                          values,
                          errors,
                          touched,
                          handleChange,
                          handleBlur,
                          handleSubmit ,
                          isSubmitting,
                      }) => (
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700">
                                    아이디
                                </label>
                                <input
                                    type="text"
                                    name="userLoginId"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.userLoginId}
                                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                                />
                                {errors.userLoginId && touched.userLoginId && (
                                    <p className="text-red-500 text-sm">{errors.userLoginId}</p>
                                )}
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">
                                    비밀번호
                                </label>
                                <input
                                    type="password"
                                    name="userPassword"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.userPassword}
                                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                                />
                                {errors.userPassword && touched.userPassword && (
                                    <p className="text-red-500 text-sm">{errors.userPassword}</p>
                                )}
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">
                                    이름
                                </label>
                                <input
                                    type="text"
                                    name="userName"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.userName}
                                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                                />
                                {errors.userName && touched.userName && (
                                    <p className="text-red-500 text-sm">{errors.userName}</p>
                                )}
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">
                                    이메일
                                </label>
                                <input
                                    type="email"
                                    name="userEmail"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.userEmail}
                                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">
                                    전화번호
                                </label>
                                <input
                                    type="text"
                                    name="userPhoneNo"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.userPhoneNo}
                                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">
                                    생년월일
                                </label>
                                <input
                                    type="date"
                                    name="userBirthday"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.userBirthday}
                                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                                />
                            </div>
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full py-2 rounded-lg  focus:outline-none focus:ring-2 focus:ring-offset-2"
                            >
                                회원가입
                            </button>
                        </form>
                    )}
                </Formik>
            </div>
        </div>
    );
};

export default SignUp;
