const VerifySuccessPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-green-50">
      <div className="bg-white p-8 rounded shadow text-center max-w-md w-full">
        <h1 className="text-2xl font-bold text-green-600 mb-4">Email Verified!</h1>
        <p className="text-gray-700 mb-4">
          Your email has been successfully verified. You can now log in to your account.
        </p>
        <a
          href="/signin"
          className="inline-block bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-800"
        >
          Go to Login
        </a>
      </div>
    </div>
  );
};

export default VerifySuccessPage;
