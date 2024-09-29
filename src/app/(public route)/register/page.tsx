import React from 'react';
import AuthCard from "@/components/AuthCard";
import RegisterForm from "@/components/RegisterForm";

const RegisterPage = () => {
  return (
      <AuthCard title="Sign up">
        <RegisterForm />
      </AuthCard>
  );
};

export default RegisterPage;
