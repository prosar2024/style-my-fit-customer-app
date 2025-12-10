"use client";
import { useState } from "react";
import { X, Mail, Lock } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { GoogleIcon } from "@/components/icons/icons";

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function LoginModal({ isOpen, onClose }: LoginModalProps) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleGoogleLogin = () => {
    onClose();
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Login submitted:", { username, password });
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[9999]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={onClose}
          />

          <div className="fixed inset-0 z-[10000] flex items-center justify-center p-4">
            <motion.div
              className="bg-white rounded-3xl shadow-2xl w-full max-w-md overflow-hidden"
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", stiffness: 260, damping: 22 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative px-8 pt-8 pb-6 border-b border-gray-100">
                <button
                  onClick={onClose}
                  className="absolute top-6 right-6 p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full transition-all"
                >
                  <X size={20} />
                </button>

                <h2
                  className="text-[#222] text-center mb-2"
                  style={{ fontFamily: "Playfair Display, serif", fontSize: 28 }}
                >
                  Welcome Back
                </h2>

                <p className="text-gray-500 text-center text-sm font-poppins">
                  Sign in to continue shopping
                </p>
              </div>

              <div className="px-8 py-8">
                <form onSubmit={handleSubmit} className="space-y-4 mb-6">
                  <div>
                    <label
                      htmlFor="username"
                      className="block text-sm text-gray-700 mb-2 font-poppins font-medium"
                    >
                      Username
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-4 flex items-center text-gray-400">
                        <Mail size={18} />
                      </div>
                      <input
                        id="username"
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        placeholder="Enter your username"
                        required
                        className="w-full pl-12 pr-4 py-3.5 rounded-full border-2 border-gray-200 text-[#222] placeholder:text-gray-400 font-poppins text-sm focus:border-[#b2833a] focus:outline-none transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="password"
                      className="block text-sm text-gray-700 mb-2 font-poppins font-medium"
                    >
                      Password
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-4 flex items-center text-gray-400">
                        <Lock size={18} />
                      </div>
                      <input
                        id="password"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Enter your password"
                        required
                        className="w-full pl-12 pr-4 py-3.5 rounded-full border-2 border-gray-200 text-[#222] placeholder:text-gray-400 font-poppins text-sm focus:border-[#b2833a] focus:outline-none transition-all"
                      />
                    </div>
                  </div>

                  <div className="flex justify-end">
                    <button
                      type="button"
                      className="text-[13px] text-[#b2833a] hover:text-[#D38436] font-poppins transition-colors"
                    >
                      Forgot Password?
                    </button>
                  </div>

                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-3.5 bg-gradient-to-r from-[#b2833a] to-[#D38436] text-white rounded-full shadow-md text-center font-poppins font-medium text-base hover:shadow-lg transition-all"
                  >
                    Sign In
                  </motion.button>
                </form>

                <div className="relative my-6">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-200" />
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-4 bg-white text-gray-400 font-poppins">
                      Or continue with
                    </span>
                  </div>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleGoogleLogin}
                  className="w-full flex items-center justify-center gap-3 px-6 py-3.5 bg-white border-2 border-gray-200 text-[#222] rounded-full font-poppins font-medium text-base shadow-sm hover:border-[#b2833a] hover:bg-[#b2833a]/5 hover:shadow-md transition-all"
                >
                  <GoogleIcon />
                  Login with Google
                </motion.button>

                <div className="relative my-6">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-200" />
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-4 bg-white text-gray-400 font-poppins">
                      Quick & Secure Access
                    </span>
                  </div>
                </div>

                <p className="text-center text-xs text-gray-400 font-poppins leading-relaxed">
                  By continuing, you agree to our Terms of Service and Privacy Policy
                </p>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
