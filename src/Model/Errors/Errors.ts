export class BaseError extends Error {
  constructor(
    message: string,
    private readonly statusCode: number
  ) {
    super(message);
  }
}

export class NotFoundError extends BaseError {
  constructor(message: string) {
    super(message, 404);
  }
}

export class ValidationError extends BaseError {
  constructor(message: string) {
    super(message, 404);
  }
}
