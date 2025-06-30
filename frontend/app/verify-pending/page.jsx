const VerifyPending = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 bg-blue-50 text-center">
      <h1 className="text-2xl font-bold text-blue-800 mb-4">Check Your Email</h1>
      <p className="text-gray-700 max-w-md mb-6">
        We’ve sent you an email with a verification link. Please check your inbox and confirm your account to continue using RoomieFinder.
      </p>
      <img src="/verify-email.svg" alt="Email sent" className="w-16" />
    </div>
  );
};

export default VerifyPending;
