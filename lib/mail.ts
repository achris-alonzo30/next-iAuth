// import { Resend } from "resend";
var nodemailer = require("nodemailer");


// const resend = new Resend(process.env.RESEND_API_KEY);
const domain = process.env.NEXT_PUBLIC_APP_URL;

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.NODEMAILER_EMAIL,
        pass: process.env.NODEMAILER_PW,
    }
});

export const sendVerificationEmail = async (
    email: string,
    token: string
) => {
    const confirmLink = `${domain}/auth/new-verification?token=${token}`;

    const mailOptions = {
        from: process.env.NODEMAILER_EMAIL,
        to: email,
        subject: "Please confirm your account",
        html: `<p>Please confirm your account by clicking on the link : <a href="${confirmLink}">Confirm</a></p>`,
    }

    await transporter.sendMail(mailOptions);

    // await resend.emails.send({
    //     from: "onboarding@resend.dev",
    //     to: email,
    //     subject: "Please confirm your account",
    //     html: `<p>Please confirm your account by clicking on the link : <a href="${confirmLink}">Confirm</a></p>`,
    // })
}

export const sendPasswordResetEmail = async (
    email: string,
    token: string
) => {
    const resetLink = `${domain}/auth/new-password?token=${token}`;

    const mailOptions = {
        from: process.env.NODEMAILER_EMAIL,
        to: email,
        subject: "Reset your password",
        html: `<p>Please reset your password by clicking on the link : <a href="${resetLink}">Reset</a></p>`,
    }

    await transporter.sendMail(mailOptions);

    // await resend.emails.send({
    //     from: "onboarding@resend.dev",
    //     to: email,
    //     subject: "Reset your password",
    //     html: `<p>Please reset your password by clicking on the link : <a href="${resetLink}">Reset</a></p>`,
    // })

}

export const sendTwoFactorTokenEmail = async (
    email: string,
    token: string
) => {
    
    // await resend.emails.send({
    //     from: "onboarding@resend.dev",
    //     to: email,
    //     subject: "Your two factor token",
    //     html: `<p>Your two factor token is : <strong>${token}</strong></p>`,
    // })

    const mailOptions = {
        from: process.env.NODEMAILER_EMAIL,
        to: email,
        subject: "Your two factor token",
        html: `<p>Your two factor token is : <strong>${token}</strong></p>`,
    }

    await transporter.sendMail(mailOptions);
}
