import { z } from "zod";

export interface UserType {
    id?: number,
    userId?: string,
    userLoginId? : string,
    userPassword? : string,
    userPasswordConfirm? : string,
    userEmail? : string,
    userName? : string,
    userPhoneNo? : string,
    userBirthDate? : Date,
    birthDate? : string,
    userCreateDate? : Date,
    userLastDate? : Date,
    role? : string,
    iat? : number,
    exp? : number,
    jti? : string,
}



const PASSWORD_REGEX = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,15}$/;

export const registerSchema = z.object({
    userLoginId: z.string().min(8, { message: "8자리 이상 입력해주세요." }),
    userName: z.string().min(2, { message: "2자리 이상 입력해주세요." }),
    userPassword: z
        .string()
        .min(8, { message: "8자리 이상 입력해주세요." })
        .max(15, { message: "15자리 이하로 입력해주세요." })
        .refine(
            (value) => PASSWORD_REGEX.test(value),
            "영문, 숫자, 특수문자를 포함해야 합니다."
        ),
    userEmail: z.string().email("이메일 주소를 입력해 주세요"),
    userPhoneNo: z.number().min(11).max(11, "11개의 숫자 이하로 입력해 주세요"),
    // userBirthDay: z.date().max(new Date(), "오늘보다 이전날짜를 입력해주세요.")
});


export interface ProductType {
    title: string,
    description: string,
    category: number,
    latitude: number,
    longitude: number,
    price: number,
    imageSrc: string,
}