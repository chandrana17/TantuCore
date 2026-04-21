type LimitRecord = {
  count: number;
  resetAt: number;
};

const limits = new Map<string, LimitRecord>();

export function rateLimit(identifier: string, limit: number, windowMs: number): { success: boolean } {
  const now = Date.now();
  const record = limits.get(identifier);

  // Periodically clean up expired records to prevent unbounded memory growth
  if (limits.size > 10000) {
    for (const [key, val] of limits.entries()) {
      if (val.resetAt < now) limits.delete(key);
    }
  }

  if (!record) {
    limits.set(identifier, { count: 1, resetAt: now + windowMs });
    return { success: true };
  }

  if (now > record.resetAt) {
    // Current window expired, reset to 1
    record.count = 1;
    record.resetAt = now + windowMs;
    return { success: true };
  }

  if (record.count >= limit) {
    // Window is active and limit exceeded
    return { success: false };
  }

  // Window is active and limit not yet exceeded
  record.count += 1;
  return { success: true };
}
