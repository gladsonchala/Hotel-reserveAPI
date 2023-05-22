const errorHandler = (err, req, res, next) => {
  console.error(err);

  // Set default status code and error message
  let statusCode = 500;
  let errorMessage = 'Internal Server Error';

  // Handle specific error types
  if (err.name === 'ValidationError') {
    statusCode = 400;
    errorMessage = err.message;
  } else if (err.name === 'CastError' && err.kind === 'ObjectId') {
    statusCode = 400;
    errorMessage = 'Invalid ID';
  }

  res.status(statusCode).json({ error: errorMessage });
};

module.exports = errorHandler;