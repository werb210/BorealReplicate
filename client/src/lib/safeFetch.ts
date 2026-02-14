export type SafeFetchOptions = RequestInit & {
  retries?: number;
  retryDelayMs?: number;
  retryOnStatuses?: number[];
};

const DEFAULT_RETRYABLE_STATUSES = [408, 425, 429, 500, 502, 503, 504];

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export async function safeFetch(input: RequestInfo | URL, options: SafeFetchOptions = {}): Promise<Response> {
  const {
    retries = 1,
    retryDelayMs = 250,
    retryOnStatuses = DEFAULT_RETRYABLE_STATUSES,
    ...fetchOptions
  } = options;

  let lastError: unknown;

  for (let attempt = 0; attempt <= retries; attempt += 1) {
    try {
      const response = await fetch(input, fetchOptions);
      if (attempt < retries && retryOnStatuses.includes(response.status)) {
        await sleep(retryDelayMs * (attempt + 1));
        continue;
      }
      return response;
    } catch (error) {
      lastError = error;
      if (attempt >= retries) {
        break;
      }
      await sleep(retryDelayMs * (attempt + 1));
    }
  }

  throw lastError instanceof Error ? lastError : new Error("Network request failed");
}
