# Coupler.io Error Handling

Common failure modes when using Coupler.io MCP tools, and how to handle each.

## Empty Query Results

When `get-data` returns no rows:

1. **Check if it's a filter problem.** Re-run the query without date or category filters. If you get rows back, the filter was too narrow — adjust it and tell the user what range actually has data.
2. **Check if it's a column problem.** The column you're filtering on might have a different format than expected (e.g., dates as "2024/03/15" instead of "2024-03-15"). Sample the data with `SELECT DISTINCT col_X FROM data LIMIT 20` to see actual values.
3. **Check if the dataflow is empty.** Run `SELECT COUNT(*) FROM data`. If zero, the dataflow has no data at all — tell the user their pipeline may not be syncing.

What to say: "I queried [dataflow name] for [what you were looking for] but got no results. Here's what I checked: [brief explanation]. The most likely reason is [your best guess]. Want me to try [alternative approach]?"

Never present an empty result as "no activity" without first ruling out query/data issues.

## Stale Execution IDs

The `last_successful_execution_id` from `get-dataflow` might be old if the dataflow hasn't run recently or has been failing.

Signs of staleness:
- The `schedule` says daily but the execution timestamp is >2 days old
- The `schedule` says hourly but the execution is >6 hours old

What to do:
1. Note the data freshness to the user: "This data was last refreshed on [date/time], which is [N days/hours] ago."
2. If the data is significantly stale (>3x the scheduled interval), suggest the user check their Coupler.io dashboard for sync errors.
3. Proceed with the analysis but caveat your findings: "Keep in mind this reflects data as of [date], not today."

## Schema Mismatches

When `get-schema` returns columns that don't match what you expect:

- **Column labels changed**: The data source may have renamed fields. Look at the actual data with `SELECT * FROM data LIMIT 3` and use the labels from the schema, not your assumptions.
- **Columns missing**: A field that should exist (e.g., "Revenue") isn't in the schema. Tell the user: "Your [dataflow name] doesn't include a revenue column. This means I can't calculate ROAS. Is the revenue data in a different dataflow, or is it not being synced?"
- **Extra/unexpected columns**: Ignore them unless they're useful. Don't clutter the analysis with every available column.

## SQL Syntax Errors

Coupler.io uses SQLite. Common mistakes:

| Wrong | Right | Why |
|-------|-------|-----|
| `ILIKE` | `LIKE` (with `LOWER()`) | SQLite has no ILIKE |
| `DATE_TRUNC('week', col)` | `strftime('%W', col)` | SQLite uses strftime |
| `col_1 / col_2` on text columns | `CAST(col_1 AS REAL) / CAST(col_2 AS REAL)` | Numeric columns may be stored as text |
| `INTERVAL '7 days'` | `date(col, '-7 days')` | SQLite date arithmetic syntax |
| `STRING_AGG` | `GROUP_CONCAT` | SQLite aggregate function name |

If a query fails, check the error message, fix the syntax, and retry. Don't ask the user to debug SQL.

## Dataflow Not Found

If `list-dataflows` returns no results, or doesn't include a dataflow the user expects:

1. The user may not have connected that data source yet in Coupler.io.
2. The dataflow name might not match what the user calls it — "our Google data" might be listed as "gads_perf_weekly".
3. The Coupler.io connection may have expired or been disconnected.

What to say: "I don't see a dataflow matching [what they asked for]. Here's what's available: [list]. Could your [source] data be under a different name, or does it need to be connected in Coupler.io?"

## Rate Limits and Timeouts

If an MCP call hangs or returns a timeout error:
- Simplify the query (reduce the date range, remove complex JOINs)
- Try querying for a smaller time window first, then expand
- If repeated failures, suggest the user check their Coupler.io account status
