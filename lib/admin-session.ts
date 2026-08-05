import { timingSafeEqual } from "node:crypto";

export const ADMIN_COOKIE_NAME = "golpuma_admin_session";

function constantTimeEquals(
  receivedValue: string,
  expectedValue: string
): boolean {
  const receivedBuffer = Buffer.from(receivedValue);
  const expectedBuffer = Buffer.from(expectedValue);

  if (receivedBuffer.length !== expectedBuffer.length) {
    return false;
  }

  return timingSafeEqual(receivedBuffer, expectedBuffer);
}

export function isAdminPasswordValid(
  password: string | null | undefined
): boolean {
  const expectedPassword = process.env.ADMIN_PASSWORD;

  if (!expectedPassword || !password) {
    return false;
  }

  return constantTimeEquals(password, expectedPassword);
}

export function isAdminSessionValid(
  token: string | null | undefined
): boolean {
  const expectedToken = process.env.ADMIN_SESSION_TOKEN;

  if (!expectedToken || !token) {
    return false;
  }

  return constantTimeEquals(token, expectedToken);
}

export function getAdminSessionToken(): string | null {
  return process.env.ADMIN_SESSION_TOKEN ?? null;
}