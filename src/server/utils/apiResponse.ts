export function successResponse<T>(data: T, message: string = 'Success') {
  return Response.json(
    {
      success: true,
      data,
      message,
    },
    { status: 200 }
  );
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function errorResponse(error: any) {
  const statusCode = error?.statusCode || 500;
  const code = error?.code || 'INTERNAL_SERVER_ERROR';
  const message = error?.isOperational
    ? error.message
    : 'An unexpected error occurred';

  return Response.json(
    {
      success: false,
      error: {
        code,
        message,
      },
    },
    { status: statusCode }
  );
}
