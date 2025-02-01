'use client';

import {Formik} from "formik";
import {UserType} from "@/types/common";
import {signIn} from "next-auth/react";
import {useRouter} from "next/navigation";
import axios from "axios";

interface LonginValue {
    userLoginId: string;
    userPassword: string;
}

const SignIn = () => {
    const router = useRouter();
    const initialValues: LonginValue = {
        userLoginId: '',
        userPassword: '',
    };

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center">
            <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
                <h2 className="text-2xl font-bold text-center text-gray-700 mb-6">
                    로그인
                </h2>
                <Formik
                    initialValues={initialValues}
                    onSubmit={async (values, {setSubmitting,}) => {
                        try {

                            const res = await axios.post("/api/sign-in", {
                                username: values.userLoginId,
                                password: values.userPassword,
                            });

                            // const res = await signIn("credentials", {
                            //     username: values.userLoginId,
                            //     password: values.userPassword,
                            //     redirect: false, // 리다이렉트를 방지
                            // });
                            //
                            // if (res?.ok) {
                            //     console.log("Login successful");
                            //     // 로그인 성공 시 원하는 페이지로 이동
                            //     router.push("/");
                            //     // todo kkj 실패시 다이얼로그 처리
                            // } else {
                            //     console.error("Login failed");
                            // }
                        } catch (error) {
                            console.log(error);
                            throw new Error("Error during sign in");
                        } finally {
                            setSubmitting(false);
                        }
                    }}
                    validate={(values) => {
                        const errors: Partial<UserType> = {};
                        if (!values.userLoginId) {
                            errors.userLoginId = '아이디는 필수 항목입니다.';
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

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full py-2 rounded-lg  focus:outline-none focus:ring-2 focus:ring-offset-2"
                            >
                                로그인
                            </button>
                        </form>
                    )}
                </Formik>
            </div>
        </div>
    )
}

export default SignIn;