import { motion, AnimatePresence } from 'motion/react';
import { X, Mail, Lock } from 'lucide-react';
import { useState } from 'react';

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

// Google Icon Component
function GoogleIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M18.1713 8.36788H17.5001V8.33329H10.0001V11.6666H14.7096C14.0225 13.6069 12.1763 15 10.0001 15C7.23884 15 5.00008 12.7612 5.00008 9.99996C5.00008 7.23871 7.23884 4.99996 10.0001 4.99996C11.2746 4.99996 12.4343 5.48079 13.3171 6.26621L15.6742 3.90913C14.1859 2.52204 12.1951 1.66663 10.0001 1.66663C5.39801 1.66663 1.66675 5.39788 1.66675 9.99996C1.66675 14.602 5.39801 18.3333 10.0001 18.3333C14.6022 18.3333 18.3334 14.602 18.3334 9.99996C18.3334 9.44121 18.2759 8.89579 18.1713 8.36788Z" fill="#FFC107"/>
      <path d="M2.62744 6.12121L5.36536 8.12913C6.10619 6.29496 7.90036 4.99996 9.99994 4.99996C11.2745 4.99996 12.4341 5.48079 13.3169 6.26621L15.6741 3.90913C14.1857 2.52204 12.1949 1.66663 9.99994 1.66663C6.79911 1.66663 4.02327 3.47371 2.62744 6.12121Z" fill="#FF3D00"/>
      <path d="M9.99994 18.3333C12.1524 18.3333 14.1082 17.5095 15.5878 16.1712L13.0078 13.9875C12.1432 14.6468 11.0865 15.0008 9.99994 15C7.83286 15 5.99119 13.6179 5.29911 11.6891L2.58203 13.783C3.96036 16.4816 6.76119 18.3333 9.99994 18.3333Z" fill="#4CAF50"/>
      <path d="M18.1713 8.36796H17.5V8.33337H10V11.6667H14.7096C14.3809 12.5902 13.7889 13.3972 13.0067 13.9879L13.0079 13.9871L15.5879 16.1708C15.4046 16.3363 18.3333 14.1667 18.3333 10C18.3333 9.44129 18.2758 8.89587 18.1713 8.36796Z" fill="#1976D2"/>
    </svg>
  );
}

export default function LoginModal({ isOpen, onClose }: LoginModalProps) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleGoogleLogin = () => {
    console.log('Login with Google clicked');
    // Add Google OAuth logic here
    // For now, just close the modal
    onClose();
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Login submitted:', { username, password });
    // Add login logic here
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[9999]"
            onClick={onClose}
          />

          {/* Modal */}
          <div className="fixed inset-0 z-[10000] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="bg-white rounded-3xl shadow-2xl w-full max-w-md overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="relative px-8 pt-8 pb-6 border-b border-gray-100">
                <button
                  onClick={onClose}
                  className="absolute top-6 right-6 p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full transition-all"
                >
                  <X size={20} />
                </button>
                <h2 
                  className="text-[#222222] text-center mb-2" 
                  style={{ fontFamily: 'Playfair Display, serif', fontSize: '28px' }}
                >
                  Welcome Back
                </h2>
                <p className="text-gray-500 text-center text-[14px] font-['Poppins:Regular',sans-serif]">
                  Sign in to continue shopping
                </p>
              </div>

              {/* Content */}
              <div className="px-8 py-8">
                {/* Login Form */}
                <form onSubmit={handleSubmit} className="space-y-4 mb-6">
                  {/* Username Field */}
                  <div>
                    <label 
                      htmlFor="username" 
                      className="block text-sm text-gray-700 mb-2 font-['Poppins:Medium',sans-serif]"
                    >
                      Username
                    </label>
                    <div className="relative">
                      <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                        <Mail size={18} />
                      </div>
                      <input
                        id="username"
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        placeholder="Enter your username"
                        required
                        className="w-full pl-12 pr-4 py-3.5 rounded-full border-2 border-gray-200 text-[#222222] placeholder:text-gray-400 font-['Poppins:Regular',sans-serif] text-[14px] focus:border-[#b2833a] focus:outline-none transition-all"
                      />
                    </div>
                  </div>

                  {/* Password Field */}
                  <div>
                    <label 
                      htmlFor="password" 
                      className="block text-sm text-gray-700 mb-2 font-['Poppins:Medium',sans-serif]"
                    >
                      Password
                    </label>
                    <div className="relative">
                      <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                        <Lock size={18} />
                      </div>
                      <input
                        id="password"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Enter your password"
                        required
                        className="w-full pl-12 pr-4 py-3.5 rounded-full border-2 border-gray-200 text-[#222222] placeholder:text-gray-400 font-['Poppins:Regular',sans-serif] text-[14px] focus:border-[#b2833a] focus:outline-none transition-all"
                      />
                    </div>
                  </div>

                  {/* Forgot Password Link */}
                  <div className="flex justify-end">
                    <button
                      type="button"
                      className="text-[13px] text-[#b2833a] hover:text-[#D38436] font-['Poppins:Regular',sans-serif] transition-colors"
                    >
                      Forgot Password?
                    </button>
                  </div>

                  {/* Submit Button */}
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-3.5 bg-gradient-to-r from-[#b2833a] to-[#D38436] text-white rounded-full hover:shadow-lg transition-all font-['Poppins:Medium',sans-serif] text-[16px] shadow-md text-center"
                  >
                    Sign In
                  </motion.button>
                </form>

                {/* Divider */}
                <div className="relative my-6">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-200"></div>
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-4 bg-white text-gray-400 font-['Poppins:Regular',sans-serif]">
                      Or continue with
                    </span>
                  </div>
                </div>

                {/* Login with Google Button */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleGoogleLogin}
                  className="w-full flex items-center justify-center gap-3 px-6 py-3.5 bg-white border-2 border-gray-200 text-[#222222] rounded-full hover:border-[#b2833a] hover:bg-[#b2833a]/5 transition-all font-['Poppins:Medium',sans-serif] text-[16px] shadow-sm hover:shadow-md"
                >
                  <GoogleIcon />
                  Login with Google
                </motion.button>

                {/* Divider with decorative line */}
                <div className="relative my-6">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-200"></div>
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-4 bg-white text-gray-400 font-['Poppins:Regular',sans-serif]">
                      Quick & Secure Access
                    </span>
                  </div>
                </div>

                {/* Footer text */}
                <p className="text-center text-[12px] text-gray-400 font-['Poppins:Regular',sans-serif] leading-relaxed">
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