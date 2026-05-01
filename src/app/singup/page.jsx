"use client";

import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { authClient } from "@/lib/auth-client";

const SignUpPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const handleRegister = async (data) => {
    const { name, photoUrl, email, password } = data;
    const id = toast.loading("Creating your account...");

    try {
      const { data: res, error } = await authClient.signUp.email({
        name,
        email,
        password,
        image: photoUrl,
        callbackURL: "/",
      });

      if (error) {
        return toast.update(id, {
          render: error.message || "Registration failed!",
          type: "error",
          isLoading: false,
          autoClose: 3000,
        });
      }

      toast.update(id, {
        render: "Account created successfully! ",
        type: "success",
        isLoading: false,
        autoClose: 3000,
      });

      console.log(res);
    } catch (err) {
      toast.update(id, {
        render: "Something went wrong!",
        type: "error",
        isLoading: false,
        autoClose: 3000,
      });
    }
  };

  return (
    <div className="container mx-auto min-h-[80vh] flex items-center justify-center p-4 sm:p-10 bg-slate-100">
      <div className="w-full max-w-md">
        <div className="bg-white px-6 py-10 rounded-xl shadow-lg border">
          <h1 className="text-2xl font-bold text-center mb-6">
            Register Your Account
          </h1>

          <form onSubmit={handleSubmit(handleRegister)}>
            <fieldset className="space-y-4">
              <div>
                <label className="font-medium text-slate-700">Name</label>
                <input
                  type="text"
                  {...register("name", { required: "Name is required" })}
                  className="w-full border px-3 py-2 rounded-lg mt-1 focus:ring-2 focus:ring-blue-500 outline-none"
                  placeholder="Full Name"
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
                )}
              </div>

              <div>
                <label className="font-medium text-slate-700">Photo URL</label>
                <input
                  type="text"
                  {...register("photoUrl", {
                    required: "Photo URL is required",
                  })}
                  className="w-full border px-3 py-2 rounded-lg mt-1 focus:ring-2 focus:ring-blue-500 outline-none"
                  placeholder="https://example.com/photo.jpg"
                />
                {errors.photoUrl && (
                  <p className="text-red-500 text-sm mt-1">{errors.photoUrl.message}</p>
                )}
              </div>
              <div>
                <label className="font-medium text-slate-700">Email Address</label>
                <input
                  type="email"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Invalid email address",
                    },
                  })}
                  className="w-full border px-3 py-2 rounded-lg mt-1 focus:ring-2 focus:ring-blue-500 outline-none"
                  placeholder="email@example.com"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                )}
              </div>

              <div>
                <label className="font-medium text-slate-700">Password</label>
                <input
                  type="password"
                  {...register("password", {
                    required: "Password is required",
                    minLength: {
                      value: 6,
                      message: "Minimum 6 characters",
                    },
                  })}
                  className="w-full border px-3 py-2 rounded-lg mt-1 focus:ring-2 focus:ring-blue-500 outline-none"
                  placeholder="••••••••"
                />
                {errors.password && (
                  <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
                )}
              </div>

              <button
                type="submit" 
                disabled={isSubmitting}
                className="w-full bg-blue-600 text-white py-2.5 rounded-lg mt-2 font-bold hover:bg-blue-700 transition-all active:scale-95 disabled:opacity-70"
              >
                {isSubmitting ? "Creating..." : "Register"}
              </button>
            </fieldset>
          </form>

          <p className="mt-8 text-center text-sm text-gray-600">
            Already have an account?{" "}
            <Link href="/signin" className="text-blue-600 font-bold hover:underline">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;