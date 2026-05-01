"use client";

import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { authClient } from "@/lib/auth-client";
import { FcGoogle } from "react-icons/fc"; 

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
    } catch (err) {
      toast.update(toastId, {
        render: "Something went wrong!",
        type: "error",
        isLoading: false,
        autoClose: 3000,
      });
    }
  };

  const handleGoogleLogin = async () => {
    try {
      await authClient.signIn.social({
        provider: "google",
        callbackURL: "/", 
      });
    } catch (err) {
      toast.error("Google login failed!");
    }
  };

  return (
    <div className="container mx-auto min-h-[80vh] flex items-center justify-center p-4 sm:p-10 bg-slate-100">
      <div className="w-full max-w-md">
        <div className="bg-white px-6 py-10 rounded-xl shadow-lg border">
          <h1 className="text-2xl font-bold text-center mb-6">
            Login Your Account
          </h1>

          <form onSubmit={handleSubmit(handleLogin)}>
            <fieldset className="space-y-4">
              <div>
                <label className="font-medium text-slate-700">Email Address</label>
                <input
                  type="email"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^\S+@\S+$/i,
                      message: "Invalid email",
                    },
                  })}
                  className="w-full border px-3 py-2 rounded-lg mt-1 focus:ring-2 focus:ring-blue-500 outline-none"
                  placeholder="Enter your email"
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
                  placeholder="Enter your password"
                />
                {errors.password && (
                  <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
                )}
              </div>

              <button
                disabled={isSubmitting}
                type="submit"
                className="w-full bg-blue-600 text-white py-2.5 rounded-lg mt-2 font-bold hover:bg-blue-700 transition-all active:scale-95 disabled:opacity-70"
              >
                {isSubmitting ? "Processing..." : "Login"}
              </button>
            </fieldset>
          </form>

          <div className="relative my-8">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t border-gray-200"></span>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="bg-white px-2 text-gray-400">Or continue with</span>
            </div>
          </div>

          <button
            onClick={handleGoogleLogin}
            type="button"
            className="w-full flex items-center justify-center gap-3 px-4 py-2.5 border-2 border-gray-100 rounded-lg font-bold text-gray-700 hover:bg-gray-50 hover:border-blue-100 transition-all active:scale-95"
          >
            <FcGoogle size={24} />
            Sign in with Google
          </button>

          <p className="mt-8 text-center text-sm text-gray-600">
            Don’t have an account?{" "}
        
            <Link href="/signup" className="text-blue-600 font-bold hover:underline">
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;