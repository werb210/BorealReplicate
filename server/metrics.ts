import { performance } from "node:perf_hooks";

interface RequestLabel {
  method: string;
  route: string;
}

const startTime = performance.now();
let totalDurationSeconds = 0;
let durationCount = 0;

const requestCounters = new Map<string, number>();
const statusCounters = new Map<number, number>();

function keyForLabels(labels: RequestLabel) {
  return `${labels.method}:${labels.route}`;
}

export function observeRequest(labels: RequestLabel, statusCode: number, durationMs: number) {
  const key = keyForLabels(labels);
  requestCounters.set(key, (requestCounters.get(key) ?? 0) + 1);
  statusCounters.set(statusCode, (statusCounters.get(statusCode) ?? 0) + 1);
  totalDurationSeconds += durationMs / 1000;
  durationCount += 1;
}

export function metricsSnapshot() {
  const uptimeSeconds = (performance.now() - startTime) / 1000;
  const lines: string[] = [];

  lines.push("# HELP app_uptime_seconds Uptime of the Node.js process in seconds");
  lines.push("# TYPE app_uptime_seconds gauge");
  lines.push(`app_uptime_seconds ${uptimeSeconds.toFixed(2)}`);

  lines.push("# HELP app_request_duration_seconds_sum Total duration of handled requests in seconds");
  lines.push("# TYPE app_request_duration_seconds_sum counter");
  lines.push(`app_request_duration_seconds_sum ${totalDurationSeconds.toFixed(4)}`);

  lines.push("# HELP app_request_duration_seconds_count Number of tracked requests");
  lines.push("# TYPE app_request_duration_seconds_count counter");
  lines.push(`app_request_duration_seconds_count ${durationCount}`);

  lines.push("# HELP app_request_total Total number of requests grouped by method and route");
  lines.push("# TYPE app_request_total counter");
  for (const [key, count] of Array.from(requestCounters.entries())) {
    const [method, route] = key.split(":");
    lines.push(`app_request_total{method="${method}",route="${route}"} ${count}`);
  }

  lines.push("# HELP app_status_code_total Total number of responses per status code");
  lines.push("# TYPE app_status_code_total counter");
  for (const [status, count] of Array.from(statusCounters.entries())) {
    lines.push(`app_status_code_total{status="${status}"} ${count}`);
  }

  return lines.join("\n");
}
