"use client";

import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { authClient } from "@/lib/auth-client";

const SignInPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const handleLogin = async (data) => {
    const toastId = toast.loading("Logging in...");

    try {
      const { data: res, error } = await authClient.signIn.email({
        email: data.email,
        password: data.password,
        rememberMe: true,
        callbackURL: "/",
      });

      if (error) {
        toast.update(toastId, {
          render: error.message || "Login failed!",
          type: "error",
          isLoading: false,
          autoClose: 3000,
        });
        return;
      }

      toast.update(toastId, {
        render: "Login Successful! Redirecting...",
        type: "success",
        isLoading: false,
        autoClose: 2000,
      });

      console.log("Response Data:", res);
    } catch (err) {
      toast.update(toastId, {
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
        <div className="bg-white px-6 py-10 rounded-lg shadow-lg border">
          <h1 className="text-2xl font-bold text-center mb-6">
            Login Your Account
          </h1>

          <form onSubmit={handleSubmit(handleLogin)}>
            <fieldset className="space-y-4">
              {/* Email */}
              <div>
                <label className="font-medium">Email Address</label>
                <input
                  type="email"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^\S+@\S+$/i,
                      message: "Invalid email",
                    },
                  })}
                  className="w-full border px-3 py-2 rounded mt-1"
                  placeholder="Enter your email"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.email.message}
                  </p>
                )}
              </div>

              {/* Password */}
              <div>
                <label className="font-medium">Password</label>
                <input
                  type="password"
                  {...register("password", {
                    required: "Password is required",
                    minLength: {
                      value: 6,
                      message: "Minimum 6 characters",
                    },
                  })}
                  className="w-full border px-3 py-2 rounded mt-1"
                  placeholder="Enter your password"
                />
                {errors.password && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.password.message}
                  </p>
                )}
              </div>

              {/* Button */}
              <button
                disabled={isSubmitting}
                type="submit"
                className="w-full bg-blue-600 text-white py-2 rounded mt-2 hover:bg-blue-700"
              >
                {isSubmitting ? "Processing..." : "Login"}
              </button>
            </fieldset>
          </form>

          <p className="mt-6 text-center text-sm">
            Don’t have an account?{" "}
            <Link href="/signup" className="text-blue-600 hover:underline">
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;