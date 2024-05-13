export const ErrorRetry = ({
  resetErrorBoundary,
  error,
}: {
  resetErrorBoundary: () => void;
  error: Error;
}) => {
  return (
    <div className="space-y-4">
      <div>
        <h1 className="font-medium">Oops! Something went wrong</h1>
        <p>{error?.message}</p>
        <p className="text-sm">
          You can retry the action again by pressing the "Retry" button below.
        </p>
      </div>
      <button
        className="bg-red-100 text-red-800 rounded py-2 px-4"
        onClick={resetErrorBoundary}
      >
        Retry
      </button>
    </div>
  );
};
